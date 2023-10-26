import { createStore } from 'vuex'
import axios from '/src/configs/axiosConfig'
import type { UserData } from '@/@types/user'

interface RootState {
  user: UserData | null
}

const state: RootState = {
  user: '',
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
      const response = await axios.get('user/me/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

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
