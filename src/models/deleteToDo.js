import { myProjects } from './projectFactory';

export const deleteToDoFromObject = (itemToRemove, clickedProjectIndex) => {
  const index = clickedProjectIndex;

  myProjects[index].toDos.splice(
    [...itemToRemove.parentElement.children].indexOf(itemToRemove),
    1
  );
};
