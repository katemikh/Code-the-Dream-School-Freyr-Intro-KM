function addCopyrightToFooter() {
  const today = new Date();
  const thisYear = today.getFullYear();

  const footer = document.querySelector("footer");
  const copyright = document.createElement("p");
  copyright.innerHTML = `&copy; ${thisYear} Kateryna Mikhailiuk`;
  footer.appendChild(copyright);
}

function createSkillsList() {
  const skillsWithIcons = [
    { skill: "HTML5", icon: "media/img-skills/html.png" },
    { skill: "CSS3", icon: "media/img-skills/css3.png" },
    { skill: "JavaScript", icon: "media/img-skills/js.png" },
    { skill: "Bootstrap", icon: "media/img-skills/bootstrap.png" },
    { skill: "API", icon: "media/img-skills/api.png" },
    { skill: "GSAP", icon: "media/img-skills/gsap-bw.png" },
    { skill: "Figma", icon: "media/img-skills/figma.png" },
    { skill: "React", icon: "media/img-skills/react.png" },
    // Add more skills and icons as needed
  ];

  const boxSkills = document.querySelector(".box__skills");

  // Loop through skills array and create list items with icons
  skillsWithIcons.forEach((skillData) => {
    const listItem = document.createElement("li");
    const skillIcon = document.createElement("img");

    listItem.textContent = skillData.skill;
    skillIcon.src = skillData.icon;
    skillIcon.alt = `${skillData.skill} Icon`;

    listItem.appendChild(skillIcon);
    boxSkills.appendChild(listItem);
  });
}

function setupLeaveMessageForm() {
  // DOM Selection
  const messageForm = document.forms.leave_message;
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  // Event Listener
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form field values
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log form field values
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    //  Clear the form fields
    event.target.reset();

    //or
    //messageForm.reset();

    // Create new list item
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName} wrote: </a>
      <span>${usersMessage}</span>
    `;
    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.classList.add("btn-remove");
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
    editButton.classList.add("btn-edit");
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
    messageSection.style.display = "flex";
  });
}

//Projects

function fetchAndDisplayProjects() {
  // Create a Fetch API GET request to the GitHub API URL
  fetch("https://api.github.com/users/katemikh/repos")
    // Chain a "then" method to handle the response and parse it as JSON
    .then((response) => response.json())
    // Chain another "then" method to handle the parsed JSON data
    .then((repositories) => {
      // Log the list of repositories in the console
      console.log(repositories);

      const projectSection = document.getElementById("projects");
      const projectList = projectSection.querySelector("ul");

      // Specifying the repository names to display
      const targetRepositoryNames = [
        "js-lets-split-our-bill",
        "js-embraer-presentation-countdown",
        "Methed-Warm-Floor",
        "js-travel-destination-search",
      ];

      for (let i = 0; i < repositories.length; i++) {
        const repositoryName = repositories[i].name;

        // Check if the current repository name is in the target list
        if (targetRepositoryNames.includes(repositoryName)) {
          const project = document.createElement("li");
          const repoLink = document.createElement("a");
          repoLink.href = repositories[i].html_url;
          repoLink.textContent = repositoryName;

          const description = document.createElement("p");
          description.textContent = repositories[i].description;

          // const language = document.createElement("span");
          // language.textContent = "Language: " + repositories[i].language;

          project.appendChild(repoLink);
          project.appendChild(description);
          // project.appendChild(language);
          projectList.appendChild(project);
        }
      }
    })
    // Chain a "catch" method to handle errors (optional)
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}

// Burger Menu

// function setupBurgerMenu() {
//   let burgerMenu = document.querySelector("#burger-menu");
//   let overlay = document.querySelector("#menu");

//   burgerMenu.addEventListener("click", function () {
//     this.classList.toggle("close");
//     overlay.classList.toggle("overlay");
//   });

// }

//Burger Menu Corr

function setupBurgerMenu() {
  let burgerMenu = document.querySelector("#burger-menu");
  let overlay = document.querySelector("#menu");
  let menuLi = document.querySelectorAll(".menu__li"); // Select all menu items

  function closeMenu() {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
  }

  // Toggle menu when burger icon is clicked
  burgerMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });

  // Close menu when clicking anywhere on the document
  document.addEventListener("click", function (event) {
    if (!overlay.contains(event.target) && !burgerMenu.contains(event.target)) {
      closeMenu();
    }
  });

  // Close menu when the window resizes
  window.addEventListener("resize", closeMenu);

  // Close menu when a menu item is clicked
  menuLi.forEach((menuItem) => {
    menuItem.addEventListener("click", closeMenu);
  });
}

// Call the functions to execute the code
addCopyrightToFooter();
createSkillsList();
setupLeaveMessageForm();
fetchAndDisplayProjects();
setupBurgerMenu();
