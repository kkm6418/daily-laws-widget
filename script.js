const laws = [
    {
        title: "Law 1: Never Outshine the Master",
        text: "Make those above you feel superior. Do not reveal your talents in a way that threatens their position.",
        challenge: "Observe one conversation today and practice listening more than speaking."
    },
    {
        title: "Law 2: Never Put Too Much Trust in Friends",
        text: "Understand motivations and choose alliances carefully.",
        challenge: "Notice what motivates the people around you."
    },
    {
        title: "Law 3: Conceal Your Intentions",
        text: "Keep your plans private until the right moment.",
        challenge: "Practice speaking less about your next move."
    }
];

function getDailyLaw() {
    const today = new Date();
    const day = today.getDate();
    return laws[day % laws.length];
}

function displayLaw(law) {
    document.getElementById("law-title").textContent = law.title;
    document.getElementById("law-text").textContent = law.text;
    document.getElementById("challenge").textContent = law.challenge;
}

displayLaw(getDailyLaw());

document.getElementById("randomLaw").onclick = function() {
    const random = laws[Math.floor(Math.random() * laws.length)];
    displayLaw(random);
};


const reflection = document.getElementById("reflection");
const savedMessage = document.getElementById("savedMessage");

reflection.value = localStorage.getItem("reflection") || "";

document.getElementById("saveReflection").onclick = function() {
    localStorage.setItem("reflection", reflection.value);
    savedMessage.textContent = "Saved ✓";
};


const completed = document.getElementById("completed");

completed.checked = localStorage.getItem("completed") === "true";

completed.onclick = function() {
    localStorage.setItem("completed", completed.checked);
};