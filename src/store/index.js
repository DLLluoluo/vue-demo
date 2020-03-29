import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  footerStatus: true
}

const getters = {
  isShow(state) {
    return state.footerStatus;
  }
}

const mutations = {
  show(state) {
    state.footerStatus = true;
  },
  hide(state) {
    state.footerStatus = false;
  }
}

const actions = {
  showFooter(context) {
    context.commit('show');
  },
  hideFooter(context) {
    context.commit('hide');
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
