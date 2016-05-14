import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const currentState = {
  count: 0,
  projects: [],
  chosenProject: null,
};

currentState.chosenProject = currentState.projects[0];

const mutations = {
  INCREMENT(state, amount) {
    currentState.count = state.count + amount;
  },
  ADD_PROJECT(state, newProject) {
    currentState.projects.push(newProject);
  },
  CHOOSE_PROJECT(state, projectId) {
    console.log(projectId);
  },
};

export default new Vuex.Store({
  state: currentState,
  mutations,
});
