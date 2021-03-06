export { toDoFactory, newToDo, newToDoEvent };
import { myProjects } from './projectFactory';

let newToDo;

const toDoFactory = (
  title,
  description,
  dueDate,
  priority,
  notes,
  status = false
) => {
  return { title, description, dueDate, priority, notes, status };
};

const newToDoEvent = (event, clickedProjectIndex) => {
  event.preventDefault();

  // form values for toDO item...
  const toDoTitle = document.getElementById('nameToDo').value;
  const description = document.getElementById('toDoDescription').value;
  const dueDate = document.getElementById('toDoDate').value;
  const priority = document.getElementById('toDoPriority').value;
  const note = document.getElementById('toDoNote').value;
  const index = clickedProjectIndex;

  newToDo = toDoFactory(toDoTitle, description, dueDate, priority, note);
  myProjects[index].add_toDo(newToDo);
};
