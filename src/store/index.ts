import { createStore } from 'vuex' // Vuex'i içe aktarın
import storeUser from './modules/userState'
import userData from './modules/userData'

const store = createStore({
  modules: {
    storeUser,
    userData,
  },
})

export default store
