import { ProjectManager } from "./modules/projectManager.js";
import { PageManager } from "./modules/pageManager.js";
import { Todo } from "./modules/todo.js";
import './style.css';

const projectManager = new ProjectManager();
projectManager.projects[0].addTodo(new Todo('This is a todo title'));
projectManager.projects[0].addTodo(new Todo('This is another todo title'));
PageManager.update();

export { projectManager };