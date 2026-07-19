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
},
{
title: "Law 11: Learn to Keep People Dependent on You",
text: "Maintain value by developing skills, knowledge, or resources that others rely on.",
challenge: "Identify one skill you can strengthen that increases your independence."
},
{
title: "Law 12: Use Selective Honesty and Generosity to Disarm Others",
text: "A sincere gesture at the right moment can build trust and influence.",
challenge: "Offer genuine help today without expecting immediate return."
},
{
title: "Law 13: When Asking for Help, Appeal to Self-Interest",
text: "People are more motivated when they understand how helping benefits them.",
challenge: "Frame one request today around shared value."
},
{
title: "Law 14: Pose as a Friend, Work as a Spy",
text: "Observe carefully and gather understanding before making decisions.",
challenge: "Listen closely today and learn something new about someone."
},
{
title: "Law 15: Crush Your Enemy Totally",
text: "Resolve conflicts completely rather than allowing problems to return.",
challenge: "Finish one unresolved task or conflict."
},
{
title: "Law 16: Use Absence to Increase Respect and Honor",
text: "Constant availability can reduce perceived value. Space can create appreciation.",
challenge: "Create intentional quiet time for yourself."
},
{
title: "Law 17: Keep Others in Suspended Terror",
text: "Predictability can reduce influence. Maintain flexibility.",
challenge: "Change one routine today to practice adaptability."
},
{
title: "Law 18: Do Not Build Fortresses to Protect Yourself",
text: "Isolation can create weakness. Maintain relationships and connections.",
challenge: "Reach out to someone who supports your growth."
},
{
title: "Law 19: Know Who You Are Dealing With",
text: "Different personalities require different approaches.",
challenge: "Pay attention to someone's communication style today."
},
{
title: "Law 20: Do Not Commit to Anyone",
text: "Maintain independence and avoid unnecessary limitations.",
challenge: "Review where you may be giving away too much control."
},
{
title: "Law 21: Play a Sucker to Catch a Sucker",
text: "Sometimes appearing less threatening gives you an advantage.",
challenge: "Observe before revealing your full knowledge."
},
{
title: "Law 22: Use the Surrender Tactic",
text: "Strategic retreat can create opportunities for future success.",
challenge: "Choose one situation where patience serves you better than force."
},
{
title: "Law 23: Concentrate Your Forces",
text: "Focus your energy on the areas with the greatest impact.",
challenge: "Prioritize your most important goal today."
},
{
title: "Law 24: Play the Perfect Courtier",
text: "Social awareness and diplomacy create influence.",
challenge: "Practice thoughtful communication today."
},
{
title: "Law 25: Re-Create Yourself",
text: "You have the power to intentionally shape your identity.",
challenge: "Take one action aligned with your future self."
},
{
title: "Law 26: Keep Your Hands Clean",
text: "Protect your reputation by avoiding unnecessary blame.",
challenge: "Handle one situation with professionalism."
},
{
title: "Law 27: Play on People's Need to Believe",
text: "People are influenced by meaning, purpose, and belonging.",
challenge: "Notice what inspires people today."
},
{
title: "Law 28: Enter Action With Boldness",
text: "Confidence increases the chance of success.",
challenge: "Take one bold step toward a goal."
},
{
title: "Law 29: Plan All the Way to the End",
text: "Think beyond the immediate moment.",
challenge: "Map out your next steps for a goal."
},
{
title: "Law 30: Make Your Accomplishments Seem Effortless",
text: "Preparation allows excellence to appear natural.",
challenge: "Prepare quietly before showing your work."
},
{
title: "Law 31: Control the Options",
text: "Give others choices that serve your goals while allowing them to feel in control.",
challenge: "Offer choices today instead of forcing a single outcome."
},
{
title: "Law 32: Play to People's Fantasies",
text: "People are often motivated by hopes, dreams, and possibilities.",
challenge: "Notice what inspires someone today."
},
{
title: "Law 33: Discover Each Person's Thumbscrew",
text: "Understanding people's motivations gives you insight and influence.",
challenge: "Pay attention to what motivates someone."
},
{
title: "Law 34: Be Royal in Your Own Fashion",
text: "How you carry yourself influences how others treat you.",
challenge: "Practice confidence through your posture and communication."
},
{
title: "Law 35: Master the Art of Timing",
text: "Knowing when to act is as important as knowing what to do.",
challenge: "Pause and consider timing before making a decision."
},
{
title: "Law 36: Disdain Things You Cannot Have",
text: "Ignoring what you cannot control prevents it from controlling you.",
challenge: "Release attention from one thing outside your control."
},
{
title: "Law 37: Create Compelling Spectacles",
text: "Images and presentation can create stronger impact than words alone.",
challenge: "Improve the presentation of something important today."
},
{
title: "Law 38: Think as You Like but Behave Like Others",
text: "Adapt socially while maintaining your own beliefs.",
challenge: "Practice flexibility in a social situation."
},
{
title: "Law 39: Stir Up Waters to Catch Fish",
text: "Emotions can reveal information, but use awareness carefully.",
challenge: "Observe reactions before responding emotionally."
},
{
title: "Law 40: Despise the Free Lunch",
text: "Understand the hidden costs behind seemingly free opportunities.",
challenge: "Evaluate what you receive and what you exchange."
},
{
title: "Law 41: Avoid Stepping Into a Great Person's Shoes",
text: "Create your own identity rather than living in someone else's shadow.",
challenge: "Define one quality that makes you unique."
},
{
title: "Law 42: Strike the Shepherd and the Sheep Will Scatter",
text: "Influential individuals often shape group behavior.",
challenge: "Identify key influences in your environment."
},
{
title: "Law 43: Work on the Hearts and Minds of Others",
text: "Lasting influence comes from understanding people.",
challenge: "Connect with someone's perspective today."
},
{
title: "Law 44: Disarm and Infuriate With the Mirror Effect",
text: "Reflecting behavior can reveal patterns and influence interactions.",
challenge: "Notice communication patterns today."
},
{
title: "Law 45: Preach the Need for Change, but Never Reform Too Much at Once",
text: "People accept change more easily when it happens gradually.",
challenge: "Make one small improvement instead of many changes at once."
},
{
title: "Law 46: Never Appear Too Perfect",
text: "Small imperfections can make you more relatable.",
challenge: "Allow yourself to be authentic today."
},
{
title: "Law 47: Do Not Go Past the Mark You Aimed For",
text: "Know when enough is enough. Overreaching can undo success.",
challenge: "Recognize when to stop and preserve progress."
},
{
title: "Law 48: Assume Formlessness",
text: "Adaptability creates strength in changing circumstances.",
challenge: "Practice flexibility when plans change today."
}
];
<script>
const laws = [
  {
    title: "Law 1: Never Outshine the Master",
    challenge: "Practice humility today.",
    reflection: "Where can you recognize others?"
  },
  {
    title: "Law 2: Never Put Too Much Trust in Friends",
    challenge: "Observe actions over words.",
    reflection: "Who has earned your trust?"
  },
  {
    title: "Law 3: Conceal Your Intentions",
    challenge: "Be strategic with your plans.",
    reflection: "Did you reveal too much today?"
  },
  {
    title: "Law 4: Always Say Less Than Necessary",
    challenge: "Practice intentional silence.",
    reflection: "Where could fewer words help?"
  }
];

let currentLaw = 0;

function showLaw() {
  const law = laws[currentLaw];

  document.getElementById("lawTitle").innerHTML = law.title;
  document.getElementById("challenge").innerHTML = law.challenge;
  document.getElementById("reflection").innerHTML = law.reflection;

  currentLaw++;

  if (currentLaw >= laws.length) {
    currentLaw = 0;
  }
}
</script>

function getDailyLaw() {
    const today = new Date();
    const day = today.getDate();
    return laws[day % laws.length];
}

function displayLaw(law) {
    document.getElementById("law-title").textContent = law.title;
    document.getElementById("law-text").textContent = law.text;
    document.getElementById("challenge").textContent = law.reflection;
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
