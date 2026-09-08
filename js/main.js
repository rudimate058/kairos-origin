/* ==========================================================================
   Kairos Origin — Skripte
   Inhalt:
     1. Produkte (Bilder hier austauschen)
     2. Partner-Logos
     3. Produktvitrine
     4. Leistungen aufklappen
     5. Overlays (Impressum, Datenschutz)
     6. Cookie-Einwilligung & Matomo
     7. Kontaktformular (Rechenaufgabe)
     8. Schaltflaechen unten rechts
   ========================================================================== */

/* ---------- 1. Produkte ---------------------------------------------------
   Bild austauschen: neue Datei in assets/produkte/ legen und den Dateinamen
   unter "bild" eintragen. Reihenfolge dieser Liste = Reihenfolge auf der Seite.
   -------------------------------------------------------------------------- */

var PRODUKTE = [
  { bild: 'becher.jpg',            kategorie: 'Drinkware', name: 'Event-Becher',        kunde: 'Tirol · WMTRC',                     text: 'Mehrweg-Becher in drei Motiven für die WM-Arena: Sourcing, Motivvergabe und Anlieferung passend zum Eventstart.' },
  { bild: 'edelstahlflasche.jpg',  kategorie: 'Drinkware', name: 'Edelstahlflasche',    kunde: 'Kairos Origin',                     text: 'Doppelwandige Flasche in Pfirsich mit metallischem Logodruck – unser Give-away für Kunden und Partner.' },
  { bild: 'zirments-flasche.jpg',  kategorie: 'Drinkware', name: 'Trinkflasche',        kunde: 'Zirments',                          text: 'Klare Tritan-Flasche mit Edelstahldeckel: Claim und Logo vertikal gesetzt, damit die Marke von jeder Seite lesbar bleibt.' },
  { bild: 'physio-flasche.jpg',    kategorie: 'Drinkware', name: 'Sportflasche',        kunde: 'Physio Telfs · fit&sun',            text: 'Schwarze Sportflasche für zwei Marken auf einem Produkt – Aufteilung der Druckflächen gemeinsam mit beiden Partnern abgestimmt.' },
  { bild: 'flachmann.jpg',         kategorie: 'Gadgets',   name: 'Flachmann Leder',     kunde: 'Kairos Origin',                     text: 'Flachmann mit genähter Lederhülle in Grau und Cognac, Logo als Blindprägung – Kleinserie für besondere Anlässe.' },
  { bild: 'elyo-cap.jpg',          kategorie: 'Caps',      name: 'Snapback Cap',        kunde: 'Elyo Sports',                       text: 'Weiße Snapback mit perforierten Seitenpanels und türkiser Stickerei, Musterfreigabe bis Auslieferung begleitet.' },
  { bild: 'army-cap.jpg',          kategorie: 'Caps',      name: 'Army Cap',            kunde: 'Innsbruck Region · Tirol',          text: 'Army Cap in Sand mit roter Stickerei: Karabiner-Motiv und zwei Logos auf engem Raum sauber ausbalanciert.' },
  { bild: 'tshirt-tirol.jpg',      kategorie: 'Textil',    name: 'T-Shirt Abenteuerlust', kunde: 'Tirol',                           text: 'Shirt mit großflächigem Rückenmotiv, kombiniert aus Druck und Stickerei – Textilauswahl, Musterung und Qualitätskontrolle inklusive.' },
  { bild: 'jacke-da.jpg',          kategorie: 'Textil',    name: 'Softshell-Jacke',     kunde: 'da emobil',                         text: 'Leichte Softshell mit Strickfutter im Kragen und Logostickerei auf der Brust – Teamwear für den Außendienst.' },
  { bild: 'poloshirt-da.jpg',      kategorie: 'Textil',    name: 'Poloshirt',           kunde: 'da emobil',                         text: 'Poloshirt von Cutter & Buck mit dezenter Logostickerei: die zurückhaltende Variante zur Jacke für Messe und Büro.' },
  { bild: 'socken.jpg',            kategorie: 'Textil',    name: 'Sportsocken',         kunde: 'l.o · MB Wear',                     text: 'Funktionssocken in drei Farbstellungen, inklusive Verpackung mit Marken-Prägung.' },
  { bild: 'notizbuch.jpg',         kategorie: 'Office',    name: 'Notizbuch',           kunde: 'Red Bull',                          text: 'Notizbuch mit illustriertem Cover für ein internes Format – Illustration, Papierwahl und Bindung aus einer Hand.' },
  { bild: 'kugelschreiber.jpg',    kategorie: 'Office',    name: 'Pen & Mint-Dose',     kunde: 'da emobil',                         text: 'Set aus Softtouch-Kugelschreiber mit Stylus und Mint-Dosen im identischen Orange – der Klassiker für Messetische.' },
  { bild: 'powerbank.jpg',         kategorie: 'Tech',      name: 'Powerbank',           kunde: 'Red Bull MotoGP Rookies Cup',       text: 'Magnetische Powerbank im Serien-Design, produziert zum 20-Jahr-Jubiläum des Rookies Cup.' },
  { bild: 'kartenspiel.jpg',       kategorie: 'Gadgets',   name: 'Kartenspiel',         kunde: 'l.o',                               text: 'Kartenspiel mit Koordinaten des Standorts auf jeder Karte – von der Gestaltung bis zur fertigen Schachtel.' },
  { bild: 'golfbaelle.jpg',        kategorie: 'Gadgets',   name: 'Golfbälle',           kunde: 'Tirol',                             text: 'Bedruckte Golfbälle in Rot und Weiß samt passender Verpackung, abgestimmt auf den Markenauftritt.' },
  { bild: 'jausenbox.jpg',         kategorie: 'Gadgets',   name: 'Jausenbox',           kunde: 'Tirol',                             text: 'Alu-Jausenbox in Markenrot mit geprägtem Logo und Trennsteg – robustes Give-away mit Alltagsnutzen.' }
];

/* ---------- 2. Partner-Logos ----------------------------------------------
   Logo austauschen: PNG mit transparentem Hintergrund in assets/partners/
   legen und hier Dateiname + Name eintragen.
   -------------------------------------------------------------------------- */

var PARTNER = [
  { datei: 'asvoe.png',            name: 'ASVÖ' },
  { datei: 'blumen-calovini.png',  name: 'Blumen Calovini' },
  { datei: 'chaka2.png',           name: 'chaka2' },
  { datei: 'chasa-patria.png',     name: 'Chasa Patria' },
  { datei: 'da-emobil.png',        name: 'da emobil' },
  { datei: 'edelstein.png',        name: 'Edelstein' },
  { datei: 'einspunktnull.png',    name: 'einspunktnull' },
  { datei: 'innsbruck.png',        name: 'Innsbruck' },
  { datei: 'its-gr8.png',          name: "it's gr8" },
  { datei: 'kaino.png',            name: 'Kaino' },
  { datei: 'landhaus-daham.png',   name: 'Landhaus Daham' },
  { datei: 'physio-telfs.png',     name: 'Physio Telfs' },
  { datei: 'red-bull.png',         name: 'Red Bull' },
  { datei: 'sport4all.png',        name: 'Sport4All' },
  { datei: 'tdm.png',              name: 'TDM' },
  { datei: 'tirol.png',            name: 'Tirol' },
  { datei: 'tza.png',              name: 'TZA' },
  { datei: 'zirments.png',         name: 'Zirments' }
];

/* Matomo — sobald eine Instanz vorhanden ist, hier eintragen.
   Leer lassen heisst: es wird kein Analyse-Skript geladen. */
var MATOMO_URL = '';
var MATOMO_SITE_ID = '1';

var CONSENT_KEY = 'kairos-cookie-consent';

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Partner-Laufband aufbauen ---------------------------------- */

  var laufband = document.querySelector('.laufband');
  if (laufband) {
    // Liste zweimal ausgeben, damit die Schleife nahtlos laeuft
    var reihe = PARTNER.concat(PARTNER).map(function (p) {
      return '<div class="partner-logo" role="img" title="' + p.name + '" aria-label="' + p.name +
             '" style="mask-image:url(assets/partners/' + p.datei +
             ');-webkit-mask-image:url(assets/partners/' + p.datei + ')"></div>';
    }).join('');
    laufband.innerHTML = reihe;
  }

  /* ---------- 3. Produktvitrine ------------------------------------------ */

  var bildfeld    = document.querySelector('.vitrine-bildfeld');
  var miniaturen  = document.querySelector('.miniaturen');
  var grossBilder = document.querySelector('.grossansicht-bild');
  var aktuell     = 0;

  if (bildfeld && miniaturen && grossBilder) {
    var kleinHtml = '', miniHtml = '', grossHtml = '';

    PRODUKTE.forEach(function (p, i) {
      var pfad = 'assets/produkte/' + p.bild;
      kleinHtml += '<img loading="lazy" src="' + pfad + '" alt="' + p.name + '">';
      grossHtml += '<img loading="lazy" src="' + pfad + '" alt="' + p.name + '">';
      miniHtml  += '<button type="button" class="miniatur" data-index="' + i + '" aria-label="' + p.name +
                   '"><img loading="lazy" src="' + pfad + '" alt=""></button>';
    });

    // Toenung und Lichtpunkt liegen ueber den Bildern
    bildfeld.insertAdjacentHTML('afterbegin', kleinHtml);
    grossBilder.innerHTML = grossHtml;
    miniaturen.innerHTML  = miniHtml;

    var kleinListe = bildfeld.querySelectorAll('img');
    var grossListe = grossBilder.querySelectorAll('img');
    var miniListe  = miniaturen.querySelectorAll('.miniatur');

    var elKategorie = document.querySelector('.vitrine-kategorie');
    var elName      = document.querySelector('.vitrine-name');
    var elKunde     = document.querySelector('.vitrine-kunde span');
    var elText      = document.querySelector('.vitrine-beschreibung');
    var elZaehler   = document.querySelectorAll('.vitrine-zaehler');
    var elGrossKude = document.querySelector('.grossansicht-kopf .kunde');
    var elGrossName = document.querySelector('.grossansicht-kopf .name');

    var zweistellig = function (n) { return String(n + 1).padStart(2, '0'); };

    var zeige = function (i) {
      aktuell = (i + PRODUKTE.length) % PRODUKTE.length;
      var p = PRODUKTE[aktuell];

      kleinListe.forEach(function (img, k) { img.classList.toggle('aktiv', k === aktuell); });
      grossListe.forEach(function (img, k) { img.classList.toggle('aktiv', k === aktuell); });
      miniListe.forEach(function (b, k) { b.classList.toggle('aktiv', k === aktuell); });

      elKategorie.textContent = p.kategorie;
      elName.textContent      = p.name;
      elKunde.textContent     = 'für ' + p.kunde;
      elText.textContent      = p.text;
      elGrossKude.textContent = p.kunde;
      elGrossName.textContent = p.name;

      var stand = zweistellig(aktuell) + ' / ' + zweistellig(PRODUKTE.length - 1);
      elZaehler.forEach(function (z) { z.textContent = stand; });
    };

    zeige(0);

    miniListe.forEach(function (b) {
      b.addEventListener('click', function () { zeige(Number(b.dataset.index)); });
    });

    document.querySelectorAll('[data-vitrine="vor"]').forEach(function (b) {
      b.addEventListener('click', function () { zeige(aktuell + 1); });
    });
    document.querySelectorAll('[data-vitrine="zurueck"]').forEach(function (b) {
      b.addEventListener('click', function () { zeige(aktuell - 1); });
    });

    // Grossansicht
    var gross = document.querySelector('.grossansicht');
    var oeffneGross = function () { gross.classList.add('offen'); };
    var schliesseGross = function () { gross.classList.remove('offen'); };

    document.querySelector('.vitrine-buehne').addEventListener('click', oeffneGross);
    gross.addEventListener('click', function (e) { if (e.target === gross) schliesseGross(); });
    gross.querySelectorAll('[data-schliessen]').forEach(function (b) {
      b.addEventListener('click', schliesseGross);
    });

    document.addEventListener('keydown', function (e) {
      if (!gross.classList.contains('offen')) return;
      if (e.key === 'Escape') schliesseGross();
      else if (e.key === 'ArrowRight') zeige(aktuell + 1);
      else if (e.key === 'ArrowLeft')  zeige(aktuell - 1);
    });
  }

  /* ---------- 4. Leistungen aufklappen ----------------------------------- */

  var leistungen = document.querySelectorAll('.leistung');

  leistungen.forEach(function (el) {
    var oeffne = function () {
      leistungen.forEach(function (a) { a.classList.toggle('offen', a === el); });
    };
    el.addEventListener('mouseenter', oeffne);
    el.addEventListener('mouseleave', function () { el.classList.remove('offen'); });
    el.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // Show-Room-Link nicht abfangen
      el.classList.toggle('offen');
    });
  });

  /* ---------- 5. Overlays ------------------------------------------------- */

  var oeffneOverlay = function (id) {
    var o = document.getElementById(id);
    if (o) o.classList.add('offen');
  };

  document.querySelectorAll('[data-oeffnen]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      oeffneOverlay(b.dataset.oeffnen);
    });
  });

  document.querySelectorAll('.overlay').forEach(function (o) {
    o.addEventListener('click', function (e) {
      if (e.target === o) o.classList.remove('offen');
    });
    o.querySelectorAll('[data-schliessen]').forEach(function (b) {
      b.addEventListener('click', function () { o.classList.remove('offen'); });
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.overlay.offen').forEach(function (o) { o.classList.remove('offen'); });
  });

  /* ---------- 6. Cookie-Einwilligung -------------------------------------- */

  var cookieSchicht = document.querySelector('.cookie-schicht');
  var statistikOption = document.querySelector('.cookie-option[data-option="statistik"]');

  var ladeMatomo = function () {
    if (!MATOMO_URL || window._paqGeladen) return;
    window._paqGeladen = true;
    var u = MATOMO_URL.replace(/\/?$/, '/');
    window._paq = window._paq || [];
    window._paq.push(['setTrackerUrl', u + 'matomo.php']);
    window._paq.push(['setSiteId', MATOMO_SITE_ID]);
    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);
    var s = document.createElement('script');
    s.async = true;
    s.src = u + 'matomo.js';
    document.head.appendChild(s);
  };

  var speichere = function (statistik) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics: statistik, ts: Date.now() }));
    } catch (e) {}
    cookieSchicht.classList.remove('offen');
    if (statistik) ladeMatomo();
  };

  if (cookieSchicht) {
    statistikOption.addEventListener('click', function () {
      statistikOption.classList.toggle('an');
    });

    document.querySelector('[data-cookie="alle"]').addEventListener('click', function () {
      statistikOption.classList.add('an');
      speichere(true);
    });
    document.querySelector('[data-cookie="auswahl"]').addEventListener('click', function () {
      speichere(statistikOption.classList.contains('an'));
    });
    document.querySelector('[data-cookie="notwendig"]').addEventListener('click', function () {
      statistikOption.classList.remove('an');
      speichere(false);
    });
    document.querySelectorAll('[data-cookie="oeffnen"]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        cookieSchicht.classList.add('offen');
      });
    });

    // Gespeicherte Entscheidung wiederherstellen
    var gespeichert = null;
    try { gespeichert = JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch (e) {}

    if (gespeichert) {
      if (gespeichert.analytics) {
        statistikOption.classList.add('an');
        ladeMatomo();
      }
    } else {
      cookieSchicht.classList.add('offen');
    }
  }

  /* ---------- 7. Kontaktformular ------------------------------------------ */

  var formular = document.querySelector('.kontakt-formular');

  if (formular) {
    // Hinweis, wenn der Server die Nachricht abgelehnt hat (?fehler=… in der Adresse)
    if (location.search.indexOf('fehler=') !== -1) {
      var meldung = document.createElement('div');
      meldung.className = 'formular-erfolg';
      meldung.textContent = 'Die Nachricht konnte nicht versendet werden. '
        + 'Bitte prüfen Sie Ihre Angaben oder schreiben Sie direkt an office@kairos-origin.com.';
      formular.insertBefore(meldung, formular.firstChild);
    }

    var aufgabe   = formular.querySelector('.captcha-aufgabe');
    var eingabe   = formular.querySelector('.captcha input');
    var hinweis   = formular.querySelector('.captcha-hinweis');
    var neuKnopf  = formular.querySelector('.captcha-neu');
    var summe     = 0;

    var neueAufgabe = function () {
      var a = 2 + Math.floor(Math.random() * 8);
      var b = 1 + Math.floor(Math.random() * 8);
      summe = a + b;
      aufgabe.textContent = a + ' + ' + b + ' =';
      eingabe.value = '';
      eingabe.classList.remove('fehler');
      hinweis.textContent = '';
    };

    neueAufgabe();
    neuKnopf.addEventListener('click', neueAufgabe);
    eingabe.addEventListener('input', function () {
      eingabe.classList.remove('fehler');
      hinweis.textContent = '';
    });

    formular.addEventListener('submit', function (e) {
      var honigtopf = formular.querySelector('input[name="website"]');
      var richtig = parseInt(eingabe.value, 10) === summe && !(honigtopf && honigtopf.value);
      if (!richtig) {
        e.preventDefault();
        hinweis.textContent = 'Bitte die Rechnung korrekt lösen.';
        eingabe.classList.add('fehler');
        neueAufgabe();
        hinweis.textContent = 'Bitte die Rechnung korrekt lösen.';
      }
    });
  }

  /* ---------- 8. Schaltflaechen unten rechts ------------------------------ */

  var plus       = document.querySelector('.plus-knopf');
  var schnell    = document.querySelector('.schnellmenue');
  var nachOben   = document.querySelector('.nach-oben');

  if (plus) {
    plus.addEventListener('click', function () {
      plus.classList.toggle('offen');
      schnell.classList.toggle('offen');
    });
  }

  if (nachOben) {
    var pruefe = function () {
      nachOben.classList.toggle('sichtbar', window.scrollY > 260);
    };
    window.addEventListener('scroll', pruefe, { passive: true });
    pruefe();
  }
});
