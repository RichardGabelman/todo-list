import { ProjectManager } from "./modules/projectManager.js";
import { PageManager } from "./modules/pageManager.js";
import { Todo } from "./modules/todo.js";
import { EventSetup } from "./modules/eventSetup.js";
import './style.css';

PageManager.goToHome();
ProjectManager.getProjects()[0].addTodo(new Todo('This is a todo title'));
ProjectManager.getProjects()[0].addTodo(new Todo('This is another todo title'));
EventSetup.headerEventSetup();