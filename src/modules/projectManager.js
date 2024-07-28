import { PageManager } from './pageManager.js';
import { Project } from './project.js';

export class ProjectManager {

  static projects = [];

  static addProject(name = 'project') {
    ProjectManager.projects.push(new Project(name));
    PageManager.update();
  }
  
  static removeProject(index) {
    if (index >= (ProjectManager.projects.length)) {
      console.log(`Tried to remove index ${index} but we only have ${ProjectManager.projects.length} projects!`);
      return;
    }
    ProjectManager.projects.splice(index, 1);
    PageManager.update();
  }
}