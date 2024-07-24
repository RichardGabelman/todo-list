import { Project } from "./modules/project.js";
import { Todo } from "./modules/todo.js";

const study = new Project("First");

const newTodo = new Todo("test", "this is a test description", "today", 1);

study.addTodo(newTodo);

console.log(study.todos);

