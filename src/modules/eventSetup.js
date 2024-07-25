import { PageManager } from "./pageManager.js";
import { ProjectManager } from "./projectManager.js";
import { Todo } from "./todo.js";

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
    // Add event listeners to each todo item that expands to todo view
    const todoNames = document.querySelectorAll('.checkTitle h3');
    if (todoNames) {
      for (let i = 0; i < todoNames.length; i++) {
        todoNames[i].addEventListener('click', () => {
          PageManager.goToTodo(todoNames[i].getAttribute('project-index'), todoNames[i].getAttribute('todo-index'));
        })
      }
    }

    // Add event listeners to todo closer
    const closeIcons = document.querySelectorAll('ul svg');
    if (closeIcons) {
      for (let i = 0; i < closeIcons.length; i++) {
        closeIcons[i].addEventListener('click', () => {
          ProjectManager.getProjects()[closeIcons[i].getAttribute("project-index")].removeTodo(closeIcons[i].getAttribute("todo-index"));          
        });
      }
    }

    // Add event listener to + todo
    const addTodos = document.querySelectorAll('.addTodo');
    if (addTodos) {
      for (let i = 0; i < addTodos.length; i++) {
        addTodos[i].addEventListener('click', () => {
          ProjectManager.getProjects()[addTodos[i].getAttribute("project-index")].addTodo(new Todo("Added todo!"));
        });
      }
    }

    // Add event listener to + project
    const addProjectBtn = document.querySelector('#addProject');
    addProjectBtn.addEventListener('click', ProjectManager.addProject);
  }

  static todoEventSetup() {
    if (PageManager.getCurrentPage() != 'todo') {
      console.log(`Trying to setup todopage event listeners when page is ${PageManager.getCurrentPage()}`);
      return;
    }

  }
}