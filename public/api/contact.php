<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$rest_json = file_get_contents("php://input");
$decoded = json_decode($rest_json, true);
if (!is_array($decoded)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON payload."]);
    exit;
}
$_POST = $decoded;

$requestId = null;
try {
    $requestId = bin2hex(random_bytes(8));
} catch (Throwable $e) {
    $requestId = (string)time();
}

if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "All fields are required.", "requestId" => $requestId]);
    exit;
}

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please enter a valid email address.", "requestId" => $requestId]);
    exit;
}

function getEmailTemplate($name, $email, $message, $isConfirmation = true) {
    $title = $isConfirmation ? "Enquiry confirmation" : "New Website Enquiry";
    $heading = $isConfirmation ? "Thanks, {$name}!" : "New Enquiry from {$name}";
    $subtext = $isConfirmation 
        ? "We received your enquiry and our team will reach out soon." 
        : "A new contact form submission has been received through the website.";

    return "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
                color: #334155; 
                line-height: 1.5; 
                margin: 0; 
                padding: 0; 
                background-color: #ffffff; 
            }
            .container { 
                max-width: 650px; 
                margin: 40px auto; 
                padding: 0 20px; 
            }
            .header { 
                display: block; 
                margin-bottom: 25px; 
            }
            .logo-section {
                display: inline-block;
                vertical-align: top;
            }
            .logo-placeholder {
                width: 45px;
                height: 45px;
                background-color: #000;
                display: inline-block;
                vertical-align: middle;
                margin-right: 15px;
                border-radius: 4px;
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            }
            .header-text {
                display: inline-block;
                vertical-align: middle;
            }
            .company-name { 
                font-size: 18px; 
                font-weight: 700; 
                color: #0f172a; 
                margin: 0;
                display: block;
            }
            .meta-text { 
                font-size: 14px; 
                color: #64748b; 
                margin: 0;
            }
            h1 { 
                font-size: 24px; 
                font-weight: 700; 
                margin-top: 10px; 
                margin-bottom: 8px; 
                color: #0f172a; 
            }
            .intro { 
                color: #475569; 
                margin-bottom: 30px; 
                font-size: 16px; 
            }
            .details-card { 
                background-color: #f1f5f9; 
                border-radius: 12px; 
                padding: 24px; 
                margin-bottom: 30px; 
            }
            .details-label-top { 
                font-size: 13px; 
                color: #94a3b8; 
                margin-bottom: 16px; 
            }
            .detail-row { 
                margin-bottom: 10px; 
                font-size: 15px;
            }
            .detail-key { 
                font-weight: 700; 
                color: #1e293b; 
            }
            .detail-value { 
                color: #334155; 
            }
            .footer { 
                margin-top: 40px; 
                border-top: 0; 
                color: #64748b; 
                font-size: 14px; 
            }
            .footer-sig {
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <div class='header-text'>
                    <span class='company-name'>Patel Infotech Services</span>
                    <span class='meta-text'>{$title}</span>
                </div>
            </div>

            <h1>{$heading}</h1>
            <p class='intro'>{$subtext}</p>
            
            <div class='details-card'>
                <div class='details-label-top'>Your details</div>
                <div class='detail-row'>
                    <span class='detail-key'>Name: </span>
                    <span class='detail-value'>{$name}</span>
                </div>
                <div class='detail-row'>
                    <span class='detail-key'>Email: </span>
                    <span class='detail-value'>{$email}</span>
                </div>
                <div class='detail-row' style='margin-bottom: 0;'>
                    <span class='detail-key'>Message: </span>
                    <span class='detail-value'>" . nl2br($message) . "</span>
                </div>
            </div>
            
            <div class='footer'>
                <p class='footer-sig'>— Patel Infotech Services</p>
            </div>
        </div>
    </body>
    </html>
    ";
}

$mail = new PHPMailer(true);

function redactSmtpDebugLine(string $line): string {
    // Redact base64 auth blobs that may appear in SMTP debug.
    $line = preg_replace('/(CLIENT -> SERVER: )([A-Za-z0-9+\/]{8,}={0,2})/i', '$1[redacted]', $line);
    $line = preg_replace('/(SERVER -> CLIENT: )([A-Za-z0-9+\/]{8,}={0,2})/i', '$1[redacted]', $line);
    return $line;
}

try {
    // Server settings
    $smtpHost = getenv('SMTP_HOST') ?: 'mail.patelinfotech.online';
    $smtpUser = getenv('SMTP_USERNAME') ?: 'contact@patelinfotech.online';
    $smtpPass = (string)(getenv('SMTP_PASSWORD') ?: '');
    $smtpPort = (int)(getenv('SMTP_PORT') ?: 465);
    $smtpSecureRaw = strtolower((string)(getenv('SMTP_SECURE') ?: 'smtps'));
    $smtpDebug = (int)(getenv('SMTP_DEBUG') ?: 0);
    $captureQueueId = isset($_GET['debugQueueId']) && (string)$_GET['debugQueueId'] === '1';

    if ($smtpPass === '') {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'Server email is not configured (missing SMTP_PASSWORD).',
            'requestId' => $requestId,
        ]);
        exit;
    }

    // Admin recipients (comma-separated). Always includes the primary admin inbox.
    $primaryAdminEmail = (string)(getenv('PRIMARY_ADMIN_EMAIL') ?: 'patelinfotechservices@gmail.com');
    if (!filter_var($primaryAdminEmail, FILTER_VALIDATE_EMAIL)) {
        $primaryAdminEmail = 'patelinfotechservices@gmail.com';
    }

    $adminEmailsRaw = (string)(getenv('ADMIN_EMAILS') ?: getenv('ADMIN_EMAIL') ?: '');
    $adminEmails = array_values(array_filter(array_map('trim', preg_split('/,/', $adminEmailsRaw) ?: [])));

    // Ensure the primary admin recipient is always included.
    array_unshift($adminEmails, $primaryAdminEmail);
    $adminEmails = array_values(array_unique(array_filter($adminEmails)));

    // Minimal trace (appears in server error logs). Avoid logging message body.
    $clientIp = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    error_log('[contact.php] requestId=' . $requestId . ' ip=' . $clientIp . ' fromEmail=' . $email . ' primaryAdmin=' . $primaryAdminEmail . ' adminTo=' . implode(',', $adminEmails) . ' smtpHost=' . $smtpHost . ' smtpUser=' . $smtpUser);

    $mail->CharSet = 'UTF-8';

    // Capture the Exim queue id from SMTP replies when requested.
    // NOTE: We do NOT echo SMTP debug to the HTTP response (it would break JSON).
    $adminQueueId = null;
    $adminSmtpAcceptedReply = null;
    if ($smtpDebug > 0 || $captureQueueId) {
        $mail->SMTPDebug = max($smtpDebug, $captureQueueId ? 2 : 0);
        $mail->Debugoutput = function ($str, $level) use (&$adminQueueId, &$adminSmtpAcceptedReply, $smtpDebug, $captureQueueId) {
            $line = redactSmtpDebugLine((string)$str);

            if ($captureQueueId && $adminQueueId === null) {
                // Exim typically replies: "SERVER -> CLIENT: 250 OK id=..."
                if (preg_match('/SERVER -> CLIENT:\s*250\b.*\bid=([^\s]+)/i', $line, $m)) {
                    $adminQueueId = $m[1];
                    $adminSmtpAcceptedReply = $line;
                }
            }

            if ($smtpDebug > 0) {
                error_log('[PHPMailer] ' . $line);
            }
        };
    }

    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    if ($smtpSecureRaw === 'tls' || $smtpSecureRaw === 'starttls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        // Default: SMTPS (implicit TLS)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    }
    $mail->Port       = $smtpPort;

    // --- EMAIL 1: Notification to Admin ---
    $mail->setFrom($smtpUser, 'Patel Infotech Services');
    $mail->addCustomHeader('X-Request-Id', $requestId);
    foreach ($adminEmails as $adminEmail) {
        if (filter_var($adminEmail, FILTER_VALIDATE_EMAIL)) {
            $mail->addAddress($adminEmail);
        }
    }
    // Keep a copy in the mailbox used to authenticate SMTP (helps if Gmail filters/bounces).
    if (filter_var($smtpUser, FILTER_VALIDATE_EMAIL) && !in_array($smtpUser, $adminEmails, true)) {
        $mail->addBCC($smtpUser);
    }
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission from ' . $name . ' (Request ' . $requestId . ')';
    $mail->Body    = getEmailTemplate($name, $email, $message, false);
    $mail->AltBody = "New Enquiry from {$name}\nEmail: {$email}\nMessage:\n{$message}";

    $adminNotificationSent = true;
    $adminNotificationError = null;
    $adminSmtpLastReply = null;
    try {
        $mail->send();
        // Capture the last SMTP reply (often includes the queue id for Exim: "250 OK id=...")
        try {
            $smtp = $mail->getSMTPInstance();
            if ($smtp && method_exists($smtp, 'getLastReply')) {
                $adminSmtpLastReply = $smtp->getLastReply();
            }
        } catch (Throwable $ignored) {
            // Non-fatal: queue id is best-effort.
        }
    } catch (Exception $e) {
        $adminNotificationSent = false;
        $adminNotificationError = $mail->ErrorInfo;
        error_log('[contact.php] requestId=' . $requestId . ' adminSent=false error=' . $adminNotificationError);
        throw $e;
    }

    error_log('[contact.php] requestId=' . $requestId . ' adminSent=true queueId=' . ($adminQueueId ?: 'n/a'));

    // --- EMAIL 2: Confirmation to User ---
    $confirmationSent = true;
    $confirmationError = null;
    try {
        $mail->clearAddresses();
        $mail->clearBCCs();
        $mail->clearReplyTos();
        $mail->clearCustomHeaders();
        $mail->addCustomHeader('X-Request-Id', $requestId);
        $mail->addAddress($email);
        $mail->Subject = 'We received your message - Patel Infotech Services (Request ' . $requestId . ')';
        $mail->Body    = getEmailTemplate($name, $email, $message, true);
        $mail->AltBody = "Thanks {$name}! We received your enquiry and our team will reach out soon.";
        $mail->send();
    } catch (Exception $e) {
        $confirmationSent = false;
        $confirmationError = $mail->ErrorInfo;
    }

    echo json_encode([
        "status" => "success",
        "message" => "Message has been sent",
        "requestId" => $requestId,
        "admin" => [
            "sent" => $adminNotificationSent,
            "primary" => $primaryAdminEmail,
            "to" => $adminEmails,
            "bcc" => (!in_array($smtpUser, $adminEmails, true) ? [$smtpUser] : []),
            "error" => $adminNotificationError,
            "queueId" => $adminQueueId,
            "smtpAcceptedReply" => $adminSmtpAcceptedReply,
            "smtpLastReply" => $adminSmtpLastReply,
        ],
        "confirmation" => [
            "sent" => $confirmationSent,
            "error" => $confirmationError,
        ],
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Message could not be sent.",
        "error" => $mail->ErrorInfo,
        "requestId" => $requestId,
    ]);
}
