export class HtmlGenerator {
  static todoGenerate(todo) {
    const todoDiv = document.createElement("li");
    todoDiv.classList.add('todo');

    const checkTitle = document.createElement("div");
    checkTitle.classList.add('checkTitle');

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (todo.completed) {
      checkbox.checked = true;
    }
    const title = document.createElement("h3");
    title.textContent = todo.title;
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

    todoDiv.appendChild(checkTitle);
    todoDiv.appendChild(closeIcon);

    return todoDiv;
  }

  static projectGenerate(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add('project');

    const name = document.createElement("h2");
    name.classList.add("name", "header");
    name.textContent = project.name;

    const todos = document.createElement("ul");
    todos.classList.add('todos');

    for (let i = 0; i < project.todos.length; i++) {
      todos.appendChild(this.todoGenerate(project.todos[i]));
    }

    const addTodo = document.createElement('btn');
    addTodo.classList.add("addTodo", "footer");
    addTodo.textContent = "+ todo +";

    projectDiv.appendChild(name);
    projectDiv.appendChild(todos);
    projectDiv.appendChild(addTodo);

    return projectDiv;
  }

  static projectViewGenerate(projectManager) {
    const projectView = document.createElement("div");
    projectView.classList.add('projectView');

    const projects = document.createElement("div");
    projects.classList.add('projects');

    for (let i = 0; i < projectManager.projects.length; i++) {
      projects.appendChild(this.projectGenerate(projectManager.projects[i]));
    }

    const controls = document.createElement("div");
    controls.classList.add("controls");

    const addProject = document.createElement("btn");
    addProject.setAttribute('id', 'addProject');
    addProject.textContent = '+';
    controls.appendChild(addProject);

    projectView.appendChild(projects);
    projectView.appendChild(controls);

    return projectView;
  }
}