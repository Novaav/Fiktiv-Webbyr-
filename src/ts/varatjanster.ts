document.addEventListener("DOMContentLoaded", () => {
    const services = [
        { title: "Webbdesign", description: "Vi skapar moderna och responsiva webbplatser.", icon: "🌐" },
        { title: "Front-end utveckling", description: "Vi bygger interaktiva och dynamiska webblösningar.", icon: "💻" },
        { title: "UX/UI Design", description: "Optimerad design för bästa användarupplevelse.", icon: "🎨" },
        { title: "SEO & Marknadsföring", description: "Vi hjälper dig att synas på Google.", icon: "📈" },
        { title: "E-handel", description: "Vi bygger skalbara e-handelslösningar.", icon: "🛒" },
        { title: "Support & Underhåll", description: "Vi ser till att din sajt alltid fungerar.", icon: "🔧" }
    ];

    const serviceContainer = document.getElementById("services-container");

    if (serviceContainer) {
        serviceContainer.innerHTML = ""; // Rensar gammalt innehåll
        services.forEach(service => {
            const serviceCard = document.createElement("div");
            serviceCard.classList.add("service-card");
            serviceCard.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            serviceContainer.appendChild(serviceCard);
        });
    }
});

export function init() {
    console.log("Modul laddad!");
  }
  