import { Project } from "./modules/project.js";
import { Todo } from "./modules/todo.js";
import { ProjectManager } from "./modules/projectManager.js";
import { HtmlGenerator } from "./modules/htmlGenerator.js";
import './style.css';

const manager = new ProjectManager();
const study = new Project("First");
const newTodo = new Todo("test", "this is a test description", "today", 1);
study.addTodo(newTodo);
manager.addProject(study);

const content = document.querySelector(".content");
content.textContent = '';

content.appendChild(HtmlGenerator.projectViewGenerate(manager));

