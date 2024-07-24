import { todo } from "./todo.js";

class project {
  #name;
  #todos = [];
  constructor(name) {
    this.#name = name;
  }

  addTodo(todoItem) {
    if (!(todoItem instanceof todo.todo)) {
      console.log(`addTodo expected instanceof todo but got ${typeof todoItem}`);
      return;
    }
    this.#todos.push(todoItem);
    // TODO: Update visual representation
  }
  removeTodo(index) {
    if (index >= (this.#todos.length)) {
      console.log(`Tried to remove index ${index} but project ${this.#name} is only ${this.#todos.length} big!`);
      return;
    }
    this.#todos.splice(index, 1);
    // TODO: Update visual representation
  }
}