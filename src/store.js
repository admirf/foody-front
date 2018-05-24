import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API = 'http://localhost:8090'

export default new Vuex.Store({
  state: {
    searchQuery: {
      name: '',
      minPrice: 0,
      maxPrice: 1000,
      proximity: 10000,
      categories: []
    },
    categories: [
      'Fast Food 1',
      'Fast Food 1',
      'Fast Food 1',
      'Fast Food 1'
    ],
    items: []
  },
  mutations: {
    changeName (state, q) {
      state.searchQuery.name = q
    },
    changeSearchQuery (state, q) {
      state.searchQuery = q
    },
    changeCategories (state, q) {
      state.categories = []
      q.forEach(function (elem) {
        state.categories.push(elem)
      })
    },
    changeItems (state, q) {
      state.items = []
      q.forEach(function (elem) {
        state.items.push(elem)
      })
    }
  },
  actions: {
    setSearchQuery ({ commit }, q) {
      commit('changeSearchQuery', q)
    },
    setCategories ({ commit }, q) {
      commit('changeCategories', q)
    },
    fetchItems ({ commit, state }) {
      let str = `${API}/search?name=${state.searchQuery.name}&price=${state.searchQuery.minPrice},${state.searchQuery.maxPrice}&proximity=${state.searchQuery.proximity}&categories=${state.searchQuery.categories.join(',')}`
      console.log(str)
      axios.get(
        str
      ).then(function (response) {
        commit('changeItems', response.data)
        console.log(response)
      })
    }
  }
})
