import config from '../config';
import request from 'superagent';

export function incrementCounter({ dispatch }) {
  dispatch('INCREMENT', 1);
}

export function addNewProject({ dispatch }, newProjectName) {
  request
    .post(`${config.API_URL}/projects`)
    .send({ project: { name: newProjectName } })
    .end((err, res) => {
      if (!err) {
        dispatch('ADD_PROJECT', res.body.project);
      }
    });
}

export function chooseProject({ dispatch }, project) {
  dispatch('CHOOSE_PROJECT', project);
}
