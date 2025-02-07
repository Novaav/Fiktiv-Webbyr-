// /// <reference types="vite/client" />

// import { createHeader } from "./ts/header";
// import { createFooter } from "./ts/footer";

// document.addEventListener("DOMContentLoaded", () => {
//     const root = document.getElementById("app");
//     if (!root) {
//         console.error("❌ Elementet med id 'app' hittades inte!");
//         return;
//     }

//     // Rensa och bygg om sidan
//     root.innerHTML = "";
//     root.appendChild(createHeader());

//     const contentWrapper = document.createElement("div");
//     contentWrapper.classList.add("content-wrapper");
//     root.appendChild(contentWrapper);
    
//     root.appendChild(createFooter());

//     // 🔄 Dynamisk sidladdning
//     async function loadPage(url: string) {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error(`Sidan kunde inte laddas: ${url}`);

//             const html = await response.text();
//             contentWrapper.innerHTML = html; // Ladda in HTML-innehållet
//             console.log(`✅ Laddade sida: ${url}`);

//             // Importera JavaScript för specifika sidor
//             if (url.includes("varatjanster")) {
//                 import("./ts/varatjanster").then(() => console.log("📜 `varatjanster.ts` laddad."));
//             }
//         } catch (error) {
//             console.error("❌ Fel vid laddning av sidan:", error);
//             contentWrapper.innerHTML = "<h2>😢 Kunde inte ladda sidan!</h2>";
//         }
//     }

//     // Lyssna på navigationsmenyns länkar
//     document.querySelectorAll("nav a").forEach(link => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault();
//             const url = link.getAttribute("href");
//             if (url) {
//                 loadPage(url);
//             }
//         });
//     });

//     // 🏠 Ladda startsidan (ändra till önskad startsida)
//     loadPage("/src/pages/varatjanster.html");
// });


// import { createHeader } from "./header";
// import { createFooter } from "./footer";

// document.addEventListener("DOMContentLoaded", () => {
//     const root = document.getElementById("app");
//     if (!root) {
//         console.error("❌ Elementet med id 'app' hittades inte!");
//         return;
//     }

//     // Rensa och bygg om sidan
//     root.innerHTML = "";
//     root.appendChild(createHeader());

//     const contentWrapper = document.createElement("div");
//     contentWrapper.classList.add("content-wrapper");
//     root.appendChild(contentWrapper);
    
//     root.appendChild(createFooter());

//     // 🔄 Dynamisk sidladdning
//     async function loadPage(url: string) {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error(`Sidan kunde inte laddas: ${url}`);

//             const html = await response.text();
//             contentWrapper.innerHTML = html;
//             console.log(`✅ Laddade sida: ${url}`);

//             // 🛠 Dynamisk import av .ts-filer
//             if (url.includes("hero")) {
//                 import("./hero").then(() => console.log("📜 `hero.ts` laddad."));
//             } else if (url.includes("kontakt")) {
//                 import("./kontakt").then(() => console.log("📜 `kontakt.ts` laddad."));
//             } else if (url.includes("omoss")) {
//                 import("./omoss").then(() => console.log("📜 `omoss.ts` laddad."));
//             }
//         } catch (error) {
//             console.error("❌ Fel vid laddning av sidan:", error);
//             contentWrapper.innerHTML = "<h2>😢 Kunde inte ladda sidan!</h2>";
//         }
//     }

//     // Lyssna på navigationsmenyns länkar
//     document.querySelectorAll("nav a").forEach(link => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault();
//             const url = link.getAttribute("href");
//             if (url) {
//                 loadPage(url);
//             }
//         });
//     });

//     // 🏠 Ladda startsidan (hero.html)
//     loadPage("/src/pages/hero.html");
// });



/// <reference types="vite/client" />

import { createHeader } from "./ts/header";
import { createFooter } from "./ts/footer";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");
    if (!root) {
        console.error("❌ Elementet med id 'app' hittades inte!");
        return;
    }

    // Rensa och bygg om sidan
    root.innerHTML = "";
    root.appendChild(createHeader());

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");
    root.appendChild(contentWrapper);

    root.appendChild(createFooter());

    // 🔄 Dynamisk sidladdning
    async function loadPage(url: string) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Sidan kunde inte laddas: ${url}`);

            const html = await response.text();
            contentWrapper.innerHTML = html; // Ladda in HTML-innehållet
            console.log(`✅ Laddade sida: ${url}`);

            // Importera TS-filer baserat på URL
            if (url.includes("varatjanster")) {
                import("./ts/varatjanster").then(() => console.log("📜 `varatjanster.ts` laddad."));
            } else if (url.includes("kunduppdrag")) {
                import("./ts/kunduppdrag").then(() => console.log("📜 `kunduppdrag.ts` laddad."));
            } else if (url.includes("hero")) {
                import("./ts/hero").then(() => console.log("📜 `hero.ts` laddad."));
            } else if (url.includes("kontakt")) {
                import("./ts/kontakt").then(() => console.log("📜 `kontakt.ts` laddad."));
            } else if (url.includes("omoss")) {
                import("./ts/omoss").then(() => console.log("📜 `omoss.ts` laddad."));
            }
        } catch (error) {
            console.error("❌ Fel vid laddning av sidan:", error);
            contentWrapper.innerHTML = "<h2>😢 Kunde inte ladda sidan!</h2>";
        }
    }

    // Lyssna på navigationsmenyns länkar
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const url = link.getAttribute("href");
            if (url) {
                loadPage(url);
            }
        });
    });

    // 🏠 Ladda startsidan (Hero som första sida)
    loadPage("/src/pages/hero.html");
});
