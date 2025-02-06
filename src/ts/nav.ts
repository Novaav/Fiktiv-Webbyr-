export function createNavbar(): HTMLElement {
    const nav = document.createElement("nav");
    nav.classList.add("navbar");

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.innerHTML = "&#9776;"; // Hamburger icon
    
    const ul = document.createElement("ul");
    ul.classList.add("nav-list");

    const links = [
        { text: "Hem", url: "/src/pages/index.html" },
        { text: "Kontakt", url: "/src/pages/kontakt.html" },
        { text: "Kunduppdrag", url: "/public/kunduppdrag.html" },
        { text: "Om oss", url: "/src/pages/omoss.html" },
        { text: "Våra Tjänster", url: "/public/varatjanster.html" }
    ];
    
    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;

        // No need to reload the page, just let the link work
        li.appendChild(a);
        ul.appendChild(li);
    });

    menuButton.addEventListener("click", () => {
        ul.classList.toggle("show");
    });

    nav.appendChild(menuButton);
    nav.appendChild(ul);

    return nav;
}
