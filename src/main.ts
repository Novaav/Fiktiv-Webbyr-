/// <reference types="vite/client" />



import { createHeader } from "./ts/header";
import { createFooter } from "./ts/footer";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");
    if (!root) {
        console.error("Element with id 'app' not found");
        return;
    }

    // Flytta existerande innehåll innan det skrivs över
    const existingContent = Array.from(root.childNodes);

    // Rensa #app innan vi bygger strukturen
    root.innerHTML = "";

    // Lägg till header
    root.appendChild(createHeader());

    // Skapa en wrapper för innehållet
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");

    // Lägg tillbaka det tidigare innehållet i content-wrapper
    existingContent.forEach(node => contentWrapper.appendChild(node));

    root.appendChild(contentWrapper);
    root.appendChild(createFooter());
});
