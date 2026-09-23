# Hosting-Checkliste — Kairos Origin

Stand: 21.09.2026

## 1. Domain eintragen (wichtigster Schritt)

Überall steht noch die Testadresse `https://rudimate058.github.io/kairos-origin/`.
Nach dem Umzug in allen folgenden Dateien auf die echte Domain ändern
(Suchen-und-Ersetzen über den ganzen Ordner, 40 Stellen):

- `index.html` — canonical, hreflang, og:url, og:image, strukturierte Daten
- `en/index.html` — dieselben Stellen
- `ueber-mich.html` — canonical, og:url, og:image, Personendaten
- `sitemap.xml` — alle Adressen
- `robots.txt` — Sitemap-Zeile
- `.well-known/security.txt` — Canonical-Zeile

Wichtig: die Adresse muss mit `https://` beginnen und exakt so lauten, wie die
Seite später erreichbar ist (mit oder ohne `www` — eine Variante festlegen und
die andere per Weiterleitung darauf zeigen lassen).

## 2. Kontaktformular aktivieren

`kontakt.php.txt` in `kontakt.php` umbenennen. Darin oben die erlaubte Domain
und die Empfängeradresse prüfen. Danach eine Testnachricht senden.

## 3. Weiterleitungen der alten Seite

In `.htaccess` sind die Adressen der alten Baukastenseite dauerhaft (301) auf
die neuen Stellen umgeleitet:

| alt | neu |
| --- | --- |
| `/nutzer` (auch Unteradressen) | `/#work` — Ausgewählte Arbeiten |
| `/page-map` | `/#standorte` |
| `/rss-feeds` | Instagram-Profil |
| `/gamezone` | Startseite |
| `/apiv3/…` | wird als gelöscht gemeldet (keine echten Seiten) |

Nach dem Aufschalten einmal prüfen: `kairos-origin.com/nutzer` im Browser
aufrufen — es muss auf der Startseite beim Abschnitt „Ausgewählte Arbeiten"
landen.

## 4. Server-Einstellungen

`.htaccess` liegt bereit und greift auf jedem Apache-Hosting automatisch:
HTTPS-Zwang, Sicherheitskopfzeilen, strenge Inhaltsregeln, Komprimierung,
Zwischenspeicher. Bei nginx-Hosting die Regeln vom Anbieter übernehmen lassen.

Wird später ein externer Dienst eingebaut (Schriften, Karte, Statistik), muss
seine Adresse in der `Content-Security-Policy` in `.htaccess` ergänzt werden —
sonst lädt er nicht.

## 5. Suchmaschinen

- Google Search Console: Domain bestätigen, `sitemap.xml` einreichen
- Bing Webmaster Tools: dasselbe
- Google Unternehmensprofil: Adresse, Telefon und Öffnungszeiten müssen mit
  den strukturierten Daten in `index.html` übereinstimmen

## 6. Bildtexte

Alle Bilder haben beschreibende Alternativtexte. Die Produktbilder setzen sich
automatisch aus Produktname, Warengruppe und Kunde zusammen
(z. B. „Event-Becher – Drinkware · WMATRC 2023"). Neue Produkte in
`js/main.js` brauchen daher nur `name`, `kategorie` und `kunde` — der Bildtext
entsteht von selbst.

## 7. Offen

- Foto `assets/sandro.webp` für die Seite „Über mich"
  (Datei ablegen, dann in `ueber-mich.html` Zeile 69 und `en/index.html`
  Zeile 596 die Bildzeile einkommentieren und `ohne-bild` entfernen)
- Besucherstatistik: Plausible, Matomo oder Server-Logs
