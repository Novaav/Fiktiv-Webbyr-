// footer.ts
export function createFooter(): HTMLElement {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const container = document.createElement("div");
    container.classList.add("footer-container");

    const col1 = document.createElement("div");
    col1.classList.add("footer-column");
    col1.innerHTML = `<h3>Kontakt</h3><p>Email: info@whinehouse.com</p><p>Telefon: 123-456 789</p>`;

    const col2 = document.createElement("div");
    col2.classList.add("footer-column");
    col2.innerHTML = `<h3>Snabblänkar</h3><ul><li><a href="index.html">Hem</a></li><li><a href="kunduppdrag.html">Kunduppdrag</a></li><li><a href="om-oss.html">Om oss</a></li></ul>`;

    const col3 = document.createElement("div");
    col3.classList.add("footer-column");
    col3.innerHTML = `<h3>Sociala Medier</h3><ul><li><a href="#">Facebook</a></li><li><a href="#">Instagram</a></li><li><a href="#">LinkedIn</a></li></ul>`;

    container.appendChild(col1);
    container.appendChild(col2);
    container.appendChild(col3);
    footer.appendChild(container);

    return footer;
}