# ReolScan RC5.3 – sådan skifter du logo

**Filer**
- `index.html` – hele appen (åbn i browser, eller læg på GitHub Pages sammen med mappen `logo/`).
- `logo/reoler-as-logo-moerk-baggrund.png` – bruges i topbjælken (mørk baggrund) og i PDF-sidehovedet. Gennemsigtig PNG med hvid/lys tekst.
- `logo/reoler-as-logo-lys-baggrund.png` – bruges under System → Licens & Version (lys baggrund).
- `logo/reoler-as-logo-original.png` – det originale logo (kun arkiv, bruges ikke af appen).

**Skift logo**
1. Gem det nye logo med samme filnavn i `logo/` (overskriv filen). Gerne bred PNG (min. 600 px) med gennemsigtig baggrund.
2. Genindlæs appen (Ctrl+F5 / træk ned på mobil).
- Andre filnavne/placering: ret `BRAND.files` i toppen af scriptet i `index.html` (søg efter "SKIFT LOGO HER").
- Farver: ret `--navy` og `--accent` øverst i CSS'en i `index.html`.

**Vigtigt om PDF**
- Åbnes appen via internetadresse (fx GitHub Pages), bruger PDF-rapporten det udskiftede logo.
- Åbnes `index.html` direkte som lokal fil, blokerer browseren læsning til PDF; da bruges det indlejrede standardlogo i PDF'en (topbjælken viser stadig dit nye logo).
- Mangler logomappen helt, bruger appen det indlejrede standardlogo overalt.
