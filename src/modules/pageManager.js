import { HtmlGenerator } from "./htmlGenerator.js";
import { EventSetup } from "./eventSetup.js";
import { ProjectManager } from "./projectManager.js";

export class PageManager {

  static #currentPage;

  static getCurrentPage() {
    return this.#currentPage;
  }

  static setCurrentPage(page) {
    this.#currentPage = page;
  }

  static goToHome() {
    if (PageManager.getCurrentPage() == 'home') {
      return;
    }
    const content = document.querySelector('.content');
    content.textContent = '';
    content.appendChild(HtmlGenerator.homePageGenerate());
    PageManager.setCurrentPage('home');
    EventSetup.homeEventSetup();
  }

  static update() {
    localStorage.setItem('projects', JSON.stringify(ProjectManager.projects));
    PageManager.setCurrentPage('needs update');
    PageManager.goToHome();
  }
  
  static goToTodo(projectIndex, todoIndex) {
    const content = document.querySelector('.content');
    content.textContent = '';
    content.appendChild(HtmlGenerator.todoPageGenerate(projectIndex, todoIndex));
    PageManager.setCurrentPage('todo');
    EventSetup.todoEventSetup();
  }
}