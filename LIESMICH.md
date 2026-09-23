# Kairos Origin — Website

Fertige Website zum Hochladen. Nichts muss gebaut oder kompiliert werden:
den Inhalt des Ordners so wie er ist auf den Webspace kopieren, fertig.

## Aufbau

```
index.html          Startseite (Deutsch) — die Texte stehen hier drin
en/index.html       Startseite (Englisch)
ueber-mich.html     Profilseite Sandro Holzmann
danke.html          Bestätigung nach dem Absenden des Formulars
en/danke.html       dasselbe auf Englisch
kontakt.php.txt     Versand des Formulars — zum Livegang in kontakt.php umbenennen
.htaccess           HTTPS-Zwang, Sicherheitskopfzeilen, Komprimierung
robots.txt          Erlaubt Suchmaschinen die Seite zu erfassen
sitemap.xml         Verzeichnis der Seiten für Suchmaschinen
.well-known/        security.txt: Kontaktadresse für Sicherheitshinweise
css/style.css       Alles Optische: Farben, Abstände, Schriftgrößen
js/main.js          Produktliste, Partnerliste, Galerie, Menü, Formular
js/texte-en.js      Englische Produkttexte
assets/
  favicon.png       Symbol im Browser-Tab
  logo.webp         Logo im Kopfbereich
  share.webp        Vorschaubild beim Teilen (WhatsApp, LinkedIn)
  hintergrund.webp  Hintergrundbild der ganzen Seite
  produkte/         17 Produktbilder (WebP)
  partners/         18 Partnerlogos (WebP)
```

Die Bilder liegen ausschließlich als WebP vor — dasselbe Bild bei rund einem
Viertel der Dateigröße. Alle gängigen Browser zeigen es seit Jahren an.

## Domain eintragen

Aktuell steht überall `https://rudimate058.github.io/kairos-origin/` als
Adresse. Sobald die echte Domain feststeht, dort ersetzen:

- `index.html` und `en/index.html` — bei `og:url`, `og:image`, `canonical`,
  den drei `hreflang`-Zeilen und in den beiden Datenblöcken für Google
- `ueber-mich.html` — bei `og:url`, `og:image` und `canonical`
- `robots.txt` — bei `Sitemap:`
- `sitemap.xml` — bei jedem `<loc>`
- `.well-known/security.txt` — bei `Canonical:`

Ohne richtige Adresse bleibt die Vorschau leer, wenn jemand den Link über
WhatsApp oder LinkedIn verschickt.

Die Datei `.htaccess` beginnt mit einem Punkt und ist deshalb in manchen
Dateimanagern zunächst unsichtbar — im FTP-Programm „versteckte Dateien
anzeigen" einschalten, sonst wird sie beim Hochladen übersehen.

## Hochladen

**Eigener Webspace (FTP):** den *Inhalt* des Ordners `website` in das
Hauptverzeichnis legen (meist `httpdocs`, `public_html` oder `www`).
`index.html` muss direkt dort liegen, nicht in einem Unterordner.

**GitHub Pages:** funktioniert, aber ohne PHP — das Kontaktformular sendet
dort nichts und zeigt stattdessen E-Mail und WhatsApp an. Siehe unten.

## Checkliste vor dem Livegang

1. **Domain und SSL-Zertifikat** beim Anbieter aktivieren. Fast alle bieten
   Let's Encrypt kostenlos an. Ohne HTTPS zeigt der Browser eine Warnung.
2. **Formular scharf schalten** (drei Schritte):
   `kontakt.php.txt` in `kontakt.php` umbenennen; in `js/main.js` oben in
   Abschnitt 6 `FORMULAR_SCHAUMODUS` auf `false` setzen; im Formular-Tag
   beider Startseiten `action="kontakt.php" method="post"` ergänzen.
3. **Testmail schicken.** Formular auf der Live-Seite ausfüllen und prüfen,
   ob die Nachricht bei office@kairos-origin.com ankommt — auch im
   Spam-Ordner nachsehen.
4. **SPF-Eintrag** der Domain prüfen lassen, falls die Testmail nicht
   ankommt. Der Anbieter macht das üblicherweise auf Nachfrage.
5. **Impressum und Datenschutz gegenlesen.** Beides ist vorhanden und
   inhaltlich vollständig, sollte aber vor dem Livegang einmal von Ihnen
   bestätigt werden.
6. **Partnerlogos:** die Nutzung ist im Impressum als „mit Zustimmung der
   Rechteinhaber" erklärt. Stellen Sie sicher, dass das für alle 18 stimmt.
7. **Foto für „Über mich"**: Datei als `assets/sandro.webp` ablegen, dann in
   `ueber-mich.html` die auskommentierte `<img>`-Zeile freischalten und die
   Klasse `ohne-bild` entfernen.

## Kontaktformular

Nach dem Umbenennen sendet das Formular über `kontakt.php` an
**office@kairos-origin.com**. Das läuft auf jedem Webspace mit PHP, ohne
Anmeldung bei einem Drittanbieter und ohne dass Daten gespeichert werden.

Zieladresse ändern: in `kontakt.php` ganz oben bei `EMPFAENGER`.

Als Absender trägt die Mail eine Adresse Ihrer eigenen Domain, nicht die des
Anfragenden — sonst stufen Mailserver die Nachricht als gefälscht ein. Die
Adresse des Anfragenden steht im Antwort-an-Feld, „Antworten" im
Mailprogramm geht also direkt an die richtige Person.

**Ohne PHP** (z. B. auf GitHub Pages): auf formspree.io ein Formular mit der
Adresse office@kairos-origin.com anlegen und im Formular-Tag die
Formspree-Adresse als `action` eintragen.

## Sicherheit

Was eingebaut ist:

- **HTTPS erzwungen** und HSTS-Kopfzeile über `.htaccess`.
- **Inhaltsregeln (Content-Security-Policy):** die Seite darf ausschließlich
  eigene Dateien laden. Eingeschleuster Fremdcode läuft nicht. Kommt später
  ein externer Dienst dazu (Besucherstatistik, Karte), muss dessen Adresse in
  `.htaccess` ergänzt werden.
- **Kein Skript und kein Stil steht im Seitenquelltext** — dadurch greifen
  die Inhaltsregeln ohne Ausnahmen.
- **Schutz gegen Clickjacking** und Dateityp-Erraten (`X-Frame-Options`,
  `X-Content-Type-Options`).
- **Referrer-Policy**, damit beim Klick auf externe Links keine vollständige
  Adresse übermittelt wird.
- **Kamera, Mikrofon, Standort** sind serverseitig gesperrt.
- **Verzeichnisauflistung abgeschaltet** — niemand kann `assets/produkte/`
  als Dateiliste öffnen.
- **Drei Bremsen im Formular:** eine Rechenaufgabe für Menschen, ein
  unsichtbares Feld, das nur Roboter ausfüllen, und eine Obergrenze von fünf
  Nachrichten je Stunde und Absender.
- **Kein Einschleusen von Mail-Kopfzeilen:** Zeilenumbrüche in Name und
  E-Mail werden entfernt, die Adresse wird validiert, die Textlänge begrenzt.
- **Externe Links** tragen `rel="noopener"`.
- **Keine Datenspeicherung:** Nachrichten werden nur versendet, nichts landet
  auf dem Server, nichts im Browser.
- **Keine fremden Skripte:** keine Google Fonts, keine Tracker, keine CDNs.
  Alles liegt auf Ihrem eigenen Server.

Was Sie selbst absichern müssen: ein starkes Passwort für den FTP- und
Hosting-Zugang, und die Zwei-Faktor-Anmeldung beim Anbieter aktivieren.

## Häufige Änderungen

**Text ändern** → `index.html` im Texteditor öffnen, Text zwischen den
Klammern ersetzen. Die englische Fassung steht in `en/index.html`.
Produkttexte stehen in `js/main.js` (Deutsch) und `js/texte-en.js`
(Englisch).

**Produktbild tauschen** → neue Datei in `assets/produkte/` legen und in
`js/main.js` in der Liste `PRODUKTE` den Dateinamen bei `bild` eintragen.
Reihenfolge in der Liste = Reihenfolge auf der Seite. Beste Ergebnisse mit
quadratischen oder hochformatigen Bildern, ca. 1200 px, hellem Hintergrund.

**Partnerlogo tauschen** → Bild mit transparentem Hintergrund in
`assets/partners/` legen und in `js/main.js` in der Liste `PARTNER`
eintragen. Die Logos werden automatisch einfarbig dargestellt, die Farbe des
Originals spielt also keine Rolle.

**Farben ändern** → `css/style.css`, ganz oben im Block `:root`. Dort einmal
ändern, es wirkt auf der ganzen Seite.

## Darstellung auf allen Geräten

Die Seite ist auf drei Größen abgestimmt: Handy unter 768 px, Tablet bis
1023 px, Rechner darüber. Schriftgrößen und Abstände wachsen stufenlos mit.
Die Arbeiten stehen immer in genau einer Reihe — drei Karten am Rechner,
zwei am Tablet, eine am Handy; geblättert wird mit den Pfeilen daneben.

## Hinweis zum lokalen Öffnen

Per Doppelklick geöffnet funktioniert die Seite vollständig — nur das
Formular nicht, weil dafür ein Server mit PHP nötig ist. Online läuft es.
