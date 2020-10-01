export {
  newProjectFactory,
  saveToLocalStorage,
  newProjectEvent,
  myProjects,
  newProject,
  loadProjectsFromLocal,
};

import { toDoFactory } from './toDoFactory';

let myProjects = [];
let newProject;
let arrayOfLoadedProjects = (arrayOfLoadedProjects = localStorage.getItem(
  'projects'
)
  ? JSON.parse(localStorage.getItem('projects'))
  : []);

const saveToLocalStorage = () => {
  localStorage.setItem('projects', JSON.stringify(myProjects));
};

// Project factory, which takes in title and makes toDo array, to which the toDos will be added...
const newProjectFactory = (id, title) => {
  const toDos = [];

  const add_toDo = (toDo) => {
    toDos.push(toDo);
  };

  return { id, title, toDos, add_toDo };
};

const newProjectEvent = (event) => {
  // DOM elements of form ...
  event.preventDefault();
  const newProjectTitle = document.getElementById('newProjectName').value;

  let ID;
  if (myProjects.length > 0) {
    ID = myProjects[myProjects.length - 1].id + 1;
  } else {
    ID = 0;
  }

  newProject = newProjectFactory(ID, newProjectTitle);

  myProjects.push(newProject);
};

// Function that loads stored objects in localStorage... With functionality to still add todos, as you can't save functions
// local storage...
const loadProjectsFromLocal = () => {
  for (let i = 0; i < arrayOfLoadedProjects.length; i++) {
    const element = arrayOfLoadedProjects[i];
    let ID = element.id;
    let title = element.title;
    newProject = newProjectFactory(ID, title);
    myProjects.push(newProject);

    // loop over every todo in project and add them to the projects...
    for (let index = 0; index < element.toDos.length; index++) {
      const toDoItem = element.toDos[index];
      let toDoTitle = toDoItem.title;
      let toDoDesc = toDoItem.description;
      let dueDate = toDoItem.dueDate;
      let priority = toDoItem.priority;
      let status = toDoItem.status;
      let notes = toDoItem.notes;
      let toDo = toDoFactory(
        toDoTitle,
        toDoDesc,
        dueDate,
        priority,
        status,
        notes
      );
      myProjects[i].add_toDo(toDo);
    }
  }
};
