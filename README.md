# Mamimor — Website

Statische Website für Mamimor (Kue & Catering Khas Manado). Fertig für GitHub Pages.

## Dateien
```
mamimor/
├── index.html              ← Startseite mit Produkten + Kalender + Tentang
├── kontak.html             ← Kontaktseite (WhatsApp + Formular + Instagram)
├── README.md
└── assets/
    ├── style.css           ← Design (Mocha / Gold / Schwarz)
    ├── calendar.js         ← Kalender-Logik (NICHT bearbeiten)
    ├── kalender-data.js    ← HIER die ausgebuchten Tage eintragen
    └── images/
        ├── logo.png
        ├── marmer-cake.jpg
        ├── rollcake.jpg
        ├── mokacake.jpg
        ├── dessert-box.jpg
        ├── dessert-cherry.jpg
        ├── special-cake.jpg
        ├── cookies.jpg
        └── placeholder.svg
```

## Was schon fertig ist
- ✅ Logo, 7 Produktbilder (bereits für Web optimiert)
- ✅ Alle Produkte: Cakes, Cookies, Catering Manado, Snacks, Special Event Cakes
- ✅ WhatsApp-Button mit deiner Nummer **+62 821 1106 0208** (schwebender Button + eigene Karte auf Kontakt)
- ✅ Instagram-Link **@mamimor_**
- ✅ Bestellkalender (2 Monate: aktueller + nächster)
- ✅ Slogan: "Cita Rasa Manado, Dibuat dengan Cinta"
- ✅ Tentang Mamimor (Beispieltext in Indonesisch, editierbar in `index.html`)

## Was du noch tun musst

### 1. Kalender pflegen (ausgebuchte Tage markieren)
Öffne `assets/kalender-data.js` mit einem Texteditor und trage die vollen Tage ein:
```js
const FULL_DATES = [
  '2026-10-25',
  '2026-10-26',
  '2026-11-01',
];
```
Format: `'YYYY-MM-DD'` (Jahr-Monat-Tag). Datei speichern, zu GitHub hochladen — der Kalender aktualisiert sich automatisch.

### 2. Kontaktformular aktivieren (optional)
Das Formular auf `kontak.html` braucht einen externen Dienst (GitHub Pages kann keine Formulare verarbeiten).
1. Kostenlos registrieren auf https://formspree.io (50 Nachrichten/Monat gratis).
2. Formular erstellen → du bekommst eine ID wie `xyznabcd`.
3. In `kontak.html` ersetze `YOUR_FORM_ID` durch deine ID.
4. Formular-Mails gehen dann an deine Formspree-E-Mail.

Alternative wenn du das Formular NICHT brauchst: WhatsApp-Button reicht völlig, das Formular einfach aus `kontak.html` entfernen.

### 3. Auf GitHub Pages veröffentlichen
1. GitHub-Account anlegen (falls noch nicht vorhanden): https://github.com
2. "New repository" → Name: `mamimor` → Public → "Create repository"
3. "Upload files" → den ganzen Inhalt des Ordners `mamimor/` hochladen (nicht den Ordner selbst, sondern Inhalt) → "Commit changes"
4. Repo-Einstellungen: **Settings → Pages → Source: `main` branch, Folder: `/ (root)` → Save**
5. Nach 1–2 Minuten ist die Seite live unter:
   `https://DEIN-GITHUB-NAME.github.io/mamimor/`

### 4. (Optional) Eigene Domain verbinden
Falls du später eine Domain wie `mamimor.id` oder `mamimor.com` kaufst, kannst du sie in den GitHub-Pages-Einstellungen verknüpfen.

## Produkte oder Preise ändern
- **Text/Preis ändern:** In `index.html` zwischen `<article class="card">` suchen und direkt editieren.
- **Bild tauschen:** Neues Bild mit gleichem Dateinamen (z. B. `mokacake.jpg`) in `assets/images/` hochladen.
- **Neues Produkt hinzufügen:** Einen `<article class="card">...</article>` Block kopieren und anpassen.

## Technik
- Reines HTML/CSS/JavaScript, keine Build-Tools nötig
- Mobile-responsive (funktioniert auf Handy, Tablet, Laptop)
- Lädt schnell (Bilder bereits optimiert, keine schweren Frameworks)
