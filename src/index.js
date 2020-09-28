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
import { defaultProject } from "./models/defaultProject";
import {
  clickedProject,
  idClickedProject,
  resetClickedProject,
} from "./views/clickedProjectView";
import { toDoFactory, newToDoEvent, newToDo } from "./models/toDoFactory";
import { appendToDo, cleanToDoView, deletToDoUI } from "./views/toDoView";
import { deleteToDoFromObject } from "./models/deleteToDo";
import { emptyToDoForm } from "./views/emptyToDoForm";
import { editTodo, clickedToDoInd, clickedToDoIndex, editFinish } from "./models/editToDo";

// DOM Elements
const tableListener = document.getElementById("tbody");
const projectListDiv = document.querySelector(".left-nav");
const newProjectListener = document.getElementById("projectFormListener");
const newToDoListener = document.getElementById("todoFormListener");
const toDoTitle = document.getElementById("nameToDo");
const description = document.getElementById("toDoDescription");
const dueDate = document.getElementById("toDoDate");
const priority = document.getElementById("toDoPriority");
const note = document.getElementById("toDoNote");
const editToDo = document.getElementById("edittodoFormListener");
const editButton = document.getElementsByClassName("edit-button");

// Variables
let toDoIndex;
let clickedProjectIndex = 0;
defaultProject();
// Add new project!

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

// Delete project, adding event listeners to all future trash buttons for projects...
window.addEventListener("click", (event) => {
  let element = event.target.classList.contains("bi-trash")
    ? event.target.parentElement
    : event.target.classList.contains("trash-project")
    ? event.target
    : false;
  if (element) {
    let itemToRemove = element.parentElement.parentElement;
    deleteProject(itemToRemove);
    deleteItemUI(itemToRemove);
    cleanToDoView();
  }
});

// clicked project

projectListDiv.addEventListener("click", (event) => {
  if (event.target.tagName == "P") {
    resetClickedProject();
    clickedProject(event);
    clickedProjectIndex = idClickedProject(event);
    cleanToDoView();
    render();
    //loop through array of todos in project, and render them...
    // myProjects[clickedProjectIndex].toDos.forEach((todo) => {
    //   appendToDo(todo);
    // });
  }
});

// new to do...
newToDoListener.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    toDoTitle.value == "" ||
    description.value == "" ||
    dueDate.value == "" ||
    priority.value == "" ||
    note.value == ""
  ) {
  } else {
    newToDoEvent(event, clickedProjectIndex);
    let toDo = newToDo;
    appendToDo(toDo);
    emptyToDoForm();
  }
});

tableListener.addEventListener("click", (event) => {
  let element = event.target.classList.contains("delete")
    ? event.target.parentElement.parentElement
    : event.target.classList.contains("fa-check")
    ? event.target.parentElement.parentElement.parentElement
    : false;
  if (element) {
    let deleteItem = element;
    deleteToDoFromObject(deleteItem, clickedProjectIndex);
    deletToDoUI(deleteItem);
  }
});

window.addEventListener("click", (event) => {
  let element = event.target.classList.contains("edit-button")
    ? event.target.parentElement.parentElement
    : event.target.classList.contains("fa-pencil-square-o")
    ? event.target.parentElement.parentElement.parentElement
    : false;
  if (element) {
    toDoIndex = clickedToDoIndex(event, element);
    editTodo(clickedProjectIndex, toDoIndex);
  }
});

editToDo.addEventListener("submit", (event) => {
  event.preventDefault();
  editFinish(clickedProjectIndex, toDoIndex);
  cleanToDoView();
  render();
});


const render = () => {
  myProjects[clickedProjectIndex].toDos.forEach((todo) => {
    appendToDo(todo);
  });
}