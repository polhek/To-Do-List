export { appendToDo, cleanToDoView, deletToDoUI };

const appendToDo = (toDo) => {
  const tableBody = document.getElementById("tbody");
  let priority;
  if (toDo.priority == 1) {
    priority = "low";
  } else if (toDo.priority == 2) {
    priority = "medium";
  } else {
    priority = "high";
  }

  const markup = `
    <tr class="table-primary">
    <th>${toDo.title}</th>
    <td>${toDo.description}</td>
    <td>${toDo.dueDate}</td>
    <td>${priority}</td>
    <td>${toDo.notes}</td>
    <td><button type="button" class="btn delete btn-primary"><i class="fa fa-check" aria-hidden="true"></i>
      </button></td>
      <td><button type="button" id="edit" class="btn edit-button btn-primary" data-toggle="modal" data-target="#editTodoModal"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>

      </button></td>
  </tr>
    `;
  console.log(toDo)
  tableBody.insertAdjacentHTML("beforeend", markup);
};

const cleanToDoView = () => {
  const tableBody = document.getElementById("tbody");
  tableBody.innerHTML = "";
};

const deletToDoUI = (toDoToremove) => {
  toDoToremove.remove();
};
