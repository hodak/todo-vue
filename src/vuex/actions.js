import config from '../config';
import request from 'superagent';

export function chooseProject({ dispatch }, project) {
  dispatch('CHOOSE_PROJECT', project);
  request
    .get(`${config.API_URL}/projects/${project.id}/tasks`)
    .end((err, res) => {
      if (!err) {
        dispatch('RECEIVE_TASKS', res.body.tasks);
      }
    });
}

function ensureAnyProjectChosen(store) {
  if (!store.state.chosenProject && store.state.projects.length > 0) {
    chooseProject(store, store.state.projects[0]);
  }
}

export function initProjects(store) {
  request
    .get(`${config.API_URL}/projects`)
    .end((err, res) => {
      if (!err) {
        store.dispatch('RECEIVE_PROJECTS', res.body.projects);
        ensureAnyProjectChosen(store);
      }
    });
}

export function addNewProject(store, newProjectName) {
  request
    .post(`${config.API_URL}/projects`)
    .send({ project: { name: newProjectName } })
    .end((err, res) => {
      store.dispatch('ADD_PROJECT', res.body.project);
      chooseProject(store, res.body.project);
    });
}

export function deleteProject(store, project) {
  request
    .delete(`${config.API_URL}/projects/${project.id}`)
    .end((err) => {
      if (!err) {
        store.dispatch('DELETE_PROJECT', project.id);
        ensureAnyProjectChosen(store);
      }
    });
}

export function addNewTask({ dispatch }, project, newTask) {
  request
    .post(`${config.API_URL}/projects/${project.id}/tasks`)
    .send({ task: newTask })
    .end((err, res) => {
      if (!err) {
        dispatch('ADD_TASK', res.body.task);
      }
    });
}

export function deleteTask({ dispatch }, task) {
  request
    .delete(`${config.API_URL}/tasks/${task.id}`)
    .end((err) => {
      if (!err) {
        dispatch('DELETE_TASK', task.id);
      }
    });
}
