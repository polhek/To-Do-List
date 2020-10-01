export const emptyToDoForm = () => {
  const toDoTitle = document.getElementById('nameToDo');
  const description = document.getElementById('toDoDescription');
  const dueDate = document.getElementById('toDoDate');
  const priority = document.getElementById('toDoPriority');
  const note = document.getElementById('toDoNote');

  let today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  toDoTitle.value = '';
  description.value = '';
  dueDate.value = `${yyyy}-${mm}-${dd}`;
  priority.value = 2;
  note.value = '';
};
