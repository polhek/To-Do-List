export { clickedProject, resetClickedProject, idClickedProject };

const clickedProject = (event) => {
  event.target.style.fontWeight = "700";
  const text = event.target.textContent;
  const projectHeader = document.querySelector(".projectName");
  projectHeader.textContent = text;
};

const resetClickedProject = (event) => {
  const projectNameElement = document.querySelectorAll(".project_title");
  for (let i = 0; i < projectNameElement.length; i++) {
    projectNameElement[i].style.fontWeight = "400";
    
  }
};

const idClickedProject = (event) => {
  let cProject = event.target.parentNode;
  const projectNameElement = document.querySelector(".project_title");
  const listOfProjects = projectNameElement.parentNode.parentNode;
  let clickedProjectIndex = [...listOfProjects.children].indexOf(cProject);
  return clickedProjectIndex;
};
