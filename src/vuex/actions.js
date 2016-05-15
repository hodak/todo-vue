import config from '../config';
import request from 'superagent';

export function incrementCounter({ dispatch }) {
  dispatch('INCREMENT', 1);
}

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

export function initProjects(store) {
  request
    .get(`${config.API_URL}/projects`)
    .end((err, res) => {
      if (!err) {
        store.dispatch('RECEIVE_PROJECTS', res.body.projects);
        if (res.body.projects.length > 0) {
          chooseProject(store, res.body.projects[0]);
        }
      }
    });
}

export function addNewProject({ dispatch }, newProjectName) {
  request
    .post(`${config.API_URL}/projects`)
    .send({ project: { name: newProjectName } })
    .end((err, res) => {
      dispatch('ADD_PROJECT', res.body.project);
    });
}

export function deleteProject({ dispatch }, project) {
  request
    .delete(`${config.API_URL}/projects/${project.id}`)
    .end((err) => {
      if (!err) {
        dispatch('DELETE_PROJECT', project.id);
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
