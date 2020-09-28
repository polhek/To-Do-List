import { myProjects } from "./projectFactory";

export const deleteToDoFromObject = (itemToRemove, clickedProjectIndex) => {
  let index = clickedProjectIndex;

  myProjects[index].toDos.splice(
    [...itemToRemove.parentElement.children].indexOf(itemToRemove),
    1
  );

  console.log(myProjects);
};
