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


// Add new project!
const newProjectListener = document.getElementById("projectFormListener");
newProjectListener.addEventListener("submit", (event) => {
  newProjectEvent(event);
  addProjectUI(newProject);
  emptyForm();
});

// Delete project!
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("trash") && event.target.classList.contains("bi-trash") && event.target.classList.contains("bi") ) {
    
    deleteItemUI(event)
    
  }
});
