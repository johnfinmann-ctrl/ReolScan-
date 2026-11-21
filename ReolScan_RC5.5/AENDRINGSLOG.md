# ReolScan RC5.5 – Den intelligente inspektørassistent

## Kontrolliste: 14 → 18 punkter (krav 1)
- 4 nye selvstændige punkter efter overlapsanalyse (se KONTROLPUNKTER_18.md). De 14 eksisterende er uændrede.
- Fire statusser: OK · Afvigelse · Ikke relevant · **Ikke kontrolleret (standard)**. Intet punkt får automatisk OK. Tryk på et valgt punkt igen for at fjerne det.
- Panelet "Kontrolliste (18)" ligger (lukket) under Skader og viser "x af 18 kontrolleret". Ingen nye obligatoriske trin.

## Faglig hjælp med ét tryk (krav 2)
- ⓘ ved **alle 18 punkter** og ved relevante skadetyper. Arket viser: hvad der kontrolleres, hvordan, typiske fejl, relevante fotos/målinger, sidehenvisning, miniature af brochuresiden og knap "Åbn side X".
- Punkter uden omtale i brochuren (Gangarealer, Belysning, Gulv, Orden) siger tydeligt "Ikke beskrevet i brochuren". Delvist dækkede punkter er markeret. Ingen opfundne grænser.

## Tilbage fra faglig hjælp (tillægskrav)
- Brochuren åbner som **overlay oven på eftersynet** direkte på den relevante side. Øverst altid synlig: **"← Tilbage til eftersyn"** (+ ✕, Esc på PC, og browserens/Androids tilbage-knap).
- Ingen sidegenindlæsning, ingen ny fane, ingen render af eftersynet: samme DOM, scrollposition, åbne paneler, ikke-gemte indtastninger, fotos og målinger bevares. Tilbage sender aldrig til forsiden.
- Kan PDF'en ikke indlæses, vises en fejltekst, og hjælpen kan stadig lukkes.
- Flow: ⓘ → hjælpeark → "Åbn side" → brochure-overlay. "Tilbage" lukker brochuren og viser hjælpearket igen; ✕/"Tilbage til eftersyn" i arket vender til præcis samme sted.

## Hurtigere registrering (krav 3)
- Marker **Afvigelse** → knappen "＋ Registrér skade" åbner skaderegistreringen med **skadetypen forvalgt**. Omfang, risikoklasse (grøn/gul/rød) og handling vælger inspektøren selv; forslag vises kun som stiplet kant.
- Skaden gemmes med reference til kontrolpunktet.
- Kontrollisten opdateres uden at siden bygges om (scroll og felter urørt).
- Øvrige flows (kamera, store knapper, tale, Gem og næste) er uændrede — jeg har kun tilføjet det, der sparer tryk.

## Målinger (krav 4)
- 📏 Mål ved Stolper, Vanger og Diagonaler: målt værdi (mm), måleretning, foto, kommentar, reol, konstruktion.
- Brochurens grænse (s. 4: 5/3 mm over 1000 mm; s. 5: 10 mm) vises med sidehenvisning **kun** når inspektøren har valgt den matchende konstruktion og bekræftet målelængden. "Se illustration" åbner siden.
- **Ingen automatisk godkendelse eller afvigelse** ud fra en måling.

## Genbrug af tidligere eftersyn (krav 5)
- Valgfri afkrydsning ved eksisterende kunde: genbruger reolregister (reolnumre, hal, lokation, type, producent). Kontrolliste, vurdering, underskrifter, skader og målinger starter tomme. Tidligere eftersyn ændres ikke.
- Tidligere skader vises som skrivebeskyttet **Historik** (oprindelig status og dato).

## Rapport (krav 6)
- PDF har komplet kontrolliste med fire tydeligt adskilte statusser (farvekodet), optælling og advarsel om ikke-kontrollerede punkter, samt målinger med kilde.
- **Fjernet:** "Alle 14 hovedområder er godkendt uden afvigelser" (blev vist, når ingen punkter var markeret) og "Godkendt — ingen udestående skader" (blev udledt af manglende skader). Samlet vurdering er nu kun inspektørens egen.
- Konklusionen nævner antal ikke-kontrollerede punkter.

## Rettet / bemærk
- **Fejl i RC5.4-ZIP'en:** mappen `logo/` manglede (fjernet af en testkørsel før pakning). Appen viste den indlejrede reserve-logo, men de udskiftelige logofiler manglede. **RC5.5 indeholder `logo/` igen** (identiske med RC5.3-filerne).
- Åbne eftersyn med RC5.3's autogenererede tjekliste nulstilles til "Ikke kontrolleret" (originalen gemmes i `checklistAutoRC53`).
- Ældre/lukkede eftersyn markeres som 14-punkts og vises uændret.
- Service worker henter nu index.html netværk-først (ny version uden manuel opdatering); cache `reolscan-rc55-v1`.

## Uændret
Adressesøgning, Ingen tegning, reolregister, QR, fotos/skader, historik, backup/import, underskrifter, PDF, Reoler A/S logo og farver. Ingen database, ekstern AI eller abonnementer. **GitHub er ikke opdateret.**

## RC5.5 – Fotos og fremsendelse af rapport (tilføjet)
**Fotos (ingen eksisterende funktion fjernet)**
- Tag foto med kamera (mobil/tablet) ELLER vælg flere eksisterende billeder fra enheden; flere fotos pr. skade; også på allerede gemte skader (＋-knapper på skadekortet).
- Foto kan ses forstørret (lightbox, Forstør/Tilpas, forrige/næste), få billedtekst (maks. 140 tegn), udskiftes og slettes (sletning kræver bekræftelse). Efter afsluttet eftersyn er fotos skrivebeskyttede.
- Fotos knyttes automatisk til kunde, eftersyn, reol og skade. Bevares uændret ved åbning/lukning af faglig hjælp/brochure.
- Advarsel ved: fjernelse af skade med fotos, annullering af registrering med ikke-gemte fotos, sletning af foto.
- Store billeder komprimeres ved optagelse.

**Fotos i PDF**
- Alle fotos medtages (tidligere grænse på 6 fjernet). Ved hvert foto: Foto i af n, reol + placering, skade + beskrivelse, risiko, anbefalet handling, dato, billedtekst. Billeder omkomprimeres til maks. 1000 px (JPEG) – læsbare, men filen holdes rimelig.
- Kan et foto ikke indlæses, står "FOTO KUNNE IKKE INDLÆSES I RAPPORTEN" i PDF'en og der vises en advarsel – fotos forsvinder aldrig stiltiende.

**Send rapport til kunde**
- Knap på afslutningsskærmen og i rapportlisten (kun efter afsluttet og vurderet af inspektøren).
- Modtager hentes fra kundekortet og kan rettes; emne og kort standardtekst kan redigeres; rapporten kan gennemses før afsendelse.
- Ingen backend → ingen automatisk afsendelse. Metoder: (1) Del PDF via enhedens delingsmenu (mobil/tablet, PDF vedhæftes af e-mail-appen), (2) download PDF + åbn e-mailprogram (mailto – du vedhæfter selv), (3) .eml-mailudkast med PDF indlejret som vedhæftning, (4) kun download.
- ReolScan påstår aldrig, at PDF er vedhæftet eller sendt. Status bliver kun "sendt (bekræftet af inspektør)", når inspektøren selv trykker bekræft. Tidligere automatisk "sendt"-markering (mailto/autosend) er fjernet.
- Ingen ny betalt mailtjeneste eller ekstern database.

## RC5.5 – Kompakt PDF med klikbare skadefotos (tilføjet)
- Hoveddel: ved hver skade vises små miniaturer (5 pr. række) i stedet for store fotos; hver miniature er klikbar og fører til den store billedside.
- Nyt "Fotobilag" efter hoveddelen: 2 store billeder pr. side med reolnummer, placering, skadebeskrivelse, risiko, handling, dato og billedtekst + link "« Tilbage til skaden (side N)".
- Kompression: ét stort billede (1000 px, 900 px ved >25 fotos) og én miniature (200 px) pr. foto – samme foto indlejres ikke i fuld opløsning flere gange. Alle billeder ligger i PDF'en; ingen eksterne links.
- Uændret: fotoregistrering i appen, alle oplysninger og inspektørens vurderinger, mail-flowet (ingen automatisk afsendelse, ingen falsk "sendt").
- Ulæselige fotos markeres stadig tydeligt ("FOTO KUNNE IKKE INDLÆSES").
- Se TESTRESULTAT_KOMPAKT_PDF.txt for størrelser (10/25/50 fotos) og begrænsninger.

## RC5.5 – Rettelse af rapportens konklusion
- "AI Ledelsesresumé" er erstattet af **"Eftersynets konklusion"**. Teksten antyder ikke længere, at AI har vurderet noget; den bygger på inspektørens registreringer og egen samlede vurdering.
- Ingen automatisk "godkendt/sikker": sætningerne "Eftersynet vurderes samlet godkendt …" er fjernet. Vurderingen vises som "Inspektørens samlede vurdering" (valgt af inspektøren; intet er forvalgt).
- Konklusionsteksten genereres som **UDKAST** på afslutningsskærmen (kun tal fra registreringerne). Inspektøren kan rette den og skal trykke "Godkend konklusion", før eftersynet kan afsluttes. Ændres teksten bagefter, bortfalder godkendelsen. Rapporten viser "gennemgået og godkendt af inspektøren"; uden godkendelse (fx ældre rapporter) vises tydeligt "UDKAST … ikke gennemgået og godkendt af inspektøren".
- "AI Mønsteranalyse" hedder nu "Mønsteroversigt (regelbaseret optælling — ikke en faglig vurdering)". Pladsholderen "AI genererer ledelsesresume" under Kommende er omdøbt til "Automatisk udkast til konklusion".
- Uændret: små klikbare miniaturer, fotobilag, interne links, "Tilbage til skaden", komprimering, alle fotos i én PDF, deling/mail (ingen automatisk afsendelse). Gammel funktion `aiManagementSummary` ligger uændret, men bruges ikke.
