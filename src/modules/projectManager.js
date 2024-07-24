import { Project } from './project.js';

export class ProjectManager {
  #projects;
  constructor() {
    this.#projects = [];
  }
  get projects() {
    return this.#projects;
  }
  addProject(project) {
    if (!(project instanceof Project)) {
      console.log(`addProject expected instanceof Project but got ${typeof project}`);
      return;
    }
    this.#projects.push(project);
    // TODO: Update visual representation
  }
  removeProject(index) {
    if (index >= (this.#projects.length)) {
      console.log(`Tried to remove index ${index} but we only have ${this.#projects.length} projects!`);
      return;
    }
    this.#projects.splice(index, 1);
    // TODO: Update visual representation
  }
}