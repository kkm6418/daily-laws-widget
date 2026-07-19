const laws = [

{
number: 1,
title: "Never Outshine the Master",
summary: "Make people above you feel secure and superior. Avoid creating insecurity by making your abilities appear threatening.",
challenge: "Recognize someone's contribution today before highlighting your own.",
reflection: "How can I demonstrate confidence while still making others feel valued?"
},

{
number: 2,
title: "Never Put Too Much Trust in Friends",
summary: "Relationships can change. Judge people by their actions, reliability, and incentives rather than familiarity alone.",
challenge: "Observe actions rather than promises today.",
reflection: "Who has consistently earned my trust through behavior?"
},

{
number: 3,
title: "Conceal Your Intentions",
summary: "Keep your plans private until the right moment. Strategic patience can protect your goals.",
challenge: "Listen more than you explain today.",
reflection: "Where would more discretion strengthen my position?"
},

{
number: 4,
title: "Always Say Less Than Necessary",
summary: "Power often comes from restraint. The more you say, the more opportunities you create for misunderstanding.",
challenge: "Practice intentional silence during one conversation.",
reflection: "Did saying less make my words more impactful?"
},

{
number: 5,
title: "So Much Depends on Reputation",
summary: "Your reputation shapes how others perceive and treat you. Protect it carefully.",
challenge: "Take one action today that strengthens your reputation.",
reflection: "What reputation am I actively building?"
},

{
number: 6,
title: "Court Attention at All Costs",
summary: "Visibility matters. Being overlooked can limit influence and opportunity.",
challenge: "Share one valuable idea or accomplishment today.",
reflection: "Where am I allowing myself to remain invisible?"
},

{
number: 7,
title: "Get Others to Do the Work for You",
summary: "Leverage knowledge, skills, and resources around you while maintaining leadership.",
challenge: "Find one way to collaborate instead of doing everything alone.",
reflection: "Where could delegation create better results?"
},

{
number: 8,
title: "Make Other People Come to You",
summary: "Create value and attraction so others seek your influence rather than chasing them.",
challenge: "Improve something valuable about yourself today.",
reflection: "What makes people want to engage with me?"
},

{
number: 9,
title: "Win Through Actions, Never Through Argument",
summary: "Results are often more persuasive than debates.",
challenge: "Let an action demonstrate your point today.",
reflection: "Where could I replace arguing with demonstrating?"
},

{
number: 10,
title: "Avoid the Unhappy and Unlucky",
summary: "Negative patterns and attitudes can influence your own success.",
challenge: "Protect your energy by choosing positive interactions.",
reflection: "Who or what drains my focus?"
},

{
number: 11,
title: "Learn to Keep People Dependent on You",
summary: "Develop skills and value that make your contributions meaningful.",
challenge: "Improve one skill that increases your personal value.",
reflection: "What unique value do I provide?"
},

{
number: 12,
title: "Use Selective Honesty and Generosity",
summary: "Strategic acts of sincerity and kindness can build trust.",
challenge: "Offer genuine help without expecting immediate return.",
reflection: "How can generosity strengthen my relationships?"
},

{
number: 13,
title: "When Asking for Help, Appeal to Self-Interest",
summary: "People are more motivated when they understand how helping benefits them.",
challenge: "Frame one request around mutual benefit.",
reflection: "Am I considering the other person's perspective?"
},

{
number: 14,
title: "Pose as a Friend, Work as a Spy",
summary: "Observe carefully and gather information before making decisions.",
challenge: "Listen closely and learn something new about someone.",
reflection: "What information am I missing before acting?"
},

{
number: 15,
title: "Crush Your Enemy Totally",
summary: "Leaving unresolved conflicts can allow problems to return.",
challenge: "Resolve one lingering issue instead of avoiding it.",
reflection: "What unfinished conflict needs attention?"
},

{
number: 16,
title: "Use Absence to Increase Respect and Honor",
summary: "Constant availability can reduce perceived value. Strategic distance can increase appreciation.",
challenge: "Create intentional space for yourself today.",
reflection: "Where would boundaries improve my influence?"
},

{
number: 17,
title: "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
summary: "Being completely predictable makes you easier to control. Strategic unpredictability keeps others attentive.",
challenge: "Change one routine today in a thoughtful way.",
reflection: "Where have I become too predictable?"
},

{
number: 18,
title: "Do Not Build Fortresses to Protect Yourself",
summary: "Isolation can create weakness. Strong relationships and awareness provide better protection.",
challenge: "Reach out and strengthen one relationship today.",
reflection: "Am I protecting myself or isolating myself?"
},

{
number: 19,
title: "Know Who You Are Dealing With",
summary: "Different people require different approaches. Understanding personalities prevents unnecessary conflict.",
challenge: "Pay attention to someone's motivations before responding.",
reflection: "Do I adapt my approach to different people?"
},

{
number: 20,
title: "Do Not Commit to Anyone",
summary: "Maintain independence and avoid unnecessary limitations from premature alliances.",
challenge: "Evaluate where you may be giving away too much control.",
reflection: "Where could I preserve more independence?"
},

{
number: 21,
title: "Play a Sucker to Catch a Sucker",
summary: "Sometimes appearing less capable can encourage others to reveal information or underestimate you.",
challenge: "Observe more than you reveal today.",
reflection: "When has patience helped me gain an advantage?"
},

{
number: 22,
title: "Use the Surrender Tactic",
summary: "Strategic surrender can create opportunities and conserve energy for future wins.",
challenge: "Choose one situation where patience is more valuable than resistance.",
reflection: "Where could stepping back create a better outcome?"
},

{
number: 23,
title: "Concentrate Your Forces",
summary: "Focused effort creates greater impact than scattered attention.",
challenge: "Choose one priority and give it your full attention.",
reflection: "What deserves more of my focus?"
},

{
number: 24,
title: "Play the Perfect Courtier",
summary: "Social intelligence, respect, and diplomacy increase influence.",
challenge: "Practice thoughtful communication today.",
reflection: "How can I improve my social awareness?"
},

{
number: 25,
title: "Re-Create Yourself",
summary: "Do not accept limits placed on you. Intentionally shape your identity.",
challenge: "Take one action aligned with the person you want to become.",
reflection: "Who am I actively becoming?"
},

{
number: 26,
title: "Keep Your Hands Clean",
summary: "Protect your reputation and avoid unnecessary involvement in conflict.",
challenge: "Handle one situation with professionalism and restraint.",
reflection: "How do I want others to remember my actions?"
},

{
number: 27,
title: "Play on People's Need to Believe",
summary: "People are drawn to purpose, meaning, and vision.",
challenge: "Share encouragement or inspiration with someone today.",
reflection: "What vision motivates my actions?"
},

{
number: 28,
title: "Enter Action With Boldness",
summary: "Confidence and decisive action often create momentum.",
challenge: "Take one meaningful action you have been delaying.",
reflection: "Where would more courage help me?"
},

{
number: 29,
title: "Plan All the Way to the End",
summary: "Think beyond the immediate moment and consider consequences.",
challenge: "Create a plan for one important goal.",
reflection: "What future outcome should guide my choices?"
},

{
number: 30,
title: "Make Your Accomplishments Seem Effortless",
summary: "Grace and preparation create an impression of mastery.",
challenge: "Prepare thoroughly while maintaining calm confidence.",
reflection: "How can I improve my presence?"
},

{
number: 31,
title: "Control the Options",
summary: "Guide choices by shaping the available possibilities.",
challenge: "Present solutions instead of only problems.",
reflection: "How can I create better choices?"
},

{
number: 32,
title: "Play to People's Fantasies",
summary: "People are motivated by hopes and aspirations.",
challenge: "Connect with someone's goals today.",
reflection: "What hopes influence my decisions?"
},
{
number: 33,
title: "Discover Each Man's Thumbscrew",
summary: "Understand people's motivations, weaknesses, and desires to communicate more effectively.",
challenge: "Pay attention to what motivates someone today.",
reflection: "What motivates the people around me?"
},

{
number: 34,
title: "Be Royal in Your Own Fashion",
summary: "Carry yourself with confidence and self-respect because others often treat you according to how you value yourself.",
challenge: "Practice confident posture and communication today.",
reflection: "How do I show others my own value?"
},

{
number: 35,
title: "Master the Art of Timing",
summary: "Knowing when to act is as important as knowing what action to take.",
challenge: "Pause before making one important decision today.",
reflection: "Where would patience improve my results?"
},

{
number: 36,
title: "Disdain Things You Cannot Have",
summary: "Giving attention to what you cannot control gives it power over you.",
challenge: "Redirect energy toward what you can influence.",
reflection: "What am I giving too much attention to?"
},

{
number: 37,
title: "Create Compelling Spectacles",
summary: "Images and experiences can communicate more powerfully than words.",
challenge: "Make one interaction memorable today.",
reflection: "How do I create a stronger impression?"
},

{
number: 38,
title: "Think as You Like but Behave Like Others",
summary: "Maintain your individuality while understanding social expectations.",
challenge: "Observe the environment before challenging it.",
reflection: "How can I balance authenticity and awareness?"
},

{
number: 39,
title: "Stir Up Waters to Catch Fish",
summary: "Emotional reactions can reveal opportunities and information.",
challenge: "Stay calm when others become emotional.",
reflection: "How do emotions affect my decisions?"
},

{
number: 40,
title: "Despise the Free Lunch",
summary: "Free offers often come with hidden costs or expectations.",
challenge: "Evaluate what something truly costs before accepting it.",
reflection: "Where should I value quality over convenience?"
},

{
number: 41,
title: "Avoid Stepping Into a Great Man's Shoes",
summary: "Create your own identity instead of living in someone else's shadow.",
challenge: "Define one thing that makes your path unique.",
reflection: "What separates my journey from others?"
},

{
number: 42,
title: "Strike the Shepherd and the Sheep Will Scatter",
summary: "Influential individuals often shape group behavior.",
challenge: "Identify key influences in a situation.",
reflection: "Who or what drives the decisions around me?"
},

{
number: 43,
title: "Work on the Hearts and Minds of Others",
summary: "True influence comes from understanding emotions and perspectives.",
challenge: "Practice empathy during a conversation.",
reflection: "How well do I understand others' needs?"
},

{
number: 44,
title: "Disarm and Infuriate With the Mirror Effect",
summary: "Mirroring behavior can reveal patterns and create awareness.",
challenge: "Reflect someone's communication style respectfully.",
reflection: "What do people's reactions reveal?"
},

{
number: 45,
title: "Preach the Need for Change, But Never Reform Too Much at Once",
summary: "People resist sudden disruption. Change is more successful when introduced gradually.",
challenge: "Make one small improvement instead of a major overhaul.",
reflection: "Where would gradual change work better?"
},

{
number: 46,
title: "Never Appear Too Perfect",
summary: "Perfection can create distance. Showing humanity builds connection.",
challenge: "Allow yourself to be authentic today.",
reflection: "Where can vulnerability strengthen relationships?"
},

{
number: 47,
title: "Do Not Go Past the Mark You Aimed For",
summary: "Know when enough is enough. Overreaching can undo success.",
challenge: "Recognize when to stop and preserve your progress.",
reflection: "Where might restraint improve my outcomes?"
},

{
number: 48,
title: "Assume Formlessness",
summary: "Remain adaptable. Flexibility allows you to respond effectively to changing circumstances.",
challenge: "Adapt to one unexpected situation today.",
reflection: "How can flexibility become a strength?"
}

];


const startDate = new Date(2026, 0, 1);
const today = new Date();

const difference = Math.floor(
  (today - startDate) / (1000 * 60 * 60 * 24)
);

const lawIndex = difference % laws.length;

const todayLaw = laws[lawIndex];

document.getElementById("lawNumber").textContent =
  "LAW " + todayLaw.number;

document.getElementById("lawTitle").textContent =
  todayLaw.title;

document.getElementById("lawSummary").textContent =
  todayLaw.summary;

document.getElementById("challenge").textContent =
  todayLaw.challenge;

document.getElementById("reflection").textContent =
  todayLaw.reflection;

document.getElementById("day").textContent =
  todayLaw.number;
document.getElementById("progressBar").style.width =
(todayLaw.number / 48 * 100) + "%";