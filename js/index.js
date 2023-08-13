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

// lesson-4-3
// DOM Selection
  const messageForm = document.forms.leave_message;
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");


  // Event Listener
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

// Retrieve form field values
  const usersName = event.target.usersName.value;
//const usersName = messageForm.usersName.value;
  const usersEmail = event.target.usersEmail.value;
//const usersEmail = messageForm.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
//const usersMessage = messageForm.usersMessage.value;

// Log form field values
  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

//  Clear the form fields
  event.target.reset();
//or

// Clear form fields
//messageForm.reset();

// Create new list item
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span> <br>
  `;

// Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
  entry.remove();

// Check if the message list is empty
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  }
});

// Create edit button
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.type = "button";
  editButton.addEventListener("click", function () {
    const entry = editButton.parentNode;
    const span = entry.querySelector("span");
    const editedMessage = prompt("Edit the message:", span.textContent);
      if (editedMessage !== null) {
      span.textContent = editedMessage;
      }
});


// Append edit button, remove button, and new message to list
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

// Show the message section
  messageSection.style.display = "block";

});