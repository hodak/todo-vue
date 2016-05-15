import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const currentState = {
  count: 0,
  projects: [],
  chosenProject: null,
  tasks: [],
};

currentState.chosenProject = currentState.projects[0];

const mutations = {
  INCREMENT(state, amount) {
    currentState.count = state.count + amount;
  },
  RECEIVE_PROJECTS(state, projects) {
    currentState.projects = projects;
  },
  ADD_PROJECT(state, newProject) {
    currentState.projects.push(newProject);
  },
  CHOOSE_PROJECT(state, project) {
    currentState.chosenProject = project;
    currentState.tasks = [];
  },
  DELETE_PROJECT(state, projectId) {
    currentState.projects =
      state.projects.filter((project) => project.id !== projectId);
    if (currentState.chosenProject && (currentState.chosenProject.id === projectId)) {
      currentState.tasks = [];
      currentState.chosenProject = null;
    }
  },
  RECEIVE_TASKS(state, tasks) {
    currentState.tasks = tasks;
  },
  ADD_TASK(state, task) {
    if (currentState.chosenProject && (currentState.chosenProject.id === task.project_id)) {
      currentState.tasks.push(task);
    }
  },
};

export default new Vuex.Store({
  state: currentState,
  mutations,
});
