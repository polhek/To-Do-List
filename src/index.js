import "./styles/style.css";
import { toggleChevron } from "./views/chevronItemToggle";
import {
  newProjectFactory,
  newProjectEvent,
  myProjects,
  newProject,
} from "./models/projectFactory";
import { addProjectUI, deleteItemUI } from "./views/projectView";
import { emptyForm } from "./views/emptyProjectForm";
import { deleteProject } from "./models/deleteProject";

// Add new project!
const newProjectListener = document.getElementById("projectFormListener");
newProjectListener.addEventListener("submit", (event) => {
  event.preventDefault();
  const newProjectTitle = document.getElementById("newProjectName").value;

  if (newProjectTitle == "") {
  } else {

    newProjectEvent(event);
    addProjectUI(newProject);
    emptyForm();
  }
});

// Delete project!
window.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("trash") &&
    event.target.classList.contains("bi-trash") &&
    event.target.classList.contains("bi")
  ) {
    let itemToRemove = event.target.parentNode.parentNode;
    if (itemToRemove.parentNode.hasChildNodes()) {
      deleteProject(itemToRemove);
      deleteItemUI(event);
    }
  }
});
