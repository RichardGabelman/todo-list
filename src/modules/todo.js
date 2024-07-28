import { PageManager } from "./pageManager";

export class Todo {

  constructor(title = '', description = '', dueDate = new Date(), priority = 'none', completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  toggleCompleted() {
    if (this.completed == true) {
      this.completed = false;
    } else {
      this.completed = true;
    }
    PageManager.update();
  }
}