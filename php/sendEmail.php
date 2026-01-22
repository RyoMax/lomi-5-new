<?php
// Ensure request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: https://www.lomi5.de/error.html');
    exit;
}

// Trim incoming values
$nameRaw    = isset($_POST['name']) ? trim($_POST['name']) : '';
$emailRaw   = isset($_POST['email']) ? trim($_POST['email']) : '';
$messageRaw = isset($_POST['message']) ? trim($_POST['message']) : '';

// Check required fields
if ($nameRaw === '' || $emailRaw === '' || $messageRaw === '') {
    header('Location: https://www.lomi5.de/pages/error.html');
    exit;
}

// Validate and sanitize email
$emailSanitized = filter_var($emailRaw, FILTER_SANITIZE_EMAIL);
if (!filter_var($emailSanitized, FILTER_VALIDATE_EMAIL)) {
    // invalid email -> treat as error
    header('Location: https://www.lomi5.de/pages/error.html');
    exit;
}

// Prevent header injection by removing CR/LF from name and email
$safeName = str_replace(array("\r", "\n"), '', $nameRaw);
$safeEmail = str_replace(array("\r", "\n"), '', $emailSanitized);

// Prepare email
$from = 'booking@lomi5.de';
$to = 'info@lomi5.de';

// Build headers
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= 'From: '. $from . "\r\n";
$headers .= 'Reply-To: '. $safeEmail . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

// Encode subject for UTF-8
if (!function_exists('mb_encode_mimeheader')) {
    $subject = 'Neue Nutzeranfrage von ' . $safeName;
} else {
    $subject = mb_encode_mimeheader('Neue Nutzeranfrage von ' . $safeName, 'UTF-8');
}

// Sanitize message for HTML (preserve line breaks)
$safeMessageHtml = nl2br(htmlspecialchars($messageRaw, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

$htmlMessage = '<!doctype html>' .
    '<html><head><meta charset="utf-8"></head><body style="background-color:#F9F5EC; color:#262626; font-family:Arial, sans-serif;">'.
    '<h1>Hallo Henriette!</h1>'.
    '<h3>' . htmlspecialchars($safeName, ENT_QUOTES, 'UTF-8') . ' hat dir eine Anfrage geschickt.</h3>'.
    '<p><strong>Inhalt der Nachricht:</strong></p>'.
    '<div>' . $safeMessageHtml . '</div>'.
    '<p><strong>E-Mail-Adresse vom Kunden:</strong> ' . htmlspecialchars($safeEmail, ENT_QUOTES, 'UTF-8') . '</p>'.
    '</body></html>';

// Send mail
$sent = mail($to, $subject, $htmlMessage, $headers);
if (!$sent) {
    header('Location: https://www.lomi5.de/pages/error.html');
    exit;
}

header('Location: https://www.lomi5.de/pages/success.html');
exit;
?>