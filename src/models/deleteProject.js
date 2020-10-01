import { myProjects } from './projectFactory';

export const deleteProject = (itemToRemove) => {
  myProjects.splice(
    [...itemToRemove.parentElement.children].indexOf(itemToRemove),
    1
  );
};
