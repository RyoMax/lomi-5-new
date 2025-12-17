## 1️⃣ `<head>` – Optimierungspotenzial
Title

Aktuell:
```
<title>LOMI5 | Über | Hawaiianische Massage in der Uckermark</title>
```

✅ Gut: Brand + Ortsbezug
⚠️ Verbesserung: „Über mich / Über Lomi5“ ist nicht keyword-optimiert.

Empfohlene Version:
```
<title>Über Lomi5 – Hawaiianische Lomi Lomi Massage in der Uckermark</title>
```

Keyword: „Lomi Lomi Massage Uckermark“

Nutzer weiß sofort, worum es geht

**Meta Description**

Aktuell generisch wie auf allen Seiten → Duplicate Content

Empfohlene Version:
```
<meta name="description" content="Erfahre mehr über Lomi5, die hawaiianische Lomi Lomi Massage in der Uckermark. Lerne Henriette kennen, ihre Philosophie und wie du bei ihr Ruhe, Entspannung und Wohlbefinden findest.">
```

Erzählt, wer & was

Enthält relevante Keywords

## 2️⃣ Headings – H1 fehlt völlig 🚨
Aktuell

- H2 für „Über Lomi5“
- H2 für „Über mich“
- H3 für „Willkommen bei dir!“

⚠️ SEO-Regel: Jede Seite braucht 1× H1 (primäres Thema)

H2/H3 für Unterabschnitte

Empfehlung:
```
<h1>Über Lomi5 – Hawaiianische Lomi Lomi Massage in der Uckermark</h1>

<section class="about-lomi">
  <h2>Die hawaiianische Lomi-Lomi-Massage</h2>
</section>

<section class="about-henriette">
  <h2>Über mich – Henriette Burkard</h2>
  <h3>Willkommen bei dir!</h3>
</section>
```

- H1 = Suchmaschinen-Hauptfokus
- H2 = Hauptabschnitte
- H3 = Unterüberschrift / Abschluss

## 3️⃣ Text & E-E-A-T
Positiv

Storytelling über Henriette → Expertenstatus sichtbar

Beruflicher Hintergrund + lokale Verwurzelung → Vertrauen & Local SEO

Detailinfos über Massage → Expertise sichtbar

Verbesserungsvorschläge:

Personen-Schema einfügen für Henriette → Google erkennt echte Person, Expertise

„Nicht medizinisch“ Hinweis kann als **`<aside>`** oder **`<small>`** semantisch markiert werden

Beispiel Structured Data für Autorin:
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Henriette Burkard",
  "jobTitle": "Lomi Lomi Masseurin",
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Lomi5"
  },
  "birthDate": "1972-08-01",
  "sameAs": []
}
</script>
```
## 4️⃣ Interne Verlinkung
Aktuell

Menü ist sauber

Footer „Über Lomi5“ Link = # → sollte auf About-Seite zeigen

Kein interner Link zu Angebots- oder Kontaktseite im Content

Empfehlung

Footer:
```
<li><strong><a href="./about.html">Über Lomi5</a></strong></li>
```

Content-Link: „Sieh dir unser Massageangebot an“ → angebot.html

CTA zum Terminbuchung am Ende der About-Seite → Conversion

## 5️⃣ Bilder & Alt-Texte
```
<div class="image"></div> → vermutlich Hintergrundbilder
⚠️ SEO-technisch wertlos → keine Alt-Texte

Empfehlung: <img src="..." alt="Henriette Burkard Lomi Lomi Masseurin in der Uckermark">

Bei dekorativen BG-Bildern <div> + CSS okay, aber Header/Portraits sollten <img> mit Alt haben