import { ProjectManager } from "./projectManager";
import { PageManager } from "./pageManager";
import { EventSetup } from "./eventSetup";
import { Todo } from "./todo";

export class DataManager {
  static init() {
    PageManager.goToHome();

    if (localStorage.getItem('projects')) {
      const test = JSON.parse(localStorage.getItem('projects'));
      for (let i = 0; i < test.length; i++) {
        const currentProj = test[i];
        ProjectManager.addProject(currentProj.name);
        for (let n = 0; n < currentProj.todos.length; n++) {
          const currentTodo = currentProj.todos[n];
          const currentTitle = currentTodo.title;
          const currentDesc = currentTodo.description;
          const currentDate = currentTodo.dueDate;
          const currentPriority = currentTodo.priority;
          const currentCompleted = currentTodo.completed;
          ProjectManager.projects[i].addTodo(new Todo(currentTitle, currentDesc, new Date(currentDate), currentPriority, currentCompleted));
        }
      }
    } else {
      ProjectManager.addProject();
      ProjectManager.projects[0].name = 'Project Name ✏️';
      ProjectManager.projects[0].addTodo(new Todo('This is a to-do!', 'This is a to-do description!', new Date(), 'none', false));
      ProjectManager.projects[0].addTodo(new Todo('This is low priority!', 'This is a low priority to-do!', new Date(), 'low', false));
      ProjectManager.projects[0].addTodo(new Todo('This is medium priority!', 'This is a medium priority to-do!', new Date(), 'medium', false));
      ProjectManager.projects[0].addTodo(new Todo('This is high priority!', 'This is a high priority to-do!', new Date(), 'high', false));
      ProjectManager.projects[0].addTodo(new Todo('This is completed!', 'This is a completed to-do!', new Date(), 'none', true));
    }
    EventSetup.headerEventSetup();
  }
}