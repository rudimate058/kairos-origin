# ⚠ NICHT VERGESSEN: Das Kontaktformular ist noch nicht scharf geschaltet

Stand: 19. September 2026

## Was gerade passiert

Auf der Seite steht bei „Lass uns reden" wieder ein vollständiges
Kontaktformular. Es prüft die Eingaben und die Rechenaufgabe, **verschickt
aber nichts**. Wer es abschickt, sieht stattdessen den Hinweis, die Nachricht
per E-Mail oder WhatsApp zu senden.

Grund: ein Formular braucht einen Server, der die Nachricht weitergibt.
GitHub Pages liefert nur Dateien aus und kann das nicht.

## Was zu tun ist, sobald die eigene Domain und echtes Hosting stehen

Drei Schritte, Reihenfolge egal:

### 1. kontakt.php hochladen
Die Datei liegt im Projekt als **`kontakt.php.txt`** — beim Hochladen
in `kontakt.php` umbenennen und in denselben Ordner wie `index.html`
legen. Die Endung `.txt` ist nur ein Schutz: ein PHP-Mailskript in einem
ZIP-Archiv wird von Virenscannern gelegentlich als Web-Shell fehlgedeutet.

In der Datei oben die Empfängeradresse prüfen.

### 2. Das Formular auf den Server richten
In **beiden** Dateien — `website/index.html` und `website/en/index.html` —
die Zeile

    <form class="kontakt-formular" id="kontaktformular" novalidate>

ändern zu

    <form class="kontakt-formular" id="kontaktformular" action="kontakt.php" method="post" novalidate>

In der englischen Fassung lautet der Pfad `action="../kontakt.php"`.

### 3. Den Schaumodus abschalten
In `website/js/main.js`, Abschnitt 6, die Zeile

    var FORMULAR_SCHAUMODUS = true;

ändern zu

    var FORMULAR_SCHAUMODUS = false;

## Danach unbedingt testen

- Nachricht an sich selbst schicken und prüfen, ob sie ankommt
- Auch im Spam-Ordner nachsehen
- Prüfen, ob die Absenderadresse stimmt und die Antwort funktioniert
- Rechenaufgabe mit falschem Ergebnis: muss abgewiesen werden

## Solange nicht scharf geschaltet

Die Kontaktwege neben dem Formular (E-Mail, WhatsApp, Instagram, LinkedIn)
funktionieren jetzt schon. Es geht also keine Anfrage verloren.

## Warum kein Formulardienst

Dienste wie FormSubmit oder Formspree würden das Formular auch auf
GitHub Pages zum Senden bringen, ohne eigenen Server. Der Weg wurde
bewusst verworfen: die Anbieter sitzen in den USA, die Besucherdaten
liefen über einen Drittstaat, und die Datenschutzerklärung müsste das
mit Einwilligung und Widerrufsrecht abbilden. Mit `kontakt.php` auf
eigenem Hosting bleiben die Daten beim Anbieter, mit dem ohnehin ein
Auftragsverarbeitungsvertrag besteht.

Die Datenschutzerklärung, Abschnitt 3, ist bereits auf diesen Zustand
formuliert.

## Nebenbei vorhanden

`en/danke.html` liegt schon bereit — die englische Bestätigungsseite.
`kontakt.php` erkennt die Sprache selbst an der absendenden Seite und
leitet auf die passende Bestätigung weiter.

Das Skript bremst außerdem Massenversand ab: höchstens fünf Nachrichten je
Stunde und Absender. Kommt der Besucher mit einer Fehlermeldung zurück,
zeigt die Seite den Grund über dem Formular an.
