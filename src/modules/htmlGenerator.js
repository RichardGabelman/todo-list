import { ProjectManager } from './projectManager.js';

export class HtmlGenerator {

  static todoGenerate(todo, todoIndex, projectIndex) {
    const todoDiv = document.createElement("li");
    todoDiv.classList.add('todo');

    const checkTitle = document.createElement("div");
    checkTitle.classList.add('checkTitle');

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
    checkTitle.appendChild(checkbox);
    checkTitle.appendChild(title);

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

    todoDiv.appendChild(checkTitle);
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

    const addProject = document.createElement("btn");
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
    todoPage.appendChild(backIcon);

    const form = document.createElement('form');

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

    form.appendChild(labelInputTitle);
    form.appendChild(labelInputDescription);


    todoPage.appendChild(form);

    return todoPage;
  }
}