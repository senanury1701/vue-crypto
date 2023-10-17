import { defineStore } from 'pinia'
import type { UserProperties } from '@/@fake-db/types'
import type { UserParams } from '@/views/apps/user/types'
import axios from '@axios'

export const useUserListStore = defineStore('UserListStore', {
  state: () => ({
    users: [], // Örnek: Kullanıcıları saklamak için bir dizi
  }),

  actions: {
    // Kullanıcıları getiren işlev
    async fetchUsers(params: UserParams) {
      try {
        const response = await axios.get('/apps/users/list', { params })

        this.users = response.data // Kullanıcıları saklayın

        return response.data // İsteği geri döndürün
      }
      catch (error) {
        console.error('Kullanıcıları alma hatası:', error)
        throw error // Hatanın tekrar fırlatılması
      }
    },

    // Kullanıcı ekleyen işlev
    async addUser(userData: UserProperties) {
      try {
        const response = await axios.post('/apps/users/user', {
          user: userData,
        })

        return response.data
      }
      catch (error) {
        console.error('Kullanıcı ekleme hatası:', error)
        throw error
      }
    },

    // Tek bir kullanıcıyı getiren işlev
    async fetchUser(id: number) {
      try {
        const response = await axios.get(`/apps/users/${id}`)

        return response.data
      }
      catch (error) {
        console.error('Kullanıcı getirme hatası:', error)
        throw error
      }
    },

    // Kullanıcıyı silen işlev
    async deleteUser(id: number) {
      try {
        const response = await axios.delete(`/apps/users/${id}`)

        return response.data
      }
      catch (error) {
        console.error('Kullanıcı silme hatası:', error)
        throw error
      }
    },
  },
})
