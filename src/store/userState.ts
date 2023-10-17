import { createStore } from 'vuex'
import axios from '@axios'
import type { UserData } from '@/@types/user'

interface RootState {
  user: UserData | null
}

const state: RootState = {
  user: null,
}

const mutations = {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  setUser(state: RootState, user: UserData) {
    state.user = user
  },
}

const actions = {
  async loginUser({ commit }) {
    const token = localStorage.getItem('accessToken')
    try {
      const response = await axios.post('user/me/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log('Istek yanıtı:', response)

      // İsteğin yanıtı boş değilse "data" özelliğini kullanarak kullanıcıyı ayarla
      if (response && response.data)
        commit('setUser', response.data)
    }
    catch (error) {
      console.error(error.response.data)
    }
  },
}

const store = createStore({
  state,
  mutations,
  actions,

})

export default store
