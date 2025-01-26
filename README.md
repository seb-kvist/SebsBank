SebsBank Console Application
Overview

SebsBank är en enkel bankapplikation byggd med TypeScript, där användare kan logga in, se sitt saldo, sätta in och ta ut pengar. Applikationen använder objektorienterad programmering (OOP) med egna klasser för att hantera bankoperationer. Programmet innehåller en meny med olika val där användaren kan interagera med sitt konto och se sina transaktioner.
Key Features:

    Användarinloggning: Möjlighet att logga in med användarnamn och lösenord. För teständamål finns en standardanvändare med användarnamn "test" och lösenord "test".
    Saldo: Visa aktuell saldo.
    Insättning och Uttag: Möjlighet att sätta in eller ta ut pengar från kontot.
    Meny: En meny som ger användaren fyra alternativ:
        Se saldo
        Sätt in pengar
        Ta ut pengar
        Avsluta
    Programflöde: Efter varje val i menyn visas den igen för att tillåta flera interaktioner tills användaren väljer att avsluta.

Files:

    index.ts: Huvudfilen för applikationen som innehåller programflödet och hanterar användarinteraktion.
    SebsBank.ts: Fil för bankklassen som hanterar banklogik och kontoinformation.
    User.ts: Fil för användarklassen som hanterar inloggning och användardata.
    sebBankApp.tsproj: TypeScript-projektfil.

Installation

    Klona detta repository:

git clone <repository-url>

    Navigera till projektmappen:

cd SebsBank

    Installera alla nödvändiga beroenden:

npm install

    Bygg och kör applikationen:

npm start

Usage

    När du startar programmet kommer du att uppmanas att logga in med användarnamn och lösenord. För teständamål kan du använda "test" som både användarnamn och lösenord.
    Efter inloggning kommer du att mötas av en meny med följande alternativ:
        Se saldo - Visa det aktuella saldot på ditt konto.
        Sätt in pengar - Ange beloppet du vill sätta in på kontot.
        Ta ut pengar - Ange beloppet du vill ta ut från ditt konto (måste vara mindre än eller lika med saldo).
        Avsluta - Avsluta programmet och logga ut användaren.
    Efter varje val, förutom "Avsluta", kommer menyn att visas igen för ytterligare val.

Development

För att ändra eller utöka funktionaliteten i applikationen kan du:

    Modifiera index.ts för att ändra hur menyn och användarinteraktionen hanteras.
    Ändra SebsBank.ts för att lägga till fler bankfunktioner eller modifiera existerande logik.
    Redigera User.ts för att uppdatera inloggningssystemet eller lägga till fler användarklasser.

Technologies Used

    TypeScript
    Node.js
