import { createStore } from 'vuex' // Vuex'i içe aktarın
import userState from './modules/userState'
import userData from './modules/userData'

const store = createStore({
  modules: {
    userState,
    userData,
  },
})

export default store
