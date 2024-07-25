import { ProjectManager } from "./projectManager.js";


export class DataManager {
  #projectManager;
  constructor() {
    // TODO: If data exists in local storage, retrieve it
    // else
    this.#projectManager = new ProjectManager();
  }
  get projectManager() {
    return this.#projectManager;
  }
}