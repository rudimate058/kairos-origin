<?php
/* ==========================================================================
   Kontaktformular — versendet die Nachricht an office@kairos-origin.com
   Laeuft auf jedem Webspace mit PHP. Nichts wird gespeichert, nur versendet.

   Aenderbar:
     EMPFAENGER  Zieladresse
     BETREFF     Betreffzeile der eingehenden Mail
   ========================================================================== */

const EMPFAENGER = 'office@kairos-origin.com';
const BETREFF    = 'Neue Anfrage über kairos-origin.com';

/* Nur POST zulassen */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html', true, 303);
    exit;
}

/* Abbruch mit Rueckleitung auf das Formular */
function abbruch(): void {
    header('Location: index.html?fehler=1#contact', true, 303);
    exit;
}

/* Honigtopf: dieses Feld ist fuer Menschen unsichtbar.
   Ist es ausgefuellt, war es ein Roboter. */
if (!empty($_POST['website'] ?? '')) {
    header('Location: danke.html', true, 303); // Roboter still abweisen
    exit;
}

/* Zeilenumbrueche entfernen — verhindert das Einschleusen von Mail-Kopfzeilen */
function sauber(string $wert): string {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', $wert));
}

$name      = sauber((string) ($_POST['name'] ?? ''));
$email     = sauber((string) ($_POST['email'] ?? ''));
$nachricht = trim((string) ($_POST['nachricht'] ?? ''));

/* Pflichtfelder und plausible Laengen pruefen */
if ($name === '' || $email === '' || $nachricht === '') abbruch();
if (mb_strlen($name) > 120 || mb_strlen($email) > 180) abbruch();
if (mb_strlen($nachricht) < 5 || mb_strlen($nachricht) > 5000) abbruch();
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) abbruch();
if (empty($_POST['datenschutz'] ?? '')) abbruch();

/* Mailtext */
$text = "Neue Nachricht über das Kontaktformular\n"
      . "----------------------------------------\n\n"
      . "Name:     $name\n"
      . "E-Mail:   $email\n"
      . "Zeit:     " . date('d.m.Y H:i') . "\n\n"
      . "Nachricht:\n$nachricht\n";

/* Absender bleibt eine Adresse der eigenen Domain — sonst landet die Mail
   wegen SPF/DMARC im Spam. Die Adresse des Absenders steht in Reply-To,
   ein Klick auf "Antworten" geht also direkt an die anfragende Person. */
$absender = 'no-reply@' . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'kairos-origin.com');

$kopf = [
    'From'         => 'Kairos Origin Website <' . $absender . '>',
    'Reply-To'     => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
];

$erfolg = mail(
    EMPFAENGER,
    '=?UTF-8?B?' . base64_encode(BETREFF) . '?=',
    $text,
    $kopf
);

header('Location: ' . ($erfolg ? 'danke.html' : 'index.html?fehler=2#contact'), true, 303);
exit;
