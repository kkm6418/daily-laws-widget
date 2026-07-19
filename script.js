const laws = [
{
title: "Law 1: Never Outshine the Master",
text: "Make those above you feel superior. Avoid displaying your talents too openly in a way that threatens their position.",
challenge: "Practice observing more than speaking today. Notice how influence often comes from restraint."
},
{
title: "Law 2: Never Put Too Much Trust in Friends; Learn How to Use Enemies",
text: "Understand that loyalty and self-interest can conflict. Choose alliances carefully.",
challenge: "Observe people's actions today rather than only their words."
},
{
title: "Law 3: Conceal Your Intentions",
text: "Keep your plans private until the right moment. Mystery can create influence.",
challenge: "Share less about your next move and focus on execution."
},
{
title: "Law 4: Always Say Less Than Necessary",
text: "Powerful people often communicate with precision. Avoid revealing too much.",
challenge: "Pause before responding and remove unnecessary words."
},
{
title: "Law 5: So Much Depends on Reputation—Guard It With Your Life",
text: "Your reputation shapes how others perceive your value and credibility.",
challenge: "Do one thing today that strengthens your reputation."
},
{
title: "Law 6: Court Attention at All Costs",
text: "Visibility matters. Being unnoticed can limit your influence.",
challenge: "Share an idea, accomplishment, or contribution today."
},
{
title: "Law 7: Get Others to Do the Work for You, but Always Take the Credit",
text: "Use collaboration and resources wisely while recognizing contributions.",
challenge: "Identify one way to delegate or collaborate more effectively."
},
{
title: "Law 8: Make Other People Come to You",
text: "Create value that attracts opportunities instead of constantly chasing them.",
challenge: "Improve something today that makes people seek you out."
},
{
title: "Law 9: Win Through Your Actions, Never Through Argument",
text: "Demonstrate results rather than trying to convince everyone verbally.",
challenge: "Let your actions prove your point today."
},
{
title: "Law 10: Infection: Avoid the Unhappy and Unlucky",
text: "Energy and attitudes can spread. Be mindful of influences around you.",
challenge: "Notice which environments increase or drain your energy."
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
