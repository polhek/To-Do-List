import {
  newProjectFactory,
  myProjects,
  newProject,
  saveToLocalStorage,
} from './projectFactory';

export const defaultProject = () => {
  const ID = 0;
  const defaultTitle = 'Default Project';
  let newProject = newProjectFactory(ID, defaultTitle);
  myProjects.push(newProject);
  console.log(myProjects);
  saveToLocalStorage(myProjects);
};
