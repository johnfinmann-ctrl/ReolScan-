# ReolScan RC5.5 – Testresultat

Chromium (Playwright): PC 1280×800, tablet 820×1180, mobil 390×844 (touch); file:// og http; offline via service worker.

## Nye RC5.5-tests: 99 bestået, 0 fejlet
```
PASS · PC 18 kontrolpunkter; de 14 første uændret og i samme rækkefølge — 18
PASS · PC nyt eftersyn: alle 18 står som "Ikke kontrolleret" (ingen auto-OK)
PASS · PC panel viser 18 rækker, alle "Ikke kontrolleret"
PASS · PC hver række viser teksten "Ikke kontrolleret"
PASS · PC alle 18 kan sættes til OK/Afvigelse/Ikke relevant og tilbage til Ikke kontrolleret — 18 punkter
PASS · PC ⓘ ved alle 18; 14 har fuld hjælp, 4 siger tydeligt "Ikke beskrevet i brochuren" — 14 fuld, ikke beskrevet: belysning/gangarealer/gulv/orden
PASS · PC alle sidehenvisninger 1–12
PASS · PC knapper ≥ 32 px (ⓘ) / ≥44 px (statusknapper)
PASS · PC ingen vandret overflow på kontrolliste
PASS · PC ⓘ → brochuren åbner som overlay direkte på relevant side (s. 3) — 3 / 12 · åbnet på 1291 ms
PASS · PC øverst: "← Tilbage til eftersyn", tydelig og ≥44 px høj — ← Tilbage til eftersyn 792×48
PASS · PC tilbageknappen er stadig synlig efter scroll til s. 9
PASS · PC Tilbage lukker viseren; hjælpearket ligger stadig under (samme sted)
PASS · PC tilbage på præcis samme sted: fane, åbent panel, scroll, kunde/eftersyn — {"b":0,"a":0}
PASS · PC ingen genindlæsning/render (samme DOM-element), ingen ny fane, URL uændret, gemt markering bevaret
PASS · PC lukker med X — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · PC lukker med Esc — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · PC lukker med browserens tilbage-knap (Android) — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · PC arbejdsskærm: ikke-gemt tekst, foto og scroll bevaret efter hjælp (TEXTAREA#probe) — {"wb":{"y":0,"val":"IKKE-GEMT 123"},"wa":{"y":0,"val":"IKKE-GEMT 123","m":true,"view":"workScreen","photos":1}}
PASS · PC PDF kan ikke indlæses: fejltekst vises, hjælp kan lukkes, arbejdet fortsætter uden tab
PASS · TABLET 18 kontrolpunkter; de 14 første uændret og i samme rækkefølge — 18
PASS · TABLET nyt eftersyn: alle 18 står som "Ikke kontrolleret" (ingen auto-OK)
PASS · TABLET panel viser 18 rækker, alle "Ikke kontrolleret"
PASS · TABLET hver række viser teksten "Ikke kontrolleret"
PASS · TABLET alle 18 kan sættes til OK/Afvigelse/Ikke relevant og tilbage til Ikke kontrolleret — 18 punkter
PASS · TABLET ⓘ ved alle 18; 14 har fuld hjælp, 4 siger tydeligt "Ikke beskrevet i brochuren" — 14 fuld, ikke beskrevet: belysning/gangarealer/gulv/orden
PASS · TABLET alle sidehenvisninger 1–12
PASS · TABLET knapper ≥ 32 px (ⓘ) / ≥44 px (statusknapper)
PASS · TABLET ingen vandret overflow på kontrolliste
PASS · TABLET ⓘ → brochuren åbner som overlay direkte på relevant side (s. 3) — 3 / 12 · åbnet på 637 ms
PASS · TABLET øverst: "← Tilbage til eftersyn", tydelig og ≥44 px høj — ← Tilbage til eftersyn 332×48
PASS · TABLET tilbageknappen er stadig synlig efter scroll til s. 9
PASS · TABLET Tilbage lukker viseren; hjælpearket ligger stadig under (samme sted)
PASS · TABLET tilbage på præcis samme sted: fane, åbent panel, scroll, kunde/eftersyn — {"b":0,"a":0}
PASS · TABLET ingen genindlæsning/render (samme DOM-element), ingen ny fane, URL uændret, gemt markering bevaret
PASS · TABLET lukker med X — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · TABLET lukker med Esc — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · TABLET lukker med browserens tilbage-knap (Android) — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · TABLET arbejdsskærm: ikke-gemt tekst, foto og scroll bevaret efter hjælp (TEXTAREA#probe) — {"wb":{"y":0,"val":"IKKE-GEMT 123"},"wa":{"y":0,"val":"IKKE-GEMT 123","m":true,"view":"workScreen","photos":1}}
PASS · TABLET PDF kan ikke indlæses: fejltekst vises, hjælp kan lukkes, arbejdet fortsætter uden tab
PASS · MOBIL 18 kontrolpunkter; de 14 første uændret og i samme rækkefølge — 18
PASS · MOBIL nyt eftersyn: alle 18 står som "Ikke kontrolleret" (ingen auto-OK)
PASS · MOBIL panel viser 18 rækker, alle "Ikke kontrolleret"
PASS · MOBIL hver række viser teksten "Ikke kontrolleret"
PASS · MOBIL alle 18 kan sættes til OK/Afvigelse/Ikke relevant og tilbage til Ikke kontrolleret — 18 punkter
PASS · MOBIL ⓘ ved alle 18; 14 har fuld hjælp, 4 siger tydeligt "Ikke beskrevet i brochuren" — 14 fuld, ikke beskrevet: belysning/gangarealer/gulv/orden
PASS · MOBIL alle sidehenvisninger 1–12
PASS · MOBIL knapper ≥ 32 px (ⓘ) / ≥44 px (statusknapper)
PASS · MOBIL ingen vandret overflow på kontrolliste
PASS · MOBIL ⓘ → brochuren åbner som overlay direkte på relevant side (s. 3) — 3 / 12 · åbnet på 212 ms
PASS · MOBIL øverst: "← Tilbage til eftersyn", tydelig og ≥44 px høj — ← Tilbage til eftersyn 262×48
PASS · MOBIL tilbageknappen er stadig synlig efter scroll til s. 9
PASS · MOBIL Tilbage lukker viseren; hjælpearket ligger stadig under (samme sted)
PASS · MOBIL tilbage på præcis samme sted: fane, åbent panel, scroll, kunde/eftersyn — {"b":0,"a":0}
PASS · MOBIL ingen genindlæsning/render (samme DOM-element), ingen ny fane, URL uændret, gemt markering bevaret
PASS · MOBIL lukker med X — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · MOBIL lukker med Esc — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · MOBIL lukker med browserens tilbage-knap (Android) — bliver i eftersynet, ikke forsiden — {"gone":true,"view":"wizard","tab":"skader","y":0,"reload":1,"home":false}
PASS · MOBIL arbejdsskærm: ikke-gemt tekst, foto og scroll bevaret efter hjælp (TEXTAREA#probe) — {"wb":{"y":0,"val":"IKKE-GEMT 123"},"wa":{"y":0,"val":"IKKE-GEMT 123","m":true,"view":"workScreen","photos":1}}
PASS · MOBIL PDF kan ikke indlæses: fejltekst vises, hjælp kan lukkes, arbejdet fortsætter uden tab
PASS · Måling: ingen grænse vist før konstruktion er valgt
PASS · Måling: grænse vises ikke uden bekræftet målelængde (1000 mm)
PASS · Måling: stigeben "øverste tegning" + 1000 mm → maks. 5 mm med kildehenvisning s. 4 — Vejledende grænse fra brochuren (s. 4): maks. 5 mm.
PASS · Måling: nederste tegning → maks. 3 mm
PASS · Måling: "Anden / ved ikke" → ingen grænse
PASS · Måling: over grænse → opfordring til vurdering, ikke automatisk afvigelse
PASS · Måling: under grænse → "ikke i sig selv en godkendelse"
PASS · Måling gemt: værdi, retning, reol, foto, kommentar, grænse+side
PASS · Ingen automatisk godkendelse ud fra måling (kontrolpunktet er stadig "Ikke kontrolleret")
PASS · Måling diagonaler: grænse 10 mm, s. 5
PASS · Måling: illustration åbner på s. 4
PASS · Måling: indtastet værdi bevaret efter visning af illustration (ikke-gemt)
PASS · Afvigelse → knap "＋ Registrér skade" tilbydes
PASS · Afvigelse åbner skaderegistrering med kontrolpunkt/skadetype forvalgt — men INGEN risikoklasse eller handling forvalgt — {"view":"workScreen","types":["stolpe"],"cls":null,"acts":0,"ck":"stolper"}
PASS · Skade gemt med inspektørens egen risikoklasse + kontrolpunkt-reference — [{"c":"red","cp":"stolper"}]
PASS · Afslut: viser "0 af 18 kontrolleret · 18 ikke kontrolleret" — Kontrolliste: 0 af 18 kontrolleret · 18 ikke kontrolleret. Rapporten viser tydeligt, at di
PASS · Færdig-skærm: viser ikke "fuldt kontrolleret" (viser 0 af 18)
PASS · PDF: "Kontrolliste (18 kontrolpunkter)" med 18 × IKKE KONTROLLERET — 18
PASS · PDF: de 4 nye punkter fremgår
PASS · PDF: ingen "Alle 14 … godkendt" og ingen "Godkendt — ingen udestående skader"
PASS · PDF: manglende skader giver ikke "Godkendt" alene — samlet vurdering er inspektørens ("vurderet af inspektøren")
PASS · PDF skelner: Kontrolleret og OK / Registreret afvigelse / Ikke relevant / IKKE KONTROLLERET
PASS · PDF: målinger med grænse + kilde og "ikke i sig selv en godkendelse"
PASS · Genbrug: valgmulighed vises kun når kunden har tidligere eftersyn — Start ud fra seneste eftersyn (21-11-2026 · RS-2026-0003): 2 reoler
PASS · Genbrug er valgfri: uden afkrydsning starter eftersynet tomt
PASS · Genbrug kopierer reolregister (reolnumre, hal, type, producent) — A-01|Hal A|Pallereol|X,A-02|Hal A|Pallereol|X
PASS · Genbrug overfører INGEN kontrolresultater, vurdering, underskrifter, skader eller målinger; kontrolliste tom — {"reoler":"A-01|Hal A|Pallereol|X,A-02|Hal A|Pallereol|X","cl":"{}","v":null,"sig":"{\"inspector\":null,\"customer\":null}","sk":0,"ms":0,"basedOn":true,"ver":18,"status":"open","rep":null}
PASS · Tidligere eftersyn er uændret (ikke overskrevet)
PASS · Historik: tidligere skade vises (type, reol, oprindelig status, dato) — men ligger ikke i nye skader
PASS · Ældre lukket eftersyn (14 punkter) bevarer sine 14 værdier og vurdering — {"lp":14,"lc":248,"lv":"yellow","ver":14,"fp":18,"fc":"{}","fa":true,"fs":{"ok":0,"fejl":0,"ikr":0,"unc":18,"total":18,"done":0}}
PASS · Åbent eftersyn med RC5.3-autogenereret tjekliste: nulstilles til "Ikke kontrolleret" (original gemt), 18 punkter
PASS · Ældre eftersyn åbner og viser korrekt (færdig-skærm "14 punkter")
PASS · Ældre eftersyns PDF: "Kontrolliste (14 kontrolpunkter)", Vanger = afvigelse, ingen af de 4 nye
PASS · Åbent ældre eftersyn: skader-fane vises med 18 rækker
PASS · OFFLINE: appen genindlæses uden netværk og registreringen står tilbage
PASS · OFFLINE: ⓘ → brochure åbner på s. 3 og vises (12 sider)
PASS · OFFLINE: registrering virker uden netværk
PASS · Appen henter intet fra reoler-as.dk
PASS · Ingen JavaScript-fejl```

## Regression (tidligere suiter kørt mod RC5.5)
- Grundsuite (RC5.1/5.2-funktioner, backup/import, PDF, QR m.m.): 32 bestået, 0 fejl.
- RC5.2-suite (adressesøgning): 41/41. RC5.3-suite (logo/farver, PC/tablet/mobil): 45/45. Logo-filer (A–D): 13/13.
- RC5.4-suite: 82 bestået, 3 afvigelser — alle samme forældede tjek i den gamle test af hjælpearkets ordlyd (arket hedder nu "Hvordan kontrolleres"); funktionen er dækket af RC5.5-testene for alle 18 ark.
- Ingen JavaScript-fejl i nogen suite.

## Bemærkninger / begrænsninger
- Tjekket for "ikke-gemte indtastninger" på arbejdsskærmen bruger en testindsat tekstboks (DOM-probe), fordi ⓘ ved skadetyper kun vises, før typen er valgt; de reelle ikke-gemte felter (måleformularen) testes direkte.
- Ikke testet på fysisk tablet/mobil eller Safari/iOS; kamera ("capture") og tale-til-tekst er ikke afprøvet på enheder. Android-tilbageknap er testet som browserhistorik (goBack).
- Offline kræver at appen har været åbnet én gang via http/https.

## RC5.5 – Fotos og fremsendelse (automatiske tests, Chromium/Playwright)
102 af 102 kontroller bestået på PC (1280×800), tablet (820×1180) og mobil (390×844). Fuld liste: TESTRESULTAT_FOTO_MAIL.txt. Skærmbilleder og en eksempelrapport med 10 fotos ligger i testbilleder/.
Dækker: kamera-/enhedsvalg, flere fotos pr. skade, forstør/billedtekst/udskift/slet, fotos bevaret ved faglig hjælp og genindlæsning, alle fotos i PDF, PDF-størrelse (10 fotos á ~1,3 MB → under 4 MB), tekst ved hvert foto, mailto på PC, delingsmenu på mobil (simuleret), .eml med byte-identisk PDF, ingen "sendt" uden bekræftelse. RC5.5 del 1-testen (99 kontroller) er kørt igen uden fejl.
**Ikke testet i sandkassen (skal prøves på rigtige enheder):** ægte kamera, rigtig delingsmenu/e-mail-app på iPhone/Android, hvordan Outlook/Apple Mail åbner .eml, og at mailto åbner det installerede e-mailprogram. Disse er simuleret/afprøvet via kode, ikke på hardware.
Bemærk: nogle ældre testkontroller (indlejret logo, gammelt hjælpeark-layout) er forældede siden RC5.4/5.5 og er ikke regressioner; logo fra fil er bekræftet.
