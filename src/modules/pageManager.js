import { HtmlGenerator } from "./htmlGenerator.js";
import { dataManager } from "..";

export class PageManager {
  static #currentPage;
  static goToHome() {
    if (PageManager.#currentPage == 'home') {
      return;
    }
    const content = document.querySelector('.content');
    content.textContent = '';
    content.appendChild(HtmlGenerator.projectViewGenerate(dataManager.projectManager));
    // TODO: Get home page event listeners set up
    PageManager.#currentPage = 'home';
  }
  static update() {
    PageManager.#currentPage = 'needs update';
    PageManager.goToHome();
  }
}