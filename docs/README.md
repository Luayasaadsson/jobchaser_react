# JobChaser Applikation README

Denna applikation låter användare söka efter och hantera en lista med lediga jobb och förbättrar användarupplevelsen genom att erbjuda olika funktioner för att filtrera, sortera och spåra intressanta jobb.

## Översikt
JobChaser-applikationen ger användare möjlighet att söka efter lediga jobb baserat på olika kriterier som titel, nyckelord och företag. Den erbjuder även funktionalitet för att spara intressanta jobb och spåra deras status. Dessutom kan användare filtrera och sortera jobblistan för att hitta relevanta jobb snabbt och enkelt.

## Installation

1. Klona detta projekt till din dator med git clone https://github.com/Luayasaadsson/jobchaser_react.
Navigera till projektmappen och installera alla nödvändiga beroenden med kommandot npm install.
Starta applikationen genom att köra kommandot npm run dev i terminalen och öppna sedan webbläsaren och navigera till den angivna URL:en.

## Användning

### Sök efter jobb

Användare kan söka efter lediga jobb genom att skriva in relevanta söktermer i sökfältet och trycka på Enter eller klicka på sökknappen. Jobben som matchar söktermen visas i listan nedan.

### Filtrera och sortera jobb

Användare kan filtrera jobblistan baserat på kategorier och sortera dem efter olika kriterier som nyaste först eller äldsta först. Detta gör det enkelt för användare att hitta de mest relevanta jobben snabbt.

### Utökad funktionalitet

För att ytterligare förbättra användarupplevelsen erbjuder JobChaser-applikationen följande funktioner:

- **Kategorifilter**: Användare kan filtrera jobblistan baserat på olika kategorier för att hitta specifika typer av jobb.

- **Sökförslag**: När användare börjar skriva i sökfältet visas automatiskt förslag på relevanta söktermer för att underlätta sökprocessen.

- **Scroll knapp**: Användaren kan enkelt ta sig från mitten eller till och med botten av sidan till start med ett knapptryck. 

## Resonemang

### Designbeslut

Jag valde en ren och minimalistisk design för att fokusera på att ge användare en enkel och intuitiv upplevelse när de använder JobChaser-applikationen. Genom att hålla gränssnittet rent och överskådligt kan användare fokusera på att hitta relevanta jobb utan distraktioner.

För att förbättra användarupplevelsen implementerade jag även funktioner som sökförslag och kategorifilter för att göra det snabbt och enkelt för användare att hitta det de letar efter.

### Implementeringsval

Jag valde att använda React för att bygga JobChaser-applikationen på grund av dess modularitet och effektiva hantering av tillståndet. Genom att använda Redux Toolkit kunde jag enkelt hantera applikationens tillstånd och dela data mellan olika komponenter.

För att förbättra gränssnittet och ge användare tydliga visuella ledtrådar valde jag att använda FontAwesome-ikoner och CSS-moduler för att styla komponenterna.

## Styrkor

- **Användarvänligt gränssnitt**: Applikationen har en enkel och intuitiv design som gör det enkelt för användare att navigera och använda alla funktioner.

- **Effektiv tillståndshantering**: Redux Toolkit gör det enkelt att hantera applikationens tillstånd och dela data mellan olika komponenter.

- **Responsiv design**: Gränssnittet är responsivt och fungerar bra på olika enheter och skärmstorlekar.

- **Dark/Light mode knapp**: För att förbättra gränssnittet har jag implementerat in en knapp som möjliggör för användaren att växla mellan mörkt och ljust läge. 

## Brister

- **Användargränssnittets utseende**: Gränssnittet kan förbättras för att vara mer visuellt tilltalande och attraktivt.

- **Beroende av externa API:er**: Applikationen är beroende av externa API:er för att hämta jobbdata, vilket kan göra den sårbar för fel om API:erna blir otillgängliga eller ändras.

- **Brist på enhetstester**: Koden saknar enhetstester, vilket gör det svårare att upptäcka och åtgärda potentiella buggar och felaktigheter.

- **Optimeringsbehov**: Gränssnittets prestanda kan förbättras genom optimering av laddningstider och responstider.

- **Favoritsida**: Favoritsidan är inte klar, och behöver vidare utveckling. Användaren kan just nu trycka på spara knappen i varje jobbartikel, men det går ej att spara jobb.

## Teknologier

- React
- Redux Toolkit
- TypeScript
- CSS Modules
- FontAwesome