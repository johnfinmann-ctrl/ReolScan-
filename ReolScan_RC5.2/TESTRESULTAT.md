# ReolScan RC5.2 – Testresultat
Metode: Playwright/Chromium, PC 1280×800 (mus + tastatur) og mobil 390×844 (touch). Adresse-API simuleret efter den beskrevne spec (svar i `fund`, token `adressevaelger123`, parameter `maksimum`, 401 ved forkert token, 503 ved nedbrud).

**RC5.2 adressesøgning: 41 bestået, 0 fejlet.**
**RC5.1-regression (adresse, ingen tegning, reoler, skader, foto, underskrift, afslut, PDF, backup/import, lagerfejl, mobil): 32 bestået, 0 fejlet.**

## RC5.2 – detaljer
- ✅ PC standardtoken bruges uden konfiguration
- ✅ PC under 3 tegn: ingen forslag/kald
- ✅ PC "Rådhuspladsen 1": forslag vises under feltet — Rådhuspladsen 1, 1550 København V | Rådhuspladsen 1A, 1550 København V | Rådhuspladsen 10, 1550 København V
- ✅ PC API-parametre: tekst, maksimum, token (ikke maxResults) — ?tekst=R%C3%A5dhuspladsen%201&maksimum=8&token=adressevaelger123
- ✅ PC liste ligger direkte under feltet
- ✅ PC mus: valg udfylder hele adressen — Rådhuspladsen 1A, 1550 København V
- ✅ PC liste lukkes efter valg
- ✅ PC tastatur: ↓↓ + Enter vælger andet forslag — Vestergade 5, 5000 Odense C
- ✅ PC tastatur: Esc lukker listen
- ✅ PC 8 forslag (maksimum) vises
- ✅ PC manuel adresse bevares
- ✅ PC tjeneste nede (503): forståelig besked, manuel mulig — Adressetjenesten svarer ikke lige nu. Skriv adressen manuelt.
- ✅ PC felt virker stadig efter fejl
- ✅ PC stamdata-fane: valg gemmes på eftersynet
- ✅ PC regression: "Ingen tegning – fortsæt" → Reolregister
- ✅ PC System viser standardtoken og kan ændres
- ✅ PC eget token gemmes og bruges
- ✅ PC tom/nulstil → standardtoken
- ✅ PC Test-knap i System virker — ✅ Virker – fx: Rådhuspladsen 1, 1550 København V
- ✅ PC ingen JS-/konsolfejl (bortset fra tilsigtet 503-test) — console.error: Failed to load resource: net::ERR_TUNNEL_CONNECTION_FAILED @https://fonts.googleapis.com/css2?family=Oswald:wght@500;600 | console.error: Failed to load resource: the server responded with a status of 503 (Service Unavailable) @https://adressevaelger.dk/husnumre/soeg?tekst=R%C3%A5dhuspla
- ✅ MOBIL standardtoken bruges uden konfiguration
- ✅ MOBIL under 3 tegn: ingen forslag/kald
- ✅ MOBIL "Rådhuspladsen 1": forslag vises under feltet — Rådhuspladsen 1, 1550 København V | Rådhuspladsen 1A, 1550 København V | Rådhuspladsen 10, 1550 København V
- ✅ MOBIL API-parametre: tekst, maksimum, token (ikke maxResults) — ?tekst=R%C3%A5dhuspladsen%201&maksimum=8&token=adressevaelger123
- ✅ MOBIL liste ligger direkte under feltet
- ✅ MOBIL touch: valg udfylder hele adressen — Rådhuspladsen 1, 1550 København V
- ✅ MOBIL liste lukkes efter valg
- ✅ MOBIL tastatur: ↓↓ + Enter vælger andet forslag — Vestergade 5, 5000 Odense C
- ✅ MOBIL tastatur: Esc lukker listen
- ✅ MOBIL 8 forslag (maksimum) vises
- ✅ MOBIL manuel adresse bevares
- ✅ MOBIL tjeneste nede (503): forståelig besked, manuel mulig — Adressetjenesten svarer ikke lige nu. Skriv adressen manuelt.
- ✅ MOBIL felt virker stadig efter fejl
- ✅ MOBIL stamdata-fane: valg gemmes på eftersynet
- ✅ MOBIL regression: "Ingen tegning – fortsæt" → Reolregister
- ✅ MOBIL System viser standardtoken og kan ændres
- ✅ MOBIL eget token gemmes og bruges
- ✅ MOBIL tom/nulstil → standardtoken
- ✅ MOBIL Test-knap i System virker — ✅ Virker – fx: Rådhuspladsen 1, 1550 København V
- ✅ MOBIL ingen JS-/konsolfejl (bortset fra tilsigtet 503-test) — console.error: Failed to load resource: net::ERR_TUNNEL_CONNECTION_FAILED @https://fonts.googleapis.com/css2?family=Oswald:wght@500;600 | console.error: Failed to load resource: the server responded with a status of 503 (Service Unavailable) @https://adressevaelger.dk/husnumre/soeg?tekst=R%C3%A5dhuspla
- ✅ MOBIL ingen vandret scroll

## Konsol
Ingen JavaScript-fejl. Eneste konsolposter: tilsigtet 503 i fejltesten og Google Fonts, som testmiljøet blokerer.

## IKKE verificeret – skal prøves hos dig
**Live-kald mod adressevaelger.dk er ikke udført** (testmiljøets proxy blokerer domænet). Åbn System → Standardværdier → "Test adresseforslag", eller skriv "Rådhuspladsen 1" i adressefeltet med internetforbindelse. Virker det ikke, send mig fejlteksten fra browserkonsollen (F12 → Console) eller et eksempel på det rå svar, så justerer jeg sti/feltnavne.
