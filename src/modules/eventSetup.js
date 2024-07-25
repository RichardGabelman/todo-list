import { PageManager } from "./pageManager.js";
import { ProjectManager } from "./projectManager.js";

export class EventSetup {
  static headerEventSetup() {
    const headerTitle = document.querySelector('header h1');
    const headerIcon = document.querySelector('header svg');
    headerTitle.addEventListener('click', PageManager.goToHome);
    headerIcon.addEventListener('click', PageManager.goToHome);
  }
  static homeEventSetup() {
    if (PageManager.getCurrentPage() != 'home') {
      console.log(`Trying to setup homepage event listeners when page is ${PageManager.getCurrentPage()}`);
      return;
    }
    // TODO: Add event listeners to each project header that expands to project view
    // TODO: Add event listeners to each todo item that expands to todo view
    // Add event listeners to todo closer
    const closeIcons = document.querySelectorAll('ul svg');
    if (closeIcons) {
      for (let i = 0; i < closeIcons.length; i++) {
        closeIcons[i].addEventListener('click', () => {
          ProjectManager.getProjects()[closeIcons[i].getAttribute("project-index")].removeTodo(closeIcons[i].getAttribute("todo-index"));          
        });
      }
    }
    // TODO: Add event listener to + todo
    // Add event listener to + project
    const addProjectBtn = document.querySelector('#addProject');
    addProjectBtn.addEventListener('click', ProjectManager.addProject);
  }
}