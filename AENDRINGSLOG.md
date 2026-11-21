# ReolScan RC5.4 – Faglig hjælp til reolinspektøren

## Nyt
1. **Faglig hjælp** (forsiden, lille knap ved siden af System) → side med brochuren "Sikkerhed på lageret".
2. **PDF-viser i appen** (pdf.js, lokal kopi): tydelig **Luk**-knap (også Esc), **Download PDF** (byte-identisk med originalen), side frem/tilbage, zoom, sidetal. Virker på PC, tablet og mobil.
3. **Lokal kopi**: `faglig-hjaelp/Sikkerhed-paa-lageret.pdf` + `pdfjs/`. Virker uden reoler-as.dk. Åbnes appen direkte som fil, bruges en indlejret kopi (`brochure-data.js`). `sw.js` cacher app + brochure til **offline** brug (kræver http/https, fx GitHub Pages).
4. **ⓘ-hjælp** ved kontrolpunkter og skadetyper: hvad der skal kontrolleres, opmærksomhedspunkter, målemetode, sidehenvisning, miniature af brochuresiden og knap "Åbn side X". Kun brochurens egne udsagn; hvor brochuren intet siger, står det.
5. **Kontrolpunkter (14)** som valgfrit, lukket panel under Skader (OK / Afvigelse, kan fjernes). Ingen nye obligatoriske trin.
6. Brochuren vises **uændret**; tegninger s. 5–6 er Reoler A/S' ejendom (se noten under Åbent punkt).

## Rettet – automatisk godkendelse fjernet (krav 4)
- **Fundet i RC5.3:** nye eftersyn fik en opdigtet tjekliste (13 × OK, Diagonaler = afvigelse), som kom i PDF'en. → Nu tom; kun inspektørens egne markeringer.
- **Fundet:** `finishInspection` satte selv "Godkendt/…bemærkninger/Ikke godkendt" hvis inspektøren ikke valgte. → Nu kan eftersynet **ikke afsluttes** uden inspektørens egen samlede vurdering (knap deaktiveret + spærre i koden).
- **Fundet:** skadetype forvalgte automatisk prioritet (rød/gul/grøn) og handlinger. → Nu **intet forvalgt**; vejledende forslag vises kun med stiplet kant. Inspektøren skal selv trykke prioritet (ét ekstra tryk pr. skade).

## Uændret
14 kontrolpunkter, grøn/gul/rød, Reoler A/S logo og farver, forside (3 hovedfelter), RC5.2 adressesøgning, backup/data, PDF/QR. Intet Supabase. **GitHub er ikke opdateret.**

## Åbent punkt
Bekræft hos Reoler A/S, at brochuren må indlægges i appen. Brochuren er brugt uændret.
