const nodemailer = require('nodemailer');

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function getAllowedOrigins() {
  // Comma-separated list, e.g. "https://patelinfotech.online,http://localhost:3000"
  const raw = process.env.ALLOW_ORIGINS || '';
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function applyCors(req, res) {
  const origin = req.headers.origin;
  const allowed = getAllowedOrigins();

  // If ALLOW_ORIGINS is not set, default to allowing all (simplest, but you should set it in production).
  if (!allowed.length) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (origin && allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      // Basic protection against huge payloads
      if (data.length > 1_000_000) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        const parsed = data ? JSON.parse(data) : {};
        resolve(parsed);
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
  });
}

function sanitize(str) {
  return String(str || '').trim();
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function getEmailTemplate({ name, email, message, isConfirmation }) {
  const title = isConfirmation ? 'Enquiry confirmation' : 'New Website Enquiry';
  const heading = isConfirmation ? `Thanks, ${name}!` : `New Enquiry from ${name}`;
  const subtext = isConfirmation
    ? 'We received your enquiry and our team will reach out soon.'
    : 'A new contact form submission has been received through the website.';

  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:#334155; line-height:1.5; margin:0; padding:0; background:#ffffff;">
  <div style="max-width:650px; margin:40px auto; padding:0 20px;">
    <div style="margin-bottom:25px;">
      <div style="font-size:18px; font-weight:700; color:#0f172a;">Patel Infotech Services</div>
      <div style="font-size:14px; color:#64748b;">${title}</div>
    </div>

    <h1 style="font-size:24px; font-weight:700; margin:10px 0 8px; color:#0f172a;">${heading}</h1>
    <p style="color:#475569; margin:0 0 30px; font-size:16px;">${subtext}</p>

    <div style="background:#f1f5f9; border-radius:12px; padding:24px; margin-bottom:30px;">
      <div style="font-size:13px; color:#94a3b8; margin-bottom:16px;">Your details</div>
      <div style="margin-bottom:10px; font-size:15px;"><b style="color:#1e293b;">Name:</b> <span>${name}</span></div>
      <div style="margin-bottom:10px; font-size:15px;"><b style="color:#1e293b;">Email:</b> <span>${email}</span></div>
      <div style="font-size:15px;"><b style="color:#1e293b;">Message:</b> <span>${String(message).replace(/\n/g, '<br/>')}</span></div>
    </div>

    <div style="margin-top:40px; color:#64748b; font-size:14px;">
      <p style="margin:0;">— Patel Infotech Services</p>
    </div>
  </div>
</body>
</html>`;
}

module.exports = async (req, res) => {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method !== 'POST') {
    return json(res, 405, { status: 'error', message: 'Method not allowed' });
  }

  const requestId = Math.random().toString(16).slice(2, 10) + Date.now().toString(16);

  let body;
  try {
    body = await parseBody(req);
  } catch (e) {
    return json(res, 400, { status: 'error', message: e.message, requestId });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const message = sanitize(body.message);

  if (!name || !email || !message) {
    return json(res, 400, { status: 'error', message: 'All fields are required.', requestId });
  }
  if (!isEmail(email)) {
    return json(res, 400, { status: 'error', message: 'Please enter a valid email address.', requestId });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure = String(process.env.SMTP_SECURE || 'smtps').toLowerCase();
  const smtpUser = process.env.SMTP_USERNAME;
  const smtpPass = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return json(res, 500, {
      status: 'error',
      message: 'Server email is not configured (missing SMTP_HOST/SMTP_USERNAME/SMTP_PASSWORD).',
      requestId,
    });
  }

  const primaryAdmin = process.env.PRIMARY_ADMIN_EMAIL || 'patelinfotechservices@gmail.com';
  const adminEmailsRaw = process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL || '';
  const adminEmails = [primaryAdmin]
    .concat(adminEmailsRaw.split(',').map((s) => s.trim()).filter(Boolean))
    .filter((addr, idx, arr) => arr.indexOf(addr) === idx)
    .filter((addr) => isEmail(addr));

  const transport = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure !== 'tls' && smtpSecure !== 'starttls',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: smtpSecure === 'tls' || smtpSecure === 'starttls' ? { rejectUnauthorized: false } : undefined,
  });

  // 1) Admin notification
  let adminSent = true;
  let adminError = null;
  try {
    await transport.sendMail({
      from: `Patel Infotech Services <${smtpUser}>`,
      to: adminEmails,
      bcc: smtpUser && !adminEmails.includes(smtpUser) ? [smtpUser] : [],
      replyTo: `${name} <${email}>`,
      subject: `New Contact Form Submission from ${name} (Request ${requestId})`,
      html: getEmailTemplate({ name, email, message, isConfirmation: false }),
      text: `New Enquiry from ${name}\nEmail: ${email}\nMessage:\n${message}`,
      headers: { 'X-Request-Id': requestId },
    });
  } catch (e) {
    adminSent = false;
    adminError = e && e.message ? e.message : String(e);
    return json(res, 500, {
      status: 'error',
      message: 'Admin notification could not be sent.',
      requestId,
      admin: { sent: false, primary: primaryAdmin, to: adminEmails, error: adminError },
    });
  }

  // 2) User confirmation (do not fail the whole request if this fails)
  let confirmationSent = true;
  let confirmationError = null;
  try {
    await transport.sendMail({
      from: `Patel Infotech Services <${smtpUser}>`,
      to: [email],
      subject: `We received your message - Patel Infotech Services (Request ${requestId})`,
      html: getEmailTemplate({ name, email, message, isConfirmation: true }),
      text: `Thanks ${name}! We received your enquiry and our team will reach out soon.`,
      headers: { 'X-Request-Id': requestId },
    });
  } catch (e) {
    confirmationSent = false;
    confirmationError = e && e.message ? e.message : String(e);
  }

  return json(res, 200, {
    status: 'success',
    message: 'Message has been sent',
    requestId,
    admin: { sent: adminSent, primary: primaryAdmin, to: adminEmails, bcc: smtpUser && !adminEmails.includes(smtpUser) ? [smtpUser] : [], error: adminError },
    confirmation: { sent: confirmationSent, error: confirmationError },
  });
};
