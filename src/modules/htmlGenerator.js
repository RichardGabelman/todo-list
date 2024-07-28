import { ProjectManager } from './projectManager.js';
import { format } from "date-fns";

export class HtmlGenerator {

  static todoGenerate(todo, todoIndex, projectIndex) {
    const todoDiv = document.createElement("li");
    todoDiv.classList.add('todo');

    const priorityColor = document.createElement('div');
    const priority = todo.priority;
    priorityColor.classList.add(priority);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("project-index", projectIndex);
    checkbox.setAttribute("todo-index", todoIndex);
    const title = document.createElement("h3");
    title.textContent = todo.title;
    title.setAttribute('project-index', projectIndex);
    title.setAttribute('todo-index', todoIndex);
    if (todo.completed) {
      title.classList.add('completed');
      checkbox.checked = true;
    }
    todoDiv.appendChild(priorityColor);
    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(title);

    const deadline = document.createElement('h4');
    deadline.textContent = format(todo.dueDate, 'PP');

    const closeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    closeIcon.setAttribute('viewBox', '0 0 24 24');
    const svgTitle = document.createElementNS("http://www.w3.org/2000/svg", 'title');
    svgTitle.textContent = "close";
    closeIcon.appendChild(svgTitle);
    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute('d', "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z");
    closeIcon.appendChild(path);
    closeIcon.setAttribute("todo-index", todoIndex);
    closeIcon.setAttribute("project-index", projectIndex);

    todoDiv.appendChild(deadline);
    todoDiv.appendChild(closeIcon);

    return todoDiv;
  }

  static projectGenerate(project, projectIndex) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add('project');

    const head = document.createElement('div');
    head.classList.add('header');
    const name = document.createElement("h2");
    name.classList.add("name");
    name.setAttribute('contenteditable', true);
    name.setAttribute('project-index', projectIndex);
    name.textContent = project.name;
  
    const closeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    closeIcon.setAttribute('viewBox', '0 0 24 24');
    const svgTitle = document.createElementNS("http://www.w3.org/2000/svg", 'title');
    svgTitle.textContent = "close";
    closeIcon.appendChild(svgTitle);
    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute('d', "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z");
    closeIcon.appendChild(path);
    closeIcon.setAttribute('project-index', projectIndex);  

    head.appendChild(name);
    head.appendChild(closeIcon);

    const todos = document.createElement("ul");
    todos.classList.add('todos');

    for (let i = 0; i < project.todos.length; i++) {
      todos.appendChild(this.todoGenerate(project.todos[i], i, projectIndex));
    }

    const addTodo = document.createElement('btn');
    addTodo.classList.add("addTodo", "footer");
    addTodo.textContent = "+ to do +";
    addTodo.setAttribute('project-index', projectIndex);

    projectDiv.appendChild(head);
    projectDiv.appendChild(todos);
    projectDiv.appendChild(addTodo);

    return projectDiv;
  }

  static homePageGenerate() {
    const homepage = document.createElement("div");
    homepage.classList.add('homepage');

    const projects = document.createElement("div");
    projects.classList.add('projects');

    for (let i = 0; i < ProjectManager.getProjects().length; i++) {
      projects.appendChild(this.projectGenerate(ProjectManager.getProjects()[i], i));
    }

    const controls = document.createElement("div");
    controls.classList.add("controls");

    const addProject = document.createElement("button");
    addProject.setAttribute('id', 'addProject');
    addProject.textContent = '+';
    controls.appendChild(addProject);

    homepage.appendChild(projects);
    homepage.appendChild(controls);

    return homepage;
  }

  static todoPageGenerate(projectIndex, todoIndex) {
    const todoPage = document.createElement("div");
    todoPage.classList.add('todopage');

    const backIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    backIcon.setAttribute('viewBox', '0 0 24 24');
    const svgTitle = document.createElementNS("http://www.w3.org/2000/svg", 'title');
    svgTitle.textContent = "arrow-left";
    backIcon.appendChild(svgTitle);
    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute('d', "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z");
    backIcon.appendChild(path);

    const form = document.createElement('form');

    form.appendChild(backIcon);

    const labelInputTitle = document.createElement('div');
    labelInputTitle.classList.add('labelInput');
    const labelTitle = document.createElement('label');
    labelTitle.textContent = 'To Do';
    labelTitle.setAttribute('for', 'title');
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('value', ProjectManager.getProjects()[projectIndex].todos[todoIndex].title);
    inputTitle.setAttribute('id', 'title');
    inputTitle.setAttribute('maxLength', 35);
    labelInputTitle.appendChild(labelTitle);
    labelInputTitle.appendChild(inputTitle);

    const labelInputDescription = document.createElement('div');
    labelInputDescription.classList.add('labelInput');
    const labelDescription = document.createElement('label');
    labelDescription.textContent = 'Description';
    labelDescription.setAttribute('for', 'description');
    const inputDescription = document.createElement('textarea');
    inputDescription.setAttribute('value', ProjectManager.getProjects()[projectIndex].todos[todoIndex].description);
    inputDescription.setAttribute('id', 'description');
    inputDescription.setAttribute('cols', 45);
    inputDescription.setAttribute('rows', 6);
    labelInputDescription.appendChild(labelDescription);
    labelInputDescription.appendChild(inputDescription);

    const labelInputDate = document.createElement('div');
    labelInputDate.classList.add('labelInput');
    const labelDate = document.createElement('label');
    labelDate.textContent = ('Due Date');
    labelDate.setAttribute('for', 'date');
    const inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('value', ProjectManager.getProjects()[projectIndex].todos[todoIndex].dueDate.toISOString().substring(0, 10));
    labelInputDate.appendChild(labelDate);
    labelInputDate.appendChild(inputDate);

    const field = document.createElement('fieldset');
    const priority = document.createElement('legend');
    priority.textContent = "Priority";
    field.appendChild(priority);

    const radios = document.createElement('div');
    const labelNone = document.createElement('label');
    labelNone.textContent = "None";
    labelNone.setAttribute('for', 'none');
    const radioNone = document.createElement('input');
    radioNone.setAttribute('name', 'priority');
    radioNone.setAttribute('id', 'none');
    radioNone.setAttribute('value', 'none');
    radioNone.setAttribute('type', 'radio');
    labelNone.appendChild(radioNone);
    radios.appendChild(labelNone);

    const labelLow = document.createElement('label');
    labelLow.textContent = "Low";
    labelLow.setAttribute('for', 'low');
    const radioLow = document.createElement('input');
    radioLow.setAttribute('name', 'priority');
    radioLow.setAttribute('id', 'low');
    radioLow.setAttribute('value', 'low');
    radioLow.setAttribute('type', 'radio');
    labelLow.appendChild(radioLow);
    radios.appendChild(labelLow);

    const labelMedium = document.createElement('label');
    labelMedium.textContent = "Medium";
    labelMedium.setAttribute('for', 'medium');
    const radioMedium = document.createElement('input');
    radioMedium.setAttribute('name', 'priority');
    radioMedium.setAttribute('id', 'medium');
    radioMedium.setAttribute('value', 'medium');
    radioMedium.setAttribute('type', 'radio');
    labelMedium.appendChild(radioMedium);
    radios.appendChild(labelMedium);

    const labelHigh = document.createElement('label');
    labelHigh.textContent = "High";
    labelHigh.setAttribute('for', 'high');
    const radioHigh = document.createElement('input');
    radioHigh.setAttribute('name', 'priority');
    radioHigh.setAttribute('id', 'high');
    radioHigh.setAttribute('value', 'high');
    radioHigh.setAttribute('type', 'radio');
    labelHigh.appendChild(radioHigh);
    radios.appendChild(labelHigh);

    const priorityLevel = ProjectManager.getProjects()[projectIndex].todos[todoIndex].priority;
    switch (priorityLevel) {
      case 'none':
        radioNone.checked = true;
        break;
      case 'low':
        radioLow.checked = true;
        break;
      case 'medium':
        radioMedium.checked = true;
        break;
      case 'high':
        radioHigh.checked = true;
        break;
    }
    field.appendChild(radios);

    const save = document.createElement('button');
    save.textContent = 'Save';

    form.appendChild(labelInputTitle);
    form.appendChild(labelInputDescription);
    form.appendChild(labelInputDate);
    form.appendChild(field);
    form.appendChild(save);


    todoPage.appendChild(form);

    return todoPage;
  }
}