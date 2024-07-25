import { PageManager } from "./modules/pageManager.js";
import { Todo } from "./modules/todo.js";
import './style.css';

const pageManager = new PageManager();
pageManager.projectManager.projects[0].addTodo(new Todo('This is a todo title'));
pageManager.projectManager.projects[0].addTodo(new Todo('This is another todo title'));
pageManager.update();

export { pageManager };