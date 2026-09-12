/* ==========================================================================
   Kairos Origin — Skripte
   Inhalt:
     1. Produkte (Bilder hier austauschen)
     2. Partner-Logos
     3. Produktvitrine
     4. Leistungen aufklappen
     5. Overlays (Impressum, Datenschutz)
     6. Kontaktformular (Schaumodus)
     7. Schaltflaechen unten rechts
   ========================================================================== */

/* ---------- 1. Produkte ---------------------------------------------------
   Bild austauschen: neue Datei in assets/produkte/ legen und den Dateinamen
   unter "bild" eintragen. Reihenfolge dieser Liste = Reihenfolge auf der Seite.
   -------------------------------------------------------------------------- */

/* Liegt die Seite in einem Unterordner (z. B. /en/), setzt die Seite
   window.SEITEN_BASIS = '../' — dann finden Bilder und Logos ihren Weg. */
var BASIS = window.SEITEN_BASIS || '';

var PRODUKTE = [
  { bild: 'becher.webp',            kategorie: 'Drinkware', name: 'Event-Becher',        kunde: 'Tirol · WMTRC',                     text: 'Mehrweg-Becher in drei Motiven für die WM-Arena: Sourcing, Motivvergabe und Anlieferung passend zum Eventstart.' },
  { bild: 'edelstahlflasche.webp',  kategorie: 'Drinkware', name: 'Edelstahlflasche',    kunde: 'Kairos Origin',                     text: 'Doppelwandige Flasche in Pfirsich mit metallischem Logodruck – unser Give-away für Kunden und Partner.' },
  { bild: 'zirments-flasche.webp',  kategorie: 'Drinkware', name: 'Trinkflasche',        kunde: 'Zirments',                          text: 'Klare Tritan-Flasche mit Edelstahldeckel: Claim und Logo vertikal gesetzt, damit die Marke von jeder Seite lesbar bleibt.' },
  { bild: 'physio-flasche.webp',    kategorie: 'Drinkware', name: 'Sportflasche',        kunde: 'Physio Telfs · fit&sun',            text: 'Schwarze Sportflasche für zwei Marken auf einem Produkt – Aufteilung der Druckflächen gemeinsam mit beiden Partnern abgestimmt.' },
  { bild: 'flachmann.webp',         kategorie: 'Gadgets',   name: 'Flachmann Leder',     kunde: 'Kairos Origin',                     text: 'Flachmann mit genähter Lederhülle in Grau und Cognac, Logo als Blindprägung – Kleinserie für besondere Anlässe.' },
  { bild: 'elyo-cap.webp',          kategorie: 'Caps',      name: 'Snapback Cap',        kunde: 'Elyo Sports',                       text: 'Weiße Snapback mit perforierten Seitenpanels und türkiser Stickerei, Musterfreigabe bis Auslieferung begleitet.' },
  { bild: 'army-cap.webp',          kategorie: 'Caps',      name: 'Army Cap',            kunde: 'Innsbruck Region · Tirol',          text: 'Army Cap in Sand mit roter Stickerei: Karabiner-Motiv und zwei Logos auf engem Raum sauber ausbalanciert.' },
  { bild: 'tshirt-tirol.webp',      kategorie: 'Textil',    name: 'T-Shirt Abenteuerlust', kunde: 'Tirol',                           text: 'Shirt mit großflächigem Rückenmotiv, kombiniert aus Druck und Stickerei – Textilauswahl, Musterung und Qualitätskontrolle inklusive.' },
  { bild: 'jacke-da.webp',          kategorie: 'Textil',    name: 'Softshell-Jacke',     kunde: 'da emobil',                         text: 'Leichte Softshell mit Strickfutter im Kragen und Logostickerei auf der Brust – Teamwear für den Außendienst.' },
  { bild: 'poloshirt-da.webp',      kategorie: 'Textil',    name: 'Poloshirt',           kunde: 'da emobil',                         text: 'Poloshirt von Cutter & Buck mit dezenter Logostickerei: die zurückhaltende Variante zur Jacke für Messe und Büro.' },
  { bild: 'socken.webp',            kategorie: 'Textil',    name: 'Sportsocken',         kunde: 'l.o · MB Wear',                     text: 'Funktionssocken in drei Farbstellungen, inklusive Verpackung mit Marken-Prägung.' },
  { bild: 'notizbuch.webp',         kategorie: 'Office',    name: 'Notizbuch',           kunde: 'Red Bull',                          text: 'Notizbuch mit illustriertem Cover für ein internes Format – Illustration, Papierwahl und Bindung aus einer Hand.' },
  { bild: 'kugelschreiber.webp',    kategorie: 'Office',    name: 'Pen & Mint-Dose',     kunde: 'da emobil',                         text: 'Set aus Softtouch-Kugelschreiber mit Stylus und Mint-Dosen im identischen Orange – der Klassiker für Messetische.' },
  { bild: 'powerbank.webp',         kategorie: 'Tech',      name: 'Powerbank',           kunde: 'Red Bull MotoGP Rookies Cup',       text: 'Magnetische Powerbank im Serien-Design, produziert zum 20-Jahr-Jubiläum des Rookies Cup.' },
  { bild: 'kartenspiel.webp',       kategorie: 'Gadgets',   name: 'Kartenspiel',         kunde: 'l.o',                               text: 'Kartenspiel mit Koordinaten des Standorts auf jeder Karte – von der Gestaltung bis zur fertigen Schachtel.' },
  { bild: 'golfbaelle.webp',        kategorie: 'Gadgets',   name: 'Golfbälle',           kunde: 'Tirol',                             text: 'Bedruckte Golfbälle in Rot und Weiß samt passender Verpackung, abgestimmt auf den Markenauftritt.' },
  { bild: 'jausenbox.webp',         kategorie: 'Gadgets',   name: 'Jausenbox',           kunde: 'Tirol',                             text: 'Alu-Jausenbox in Markenrot mit geprägtem Logo und Trennsteg – robustes Give-away mit Alltagsnutzen.' }
];

/* ---------- 2. Partner-Logos ----------------------------------------------
   Logo austauschen: PNG mit transparentem Hintergrund in assets/partners/
   legen und hier Dateiname + Name eintragen.
   "url" ist optional — ist eine Adresse eingetragen, wird das Logo anklickbar.
   -------------------------------------------------------------------------- */

var PARTNER = [
  { datei: 'asvoe.webp',            name: 'ASVÖ',              url: 'https://www.asvoe.tirol/' },
  { datei: 'blumen-calovini.webp',  name: 'Blumen Calovini',   url: 'https://blumen-calovini.at/' },
  { datei: 'chaka2.webp',           name: 'chaka2',            url: 'https://www.chaka2.com/de/' },
  { datei: 'chasa-patria.webp',     name: 'Chasa Patria',      url: 'https://www.chasa-patria.at/' },
  { datei: 'da-emobil.webp',        name: 'da emobil',         url: 'https://www.da-emobil.com' },
  { datei: 'edelstein.webp',        name: 'Edelsten Bikes',    url: 'https://edelstenbikes.com/' },
  { datei: 'einspunktnull.webp',    name: 'einspunktnull',     url: 'https://physio-einspunktnull.com/' },
  { datei: 'innsbruck.webp',        name: 'Innsbruck',         url: 'https://www.innsbruck-tourismus.at/' },
  { datei: 'kaino.webp',            name: 'Kaino',             url: 'https://kaino.io/de/' },
  { datei: 'landhaus-daham.webp',   name: 'Landhaus Daham',    url: 'https://www.apart-ischgl.at/' },
  { datei: 'physio-telfs.webp',     name: 'Physio Telfs',      url: 'https://www.physio-in-telfs.at/' },
  { datei: 'red-bull.webp',         name: 'Red Bull',          url: 'https://www.redbull.com/at-de/' },
  { datei: 'sport4all.webp',        name: 'Sport4All',         url: 'https://www.sport-4-all.at/' },
  { datei: 'tdm.webp',              name: 'TDM',               url: 'https://tdm-marketing.at/' },
  { datei: 'tirol.webp',            name: 'Tirol',             url: 'https://www.tirolwerbung.at/' },
  { datei: 'tza.webp',              name: 'TZA Physio',        url: 'https://www.tzaphysio.at/' },
  { datei: 'zirments.webp',         name: 'Zirments',          url: 'https://www.zirments.at/' }
];

/* Englische Fassung: /en/ laedt js/texte-en.js, das PRODUKTE_EN setzt. */
if (window.PRODUKTE_EN && document.documentElement.lang.slice(0, 2) === 'en') {
  PRODUKTE = window.PRODUKTE_EN;
}

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Vollbildmenue ----------------------------------------------
     Der Knopf oben rechts oeffnet die vier Seitenbereiche gross auf dem
     ganzen Bildschirm. Schliessen: Kreuz, Escape, Klick auf den Grund oder
     Klick auf einen Menuepunkt. */
  (function () {
    var auf  = document.getElementById('menue-auf');
    var auf2 = document.getElementById('menue-auf-2');
    var zu   = document.getElementById('menue-zu');
    var voll = document.getElementById('vollmenue');
    if (!auf || !zu || !voll) return;

    var punkte = voll.querySelectorAll('.vollmenue-liste a');
    var zuletzt = null;

    function oeffnen() {
      zuletzt = document.activeElement;
      voll.hidden = false;
      /* ein Bildaufbau warten, damit das Einblenden sichtbar laeuft */
      requestAnimationFrame(function () { voll.dataset.offen = 'ja'; });
      auf.setAttribute('aria-expanded', 'true');
      if (auf2) { auf2.setAttribute('aria-expanded', 'true'); auf2.dataset.sichtbar = 'nein'; }
      document.body.style.overflow = 'hidden';
      setTimeout(function () { zu.focus(); }, 80);
    }

    function schliessen() {
      voll.dataset.offen = 'nein';
      auf.setAttribute('aria-expanded', 'false');
      if (auf2) auf2.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(function () { voll.hidden = true; }, 450);
      if (zuletzt && zuletzt.focus) zuletzt.focus();
    }

    auf.addEventListener('click', oeffnen);
    if (auf2) auf2.addEventListener('click', oeffnen);

    /* Der mitfahrende Knopf erscheint, sobald der Kopfbereich weg ist. */
    if (auf2) {
      var kopf = document.querySelector('.hero-inhalt') || document.querySelector('.hero');
      var pruefen = function () {
        var grenze = kopf ? kopf.offsetHeight - 90 : 480;
        var zeigen = window.scrollY > grenze && voll.dataset.offen !== 'ja';
        auf2.dataset.sichtbar = zeigen ? 'ja' : 'nein';
      };
      window.addEventListener('scroll', pruefen, { passive: true });
      window.addEventListener('resize', pruefen);
      pruefen();
      voll.addEventListener('transitionend', pruefen);
    }
    zu.addEventListener('click', schliessen);
    voll.addEventListener('click', function (e) { if (e.target === voll) schliessen(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && voll.dataset.offen === 'ja') schliessen();
    });
    Array.prototype.forEach.call(punkte, function (p) {
      p.addEventListener('click', schliessen);
    });
  }());


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
    return document.querySelector('.overlay.offen, .grossansicht.offen');
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

    if (e.key === 'Escape') {
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
      var maske = 'mask-image:url(' + BASIS + 'assets/partners/' + p.datei
                + ');-webkit-mask-image:url(' + BASIS + 'assets/partners/' + p.datei + ')';
      // Die zweite Haelfte ist nur eine Kopie fuer die Endlosschleife und
      // wird vor Screenreadern und dem Tabulator versteckt.
      var kopie = i >= PARTNER.length;

      if (p.url) {
        return '<a class="partner-logo" href="' + p.url + '" target="_blank" rel="noopener" data-datei="' + p.datei + '"'
             + (kopie ? ' tabindex="-1" aria-hidden="true"' : '')
             + ' title="' + p.name + '" aria-label="' + p.name + ' — Website öffnen"'
             + ' style="' + maske + '"></a>';
      }
      return '<div class="partner-logo" role="img" data-datei="' + p.datei + '" title="' + p.name + '"'
           + (kopie ? ' aria-hidden="true"' : ' aria-label="' + p.name + '"')
           + ' style="' + maske + '"></div>';
    }).join('');
    laufband.innerHTML = reihe;

    /* Jedes Logo auf seine echte Form bringen, damit die Luft zwischen den
       Logos ueberall gleich gross wirkt (gleiche Hoehe, Breite nach Seitenverhaeltnis). */
    PARTNER.forEach(function (p) {
      var probe = new Image();
      probe.onload = function () {
        if (!probe.naturalHeight) return;
        var v = probe.naturalWidth / probe.naturalHeight;
        var felder = laufband.querySelectorAll('[data-datei="' + p.datei + '"]');
        Array.prototype.forEach.call(felder, function (el) {
          var h = el.getBoundingClientRect().height;
          if (h) el.style.width = Math.round(h * v) + 'px';
        });
      };
      probe.src = BASIS + 'assets/partners/' + p.datei;
    });
  }

  /* ---------- 3. Produktvitrine ------------------------------------------ */

  var bildfeld    = document.querySelector('.vitrine-bildfeld');
  var miniaturen  = document.querySelector('.miniaturen');
  var grossBilder = document.querySelector('.grossansicht-bild');
  var aktuell     = 0;

  if (bildfeld && miniaturen && grossBilder) {
    var kleinHtml = '', miniHtml = '', grossHtml = '';

    PRODUKTE.forEach(function (p, i) {
      var pfad = BASIS + 'assets/produkte/' + p.bild;
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

  /* ---------- 6. Kontaktformular ------------------------------------------
     Das Formular prueft Sicherheitsfrage und Pflichtfelder und sendet dann
     an die im HTML eingetragene Adresse (FormSubmit). Nach dem Absenden
     leitet FormSubmit auf danke.html weiter.

     SCHAUMODUS wieder einschalten (Formular sendet nichts, zeigt nur einen
     Hinweis): FORMULAR_SCHAUMODUS auf true setzen. */
  (function () {
    var FORMULAR_SCHAUMODUS = false;

    var form = document.getElementById('kontaktformular');
    if (!form) return;

    var aufgabe  = document.getElementById('captcha-aufgabe');
    var antwort  = document.getElementById('captcha-antwort');
    var hinweis  = document.getElementById('captcha-hinweis');
    var meldung  = document.getElementById('formular-meldung');
    var neu      = document.getElementById('captcha-neu');
    var englisch = document.documentElement.lang.slice(0, 2) === 'en';
    var ergebnis = 0;

    function neueAufgabe() {
      var a = Math.floor(Math.random() * 8) + 2;
      var b = Math.floor(Math.random() * 8) + 2;
      ergebnis = a + b;
      aufgabe.textContent = a + ' + ' + b + ' =';
      antwort.value = '';
      antwort.classList.remove('fehler');
      hinweis.hidden = true;
    }

    neueAufgabe();
    neu.addEventListener('click', neueAufgabe);

    form.addEventListener('submit', function (e) {
      if (parseInt(antwort.value, 10) !== ergebnis) {
        e.preventDefault();
        antwort.classList.add('fehler');
        hinweis.hidden = false;
        antwort.focus();
        return;
      }
      hinweis.hidden = true;
      antwort.classList.remove('fehler');

      if (!form.checkValidity()) { form.reportValidity(); e.preventDefault(); return; }

      if (FORMULAR_SCHAUMODUS) {
        e.preventDefault();
        meldung.hidden = false;
        meldung.innerHTML = englisch
          ? 'This form is not live yet. Please send your message to '
            + '<a href="mailto:office@kairos-origin.com">office@kairos-origin.com</a> or via '
            + '<a href="https://wa.me/4368110193780" target="_blank" rel="noopener">WhatsApp</a> — we will reply the same day.'
          : 'Das Formular ist noch nicht scharf geschaltet. Schicken Sie Ihre Nachricht bitte an '
            + '<a href="mailto:office@kairos-origin.com">office@kairos-origin.com</a> oder über '
            + '<a href="https://wa.me/4368110193780" target="_blank" rel="noopener">WhatsApp</a> — wir antworten am selben Tag.';
      }
    });
  }());

  /* ---------- 7. Schaltflaechen unten rechts ------------------------------ */

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
