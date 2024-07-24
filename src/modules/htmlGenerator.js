import close from '../assets/close.svg';

class HtmlGenerator {
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


    todoDiv.appendChild(checkTitle);
    todoDiv.appendChild(close);

    return todoDiv;
  }

  static projectGenerate(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add('project');

    const name = document.createElement("h2");
    name.textContent = project.name;

    const todos = document.createElement("ul");
    todos.classList.add('todos');

    for (let i = 0; i < project.todos.length; i++) {
      todos.appendChild(this.todoGenerate(project.todos[i]));
    }

    projectDiv.appendChild(name);
    projectDiv.appendChild(todos);

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

    projectView.appendChild(projects);
    
    return projectView;
  }
}