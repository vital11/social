import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	alertMessage: '',
    // apiUrl: 'http://127.0.0.1:8000',
    apiUrl: 'http://178.62.228.163:81',
    user: localStorage.getItem('user'),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    apiUrl: state => {
      return state.apiUrl
    },
    user(state) {
      return state.user
    }
  }
})
