# Template

# Webbyrå Git Workflow

Detta dokument beskriver vårt arbetsflöde för versionshantering med Git, inklusive commit-regler, Git Flow-strategi och PR-rutiner.

---

##  Branch-struktur (Git Flow)
Vi använder en modifierad version av **Git Flow** med följande huvudbrancher:

- `main` → **Endast godkända och testade releaser mergas hit**.
- `develop` → **Här sker den löpande utvecklingen av nya funktioner**.

Utöver dessa har vi:

- **Feature branches** (`feature/namn-på-funktion`) → För nya funktioner
- **Bugfix branches** (`bugfix/beskrivning`) → För att fixa buggar
- **Hotfix branches** (`hotfix/kritisk-fix`) → För kritiska buggar i `main`

###  Branch-flöde
1. **Nya funktioner utvecklas i en `feature` branch** (utgår från `develop`)
2. **När en feature är klar skapas en PR till `develop`**
3. **När en release är redo skapas en PR från `develop` till `main`**
4. **Bugfixar och hotfixar hanteras i egna brancher och merge:as tillbaka**

---

##  Commit-regler

###  Våra commit-regler
- **Gör små commits**: En commit ska representera en logisk förändring.
- **Undvik onödiga commits**: Slå ihop (squash) mindre commits innan push.
- **Använd branches**: Skapa feature-branches istället för att commit’a direkt i `main`.

Varje commit-meddelande ska följa konventionen:

```
<typ>: <kort beskrivning>

<valfri längre beskrivning>
```

###  Typer av commits
| Typ           | Beskrivning |
|--------------|------------|
| `feat`       | Ny funktionalitet |
| `fix`        | Buggfix |
| `docs`       | Dokumentationsändring |
| `style`      | Kodstil (ej logik) |
| `refactor`   | Omstrukturering av kod |
| `test`       | Tester och testuppdateringar |
| `chore`      | Övrigt underhåll (ex. beroenden) |

**Exempel:**
```
feat: lägg till kontaktformulär på webbyråns sida

La till en ny sektion för att kunder ska kunna kontakta oss direkt via webbsidan.
```

---

## PR-rutiner (Pull Requests)

###  Skapa en Pull Request (PR)
- När en feature eller bugfix är klar, skapa en PR från din branch till `develop`.
- **Titel**: PR-titeln ska vara kort och beskriva ändringen, t.ex. "Lägg till användarregistrering".
- **Beskrivning**: Förklara vad som har ändrats och varför. Om det finns relaterade buggar eller funktioner, länka till dem.

###  Granskning av PR
- När en PR öppnas, ska minst en annan teammedlem granska den innan den slås samman till `develop`.
- Se till att koden följer projektets kodstandarder och att inga konflikter finns.
- Granskaren ska testa koden för att säkerställa att allt fungerar som förväntat.

### Godkänna och merga PR
- När PR är godkänd, ska den slås samman till `develop`-branchen.
- Om det är en stor ändring, kan det vara bra att ha en staging-branch för att testa innan den slås samman till `develop`.

###  Hantera Merge-konflikter
- Om det uppstår konflikter, lös dessa på den aktuella branchen innan PR slås samman.

---

## Deployment-process

1. När `develop` är redo för release → Skapa en PR till `main`
2. Efter merge till `main` → Skapa en **release-tag**
3. Deploy till produktion sker efter godkänd QA-testning

---

## Sammanfattning
- Använd **Git Flow** med `main` och `develop`
- Följ commit-konventioner (`feat:`, `fix:`, osv.)
- Skapa PRs med tydliga beskrivningar och tagga reviewers
- 



---

## Våra resultat under processen
Nedan beskriver vi om något i processen behöver kanske förtydligas lite extra.

## Versionshantering och Arbetsflöde

Vi har arbetat enligt Git-flow där vi har:
- Skapat feature-branches för nya funktioner.
- Mergeat kod via pull requests till `develop`.
- Använt separata branches för bugfixar och hotfixes.
- Löste merge-konflikter manuellt vid behov.

### Hotfixes
För att snabbt fixa kritiska buggar skapade vi en **hotfix-branch** direkt från `main`. Vi löste problemet, testade och mergeade tillbaka till `main` och `develop`.

**Exempel:**
```sh
git checkout main
git pull origin main
git checkout -b hotfix-fix-header
# Fixar buggen i koden...
git add .
git commit -m "Hotfix: Fixar header.ts för en bugg"
git checkout main
git merge hotfix-fix-header
git checkout develop
git merge hotfix-fix-header
git push origin main develop


