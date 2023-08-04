const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Kateryna Mikhailiuk`;
footer.appendChild(copyright);

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "API",
  "GSAP",
  "Figma",
  "Excellent written and verbal communication skills",
  "Strong organizational and time-management skills",
  "Proven problem-solving abilities with quick and effective issue resolution",
  "Ability to work independently and in a fast-paced, dynamic environment",
  "Proficient in Microsoft Office, including MS Project ",
];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");
