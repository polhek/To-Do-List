import './styles/style.css';
import { toggleChevron } from './views/chevronItemToggle';
import {
  newProjectFactory,
  newProjectEvent,
  myProjects,
  newProject,
  saveToLocalStorage,
  loadProjectsFromLocal,
} from './models/projectFactory';
import { addProjectUI, deleteItemUI } from './views/projectView';
import { emptyForm } from './views/emptyProjectForm';
import { deleteProject } from './models/deleteProject';
import { defaultProject } from './models/defaultProject';
import {
  clickedProject,
  idClickedProject,
  resetClickedProject,
} from './views/clickedProjectView';
import { newToDoEvent, newToDo } from './models/toDoFactory';
import { appendToDo, cleanToDoView, deletToDoUI } from './views/toDoView';
import { deleteToDoFromObject } from './models/deleteToDo';
import { emptyToDoForm } from './views/emptyToDoForm';
import { editTodo, clickedToDoIndex, editFinish } from './models/editToDo';

// DOM Elements
const tableListener = document.getElementById('tbody');
const projectListDiv = document.querySelector('.left-nav');
const newProjectListener = document.getElementById('projectFormListener');
const newToDoListener = document.getElementById('todoFormListener');
const toDoTitle = document.getElementById('nameToDo');
const description = document.getElementById('toDoDescription');
const dueDate = document.getElementById('toDoDate');
const priority = document.getElementById('toDoPriority');
const note = document.getElementById('toDoNote');
const editToDo = document.getElementById('edittodoFormListener');

// Variables
let toDoIndex;
let clickedProjectIndex = 0;

loadProjectsFromLocal();
if (myProjects.length === 0) {
  defaultProject();
}

// Add new project!

newProjectListener.addEventListener('submit', (event) => {
  event.preventDefault();
  const newProjectTitle = document.getElementById('newProjectName').value;

  if (newProjectTitle !== '') {
    newProjectEvent(event);
    addProjectUI(newProject);
    saveToLocalStorage(myProjects);
    emptyForm();
  }
});

// Delete project, adding event listeners to all future trash buttons for projects...
window.addEventListener('click', (event) => {
  const element = event.target.classList.contains('bi-trash')
    ? event.target.parentElement
    : event.target.classList.contains('trash-project')
    ? event.target
    : false;
  if (element) {
    const itemToRemove = element.parentElement.parentElement;
    deleteProject(itemToRemove);
    deleteItemUI(itemToRemove);
    cleanToDoView();
    localStorage.clear();
    saveToLocalStorage(myProjects);
  }
});

// clicked project

projectListDiv.addEventListener('click', (event) => {
  if (event.target.tagName == 'P') {
    resetClickedProject();
    clickedProject(event);
    clickedProjectIndex = idClickedProject(event);
    cleanToDoView();
    render();
  }
});

// new to do...
newToDoListener.addEventListener('submit', (event) => {
  event.preventDefault();
  if (
    toDoTitle.value !== '' ||
    description.value !== '' ||
    dueDate.value !== '' ||
    priority.value !== '' ||
    note.value !== ''
  ) {
    newToDoEvent(event, clickedProjectIndex);
    const toDo = newToDo;
    appendToDo(toDo);

    saveToLocalStorage(myProjects);
    emptyToDoForm();
  }
});

tableListener.addEventListener('click', (event) => {
  let element = event.target.classList.contains('delete')
    ? event.target.parentElement.parentElement
    : event.target.classList.contains('fa-check')
    ? event.target.parentElement.parentElement.parentElement
    : false;
  if (element) {
    const deleteItem = element;
    deleteToDoFromObject(deleteItem, clickedProjectIndex);
    deletToDoUI(deleteItem);
    localStorage.clear();
    saveToLocalStorage(myProjects);
  }
});

window.addEventListener('click', (event) => {
  let element = event.target.classList.contains('edit-button')
    ? event.target.parentElement.parentElement
    : event.target.classList.contains('fa-pencil-square-o')
    ? event.target.parentElement.parentElement.parentElement
    : false;
  if (element) {
    toDoIndex = clickedToDoIndex(event, element);
    editTodo(clickedProjectIndex, toDoIndex);
  }
});

editToDo.addEventListener('submit', (event) => {
  event.preventDefault();
  editFinish(clickedProjectIndex, toDoIndex);
  cleanToDoView();
  render();
  localStorage.clear();
  saveToLocalStorage(myProjects);
});

const render = () => {
  myProjects[clickedProjectIndex].toDos.forEach((todo) => {
    appendToDo(todo);
  });
};

const initialLoad = () => {
  myProjects.forEach((project) => {
    addProjectUI(project);
    console.log(project);
    const projectHeader = document.querySelector('.projectName');
    projectHeader.textContent = project.title;
  });
};
initialLoad();

const initalTodoLoad = () => {
  myProjects[0].toDos.forEach((todo) => {
    appendToDo(todo);
  });
};
initalTodoLoad();
