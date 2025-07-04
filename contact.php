<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Vérifier que c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = trim($_POST['name'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Validation basique check
    if (empty($name) || empty($email) || empty($message)) {
        // Retour vers la page avec un statut d'erreur
        header('Location: index.html?status=error');
        exit;
    }

    // !Configuration de PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = '...@smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'arthurtchanda@gmail.com';
        $mail->Password   = 'mafamille@07';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // *vers moi
        $mail->setFrom('votre_email@example.com', 'Portfolio Contact');
        $mail->addAddress('arthurtchanda@gmail.com', 'Arthur TCHANDA');

        // *Content
        $mail->Subject = 'Nouveau message du formulaire de contact';
        $mail->Body    = "Nom : {$name}\nEmail : {$email}\n\nMessage :\n{$message}";

        // *send_address_local
        $mail->send();
        header('Location: index.html?status=success');
        exit;

    } catch (Exception $e) {
        header('Location: index.html?status=error');
        exit;
    }
}
