import { myProjects } from './projectFactory';

const editTodo = (clickedProjectIndex, clickedToDoIndex) => {
  const editTitle = document.getElementById('editnameToDo');
  const editDescription = document.getElementById('edittoDoDescription');
  const editDoDate = document.getElementById('edittoDoDate');
  const editPriority = document.getElementById('edittoDoPriority');
  const editNote = document.getElementById('edittoDoNote');

  const toDoToEdit = myProjects[clickedProjectIndex].toDos[clickedToDoIndex];
  console.log(toDoToEdit);

  editTitle.value = toDoToEdit.title;
  editDescription.value = toDoToEdit.description;
  editDoDate.value = toDoToEdit.dueDate;
  editPriority.value = toDoToEdit.priority;
  editNote.value = toDoToEdit.notes;
};

const clickedToDoIndex = (event, element) => {
  const table = document.getElementById('tbody');
  let index = [...table.children].indexOf(element);
  return index;
};

const editFinish = (indexProject, indexToDo) => {
  const editTitle = document.getElementById('editnameToDo').value;
  const editDescription = document.getElementById('edittoDoDescription').value;
  const editDoDate = document.getElementById('edittoDoDate').value;
  const editPriority = document.getElementById('edittoDoPriority').value;
  const editNote = document.getElementById('edittoDoNote').value;

  const toDoToEdit = myProjects[indexProject].toDos[indexToDo];

  toDoToEdit.title = editTitle;
  toDoToEdit.description = editDescription;
  toDoToEdit.dueDate = editDoDate;
  toDoToEdit.priority = editPriority;
  toDoToEdit.notes = editNote;

  console.log(myProjects);
};

export { editTodo, clickedToDoIndex, editFinish };
