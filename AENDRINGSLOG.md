# ReolScan RC5.3 – Ændringslog (Reoler A/S branding)
Udgangspunkt: RC5.2. Automatisk adressesøgning, "Ingen tegning", backup/import, registreringsforløb og forside (Start reoleftersyn / Fortsæt eftersyn / Eftersynsrapporter) er uændrede. GitHub er IKKE opdateret.

## 1. Logo
- Det originale Reoler A/S-logo (fil leveret af dig, 200 px) er anvendt i stedet for "RA"-symbolet. Navnet "ReolScan" er bevaret ved siden af logoet.
- Tre varianter er udledt af originalen og indlejret i `index.html` (objektet `BRAND`) – appen kalder aldrig reoler-as.dk, og filerne ligger også i mappen `logo/`:
  - *Mørk baggrund* (topbjælke): "Reoler" i hvid; ikon, prik og "as" i lyseblå `#65BDDA` (samme to-tonede princip som hjemmesidens hvide logo).
  - *Lys baggrund*: originale farver, gennemsigtig (vises under System → Licens & Version).
  - *PDF-sidehoved*: mørk variant fladlagt på profilblå.
- Den lille undertekst i topbjælken er forkortet til "Professionelle reoleftersyn" (logoet viser allerede firmanavnet). På mobil skjules underteksten, og brødkrummen vises kun fra 480 px bredde, så "← Forside" altid er synlig.

## 2. Farver
- Profilblå `#00305F` (målt i logoets tekst) og lyseblå `#65BDDA` (fra hjemmesidens logo). Ændret centralt i CSS-variablerne `--navy`, `--navy-2` (#0B4478), `--navy-soft` (#E8F0F8) og nyt `--accent`.
- Anvendt på: topbjælke (med lyseblå bundstreg), primære knapper, overskrifter, aktive faner/trin (med lyseblå markering), dashboard-tal og PDF-rapporter (sidehoved, lyseblå streg, overskrifter, linjer).
- Grøn `#2E9E5B`, gul `#F2B705` og rød `#D6334A` til sikkerhedsklassifikation er uændrede (verificeret).
- Den lyseblå bruges kun på mørk baggrund eller som streg – aldrig som tekst på hvid (lav kontrast).

## 3. PDF
- Logoet står i sidehovedet på alle sider; "ReolScan · Reoleftersyn" og rapportnummer er bevaret. Den gamle tekstboks "REOLER A/S" på forsiden er fjernet, og afsenderlinjen står nu som tekst.
- Øvrigt PDF-layout, fotos, kontrolpunkter, underskrifter og QR-tekst er uændrede.

## Øvrigt
Versionsnavn: ReolScan RC5.3.

## Tillæg: logoet kan skiftes uden at redigere kode
- Logoerne ligger nu som almindelige filer i `logo/` og hentes af `index.html`. Overskriv filerne (samme filnavn) for at skifte logo; eller ret stierne i `BRAND`-blokken øverst i scriptet ("SKIFT LOGO HER").
- Findes filerne ikke, bruges en indlejret reserve (nederst i `index.html`, `BRAND_FALLBACK`).
- `AENDRINGSLOG.md`/`TESTRESULTAT.md` ellers som beskrevet ovenfor; ingen funktionsændringer.
