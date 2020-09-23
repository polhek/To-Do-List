export { toDoFactory };

const toDoFactory = (id, title, description, dueDate, priority, notes) => {
  return { id, title, description, dueDate, priority, notes };
};
