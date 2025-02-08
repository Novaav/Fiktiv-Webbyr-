// header.ts
import { createNavbar } from "./nav";

export function createHeader(): HTMLElement {
    const header = document.createElement("header");
    header.classList.add("header");

    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.classList.add("logo");
    logoLink.textContent = "Whinehouse .";

    const nav = createNavbar();
    
    header.appendChild(logoLink);
    header.appendChild(nav);

    return header;
}


