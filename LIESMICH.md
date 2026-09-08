# Kairos Origin — Website

Fertige Website zum Hochladen. Nichts muss gebaut oder kompiliert werden:
Ordner so wie er ist auf den Webspace kopieren, fertig.

## Aufbau

```
index.html          Die Seite selbst — Texte stehen hier drin
danke.html          Bestätigungsseite nach dem Absenden des Formulars
kontakt.php         Versendet die Formularnachricht an office@kairos-origin.com
.htaccess           HTTPS-Zwang, Sicherheitskopfzeilen, Komprimierung
css/style.css       Alles Optische: Farben, Abstände, Schriftgrößen
js/main.js          Produktliste, Partnerliste, Galerie, Cookie-Layer, Formular
assets/
  favicon.png       Symbol im Browser-Tab
  logo.png          Logo im Kopfbereich
  hintergrund.png   Hintergrundbild der ganzen Seite
  produkte/         17 Produktbilder
  partners/         18 Partnerlogos
```

Die Datei `.htaccess` beginnt mit einem Punkt und ist deshalb in manchen
Dateimanagern zunächst unsichtbar — im FTP-Programm „versteckte Dateien
anzeigen" einschalten, sonst wird sie beim Hochladen übersehen.

## Hochladen

**Eigener Webspace (FTP):** den *Inhalt* des Ordners `website` in das
Hauptverzeichnis legen (meist `httpdocs`, `public_html` oder `www`).
`index.html` muss direkt dort liegen, nicht in einem Unterordner.

**GitHub Pages:** funktioniert, aber ohne PHP — das Kontaktformular sendet
dort nichts. Siehe „Kontaktformular" unten.

## Checkliste vor dem Deployen

1. **Domain und SSL-Zertifikat** beim Anbieter aktivieren. Fast alle bieten
   Let's Encrypt kostenlos an. Ohne HTTPS zeigt der Browser eine Warnung.
2. **Testmail schicken.** Formular auf der Live-Seite ausfüllen und prüfen,
   ob die Nachricht bei office@kairos-origin.com ankommt — auch im
   Spam-Ordner nachsehen.
3. **SPF-Eintrag** der Domain prüfen lassen, falls die Testmail nicht
   ankommt. Der Anbieter macht das üblicherweise auf Nachfrage.
4. **Impressum und Datenschutz gegenlesen.** Beides ist vorhanden und
   inhaltlich vollständig, sollte aber vor dem Livegang einmal von Ihnen
   bestätigt werden. Der Hinweis „Stand: März 2026" in der
   Datenschutzerklärung sollte zum Livegang passen.
5. **Partnerlogos:** die Nutzung ist im Impressum als „mit Zustimmung der
   Rechteinhaber" erklärt. Stellen Sie sicher, dass das für alle 18 stimmt.
6. **Matomo** eintragen oder den Statistik-Punkt im Cookie-Layer entfernen.
   Solange nichts eingetragen ist, wird auch nichts geladen — juristisch
   unbedenklich, aber der Schalter läuft dann ins Leere.
7. **Bilder verkleinern.** Die Produktfotos sind im Original hinterlegt.
   Wer die Ladezeit drücken will, jagt sie einmal durch squoosh.app oder
   tinypng.com. Nicht zwingend, aber spürbar.

## Kontaktformular

Standardmäßig sendet das Formular über `kontakt.php` an
**office@kairos-origin.com**. Das läuft auf jedem Webspace mit PHP, ohne
Anmeldung bei einem Drittanbieter und ohne dass Daten irgendwo gespeichert
werden.

Zieladresse ändern: in `kontakt.php` ganz oben bei `EMPFAENGER`.

Als Absender trägt die Mail eine Adresse Ihrer eigenen Domain ein, nicht die
des Anfragenden — sonst stufen Mailserver die Nachricht als gefälscht ein.
Die Adresse des Anfragenden steht im Antwort-an-Feld, „Antworten" im
Mailprogramm geht also direkt an die richtige Person.

**Ohne PHP** (z. B. auf GitHub Pages): auf formspree.io ein Formular mit der
Adresse office@kairos-origin.com anlegen und in `index.html` beim Formular
`action="kontakt.php"` durch die Formspree-Adresse ersetzen.

## Sicherheit

Was eingebaut ist:

- **HTTPS erzwungen** und HSTS-Kopfzeile über `.htaccess`.
- **Schutz gegen Clickjacking** und Dateityp-Erraten (`X-Frame-Options`,
  `X-Content-Type-Options`).
- **Referrer-Policy**, damit beim Klick auf externe Links keine vollständige
  Adresse übermittelt wird.
- **Kamera, Mikrofon, Standort** sind serverseitig gesperrt.
- **Verzeichnisauflistung abgeschaltet** — niemand kann `assets/produkte/`
  als Dateiliste öffnen.
- **Zwei Spamfilter im Formular:** eine Rechenaufgabe für Menschen und ein
  unsichtbares Feld, das nur Roboter ausfüllen. Beides wird geprüft, bevor
  eine Mail entsteht.
- **Kein Einschleusen von Mail-Kopfzeilen:** Zeilenumbrüche in Name und
  E-Mail werden entfernt, die Adresse wird validiert, die Textlänge begrenzt.
- **Externe Links** tragen `rel="noopener"`.
- **Keine Datenspeicherung:** Nachrichten werden nur versendet, nichts landet
  auf dem Server. Im Browser wird ausschließlich die Cookie-Entscheidung
  gespeichert.
- **Keine fremden Skripte:** keine Google Fonts, keine Tracker, keine CDNs.
  Alles liegt auf Ihrem eigenen Server.

Was Sie selbst absichern müssen: ein starkes Passwort für den FTP- und
Hosting-Zugang, und die Zwei-Faktor-Anmeldung beim Anbieter aktivieren.

## Häufige Änderungen

**Text ändern** → `index.html` im Texteditor öffnen, Text zwischen den
Klammern ersetzen. Produkttexte stehen stattdessen in `js/main.js`.

**Produktbild tauschen** → neue Datei in `assets/produkte/` legen und in
`js/main.js` in der Liste `PRODUKTE` den Dateinamen bei `bild` eintragen.
Reihenfolge in der Liste = Reihenfolge auf der Seite. Beste Ergebnisse mit
quadratischen oder hochformatigen Bildern, ca. 1200 px, hellem Hintergrund.

**Partnerlogo tauschen** → PNG mit transparentem Hintergrund in
`assets/partners/` legen und in `js/main.js` in der Liste `PARTNER`
eintragen. Die Logos werden automatisch einfarbig dargestellt, die Farbe des
Originals spielt also keine Rolle.

**Farben ändern** → `css/style.css`, ganz oben im Block `:root`. Dort einmal
ändern, es wirkt auf der ganzen Seite.

**Matomo** → in `js/main.js` ganz oben `MATOMO_URL` eintragen (und bei Bedarf
`MATOMO_SITE_ID`). Solange das Feld leer ist, wird kein Analyse-Skript
geladen — der Cookie-Layer funktioniert trotzdem korrekt.

## Hinweis zum lokalen Öffnen

Per Doppelklick geöffnet funktioniert die Seite vollständig — nur das
Formular nicht, weil dafür ein Server mit PHP nötig ist. Online läuft es.
