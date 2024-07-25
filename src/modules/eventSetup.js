import { PageManager } from "./pageManager.js";
import { projectManager } from "../index.js";

export class EventSetup {
  static headerEventSetup() {
    const headerTitle = document.querySelector('header h1');
    const headerIcon = document.querySelector('header svg');
    headerTitle.addEventListener('click', PageManager.goToHome);
    headerIcon.addEventListener('click', PageManager.goToHome);
  }
}