import { HtmlGenerator } from "./htmlGenerator";
import { Project } from "./project";
import { ProjectManager } from "./projectManager";

export class PageManager {
  #projectManager;
  #currentPage;
  constructor() {
    this.#projectManager = new ProjectManager();
    this.#projectManager.addProject(new Project('project'));
    this.goToHome();
  }
  get ProjectManager() {
    return this.#projectManager;
  }
  goToHome() {
    if (this.#currentPage == 'home') {
      return;
    }
    const content = document.querySelector('.content');
    content.textContent = '';
    content.appendChild(HtmlGenerator.projectViewGenerate(this.#projectManager));
    // TODO: Get home page event listeners set up
    this.#currentPage = 'home';
  }
}