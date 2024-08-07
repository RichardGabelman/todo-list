import { PageManager } from "./pageManager.js";
import { Todo } from "./todo.js";

export class Project {

  name;
  todos = [];

  constructor(name) {
    this.name = name;
  }

  addTodo(todoItem) {
    if (!(todoItem instanceof Todo)) {
      console.log(`addTodo expected instanceof todo but got ${typeof todoItem}`);
      return;
    }
    this.todos.push(todoItem);
    PageManager.update();
  }

  removeTodo(index) {
    if (index >= (this.todos.length)) {
      console.log(`Tried to remove index ${index} but project ${this.name} is only ${this.todos.length} big!`);
      return;
    }
    this.todos.splice(index, 1);
    PageManager.update();
  }
}