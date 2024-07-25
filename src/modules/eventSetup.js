import { pageManager } from "..";

export class EventSetup {
  static headerEventSetup() {
    const headerTitle = document.querySelector('header h1');
    const headerIcon = document.querySelector('header svg');
    headerTitle.addEventListener('click', pageManager.goToHome);
    headerIcon.addEventListener('click', pageManager.goToHome);
  }
}