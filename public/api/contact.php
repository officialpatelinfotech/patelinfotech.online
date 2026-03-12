<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

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
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "All fields are required."]);
    exit;
}

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

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

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'mail.patelinfotech.online';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@patelinfotech.online';
    $mail->Password   = 'Contact@Pi';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // --- EMAIL 1: Notification to Admin ---
    $mail->setFrom('contact@patelinfotech.online', 'Patel Infotech Website');
    $mail->addAddress('contact@patelinfotech.online');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission from ' . $name;
    $mail->Body    = getEmailTemplate($name, $email, $message, false);
    $mail->AltBody = "New Enquiry from {$name}\nEmail: {$email}\nMessage:\n{$message}";

    $mail->send();

    // --- EMAIL 2: Confirmation to User ---
    $mail->clearAddresses(); // Clear admin address
    $mail->addAddress($email); // Add user's address
    $mail->Subject = 'We received your message - Patel Infotech';
    $mail->Body    = getEmailTemplate($name, $email, $message, true);
    $mail->AltBody = "Thanks {$name}! We received your enquiry and our team will reach out soon.";

    $mail->send();

    echo json_encode(["status" => "success", "message" => "Message has been sent"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
