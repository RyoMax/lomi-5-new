Beispiele (empfohlenes Pattern + Fallback)

Preload + onload (häufig verwendet):
media="print" Trick (wenig FOUC, sehr kompatibel):
Beide laden CSS nicht-blockierend; die zweite Variante ist oft stabiler gegen FOUC.

Weitere Performance‑Tipps (relevant für deine Seite)

Critical CSS inline: Extrahiere kritische Styles für Above-the-Fold und binde sie direkt im <head> ein. Restliche CSS non-blocking laden (wie oben). Das reduziert Time to First Meaningful Paint stark.
Minify & gzip/brotli: Kompiliere Sass in eine minifizierte style.css und aktiviere gzip/brotli auf dem Server.
Single CSS-File: Kombiniere CSS (sofern sinnvoll) — weniger Anfragen → schneller.
Preconnect / dns-prefetch: Für Fonts oder externe Ressourcen: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Cache & long-lived cache headers: Setze Cache-Control, damit wiederholte Besuche schnell sind.
Konkrete Empfehlung für dein Projekt

Behalte Sass (Dart Sass) und produziere eine single minified style.css.
Inline einen kleinen Critical-CSS-Block (z. B. Logo, Navigation-Grundlayout).
Lade den Rest per media="print" Trick oder preload + onload (mit noscript Fallback).
Stelle sicher, dass Live Server / Produktion die kompilierte style.css ausliefert und dass du sass --watch scss:css laufen hast.


# Seo 

📌 Content-Tiefe

Google belohnt Inhalte mit:

Mehr Tiefe & Mehrwert

beantworteten Suchabsichten
→ z. B. ein kurzer Abschnitt „Was ist Lomi Lomi?“
→ FAQ-Bereich mit Schema Markup für häufige Fragen zu Massage, Dauer, Preisen etc. 
HarmonWeb

📊 5. Strukturierte Daten (Schema)

Schema Data ist ein moderner SEO-Booster.

Empfohlen:
```
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"["LocalBusiness", "HealthAndBeautyBusiness", "MassageTherapy"]",
  "name":"Lomi5",
  "description": "Hawaiianische Lomi Lomi Massage in Prenzlau und der Uckermark – Entspannung für Körper und Geist."
  "email": "info@lomi5.de",
  "image":"https://lomi5.de/path-to-image.webp",
  "address":{
    "@type":"PostalAddress",
    "streetAddress":"Hirtenende 5",
    "addressLocality":"Biesenbrow",
    "postalCode":"16278",
    "addressCountry":"DE"
  },
  "priceRange": "25€ - 125€",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Massageangebote",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Sanfte Lomi Lomi Ölmassage - 25 min - Rücken, Schultern, Nacken",
        "price": "25.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Sanfte Lomi Lomi Ölmassage - 55 min -Rücken, Schultern, Nacken, Beine, Po",
        "price": "50.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Sanfte Lomi Lomi Ölmassage - 75 min - Ganzer Körper",
        "price": "70.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Intensive Lomi Lomi Ölmassage - 75 min - Ganzer Körper",
        "price": "90.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Intensive Lomi Lomi Ölmassage mit Unterstreichungen - 100 min - Ganzer Körper",
        "price": "125.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
    ]
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "REPLACE_WITH_BOOKING_URL",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/AndroidPlatform",
        "http://schema.org/IPhonePlatform"
      ]
    },
    "name": "Termin buchen"
  }
}
</script>
```

→ Hilft Google, deine lokale Dienstleistung zu verstehen.


## 🔧 Meta Description

Aktuell:
```
<meta name="description"
  content="Lomi5 ist ein Ort der Ruhe und Erholung, in der Stille und Weite der Uckermark (Brandenburg) gelegen">
```

Probleme:

etwas zu kurz

kein klarer Call-to-Action

„Hawaiianische Massage / Lomi Lomi“ fehlt → verschenktes Keyword

Besser (SEO-optimiert):

```
<meta name="description"
  content="Lomi5 – Hawaiianische Lomi Lomi Massage in der Uckermark. Ein Ort der Ruhe, Entspannung und Regeneration. Jetzt Termin buchen & ankommen bei dir.">
```


## Größter SEO-Fehler: Heading-Struktur 🚨
❌ Aktueller Zustand

H1 kommt erst mitten im Content

Mehrere visuelle Überschriften sind nur `<h3>` oder sogar `<p class="h3">`

Google versteht die Seitenhierarchie dadurch nicht korrekt

**Aktuell:**
```
<h3>Willkommen bei dir</h3>
...
<h3>Lomi5 - Willkommen bei dir.</h3>
...
<h1>Hawaiianische Massage in der Uckermark</h1>
```

➡️ Das ist SEO-technisch suboptimal

✅ SEO-Best-Practice (wichtig!)

Regeln:

Genau 1× H1

H1 möglichst weit oben

H2 = Hauptabschnitte

H3 = Unterpunkte

🔧 Konkrete Empfehlung

```
Im <header>:
<h1>Hawaiianische Lomi Lomi Massage in der Uckermark</h1>
<p class="subtitle">Willkommen bei dir</p>

Danach:
<h2>Lomi5 – Ein Ort der Ruhe und Erholung</h2>
<h2>Was ist eine Lomi Lomi Massage?</h2>
<h2>Dein Massageangebot bei Lomi5</h2>
<h2>Über Henriette Burkard</h2>
```

⚠️ Wichtig:
Klassen wie .h3 ersetzen keine echten Headings für SEO.

## Navigation & interne Verlinkung
✅ Gut

Klar strukturierte Navigation

Statische HTML-Links → crawlbar

Keine JS-Links → 👍

🔧 Verbesserung
```
<a class="logo" href="#">
```

➡️ sollte sein:
```
<a class="logo" href="/" aria-label="Zur Startseite">
```

Warum?

`#` ist SEO-technisch nutzlos

`/` stärkt interne Linkstruktur

`aria-label` = Accessibility + SEO-Bonus

## Bilder & Alt-Texte – großes SEO-Potenzial
❌ Problem

Viele Bilder haben:
```
alt=""
```

oder
```
alt="home logo"
```

➡️ Das verschenkt lokales & thematisches Rankingpotenzial

✅ Besser (konkret!):
```
<img src="./img/main/LogoMenu.webp"
     alt="Lomi5 – Hawaiianische Massage in der Uckermark Logo">

<img src="./img/main/IconMassage.webp"
     alt="Hawaiianische Lomi Lomi Massage Entspannung">
```

📈 Alt-Texte sind:

- Ranking-Signal
- Barrierefreiheit
- Bildersuche-Traffic

## Zitat-Sektion (sehr gut, aber semantisch falsch)

Aktuell:
```
<p class="h3">„Seit ich Lomi Lomi Massagen gebe ...“</p>
```

SEO- & HTML-korrekt:

```
<blockquote>
  <p>„Seit ich Lomi Lomi Massagen gebe …“</p>
  <cite>Henriette Burkard, Lomi-Masseurin</cite>
</blockquote>
```

➡️ Google versteht: Zitat + Person (E-E-A-T!)

## Was noch fehlt (aber extrem wertvoll ist)
🔥 Structured Data (LocalBusiness)

Für lokale Dienstleistung ein MUSS.

➡️ Auf die Startseite in den `<head>` oder kurz vor `</body>`:

```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lomi5",
  "description": "Hawaiianische Lomi Lomi Massage in der Uckermark",
  "areaServed": "Uckermark",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DE"
  }
}
</script>
```

**📈 Riesiger Ranking-Hebel für lokale Suchen.**

