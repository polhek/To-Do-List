import { myProjects } from "../models/projectFactory";

export const deleteProject = (itemToRemove) => {
  myProjects.splice(
    [...itemToRemove.parentElement.children].indexOf(itemToRemove),
    1
  );
  console.log(myProjects);
};
