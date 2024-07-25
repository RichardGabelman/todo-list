import { DataManager } from "./modules/dataManager.js";
import { PageManager } from "./modules/pageManager.js";
import { Todo } from "./modules/todo.js";
import { EventSetup } from "./modules/eventSetup.js";
import './style.css';

const dataManager = new DataManager();
dataManager.projectManager.projects[0].addTodo(new Todo('This is a todo title'));
dataManager.projectManager.projects[0].addTodo(new Todo('This is another todo title'));
EventSetup.headerEventSetup();

export { dataManager };