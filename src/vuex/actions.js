import config from '../config';
import request from 'superagent';

export const incrementCounter = function ({ dispatch }) {
  dispatch('INCREMENT', 1);
};

export const addNewProject = function ({ dispatch }, newProjectName) {
  request
    .post(`${config.API_URL}/projects`)
    .send({ project: { name: newProjectName } })
    .end((err, res) => {
      if (!err) {
        dispatch('ADD_PROJECT', res.body.project);
      }
    });
};

export const chooseProject = function ({ dispatch }, project) {
  dispatch('CHOOSE_PROJECT', project);
};
