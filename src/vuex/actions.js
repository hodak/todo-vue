import config from '../config';
import request from 'superagent';

export function incrementCounter({ dispatch }) {
  dispatch('INCREMENT', 1);
}

export function initProjects({ dispatch }) {
  request
    .get(`${config.API_URL}/projects`)
    .end((err, res) => {
      if (!err) {
        dispatch('RECEIVE_PROJECTS', res.body.projects);
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

export function chooseProject({ dispatch }, project) {
  dispatch('CHOOSE_PROJECT', project);
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
