import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const currentState = {
  count: 0,
};

const mutations = {
  INCREMENT(state, amount) {
    currentState.count = state.count + amount;
  },
};

export default new Vuex.Store({
  state: currentState,
  mutations,
});
