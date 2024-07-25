import { HtmlGenerator } from "./htmlGenerator";
import { ProjectManager } from "./projectManager";

class PageManager {
  #projectManager;
  #currentPage;
  constructor() {
    this.#projectManager = new ProjectManager();
    this.#currentPage = 'home';
  }
  get ProjectManager() {
    return this.#projectManager;
  }
  goToHome() {
    if (this.#currentPage == 'home') {
      return;
    }
    const content = document.querySelector('.content');
    content.appendChild(HtmlGenerator.projectViewGenerate(this.#projectManager));
    // TODO: Get home page event listeners set up
  }

}