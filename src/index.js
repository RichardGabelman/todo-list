import { ProjectManager } from "./modules/projectManager.js";
import { PageManager } from "./modules/pageManager.js";
import { Todo } from "./modules/todo.js";
import { EventSetup } from "./modules/eventSetup.js";
import './style.css';

PageManager.goToHome();
ProjectManager.getProjects()[0].name = 'Project Name ✏️';
ProjectManager.getProjects()[0].addTodo(new Todo('This is a todo!', 'This is a todo description!', new Date(), 'none', false));
ProjectManager.getProjects()[0].addTodo(new Todo('This is low priority!', 'This is a low priority todo!', new Date(), 'low', false));
ProjectManager.getProjects()[0].addTodo(new Todo('This is medium priority!', 'This is a medium priority todo!', new Date(), 'medium', false));
ProjectManager.getProjects()[0].addTodo(new Todo('This is high priority!', 'This is a high priority todo!', new Date(), 'high', false));
ProjectManager.getProjects()[0].addTodo(new Todo('This is completed!', 'This is a completed todo!', new Date(), 'none', true));
EventSetup.headerEventSetup();