import { ProjectManager } from "./projectManager";
import { PageManager } from "./pageManager";
import { EventSetup } from "./eventSetup";
import { Todo } from "./todo";

export class DataManager {
  static init() {
    // TODO: If there are projects stored in local storage, update ProjectManagers.projects
    let dataExists = false;
    PageManager.goToHome();

    if (dataExists) {
      // Retrieve
    } else {
      ProjectManager.getProjects()[0].name = 'Project Name ✏️';
      ProjectManager.getProjects()[0].addTodo(new Todo('This is a to-do!', 'This is a to-do description!', new Date(), 'none', false));
      ProjectManager.getProjects()[0].addTodo(new Todo('This is low priority!', 'This is a low priority to-do!', new Date(), 'low', false));
      ProjectManager.getProjects()[0].addTodo(new Todo('This is medium priority!', 'This is a medium priority to-do!', new Date(), 'medium', false));
      ProjectManager.getProjects()[0].addTodo(new Todo('This is high priority!', 'This is a high priority to-do!', new Date(), 'high', false));
      ProjectManager.getProjects()[0].addTodo(new Todo('This is completed!', 'This is a completed to-do!', new Date(), 'none', true));
    }
    EventSetup.headerEventSetup();
  }
}