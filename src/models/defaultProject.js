import {
  newProjectFactory,
  newProjectEvent,
  myProjects,
  newProject,
} from "./projectFactory";
import { addProjectUI } from "../views/projectView";
import { clickedProject } from "../views/clickedProjectView";

export const defaultProject = () => {
    let ID = 0;
    const defaultTitle = "Default Project";
    let newProject = newProjectFactory(ID, defaultTitle);
    myProjects.push(newProject)
    console.log(myProjects)
    addProjectUI(newProject);
    
};


