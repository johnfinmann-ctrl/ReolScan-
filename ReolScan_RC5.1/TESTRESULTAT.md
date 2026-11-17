# ReolScan RC5.1 – Testresultat
Metode: automatiseret test i Chromium (Playwright), desktop 1280×800 og mobil 390×844 (touch). Adresse-API er simuleret (kan ikke nås fra testmiljøet).
Resultat: **32 bestået, 0 fejlet.**

- ✅ 1a adresseforslag vises og valg udfylder hele adressen — Rådhuspladsen 1, 1550 København V
- ✅ 1b manuel indtastning mulig
- ✅ 1c uden token: vejledning, ingen fejl, manuel mulig — Adresseforslag er ikke slået til (token mangler under System
- ✅ 1d ugyldigt token (401): venlig besked
- ✅ 1e offline: venlig besked
- ✅ 1f eftersyn oprettet med adresse
- ✅ 1g adresse i stamdata-fane vælges og gemmes — Rådhuspladsen 2, 1550 København V
- ✅ 2a knap "Ingen tegning – fortsæt" synlig
- ✅ 2b går direkte til Reolregister
- ✅ 2c noDrawing sat, tegning ikke krævet
- ✅ 3a hal/række/reolnummer oprettes uden tegning — [["A-01","Hal A","Række 1"],["A-02","Hal A","Række 1"],["B-01","Hal B","Række 2"]]
- ✅ 4a store fotos komprimeres — original 11.6 MB → 495 kB, 495 kB
- ✅ 3b skader registreret (2 registreringer) — skader 2
- ✅ 2d tegning kan uploades senere (komprimeret) — 2053 kB
- ✅ 2e "Ingen tegning"-knap skjult når tegning findes
- ✅ 5a underskrifter gemt
- ✅ 5b eftersyn afsluttet med rapportnummer — RS-2026-0003
- ✅ 6a PDF genereret uden tegning — 1128 kB
- ✅ 7a backup har metadata + data — {"kunder":4,"eftersyn":4,"reoler":18,"skader":12}
- ✅ 7b import advarer før overskrivning — Nu på enheden: 1 kunder, 0 eftersyn, 0 reoler, 0 skader | I backup-filen: 4 kunder, 4 eftersyn, 18 reoler, 12 skader
- ✅ 7c data gendannet fra backup — 4 → tom → 4
- ✅ 7d sikkerhedskopi hentes før import
- ✅ 7e skader/reoler/fotos intakte efter gendannelse — 2/3
- ✅ 7f annullér import ændrer intet
- ✅ 7g ugyldig fil afvises, data uændret
- ✅ 3c fuldt lager giver tydelig fejlbanner og saveDB=false
- ✅ 3d korrupt data overskrives ikke; kopi bevaret; advarsel vises
- ✅ 6b "rapport ikke fundet" forklarer lokal lagring
- ✅ 8a mobil: adresseforslag kan vælges med tryk
- ✅ 8b mobil: "Ingen tegning"-knap passer i bredden — {"w":284,"h":56}
- ✅ 8c mobil: ingen vandret scroll
- ✅ 9 ingen JavaScript-fejl under test

## Dækning af de 8 testpunkter
1 Nyt eftersyn m. adresse: 1a–1g · 2 Uden tegning: 2a–2e · 3 Reoler/skader: 3a–3d · 4 Fotoupload: 4a · 5 Underskrift/afslut: 5a–5b · 6 PDF: 6a–6b · 7 Backup/gendannelse: 7a–7g · 8 Mobil/desktop: 8a–8c

## Ikke testet / forbehold
- **Live Adressevælger-kald er ikke testet** (ingen netadgang til tjenesten, og et token fra Klimadatastyrelsen kræves). Endpoint/parametre er taget fra offentlig dokumentation og skal verificeres med rigtigt token (brug Test-knappen).
- Test på fysisk iPad/iPhone/Android ikke udført (emuleret mobil).
- Mikrofon/tale-til-tekst og Del PDF afhænger af enhed og er uændret fra RC4.
