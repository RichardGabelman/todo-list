import { PageManager } from "./pageManager";

export class Todo {

  #title;
  #description;
  #dueDate;
  #priority;
  #completed;

  constructor(title = '', description = '', dueDate = '', priority = 0, completed = false) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#completed = completed;
  }

  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }
  get dueDate() {
    return this.#dueDate;
  }
  get priority() {
    return this.#priority;
  }
  get completed() {
    return this.#completed;
  }

  set title(title) {
    this.#title = title;
  }
  set description(description) {
    this.#description = description;
  }
  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }
  set priority(priority) {
    this.#priority = priority;
  }

  toggleCompleted() {
    if (this.#completed == true) {
      this.#completed = false;
    } else {
      this.#completed = true;
    }
    PageManager.update();
  }
}