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
   "url" ist optional — ist eine Adresse eingetragen, wird das Logo anklickbar.
   -------------------------------------------------------------------------- */

var PARTNER = [
  { datei: 'asvoe.png',            name: 'ASVÖ',              url: 'https://www.asvoe.tirol/' },
  { datei: 'blumen-calovini.png',  name: 'Blumen Calovini',   url: 'https://blumen-calovini.at/' },
  { datei: 'chaka2.png',           name: 'chaka2',            url: 'https://www.chaka2.com/de/' },
  { datei: 'chasa-patria.png',     name: 'Chasa Patria',      url: 'https://www.chasa-patria.at/' },
  { datei: 'da-emobil.png',        name: 'da emobil',         url: 'https://www.da-emobil.com' },
  { datei: 'edelstein.png',        name: 'Edelsten Bikes',    url: 'https://edelstenbikes.com/' },
  { datei: 'einspunktnull.png',    name: 'einspunktnull',     url: 'https://physio-einspunktnull.com/' },
  { datei: 'innsbruck.png',        name: 'Innsbruck',         url: 'https://www.innsbruck-tourismus.at/' },
  { datei: 'kaino.png',            name: 'Kaino',             url: 'https://kaino.io/de/' },
  { datei: 'landhaus-daham.png',   name: 'Landhaus Daham',    url: 'https://www.apart-ischgl.at/' },
  { datei: 'physio-telfs.png',     name: 'Physio Telfs',      url: 'https://www.physio-in-telfs.at/' },
  { datei: 'red-bull.png',         name: 'Red Bull',          url: 'https://www.redbull.com/at-de/' },
  { datei: 'sport4all.png',        name: 'Sport4All',         url: 'https://www.sport-4-all.at/' },
  { datei: 'tdm.png',              name: 'TDM',               url: 'https://tdm-marketing.at/' },
  { datei: 'tirol.png',            name: 'Tirol',             url: 'https://www.tirolwerbung.at/' },
  { datei: 'tza.png',              name: 'TZA Physio',        url: 'https://www.tzaphysio.at/' },
  { datei: 'zirments.png',         name: 'Zirments',          url: 'https://www.zirments.at/' }
];

/* Matomo — sobald eine Instanz vorhanden ist, hier eintragen.
   Leer lassen heisst: es wird kein Analyse-Skript geladen. */
var MATOMO_URL = '';
var MATOMO_SITE_ID = '1';

var CONSENT_KEY = 'kairos-cookie-consent';

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Fenster-Steuerung ------------------------------------------
     Eine Stelle fuer alle Dialoge: Impressum, AGB, Datenschutz, Leistungs-
     text, Produktgrossansicht und Cookie-Hinweis. Sie sperrt das Scrollen,
     setzt den Fokus hinein, haelt den Tabulator im Fenster und gibt den
     Fokus beim Schliessen an das ausloesende Element zurueck.
     -------------------------------------------------------------------- */

  var FOKUSSIERBAR = 'a[href], button:not([disabled]), input:not([disabled]),'
                   + ' textarea:not([disabled]), select:not([disabled]),'
                   + ' [tabindex]:not([tabindex="-1"])';
  var letzterAusloeser = null;

  var fensterOffen = function () {
    return document.querySelector('.overlay.offen, .grossansicht.offen, .cookie-schicht.offen');
  };

  var pruefeSperre = function () {
    document.body.classList.toggle('fenster-offen', !!fensterOffen());
  };

  /* Nur sichtbare Bedienelemente zaehlen */
  var tabbare = function (el) {
    return Array.prototype.filter.call(el.querySelectorAll(FOKUSSIERBAR), function (n) {
      return !n.hidden && (n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    });
  };

  var oeffneFenster = function (el, ausloeser) {
    if (!el) return;
    var vorher = fensterOffen();
    // Nur beim ersten Fenster merken, damit der Fokus am Ende auf der Seite landet
    if (!vorher) letzterAusloeser = ausloeser || document.activeElement;
    if (vorher && vorher !== el) vorher.classList.remove('offen');
    el.classList.add('offen');
    pruefeSperre();
    var ziel = tabbare(el)[0];
    if (ziel) ziel.focus();
  };

  var schliesseFenster = function (el) {
    if (!el) return;
    el.classList.remove('offen');
    pruefeSperre();
    if (letzterAusloeser && letzterAusloeser !== document.body
        && document.contains(letzterAusloeser)) {
      letzterAusloeser.focus();
    }
    letzterAusloeser = null;
  };

  document.addEventListener('keydown', function (e) {
    var el = fensterOffen();
    if (!el) return;

    // Der Cookie-Hinweis wird nur ueber seine Schaltflaechen geschlossen
    if (e.key === 'Escape' && !el.classList.contains('cookie-schicht')) {
      e.preventDefault();
      schliesseFenster(el);
      return;
    }

    if (e.key !== 'Tab') return;

    var liste = tabbare(el);
    if (!liste.length) { e.preventDefault(); return; }
    var erster = liste[0], letzter = liste[liste.length - 1];

    if (!el.contains(document.activeElement)) {
      e.preventDefault();
      erster.focus();
    } else if (e.shiftKey && document.activeElement === erster) {
      e.preventDefault();
      letzter.focus();
    } else if (!e.shiftKey && document.activeElement === letzter) {
      e.preventDefault();
      erster.focus();
    }
  });

  /* ---------- Partner-Laufband aufbauen ---------------------------------- */

  var laufband = document.querySelector('.laufband');
  if (laufband) {
    // Liste zweimal ausgeben, damit die Schleife nahtlos laeuft.
    // Logos mit Adresse werden Links, die uebrigen bleiben reine Bilder.
    var reihe = PARTNER.concat(PARTNER).map(function (p, i) {
      var maske = 'mask-image:url(assets/partners/' + p.datei
                + ');-webkit-mask-image:url(assets/partners/' + p.datei + ')';
      // Die zweite Haelfte ist nur eine Kopie fuer die Endlosschleife und
      // wird vor Screenreadern und dem Tabulator versteckt.
      var kopie = i >= PARTNER.length;

      if (p.url) {
        return '<a class="partner-logo" href="' + p.url + '" target="_blank" rel="noopener"'
             + (kopie ? ' tabindex="-1" aria-hidden="true"' : '')
             + ' title="' + p.name + '" aria-label="' + p.name + ' — Website öffnen"'
             + ' style="' + maske + '"></a>';
      }
      return '<div class="partner-logo" role="img" title="' + p.name + '"'
           + (kopie ? ' aria-hidden="true"' : ' aria-label="' + p.name + '"')
           + ' style="' + maske + '"></div>';
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
    var buehne = document.querySelector('.vitrine-buehne');
    var oeffneGross = function () { oeffneFenster(gross, buehne); };
    var schliesseGross = function () { schliesseFenster(gross); };

    buehne.addEventListener('click', oeffneGross);
    buehne.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      oeffneGross();
    });
    gross.addEventListener('click', function (e) { if (e.target === gross) schliesseGross(); });
    gross.querySelectorAll('[data-schliessen]').forEach(function (b) {
      b.addEventListener('click', schliesseGross);
    });

    // Blaettern mit den Pfeiltasten; Escape schliesst die Fenster-Steuerung
    document.addEventListener('keydown', function (e) {
      if (!gross.classList.contains('offen')) return;
      if (e.key === 'ArrowRight') zeige(aktuell + 1);
      else if (e.key === 'ArrowLeft') zeige(aktuell - 1);
    });
  }

  /* ---------- 4. Leistungen: Klick oeffnet den Text im Fenster ------------ */

  var leistungen     = document.querySelectorAll('.leistung');
  var lFenster       = document.getElementById('leistung-fenster');

  if (lFenster) {
    var lTitel = lFenster.querySelector('.overlay-kopf h2');
    var lText  = lFenster.querySelector('.leistung-fenster-text');
    var lWorte = lFenster.querySelector('.leistung-fenster-stichworte');
    var lLink  = lFenster.querySelector('.leistung-fenster-link');

    leistungen.forEach(function (el) {
      var oeffne = function (e) {
        // Der Show-Room-Link in der Kachel bleibt ein normaler Link
        if (e.target.closest('.leistung-link')) return;

        lTitel.textContent = el.querySelector('.leistung-titel h3').textContent;

        /* Der Text der Kachel besteht aus Beschreibung, Leerzeile, Stichworten */
        var teile = el.querySelector('.leistung-text p').textContent.split(/\n\s*\n/);
        lText.textContent = teile[0].trim();
        if (teile.length > 1 && teile[1].trim()) {
          lWorte.textContent = teile[1].trim();
          lWorte.hidden = false;
        } else {
          lWorte.hidden = true;
        }

        var kachelLink = el.querySelector('.leistung-link');
        if (kachelLink) {
          lLink.href = kachelLink.href;
          lLink.hidden = false;
        } else {
          lLink.hidden = true;
        }

        oeffneFenster(lFenster, el);
      };

      el.addEventListener('click', oeffne);

      // Mit Eingabe- oder Leertaste bedienbar
      el.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        if (e.target.closest('.leistung-link')) return;
        e.preventDefault();
        oeffne(e);
      });
    });
  }

  /* ---------- 5. Overlays ------------------------------------------------- */

  document.querySelectorAll('[data-oeffnen]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      oeffneFenster(document.getElementById(b.dataset.oeffnen), b);
    });
  });

  document.querySelectorAll('.overlay').forEach(function (o) {
    o.addEventListener('click', function (e) {
      if (e.target === o) schliesseFenster(o);
    });
    o.querySelectorAll('[data-schliessen]').forEach(function (b) {
      b.addEventListener('click', function () { schliesseFenster(o); });
    });
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
    document.body.classList.remove('fenster-offen');
    if (letzterAusloeser && letzterAusloeser !== document.body
        && document.contains(letzterAusloeser)) {
      letzterAusloeser.focus();
    }
    letzterAusloeser = null;
    if (statistik) ladeMatomo();
  };
  if (cookieSchicht) {
    statistikOption.addEventListener('click', function () {
      var an = statistikOption.classList.toggle('an');
      statistikOption.setAttribute('aria-pressed', an ? 'true' : 'false');
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
        oeffneFenster(cookieSchicht, b);
      });
    });

    // Gespeicherte Entscheidung wiederherstellen
    var gespeichert = null;
    try { gespeichert = JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch (e) {}

    if (gespeichert) {
      if (gespeichert.analytics) {
        statistikOption.classList.add('an');
        statistikOption.setAttribute('aria-pressed', 'true');
        ladeMatomo();
      }
    } else {
      oeffneFenster(cookieSchicht, null);
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
      var offen = plus.classList.toggle('offen');
      schnell.classList.toggle('offen', offen);
      plus.setAttribute('aria-expanded', offen ? 'true' : 'false');
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
