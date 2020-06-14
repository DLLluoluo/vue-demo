import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  footerStatus: true,
  headerStatus: true,
  user: {
    auth: false
  }
}

const getters = {
  isFooterShow(state) {
    return state.footerStatus;
  },
  isHeaderShow(state) {
    return state.headerStatus;
  },
  userInfo(state) {
    return state.user;
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
  },
  userData(state, payload) {
    state.user = payload;
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
  },
  updateUser(context, payload) {
    // console.log(payload);
    context.commit('userData', payload);
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
