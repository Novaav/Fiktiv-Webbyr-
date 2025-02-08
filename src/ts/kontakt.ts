
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm") as HTMLFormElement;
    const formMessage = document.getElementById("formMessage") as HTMLParagraphElement;

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            formMessage.textContent = "Tack för ditt meddelande! Vi återkommer snart.";
            formMessage.style.color = "green";

            contactForm.reset();
        });
    }
});
