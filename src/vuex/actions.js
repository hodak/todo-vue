import uuid from 'node-uuid';

export const incrementCounter = function ({ dispatch }) {
  dispatch('INCREMENT', 1);
};

export const addNewProject = function ({ dispatch }, newProjectName) {
  dispatch('ADD_PROJECT', {
    id: uuid.v4(),
    name: newProjectName,
  });
};
