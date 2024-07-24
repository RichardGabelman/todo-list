import { project } from "./modules/project.js";
import { todo } from "./modules/todo.js";

const newProject = new project("First");

const newTodo = new todo("test", "this is a test description", "today", 1);

newProject.addTodo(newTodo);

console.log(newProject.getTodos());

