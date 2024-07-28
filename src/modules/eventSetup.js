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
    // Update project name when done editing
    const projectHeads = document.querySelectorAll('.name');
    if (projectHeads) {
      for (let i = 0; i < projectHeads.length; i++) {
        projectHeads[i].addEventListener('blur', () => {
          ProjectManager.getProjects()[projectHeads[i].getAttribute('project-index')].name = projectHeads[i].textContent;
        });
      }
    }
    // Add event listeners to project closers
    const projectClose = document.querySelectorAll('.header svg');
    if (projectClose) {
      for (let i = 0; i < projectClose.length; i++) {
        projectClose[i].addEventListener('click', () => {
          ProjectManager.removeProject(projectClose[i].getAttribute("project-index"));
        })
      }
    }

    // Add event listeners to each todo item that expands to todo view
    const todoNames = document.querySelectorAll('.todo h3');
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

    // Add event listeners to todo checkboxes
    const markDone = document.querySelectorAll('.todo input');
    if (markDone) {
      for (let i = 0; i < markDone.length; i++) {
        markDone[i].addEventListener('click', () => {
          ProjectManager.getProjects()[markDone[i].getAttribute('project-index')].todos[markDone[i].getAttribute('todo-index')].toggleCompleted();
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

    const backArrow = document.querySelector('.todopage svg');
    backArrow.addEventListener('click', PageManager.goToHome);

    const saveBtn = document.querySelector('.todopage button');
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const todoObj = ProjectManager.getProjects()[saveBtn.getAttribute('project-index')].todos[saveBtn.getAttribute('todo-index')];
      const title = document.querySelector('#title').value;
      const description = document.querySelector('#description').value;
      const dateValue = document.querySelector('#date').value;
      const priority = document.querySelector('input:checked').value;

      todoObj.title = title;
      todoObj.description = description;
      todoObj.dueDate = new Date(dateValue);
      todoObj.priority = priority;
      PageManager.goToHome();
    });
  }
}