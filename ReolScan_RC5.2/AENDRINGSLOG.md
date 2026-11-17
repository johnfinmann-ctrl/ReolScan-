# ReolScan RC5.2 – Ændringslog (kun adressesøgning)
Udgangspunkt: RC5.1. "Ingen tegning – fortsæt" og alle øvrige RC5.1-funktioner, data og design er uændrede. GitHub er IKKE opdateret.

## Rettelser i automatisk adressesøgning
1. **Standardtoken:** `getAddrToken()` returnerer nu `adressevaelger123`, hvis intet andet er angivet – brugeren skal ikke konfigurere noget. Tokenet kan stadig ændres under System → Standardværdier → Adresseforslag (tomt felt eller "Brug standardtoken" gendanner standard). Kun et afvigende token gemmes.
2. **Svarformat:** forslag læses fra `data.fund` (dubletter fjernes; tekst fra `titel`).
3. **Parametre:** `maksimum=8` i stedet for `maxResults`. Kald: `GET https://adressevaelger.dk/husnumre/soeg?tekst=…&maksimum=8&token=…`.
4. Forslag vises direkte under feltet fra 3 tegn (300 ms debounce). Valg udfylder hele adressen; gælder både "Start nyt eftersyn" og Stamdata-fanen.
5. **Touch:** valg sker nu på `click` i stedet for `touchend`, så scroll i forslagslisten ikke vælger en adresse ved et uheld. Mus og tastatur (↑ ↓ Enter Esc) virker.
6. **Fejl:** forståelige beskeder ved offline, afvist token og når tjenesten ikke svarer ("Adressetjenesten svarer ikke lige nu. Skriv adressen manuelt."). Detaljer logges som `console.warn`. Manuel indtastning virker altid.
7. Versionsnavn: ReolScan RC5.2.

## Forbehold
Endpoint-stien (`/husnumre/soeg`) og feltet `titel` er uændret fra RC5.1 og følger din rettelsesliste; de er ikke verificeret mod den rigtige tjeneste (se testresultat).
