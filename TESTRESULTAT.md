# ReolScan RC5.3 – Testresultat (version med logo-filer)
- Branding (PC/tablet/mobil, kontrast, PDF-logo): 45 bestået, 0 fejlet
- Regression RC5.1 (ingen tegning, reoler, skader, foto, underskrift, PDF, backup/import, lagerfejl): 32 bestået, 0 fejlet
- Regression RC5.2 (adressesøgning mus/touch/tastatur): 41 bestået, 0 fejlet
- Logo-filer: 13 bestået, 0 fejlet

## Logo-filer
- ✅ A (åbnet som fil) topbjælke henter logo fra logo/-filen — {"nw":624,"src":"file:///tmp/site/logo/reoler-a"}
- ✅ A PDF genereres (reserve-logo hvis browseren blokerer fil-læsning) — pdfLogo sat: false
- ✅ A ingen JS-fejl
- ✅ B (http/GitHub Pages) topbjælke henter logo fra logo/-filen — {"nw":624,"src":"http://localhost:8765/logo"}
- ✅ B PDF-logo fladlagt fra filen
- ✅ B PDF indeholder logo på forsiden — 10 billeder
- ✅ B ingen JS-fejl
- ✅ C udskiftet logofil vises i topbjælken (rød testfil, 600 px) — [600,220,40,40]
- ✅ C udskiftet logo vises også i PDF-sidehovedet — (218, 39, 39)
- ✅ C ingen JS-fejl
- ✅ D logo-mappe mangler: indlejret reserve vises — {"nw":416,"src":"data:image/png;base64,"}
- ✅ D PDF genereres med reserve-logo
- ✅ D ingen JS-fejl (404 på logofil er forventet)

Se tidligere TESTRESULTAT for detaljer om branding, kontrast og skærmbilleder (uændret funktion).
