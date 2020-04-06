import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  footerStatus: true,
  headerStatus: true
}

const getters = {
  isFooterShow(state) {
    return state.footerStatus;
  },
  isHeaderShow(state) {
    return state.headerStatus;
  }

}

const mutations = {
  showFooter(state) {
    state.footerStatus = true;
  },
  hideFooter(state) {
    state.footerStatus = false;
  },
  showHeader(state) {
    state.headerStatus = true;
  },
  hideHeader(state) {
    state.headerStatus = false;
  }
}

const actions = {
  showFooter(context) {
    context.commit('showFooter');
  },
  hideFooter(context) {
    context.commit('hideFooter');
  },
  showHeader(context) {
    context.commit('showHeader');
  },
  hideHeader(context) {
    context.commit('hideHeader');
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
