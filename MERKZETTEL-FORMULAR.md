# ⚠ NICHT VERGESSEN: Das Kontaktformular ist noch nicht scharf geschaltet

Stand: 10. September 2026

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
Die Datei gehört in denselben Ordner wie `index.html`.
Sie liegt derzeit **nicht mehr im Projekt** und muss neu erstellt werden —
sag mir Bescheid, dann schreibe ich sie.

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

Die drei Direktwege unter dem Formular (E-Mail, WhatsApp, Anrufen)
funktionieren jetzt schon. Es geht also keine Anfrage verloren.
