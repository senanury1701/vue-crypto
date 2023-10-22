import { createStore } from 'vuex'

export default createStore({
  state: {
    favoriteCryptos: [], // Corrected the state property name
  },
  mutations: {
    addFavoriteCrypto(state, crypto) {
      if (!state.favoriteCryptos.includes(crypto))
        state.favoriteCryptos.push(crypto)
    },
    removeFavoriteCrypto(state, crypto) {
      const index = state.favoriteCryptos.indexOf(crypto)
      if (index !== -1)
        state.favoriteCryptos.splice(index, 1)
    },
  },
  actions: {
    addCrypto({ commit }, crypto) {
      commit('addFavoriteCrypto', crypto)
    },
    removeCrypto({ commit }, crypto) {
      commit('removeFavoriteCrypto', crypto)
    },
  },
  getters: {
    favoriteCryptos: state => state.favoriteCryptos,
  },
})
