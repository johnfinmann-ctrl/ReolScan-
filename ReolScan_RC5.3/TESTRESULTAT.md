# ReolScan RC5.3 – Testresultat
Metode: Playwright/Chromium med 2× skærmtæthed på PC (1280×800), tablet (820×1180) og mobil (390×844, touch), samt aflæsning af downloadet PDF.

**Branding og layout: 45 bestået, 0 fejlet.**
**Regression RC5.1-suite (ingen tegning, reoler, skader, foto, underskrift, PDF, backup/import, lagerfejl): 32 bestået, 0 fejlet.**
**Regression RC5.2-suite (adressesøgning mus/touch/tastatur, fejlhåndtering): 41 bestået, 0 fejlet.**

## Branding, læsbarhed og kontrast
- ✅ PC logo indlæst (indlejret data-URI, ægte billede) — 416px kilde, vist 142×30
- ✅ PC topbjælke i Reoler-blå + lyseblå streg — rgb(0, 48, 95) / rgb(101, 189, 218)
- ✅ PC navnet "ReolScan" bevaret ved siden af logoet
- ✅ PC ingen vandret scroll / logo klippes ikke
- ✅ PC forsiden uændret (tiles) — ["▶","📂","📄"]
- ✅ PC primær knap i Reoler-blå med hvid tekst — rgb(0, 48, 95)|rgb(255, 255, 255)
- ✅ PC aktiv fane/trin i brandfarver (+ lyseblå markering) — {"c":"rgb(0, 48, 95)","bg":"rgb(232, 240, 248)","bs":"rgb(101, 189, 218) 0px -3px 0px 0px inset","tn":"rgb(0, 48, 95)"}
- ✅ PC overskrifter i Reoler-blå — rgb(0, 48, 95)
- ✅ PC "← Forside"-knap helt synlig i topbjælken (eftersynsvisning) — {"r":1260,"w":102.46875,"vw":1280,"d":"flex"}
- ✅ PC dashboard-tal i Reoler-blå — rgb(0, 48, 95)
- ✅ PC grøn/gul/rød uændret — #2E9E5B,#F2B705,#D6334A
- ✅ PC lys variant vises på lys baggrund (Licens & Version)
- ✅ PC PDF downloadet
- ✅ TABLET logo indlæst (indlejret data-URI, ægte billede) — 416px kilde, vist 142×30
- ✅ TABLET topbjælke i Reoler-blå + lyseblå streg — rgb(0, 48, 95) / rgb(101, 189, 218)
- ✅ TABLET navnet "ReolScan" bevaret ved siden af logoet
- ✅ TABLET ingen vandret scroll / logo klippes ikke
- ✅ TABLET forsiden uændret (tiles) — ["▶","📂","📄"]
- ✅ TABLET primær knap i Reoler-blå med hvid tekst — rgb(0, 48, 95)|rgb(255, 255, 255)
- ✅ TABLET aktiv fane/trin i brandfarver (+ lyseblå markering) — {"c":"rgb(0, 48, 95)","bg":"rgb(232, 240, 248)","bs":"rgb(101, 189, 218) 0px -3px 0px 0px inset","tn":"rgb(0, 48, 95)"}
- ✅ TABLET overskrifter i Reoler-blå — rgb(0, 48, 95)
- ✅ TABLET "← Forside"-knap helt synlig i topbjælken (eftersynsvisning) — {"r":800,"w":102.46875,"vw":820,"d":"flex"}
- ✅ TABLET dashboard-tal i Reoler-blå — rgb(0, 48, 95)
- ✅ TABLET grøn/gul/rød uændret — #2E9E5B,#F2B705,#D6334A
- ✅ TABLET lys variant vises på lys baggrund (Licens & Version)
- ✅ MOBIL logo indlæst (indlejret data-URI, ægte billede) — 416px kilde, vist 113×24
- ✅ MOBIL topbjælke i Reoler-blå + lyseblå streg — rgb(0, 48, 95) / rgb(101, 189, 218)
- ✅ MOBIL navnet "ReolScan" bevaret ved siden af logoet
- ✅ MOBIL ingen vandret scroll / logo klippes ikke
- ✅ MOBIL forsiden uændret (tiles) — ["▶","📂","📄"]
- ✅ MOBIL primær knap i Reoler-blå med hvid tekst — rgb(0, 48, 95)|rgb(255, 255, 255)
- ✅ MOBIL aktiv fane/trin i brandfarver (+ lyseblå markering) — {"c":"rgb(0, 48, 95)","bg":"rgb(232, 240, 248)","bs":"rgb(101, 189, 218) 0px -3px 0px 0px inset","tn":"rgb(0, 48, 95)"}
- ✅ MOBIL overskrifter i Reoler-blå — rgb(0, 48, 95)
- ✅ MOBIL "← Forside"-knap helt synlig i topbjælken (eftersynsvisning) — {"r":376,"w":94.46875,"vw":390,"d":"flex"}
- ✅ MOBIL dashboard-tal i Reoler-blå — rgb(0, 48, 95)
- ✅ MOBIL grøn/gul/rød uændret — #2E9E5B,#F2B705,#D6334A
- ✅ MOBIL lys variant vises på lys baggrund (Licens & Version)
- ✅ Appen henter intet fra reoler-as.dk (logoet er lokalt)
- ✅ Ingen JavaScript-fejl
- ✅ Kontrast hvid på topbjælke (#fff / #00305F) — 13.2:1 (krav 4,5:1)
- ✅ Kontrast hvid på primær knap hover (#fff / #0B4478) — 9.9:1 (krav 4,5:1)
- ✅ Kontrast lyseblå accent på topbjælke (#65BDDA / #00305F) — 6.2:1 (krav 4,5:1)
- ✅ Kontrast undertekst på topbjælke (#9FB3C8 / #00305F) — 6.1:1 (krav 4,5:1)
- ✅ Kontrast aktiv fane tekst (#00305F / #E8F0F8) — 11.5:1 (krav 4,5:1)
- ✅ Kontrast overskrift på hvid (#00305F / #fff) — 13.2:1 (krav 4,5:1)

## PDF
- Downloadet rapport (5 sider): logoet findes som indlejret billede på **alle** sider (kontrolleret med `pdfimages`) og er gengivet visuelt på side 1 og 2 (se screenshots/).
- poppler skriver "Bad image parameters" ved aflæsning. Meldingen findes også i RC5.2-PDF'en og stammer fra QR-billedets gennemsigtighed, ikke fra logoet. QR-koden vises korrekt.

## Fundet og rettet under test
Mobil: det bredere logo skubbede "← Forside" ud over skærmkanten. Rettet (brødkrumme skjules/forkortes på små skærme) og dækket af test.

## Forbehold
- Logofilen er kun 200 px bred. Det er skarpt nok i topbjælken, men vil se blødt ud ved kraftig forstørrelse og i print. **Send gerne logoet som SVG (eller PNG ≥ 1000 px bred, evt. den hvide SVG fra hjemmesiden), så skifter jeg det ud** – ellers er "mørk baggrund"-varianten en udledt omvendt version.
- Hjemmesidens CSS kunne ikke læses herfra. Profilblå er målt i logoet (#00305F), lyseblå kommer fra hjemmesiden (#65BDDA). Har Reoler A/S en designguide med officielle hex-koder, kan de ændres ét sted (CSS-variablerne i toppen).
- Ikke testet på fysiske enheder (emuleret tablet/mobil). Appikon/favicon er ikke ændret.
