<?php
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

function resolveRecipient(): string {
    // Prefer explicit recipient.
    if (PHP_SAPI === 'cli') {
        global $argv;
        if (isset($argv[1]) && is_string($argv[1]) && trim($argv[1]) !== '') {
            return trim($argv[1]);
        }
    }
    if (isset($_GET['to']) && is_string($_GET['to']) && trim($_GET['to']) !== '') {
        return trim($_GET['to']);
    }
    // Fallback: send to the authenticated mailbox.
    return getenv('SMTP_USERNAME') ?: 'contact@patelinfotech.online';
}

function redactSmtpDebugLine(string $line): string {
    // PHPMailer debug includes lines like:
    //   "CLIENT -> SERVER: dXNlcm5hbWU=" (base64)
    // Redact anything that looks like base64 tokens.
    $line = preg_replace('/(CLIENT -> SERVER: )([A-Za-z0-9+\/]{8,}={0,2})/i', '$1[redacted]', $line);
    $line = preg_replace('/(SERVER -> CLIENT: )([A-Za-z0-9+\/]{8,}={0,2})/i', '$1[redacted]', $line);
    return $line;
}

try {
    $smtpHost = getenv('SMTP_HOST') ?: 'mail.patelinfotech.online';
    $smtpUser = getenv('SMTP_USERNAME') ?: 'contact@patelinfotech.online';
    $smtpPass = (string)(getenv('SMTP_PASSWORD') ?: '');
    $smtpPort = (int)(getenv('SMTP_PORT') ?: 465);
    $smtpSecureRaw = strtolower((string)(getenv('SMTP_SECURE') ?: 'smtps'));
    $smtpDebug = (int)(getenv('SMTP_DEBUG') ?: 2);

    if ($smtpPass === '') {
        throw new Exception('Missing SMTP_PASSWORD environment variable.');
    }

    $mail->SMTPDebug = $smtpDebug; // Enable verbose debug output
    $mail->Debugoutput = function ($str, $level) {
        // Prevent leaking base64 auth blobs.
        echo redactSmtpDebugLine($str) . "\n";
    };
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    if ($smtpSecureRaw === 'tls' || $smtpSecureRaw === 'starttls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    }
    $mail->Port       = $smtpPort;

    $mail->setFrom($smtpUser, 'Test');
    $recipient = resolveRecipient();
    $mail->addAddress($recipient);

    $mail->isHTML(true);
    $mail->Subject = 'Test Email - Patel Infotech Services (' . date('c') . ')';
    $mail->Body    = 'This is a test email sent at ' . date('c') . '. Recipient: ' . htmlspecialchars($recipient);

    $mail->send();
    echo "Message has been sent successfully to {$recipient}\n";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}\n";
}
