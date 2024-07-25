import { HtmlGenerator } from "./htmlGenerator.js";
import { EventSetup } from "./eventSetup.js";

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
    PageManager.setCurrentPage('needs update');
    PageManager.goToHome();
  }
}