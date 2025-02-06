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

            // Importera JavaScript för specifika sidor
            if (url.includes("varatjanster")) {
                import("./ts/varatjanster").then(() => console.log("📜 `varatjanster.ts` laddad."));
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

    // 🏠 Ladda startsidan (ändra till önskad startsida)
    loadPage("/src/pages/varatjanster.html");
});
