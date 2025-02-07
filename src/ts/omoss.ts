document.addEventListener("DOMContentLoaded", () => {
    console.log("Sidan har laddats");

    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(member => {
        member.addEventListener("click", function () {
            const name = this.querySelector("h3")?.innerText || "Okänd";
            alert(`Du klickade på ${name}`);
        });
    });
});
