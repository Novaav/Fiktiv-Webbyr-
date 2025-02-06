// hero.html
document.addEventListener("DOMContentLoaded", () => {
    console.log("Webbyråns sida har laddats!");
});

// kontakt.html
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        formMessage.textContent = "Tack för ditt meddelande! Vi återkommer snart.";
        formMessage.style.color = "green";

        contactForm.reset();
    });
});

// omoss.html
document.addEventListener("DOMContentLoaded", function() {
    console.log("Sidan har laddats");

    // Exempel på interaktivitet
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(member => {
        member.addEventListener("click", function() {
            alert(`Du klickade på ${this.querySelector("h3").innerText}`);
        });
    });
});