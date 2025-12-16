## 1️⃣ `<head>` – Optimierung
Title

Aktuell:
```
<title>LOMI5 | Kontakt & Anfahrt | Hawaiianische Massage in der Uckermark</title>
```

✅ Gut: Brand + Ort + Zweck (Kontakt & Anfahrt)
⚠️ Verbesserung: Keywords stärker auf Lomi Lomi Massage ausrichten

Optimierte Version
```
<title>Kontakt & Anfahrt – Lomi5 Lomi Lomi Massage in der Uckermark</title>
```

Primäre Keywords: „Lomi Lomi Massage Uckermark“, „Kontakt“

- Nutzer & SEO klar
- Meta Description

Aktuell (generisch):
```
<meta name="description" content="Lomi5 ist ein Ort der Ruhe und Erholung, in der Stille und Weite der Uckermark (Brandenburg) gelegen">
```

⚠️ Problem: Duplicate Content, nicht aussagekräftig für Kontakt-Seite

Optimierte Version
```
<meta name="description" content="Kontaktiere Lomi5 in der Uckermark für Lomi Lomi Massagen. Hier findest du Anfahrt, Kontaktformular und alle Informationen zur Terminbuchung.">
```

## 2️⃣ Headings – Struktur prüfen
Aktuell
```
<h1>
  <span>STANDORT UCKERMARK</span> <br>
  Massage in Biesenbrow
</h1>

<h1>Kontakt</h1> <!-- falsch: zweites H1 -->
<h2>Anfahrt</h2>
```

⚠️ Problem: Zwei H1-Tags – SEO-technisch suboptimal.

H1 = Hauptthema der Seite

H2 = Unterabschnitte (Anfahrt, Formular, Öffnungszeiten, etc.)

Optimierungsvorschlag
```
<h1>Kontakt & Anfahrt – Lomi5 Lomi Lomi Massage in Biesenbrow, Uckermark</h1>

<section class="anfahrt">
  <h2>Standort & Anfahrt</h2>
</section>

<section class="kontakt-formular">
  <h2>Kontaktformular</h2>
</section>
```

Eindeutiges H1

H2 für alle Hauptabschnitte

## 3️⃣ Textinhalt & SEO
Positiv:

Adresse & Anfahrt detailliert → gut für Local SEO

Hinweise zu öffentlichen Verkehrsmitteln + Auto + Rad → sehr nutzerfreundlich

Kontaktformular + Email → Conversion

Verbesserungen:

Keywords ergänzen: „Lomi Lomi Massage“, „Entspannung“, „Biesenbrow“

Lokale Erwähnung mehrfach sinnvoll einbauen, z. B.:

„Buche deine Lomi Lomi Massage in Biesenbrow“

„Erlebe Entspannung bei Lomi5 in der Uckermark“

5️⃣ Kontaktformular
Positiv:
- Labels + required korrekt
- Name, E-Mail, Nachricht vorhanden
- Action-Attribut vorhanden (PHP-Skript)

Verbesserungsvorschläge:

- h2 für Formularbereich → klarer Abschnitt
- Schema: ContactPoint hinzufügen, damit Google Telefonnummer/Email erkennt

Beispiel:
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lomi5",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "xxx y",
    "addressLocality": "Biesenbrow",
    "postalCode": "xxxxx",
    "addressRegion": "Brandenburg",
    "addressCountry": "DE"
  },
  "telephone": "+49 xxx xxx",
  "email": "info@xxx.de",
  "openingHours": "Mo-Sa 09:00-20:00"
}
</script>
```

## 6️⃣ Interne Verlinkungen

Aktuell:

- Navigation: HOME, ABOUT, ANGEBOT, KONTAKT
- Footer: Link zu About + Impressum
- Button „ZUM KONTAKTFORMULAR“ → funktioniert ✅

Verbesserung:
- Footer-Link „Kontakt“ sollte auf kontakt.html zeigen (momentan leer)

- Text-CTA im Content: z. B. „Sieh dir auch unser Massageangebot an“ → angebot.html