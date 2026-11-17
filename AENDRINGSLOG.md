# ReolScan RC5.1 – Ændringslog
Udgangspunkt: RC4 (ReolScan_v1_0_RC4.html). Der fandtes ingen nyere kode i projektet; ingen kode er overskrevet.
Ingen redesign: alle eksisterende funktioner, felter, rapporter og arbejdsgange er uændrede. GitHub er IKKE opdateret.

## 1. Automatisk adressesøgning
- DAWA (Danmarks Adresser) er lukket 1. oktober 2026. Officiel afløser: **Adressevælger** (Klimadatastyrelsen / SDFI).
- Adressefeltet i "Start nyt eftersyn" og i Stamdata-fanen viser forslag fra 3 tegn; valg udfylder hele adressen. Piletaster/Enter/Esc og tryk på mobil virker.
- Manuel indtastning er altid mulig. Uden token, offline eller ved fejl vises en rolig besked – ingen blokering.
- Token til Adressevælger indtastes under System → Standardværdier → "Adresseforslag" (med Test-knap). Ingen nøgle er indlejret i koden.
- Ingen nyt menupunkt.

## 2. Ingen tegning
- Trin 2: tydelig knap "Ingen tegning – fortsæt" (øverst) → direkte til Reolregister. Trinnet markeres som færdigt.
- Tegning er aldrig obligatorisk. Hal, reolrække og reolnummer kan oprettes uden tegning. Tegning kan uploades senere.
- PDF-rapporten genereres korrekt uden tegning (verificeret).

## 3. Datasikkerhed og backup
- **Datatab-fejl rettet:** hvis de gemte data ikke kunne læses ved opstart, ville RC4 oprette tom database og overskrive dem. Nu bevares rådata (kopi under `reolscan_db_v1_corrupt_<tid>`), og en rød advarsel vises.
- `saveDB` fanger nu lagerfejl (fuldt/blokeret) og viser en tydelig rød advarsel med "Gem backup nu". Advarsel når lageret nærmer sig fuld (>4 MB).
- Fotos (skade, før/efter) og tegningsbilleder komprimeres før lagring (maks. 1400 px/2200 px, JPEG). Eksempel: 11,6 MB → ca. 0,5 MB. Hvis en tegning er for stor, rulles upload tilbage.
- Backup: Blob-download (ikke data-URI), med metadata (version, tidspunkt, antal). Viser lagerforbrug i System.
- Import: validerer filen, viser antal nu/i backup, **kræver bekræftelse før eksisterende data erstattes**, henter automatisk en sikkerhedskopi først, og ved fejl bevares eksisterende data. Annullér ændrer intet.
- Browseren anmodes om vedvarende lager (`navigator.storage.persist`).
- Ingen Supabase eller anden database.

## 4. PDF og QR
- PDF-forside: "QR åbner kun rapporten i ReolScan på den enhed, hvor den er gemt" (erstatter "Scan for at åbne rapport").
- "Rapport ikke fundet" forklarer, at rapporter er lokale og ikke kan åbnes via QR på andre enheder.
- PDF-layout, fotos, kontrolpunkter og underskrifter er uændrede.
- Anbefaling (ikke implementeret): hvis QR skal virke på tværs af enheder, kræver det en fælles lagring (særskilt beslutning).

## Øvrigt
- Versionsnavn opdateret til "ReolScan RC5.1" (System → Licens & Version).
