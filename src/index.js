import { project } from "./modules/project.js";
import { todo } from "./modules/todo.js";

const study = new project("First");

const newTodo = new todo("test", "this is a test description", "today", 1);

study.addTodo(newTodo);

console.log(study.todos);

