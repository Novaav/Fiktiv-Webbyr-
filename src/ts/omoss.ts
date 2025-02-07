document.addEventListener("DOMContentLoaded", () => {
    console.log("Sidan har laddats");

    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(member => {
        member.addEventListener("click", () => {
            const name = member.querySelector("h3")?.innerText || "Okänd";
            alert(`Du klickade på ${name}`);
        });
    });
});

export function init() {
    console.log("Modul laddad!");
}

