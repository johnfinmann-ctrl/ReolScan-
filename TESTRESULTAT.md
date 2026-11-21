# ReolScan RC5.4 – Testresultat

Testet i Chromium (Playwright): PC 1280×800, tablet 820×1180, mobil 390×844, file:// og http, offline.

## Nye RC5.4-tests (85 bestået, 0 fejlet)
```
PASS · PC "Faglig hjælp" findes på forsiden
PASS · PC forsidens 3 hovedfelter uændret — START REOLEFTERSYN|FORTSÆT EFTERSYN|EFTERSYNSRAPPORTER
PASS · PC Faglig hjælp-side åbner
PASS · PC PDF vises i appen (12 sider tegnet, ikke tomme) — {"n":12,"nonBlank":12} åbnet på 914 ms
PASS · PC Luk-knap synlig og ≥44 px — 72×44
PASS · PC Download-knap synlig, ingen vandret overflow
PASS · PC downloadet PDF er byte-identisk med original — Sikkerhed-paa-lageret.pdf 33347dc2acc1b451631849e98ed26e7a
PASS · PC hop til side 5 — 5 / 12
PASS · PC zoom virker (sider genopbygget)
PASS · PC Luk lukker straks og fjerner viser — 460 ms
PASS · PC Esc lukker (PC)
PASS · PC nyt eftersyn: ingen forudfyldt tjekliste (RC5.3 havde opdigtet data) — {}
PASS · PC Kontrolpunkter-panel (14) findes, lukket som standard, valgfri
PASS · PC markering OK/Afvigelse gemmes af inspektøren — {"stolper":"fejl","vanger":"ok"}
PASS · PC markering kan fjernes igen
PASS · PC ⓘ ved relevante kontrolpunkter (10 af 14; 4 ikke omtalt i brochuren) — 10
PASS · PC hjælpeark: hvad/opmærksom/målemetode/side + miniature + åbn-knap
PASS · PC "Åbn side" åbner brochuren på den henviste side — 3 / 12
PASS · PC efter luk er eftersynet intakt (samme visning/inspektion)
PASS · PC skade: INTET forvalgt (prioritet/handling) — kun stiplet forslag — {"cls":null,"acts":0,"sug":"red","dash":1,"sel":0}
PASS · PC skade kan ikke gemmes uden inspektørens prioritet
PASS · PC skade gemmes med inspektørens valgte farve (gul) — yellow
PASS · PC Afslut-knap deaktiveret uden samlet vurdering
PASS · PC finishInspection() lukker IKKE uden vurdering (ingen automatisk godkendelse)
PASS · PC lukker med inspektørens egen vurdering
PASS · PC rapport-PDF genereres; ingen opdigtet tjekliste-afvigelse
PASS · TABLET "Faglig hjælp" findes på forsiden
PASS · TABLET forsidens 3 hovedfelter uændret — START REOLEFTERSYN|FORTSÆT EFTERSYN|EFTERSYNSRAPPORTER
PASS · TABLET Faglig hjælp-side åbner
PASS · TABLET PDF vises i appen (12 sider tegnet, ikke tomme) — {"n":12,"nonBlank":12} åbnet på 670 ms
PASS · TABLET Luk-knap synlig og ≥44 px — 72×44
PASS · TABLET Download-knap synlig, ingen vandret overflow
PASS · TABLET downloadet PDF er byte-identisk med original — Sikkerhed-paa-lageret.pdf 33347dc2acc1b451631849e98ed26e7a
PASS · TABLET hop til side 5 — 5 / 12
PASS · TABLET zoom virker (sider genopbygget)
PASS · TABLET Luk lukker straks og fjerner viser — 17 ms
PASS · TABLET Esc lukker (PC)
PASS · TABLET nyt eftersyn: ingen forudfyldt tjekliste (RC5.3 havde opdigtet data) — {}
PASS · TABLET Kontrolpunkter-panel (14) findes, lukket som standard, valgfri
PASS · TABLET markering OK/Afvigelse gemmes af inspektøren — {"stolper":"fejl","vanger":"ok"}
PASS · TABLET markering kan fjernes igen
PASS · TABLET ⓘ ved relevante kontrolpunkter (10 af 14; 4 ikke omtalt i brochuren) — 10
PASS · TABLET hjælpeark: hvad/opmærksom/målemetode/side + miniature + åbn-knap
PASS · TABLET "Åbn side" åbner brochuren på den henviste side — 3 / 12
PASS · TABLET efter luk er eftersynet intakt (samme visning/inspektion)
PASS · TABLET skade: INTET forvalgt (prioritet/handling) — kun stiplet forslag — {"cls":null,"acts":0,"sug":"red","dash":1,"sel":0}
PASS · TABLET skade kan ikke gemmes uden inspektørens prioritet
PASS · TABLET skade gemmes med inspektørens valgte farve (gul) — yellow
PASS · TABLET Afslut-knap deaktiveret uden samlet vurdering
PASS · TABLET finishInspection() lukker IKKE uden vurdering (ingen automatisk godkendelse)
PASS · TABLET lukker med inspektørens egen vurdering
PASS · MOBIL "Faglig hjælp" findes på forsiden
PASS · MOBIL forsidens 3 hovedfelter uændret — START REOLEFTERSYN|FORTSÆT EFTERSYN|EFTERSYNSRAPPORTER
PASS · MOBIL Faglig hjælp-side åbner
PASS · MOBIL PDF vises i appen (12 sider tegnet, ikke tomme) — {"n":12,"nonBlank":12} åbnet på 535 ms
PASS · MOBIL Luk-knap synlig og ≥44 px — 68×44
PASS · MOBIL Download-knap synlig, ingen vandret overflow
PASS · MOBIL downloadet PDF er byte-identisk med original — Sikkerhed-paa-lageret.pdf 33347dc2acc1b451631849e98ed26e7a
PASS · MOBIL hop til side 5 — 5 / 12
PASS · MOBIL zoom virker (sider genopbygget)
PASS · MOBIL Luk lukker straks og fjerner viser — 25 ms
PASS · MOBIL Esc lukker (PC)
PASS · MOBIL nyt eftersyn: ingen forudfyldt tjekliste (RC5.3 havde opdigtet data) — {}
PASS · MOBIL Kontrolpunkter-panel (14) findes, lukket som standard, valgfri
PASS · MOBIL markering OK/Afvigelse gemmes af inspektøren — {"stolper":"fejl","vanger":"ok"}
PASS · MOBIL markering kan fjernes igen
PASS · MOBIL ⓘ ved relevante kontrolpunkter (10 af 14; 4 ikke omtalt i brochuren) — 10
PASS · MOBIL hjælpeark: hvad/opmærksom/målemetode/side + miniature + åbn-knap
PASS · MOBIL "Åbn side" åbner brochuren på den henviste side — 3 / 12
PASS · MOBIL efter luk er eftersynet intakt (samme visning/inspektion)
PASS · MOBIL skade: INTET forvalgt (prioritet/handling) — kun stiplet forslag — {"cls":null,"acts":0,"sug":"red","dash":1,"sel":0}
PASS · MOBIL skade kan ikke gemmes uden inspektørens prioritet
PASS · MOBIL skade gemmes med inspektørens valgte farve (gul) — yellow
PASS · MOBIL Afslut-knap deaktiveret uden samlet vurdering
PASS · MOBIL finishInspection() lukker IKKE uden vurdering (ingen automatisk godkendelse)
PASS · MOBIL lukker med inspektørens egen vurdering
PASS · Alle sidehenvisninger ligger inden for 1–12
PASS · Sidehenvisninger verificeret mod brochurens tekst (23 tjek)
PASS · Sidehenvisninger for "Også i brochuren" verificeret
PASS · HTTP: brochuren vises fra lokal fil (fetch)
PASS · Service worker har cachet app, PDF, pdf.js og logo — / /index.html /logo/reoler-as-logo-lys-baggrund.png /logo/reoler-as-logo-moerk-baggrund.png /logo/reoler-as-logo-original.png /pdfjs/pdf.min.js /pdfjs/pdf.worker.min.js /faglig-hjaelp/Sikkerhed-paa-lageret.pdf
PASS · OFFLINE: appen genindlæses uden netværk
PASS · OFFLINE: brochuren åbner og vises (12 sider)
PASS · Appen henter intet fra reoler-as.dk
PASS · Ingen JavaScript-fejl```

## Regression (tidligere suiter kørt mod RC5.4)
- RC5.1/5.2-suite: 31 bestået, 1 afvigelse = forventet versionsstreng i backup (`RC5.3` → nu `RC5.4`).
- RC5.2-suite: 41/41 bestået. Logo-fil-suite (A–D): 13/13 bestået.
- RC5.3-suite: 42 bestået, 3 afvigelser = testen forventer indlejret logo (data-URI); logo-fil-versionen bruger logo/-filen (kendt fra RC5.3-logo-filer, ikke en RC5.4-ændring).
- Ingen JavaScript-fejl i nogen suite.

## Bemærk
- Sidehenvisninger er kontrolleret mod brochurens tekst (pdftotext) — 27 tjek.
- Ikke testet: rigtig tablet/mobil-hardware og Safari/iOS; test på enhederne før udrulning. Offline kræver at appen er åbnet én gang via http/https.
