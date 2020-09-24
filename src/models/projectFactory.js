export { newProjectFactory, newProjectEvent, myProjects, newProject };

const myProjects = [];
let newProject;

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
  const newProjectTitle = document.getElementById("newProjectName").value;

  let ID;

  if (myProjects.length > 0) {
    ID = myProjects[myProjects.length - 1].id + 1;
  } else {
    ID = 0;
  }

  newProject = newProjectFactory(ID ,newProjectTitle);
  
  myProjects.push(newProject);
};

