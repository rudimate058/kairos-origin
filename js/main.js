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

/* Der Basispfad wird aus dem eigenen Skriptpfad gelesen: liegt die Seite in
   einem Unterordner (z. B. /en/), steht hier '../' und Bilder und Logos
   finden ihren Weg. Kein Inline-Skript nötig — das bleibt sicher. */
var BASIS = (function () {
  if (window.SEITEN_BASIS) return window.SEITEN_BASIS;
  var s = document.currentScript;
  var pfad = s && s.getAttribute('src');
  if (!pfad) return '';
  return pfad.replace(/js\/main\.js.*$/, '');
})();

/* Bildbeschriftung fuer Suchmaschinen und Screenreader:
   "Event-Becher – Drinkware fuer Tirol Werbung". Mehrfachkunden werden auf
   den ersten gekuerzt, damit der Text lesbar bleibt. */
function altText(p) {
  var kunde = String(p.kunde || '').split(' · ')[0].trim();
  var teile = [p.name, p.kategorie];
  var text = teile.filter(Boolean).join(' – ');
  return kunde ? text + ' · ' + kunde : text;
}

var PRODUKTE = [
  { bild: 'becher.webp', kategorie: 'Drinkware', name: 'Event-Becher', kunde: 'WMATRC 2023 · Tirol Werbung · Crankworx Innsbruck · Tirol Werbung Olympia 2024', text: 'Mehrwegbecher, die Marken sichtbar machen und Events begleiten. Individuell abgestimmt auf Design, Anlass und Marke – in verschiedenen Formen und Größen, veredelt im Digital- oder Siebdruck.' },
  { bild: 'edelstahlflasche.webp', kategorie: 'Drinkware', name: 'Edelstahlflasche', kunde: 'Kairos Origin Give Away', text: 'Hochwertige Edelstahlflasche für einen Markenauftritt, der bleibt. Doppelwandig isoliert, hält 12 Stunden kalt oder warm und lässt sich per Lasergravur oder Digitaldruck individuell veredeln.' },
  { bild: 'zirments-flasche.webp', kategorie: 'Drinkware', name: 'Trinkflasche', kunde: 'Zirments', text: 'Funktion trifft auf klares Branding: transparente Trinkflasche mit hochwertigem Edelstahldeckel und vertikal platziertem Markenauftritt. Veredelt im 1c-Siebdruck.' },
  { bild: 'physio-flasche.webp', kategorie: 'Drinkware', name: 'Sportflasche', kunde: 'Physio Telfs · fit&sun', text: 'Sportlich, funktional und individuell gebrandet. Die Sportflasche ist in verschiedenen Farben und Größen erhältlich und wird passend zur Marke im Siebdruck veredelt.' },
  { bild: 'flachmann.webp', kategorie: 'Gadgets', name: 'Flachmann Leder', kunde: 'Individuell veredelt', text: 'Ein besonderes Produkt für besondere Momente. Flachmann mit hochwertiger, genähter Lederhülle – ideal für exklusive Geschenke und Kleinserien. Individuell per Gravur veredelt.' },
  { bild: 'elyo-cap.webp', kategorie: 'Caps', name: 'Snapback Cap', kunde: 'Elyo Sports', text: 'Premium Snapback mit perforierten Seitenpanels und markanter Stickerei. Ein hochwertiges Accessoire, das Corporate Wear zum sichtbaren Teil der Marke macht.' },
  { bild: 'army-cap.webp', kategorie: 'Caps', name: 'Army Cap', kunde: 'Innsbruck Tourismus · Tirol Werbung', text: 'Markenauftritt mit Charakter: sandfarbene Army Cap mit kontrastreicher Stickerei für den Kletterweltcup in Innsbruck. Funktional, hochwertig und aufmerksamkeitsstark.' },
  { bild: 'tshirt-tirol.webp', kategorie: 'Textil', name: 'T-Shirt', kunde: 'Tirol Werbung', text: 'Ein Shirt wird zur mobilen Markenfläche. Großflächiges Rückenmotiv im Siebdruck sorgt für Sichtbarkeit – umgesetzt genau so, wie es zur Marke passt. Siebdruck, DTF oder Stickerei – wir bringen Ideen auf Textil.' },
  { bild: 'jacke-da.webp', kategorie: 'Textil', name: 'Softshell-Jacke', kunde: 'daEmobil', text: 'Funktionale Teamwear mit hochwertigem Markenauftritt. Leichte Softshell-Jacke mit Strickfutter im Kragen und dezenter Logostickerei – gemacht für einen professionellen Auftritt im Alltag.' },
  { bild: 'poloshirt-da.webp', kategorie: 'Textil', name: 'Poloshirt', kunde: 'Individuelle Corporate Wear', text: 'Dezentes Branding mit Wirkung: hochwertiges Poloshirt mit individueller Logostickerei. Ideal für Messen, Events und den täglichen Markenauftritt.' },
  { bild: 'socken.webp', kategorie: 'Textil', name: 'Radsocken', kunde: 'Physio 1.0 · Cycling Team', text: 'Individuelles Design bis ins Detail. Hochwertige Funktionssocken für das Cycling Team – verschiedene Designs inklusive passender Einzelverpackung.' },
  { bild: 'notizbuch.webp', kategorie: 'Office', name: 'Notizbuch', kunde: 'Red Bull', text: 'Ein alltäglicher Begleiter wird zur Markenfläche. Individuell gestaltetes Notizbuch mit illustriertem Cover für ein internes Format – veredelt nach Wunsch per Digitaldruck, Prägung oder Siebdruck.' },
  { bild: 'kugelschreiber.webp', kategorie: 'Office', name: 'Give Aways', kunde: 'daEmobil', text: 'Kleine Produkte, große Markenwirkung: Softtouch-Kugelschreiber und Pfefferminzdosen als aufmerksamkeitsstarkes Give-away für den Messeauftritt. Individuell gebrandet per Digitaldruck oder Gravur.' },
  { bild: 'powerbank.webp', kategorie: 'Tech', name: 'Powerbank', kunde: 'Red Bull MotoGP Rookies Cup', text: '20 Jahre Rookies Cup – umgesetzt als praktisches Markenprodukt. Magnetische Powerbank mit individuellem Branding im Tampondruck – kompakt, hochwertig und immer dabei.' },
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

/* Beschriftungen, die das Skript selbst setzt */
var ENGLISCH = document.documentElement.lang.slice(0, 2) === 'en';
var WORT = {
  mehr:  ENGLISCH ? 'More'  : 'Mehr',
  seite: ENGLISCH ? 'Page'  : 'Seite'
};

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

  /* ---------- 3. Arbeiten: Kartenraster mit Blaettern -------------------
     Uebersicht zeigt Bild, Kunde, Name und den ersten Satz. Klick auf eine
     Karte oeffnet das Fenster mit grossem Bild und vollem Text.
     -------------------------------------------------------------------- */

  var raster = document.querySelector('.arbeiten-raster');
  var gross  = document.querySelector('.grossansicht');

  if (raster && gross) {
    /* Es steht immer genau eine Reihe: drei Karten am Rechner,
       zwei am Tablet, eine am Handy. */
    var spalten = function () {
      if (window.matchMedia('(max-width: 767px)').matches) return 1;
      if (window.matchMedia('(max-width: 860px)').matches) return 2;
      return 3;
    };
    var PRO_SEITE = spalten();
    var seiten    = Math.ceil(PRODUKTE.length / PRO_SEITE);
    var seite     = 0;
    var aktuell   = 0;

    var anriss = function (text) {
      var punkt = text.search(/[.!?](\s|$)/);
      return punkt > 0 ? text.slice(0, punkt + 1) : text;
    };

    var schutz = function (s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };

    /* Karten einmal bauen, danach nur noch ein- und ausblenden */
    var kartenHtml = '';
    PRODUKTE.forEach(function (p, i) {
      var pfad = BASIS + 'assets/produkte/' + p.bild;
      kartenHtml +=
        '<button type="button" class="arbeit" data-index="' + i + '" aria-haspopup="dialog">' +
          '<span class="arbeit-bild"><img src="' + pfad + '" alt="' + schutz(altText(p)) + '"' +
            (i < 3 ? ' decoding="async">' : ' loading="lazy" decoding="async">') + '</span>' +
          '<span class="arbeit-kunde">' + schutz(p.kunde) + '</span>' +
          '<span class="arbeit-name">' + schutz(p.name) + '</span>' +
          '<span class="arbeit-anriss">' + schutz(anriss(p.text)) + '</span>' +
          '<span class="arbeit-mehr">' + WORT.mehr + ' <em aria-hidden="true">→</em></span>' +
        '</button>';
    });
    raster.innerHTML = kartenHtml;
    var karten = raster.querySelectorAll('.arbeit');

    var punkteFeld = document.querySelector('.arbeiten-punkte');
    var punkte = [];
    var standFeld = document.querySelector('.arbeiten-stand');

    var baueMarken = function () {
      if (!punkteFeld) return;
      var punkteHtml = '';
      for (var n = 0; n < seiten; n++) {
        punkteHtml += '<button type="button" class="arbeiten-punkt" data-seite="' + n +
                      '" aria-label="' + WORT.seite + ' ' + (n + 1) + '"></button>';
      }
      punkteFeld.innerHTML = punkteHtml;
      punkte = Array.prototype.slice.call(punkteFeld.querySelectorAll('.arbeiten-punkt'));
      punkte.forEach(function (b) {
        b.addEventListener('click', function () { zeigeSeite(Number(b.dataset.seite)); });
      });
    };

    var zeigeSeite = function (nr) {
      seite = (nr + seiten) % seiten;
      var von = seite * PRO_SEITE, bis = von + PRO_SEITE;
      karten.forEach(function (k, i) { k.hidden = (i < von || i >= bis); });
      punkte.forEach(function (b, i) { b.classList.toggle('aktiv', i === seite); });
      if (standFeld) standFeld.textContent = (seite + 1) + ' / ' + seiten;
    };

    baueMarken();
    zeigeSeite(0);

    /* Wechselt die Breite, wird die Reihe neu aufgeteilt und die Karte,
       die gerade zu sehen war, bleibt in Sicht. */
    var neuAufteilen = function () {
      var neu = spalten();
      if (neu === PRO_SEITE) return;
      var erste = seite * PRO_SEITE;
      PRO_SEITE = neu;
      seiten = Math.ceil(PRODUKTE.length / PRO_SEITE);
      baueMarken();
      zeigeSeite(Math.floor(erste / PRO_SEITE));
    };
    window.addEventListener('resize', neuAufteilen);
    window.addEventListener('orientationchange', neuAufteilen);

    document.querySelectorAll('[data-seite="vor"]').forEach(function (b) {
      b.addEventListener('click', function () { zeigeSeite(seite + 1); });
    });
    document.querySelectorAll('[data-seite="zurueck"]').forEach(function (b) {
      b.addEventListener('click', function () { zeigeSeite(seite - 1); });
    });

    /* ----- Fenster mit grossem Bild und vollem Text ----- */

    var grossBilder = document.querySelector('.grossansicht-bild');
    var grossHtml = '';
    PRODUKTE.forEach(function (p) {
      grossHtml += '<img loading="lazy" decoding="async" src="' + BASIS + 'assets/produkte/' + p.bild +
                   '" alt="' + schutz(altText(p)) + '">';
    });
    grossBilder.innerHTML = grossHtml;
    var grossListe  = grossBilder.querySelectorAll('img');
    var elGrossKude = document.querySelector('.grossansicht-kopf .kunde');
    var elGrossName = document.querySelector('.grossansicht-kopf .name');
    var elGrossText = document.querySelector('.grossansicht-text');
    var elZaehler   = document.querySelectorAll('.vitrine-zaehler');

    var zweistellig = function (n) { return String(n + 1).padStart(2, '0'); };

    var zeige = function (i) {
      aktuell = (i + PRODUKTE.length) % PRODUKTE.length;
      var p = PRODUKTE[aktuell];
      grossListe.forEach(function (img, k) { img.classList.toggle('aktiv', k === aktuell); });
      elGrossKude.textContent = p.kunde;
      elGrossName.textContent = p.name;
      if (elGrossText) elGrossText.textContent = p.text;
      var stand = zweistellig(aktuell) + ' / ' + zweistellig(PRODUKTE.length - 1);
      elZaehler.forEach(function (z) { z.textContent = stand; });
      // Die Uebersicht springt auf die Seite des gezeigten Produkts mit
      var zielSeite = Math.floor(aktuell / PRO_SEITE);
      if (zielSeite !== seite) zeigeSeite(zielSeite);
    };

    var schliesseGross = function () { schliesseFenster(gross); };

    karten.forEach(function (k) {
      k.addEventListener('click', function () {
        zeige(Number(k.dataset.index));
        oeffneFenster(gross, k);
      });
    });

    gross.addEventListener('click', function (ev) { if (ev.target === gross) schliesseGross(); });
    gross.querySelectorAll('[data-schliessen]').forEach(function (b) {
      b.addEventListener('click', schliesseGross);
    });
    document.querySelectorAll('[data-vitrine="vor"]').forEach(function (b) {
      b.addEventListener('click', function () { zeige(aktuell + 1); });
    });
    document.querySelectorAll('[data-vitrine="zurueck"]').forEach(function (b) {
      b.addEventListener('click', function () { zeige(aktuell - 1); });
    });

    document.addEventListener('keydown', function (ev) {
      if (!gross.classList.contains('offen')) return;
      if (ev.key === 'ArrowRight') zeige(aktuell + 1);
      else if (ev.key === 'ArrowLeft') zeige(aktuell - 1);
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
     ACHTUNG: SCHAUMODUS. Das Formular prueft die Eingaben, verschickt aber
     nichts — es zeigt stattdessen einen Hinweis mit E-Mail und WhatsApp.
     Nach dem Umzug auf eigenes Hosting mit PHP: FORMULAR_SCHAUMODUS auf
     false setzen und im HTML action="kontakt.php" method="post" ergaenzen. */
  (function () {
    var FORMULAR_SCHAUMODUS = true;

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

    /* Kommt der Besucher mit ?fehler=… vom Server zurueck, steht hier der
       Grund. Sichtbar wird das erst, wenn das Formular scharf geschaltet ist. */
    (function () {
      var code = new URLSearchParams(location.search).get('fehler');
      if (!code || !meldung) return;
      var texte = englisch ? {
        '1': 'Some details were missing. Please check the fields and send again.',
        '2': 'The message could not be sent. Please write to <a href="mailto:office@kairos-origin.com">office@kairos-origin.com</a>.',
        '3': 'Too many messages in a short time. Please try again later or write to <a href="mailto:office@kairos-origin.com">office@kairos-origin.com</a>.'
      } : {
        '1': 'Es haben noch Angaben gefehlt. Bitte prüfen Sie die Felder und senden Sie erneut.',
        '2': 'Die Nachricht konnte nicht versendet werden. Bitte schreiben Sie an <a href="mailto:office@kairos-origin.com">office@kairos-origin.com</a>.',
        '3': 'Zu viele Nachrichten in kurzer Zeit. Bitte später erneut versuchen oder an <a href="mailto:office@kairos-origin.com">office@kairos-origin.com</a> schreiben.'
      };
      meldung.innerHTML = texte[code] || texte['1'];
      meldung.hidden = false;
      if (window.history.replaceState) {
        window.history.replaceState({}, '', location.pathname + location.hash);
      }
    }());

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
