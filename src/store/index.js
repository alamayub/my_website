import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginDialog: false
  },
  mutations: {
    SET_LOGIN_DIALOG: (state, payload) => state.loginDialog = payload
  },
  actions: {
  },
  modules: {
  }
})
