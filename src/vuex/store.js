import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'node-uuid';

Vue.use(Vuex);

const currentState = {
  count: 0,
  projects: [
    { id: uuid.v4(), name: 'Write a TODO app' },
    { id: uuid.v4(), name: 'Cook burrito' },
  ],
};

const mutations = {
  INCREMENT(state, amount) {
    currentState.count = state.count + amount;
  },
  ADD_PROJECT(state, newProject) {
    currentState.projects.push(newProject);
  },
};

export default new Vuex.Store({
  state: currentState,
  mutations,
});
