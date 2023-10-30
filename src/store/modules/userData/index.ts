export interface User {
  id: number
  name: string
  position: string
  office: string
  age: number
  gender: string
  startDate: string
  salary: number
  status: boolean
  country: string
  contact: string
  email: string
  language: array
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Frontend Developer',
    office: 'New York',
    age: 30,
    gender: 'Male',
    startDate: '2022-01-15',
    salary: 75000,
    status: true,
    country: 'İngiltere',
    contact: '1234567890',
    email: 'johndoe@example.com',
    language: ['English'],
  },
  {
    id: 2,
    name: 'Alice Smith',
    position: 'Backend Developer',
    office: 'Los Angeles',
    age: 28,
    gender: 'Female',
    startDate: '2021-11-20',
    salary: 80000,
    status: true,
    country: 'Amerika',
    contact: '9876543210',
    email: 'alicesmith@example.com',
    language: ['English'],
  },
  {
    id: 3,
    name: 'Mehmet Yılmaz',
    position: 'Full Stack Developer',
    office: 'İstanbul',
    age: 32,
    gender: 'Male',
    startDate: '2022-03-05',
    salary: 85000,
    status: true,
    country: 'Türkiye',
    contact: '5555555555',
    email: 'mehmetyilmaz@example.com',
    language: ['Türkçe, İngilizce'],
  },
  {
    id: 4,
    name: 'Maria García',
    position: 'UI/UX Designer',
    office: 'Barcelona',
    age: 27,
    gender: 'Female',
    startDate: '2022-02-10',
    salary: 72000,
    status: false,
    country: 'İspanya',
    contact: '1239874560',
    email: 'mariagarcia@example.com',
    language: ['İspanyolca, İngilizce'],
  },
  {
    id: 5,
    name: 'Emma Johnson',
    position: 'Data Scientist',
    office: 'Chicago',
    age: 29,
    gender: 'Female',
    startDate: '2021-08-15',
    salary: 85000,
    status: true,
    country: 'Amerika',
    contact: '5551237890',
    email: 'emmajohnson@example.com',
    language: ['English'],
  },
  {
    id: 6,
    name: 'Ahmed Mohamed',
    position: 'Software Engineer',
    office: 'Dubai',
    age: 31,
    gender: 'Male',
    startDate: '2022-04-25',
    salary: 90000,
    status: true,
    country: 'Birleşik Arap Emirlikleri',
    contact: '+971501234567',
    email: 'ahmedmohamed@example.com',
    language: ['Arabic, English'],
  },
  {
    id: 7,
    name: 'Sophie Martin',
    position: 'Product Manager',
    office: 'Paris',
    age: 35,
    gender: 'Female',
    startDate: '2021-10-10',
    salary: 95000,
    status: false,
    country: 'Fransa',
    contact: '33198765432',
    email: 'sophiemartin@example.com',
    language: ['French, English'],
  },
  {
    id: 8,
    name: 'David Kim',
    position: 'Database Administrator',
    office: 'Seoul',
    age: 33,
    gender: 'Male',
    startDate: '2022-06-20',
    salary: 88000,
    status: true,
    country: 'Güney Kore',
    contact: '025556789',
    email: 'davidkim@example.com',
    language: ['Korean, English'],
  },
  {
    id: 9,
    name: 'Luis Rodriguez',
    position: 'Mobile App Developer',
    office: 'Madrid',
    age: 28,
    gender: 'Male',
    startDate: '2021-12-12',
    salary: 75000,
    status: true,
    country: 'İspanya',
    contact: '34915556677',
    email: 'luisrodriguez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 10,
    name: 'Anna Petrovna',
    position: 'Graphic Designer',
    office: 'Moscow',
    age: 26,
    gender: 'Female',
    startDate: '2022-05-30',
    salary: 72000,
    status: true,
    country: 'Rusya',
    contact: '74951234567',
    email: 'annapetrovna@example.com',
    language: ['Russian, English'],
  },
  {
    id: 11,
    name: 'Carlos Fernández',
    position: 'Systems Analyst',
    office: 'Buenos Aires',
    age: 32,
    gender: 'Male',
    startDate: '2022-03-15',
    salary: 78000,
    status: true,
    country: 'Arjantin',
    contact: '541155556789',
    email: 'carlosfernandez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 12,
    name: 'Sophia Chen',
    position: 'Data Analyst',
    office: 'Shanghai',
    age: 27,
    gender: 'Female',
    startDate: '2022-08-05',
    salary: 70000,
    status: true,
    country: 'Çin',
    contact: '+862155551234',
    email: 'sophiachen@example.com',
    language: ['Chinese, English'],
  },
  {
    id: 13,
    name: 'Pablo Gutiérrez',
    position: 'DevOps Engineer',
    office: 'Mexico City',
    age: 30,
    gender: 'Male',
    startDate: '2022-09-20',
    salary: 82000,
    status: true,
    country: 'Meksika',
    contact: '+525555559876',
    email: 'pablogutierrez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 14,
    name: 'Olga Ivanova',
    position: 'Quality Assurance Analyst',
    office: 'Saint Petersburg',
    age: 29,
    gender: 'Female',
    startDate: '2022-07-10',
    salary: 71000,
    status: true,
    country: 'Rusya',
    contact: '78129876543',
    email: 'olgaivanova@example.com',
    language: ['Russian, English'],
  },
  {
    id: 15,
    name: 'Daniel Lee',
    position: 'Network Administrator',
    office: 'Toronto',
    age: 33,
    gender: 'Male',
    startDate: '2022-11-25',
    salary: 80000,
    status: true,
    country: 'Kanada',
    contact: '+14165557890',
    email: 'daniellee@example.com',
    language: ['English'],
  },
  {
    id: 16,
    name: 'Elena Kowalski',
    position: 'UI Designer',
    office: 'Warsaw',
    age: 31,
    gender: 'Female',
    startDate: '2022-06-15',
    salary: 75000,
    status: true,
    country: 'Polonya',
    contact: '+48225556789',
    email: 'elenakowalski@example.com',
    language: ['Polish, English'],
  },
  {
    id: 17,
    name: 'Ali Khan',
    position: 'Software Architect',
    office: 'Karachi',
    age: 34,
    gender: 'Male',
    startDate: '2022-04-30',
    salary: 85000,
    status: true,
    country: 'Pakistan',
    contact: '+922155551234',
    email: 'alikhan@example.com',
    language: ['Urdu, English'],
  },
  {
    id: 18,
    name: 'Isabella Silva',
    position: 'Content Writer',
    office: 'São Paulo',
    age: 28,
    gender: 'Female',
    startDate: '2022-01-20',
    salary: 72000,
    status: true,
    country: 'Brezilya',
    contact: '+551155559876',
    email: 'isabellasilva@example.com',
    language: ['Portuguese, English'],
  },
  {
    id: 19,
    name: 'Hiroshi Tanaka',
    position: 'Software Tester',
    office: 'Tokyo',
    age: 26,
    gender: 'Male',
    startDate: '2022-09-05',
    salary: 73000,
    status: true,
    country: 'Japonya',
    contact: '+81355551234',
    email: 'hiroshitanaka@example.com',
    language: ['Japanese, English'],
  },
  {
    id: 20,
    name: 'Julia Smith',
    position: 'Marketing Manager',
    office: 'London',
    age: 34,
    gender: 'Female',
    startDate: '2022-03-15',
    salary: 90000,
    status: true,
    country: 'İngiltere',
    contact: '442012345678',
    email: 'juliasmith@example.com',
    language: ['English'],
  },
  {
    id: 21,
    name: 'Juan López',
    position: 'Database Developer',
    office: 'Bogotá',
    age: 31,
    gender: 'Male',
    startDate: '2022-05-20',
    salary: 78000,
    status: true,
    country: 'Kolombiya',
    contact: '+5715556789',
    email: 'juanlopez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 22,
    name: 'Mia Anderson',
    position: 'Content Strategist',
    office: 'Sydney',
    age: 29,
    gender: 'Female',
    startDate: '2022-06-30',
    salary: 76000,
    status: true,
    country: 'Avustralya',
    contact: '+61255559876',
    email: 'miaanderson@example.com',
    language: ['English'],
  },
  {
    id: 23,
    name: 'Javier Pérez',
    position: 'Business Analyst',
    office: 'Mexico City',
    age: 32,
    gender: 'Male',
    startDate: '2022-08-10',
    salary: 80000,
    status: true,
    country: 'Meksika',
    contact: '+525555551234',
    email: 'javierperez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 24,
    name: 'Lily Chen',
    position: 'Software Engineer',
    office: 'Shanghai',
    age: 28,
    gender: 'Female',
    startDate: '2022-04-20',
    salary: 82000,
    status: true,
    country: 'Çin',
    contact: '+862155556789',
    email: 'lilychen@example.com',
    language: ['Chinese, English'],
  },
  {
    id: 25,
    name: 'Jose Rodriguez',
    position: 'Network Administrator',
    office: 'Buenos Aires',
    age: 33,
    gender: 'Male',
    startDate: '2022-02-25',
    salary: 85000,
    status: true,
    country: 'Arjantin',
    contact: '541155551234',
    email: 'joserodriguez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 26,
    name: 'Eva García',
    position: 'UI/UX Designer',
    office: 'Barcelona',
    age: 30,
    gender: 'Female',
    startDate: '2022-07-15',
    salary: 78000,
    status: true,
    country: 'İspanya',
    contact: '349198765432',
    email: 'evagarcia@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 27,
    name: 'Aiden Johnson',
    position: 'Data Analyst',
    office: 'New York',
    age: 29,
    gender: 'Male',
    startDate: '2022-10-05',
    salary: 75000,
    status: true,
    country: 'Amerika',
    contact: '1234567890',
    email: 'aidenjohnson@example.com',
    language: ['English'],

  },
  {
    id: 28,
    name: 'Ava Smith',
    position: 'Software Developer',
    office: 'San Francisco',
    age: 28,
    gender: 'Female',
    startDate: '2022-11-20',
    salary: 80000,
    status: true,
    country: 'Amerika',
    contact: '9876543210',
    email: 'avasmith@example.com',
    language: ['English'],
  },
  {
    id: 29,
    name: 'Sophie Wilson',
    position: 'Frontend Developer',
    office: 'Toronto',
    age: 27,
    gender: 'Female',
    startDate: '2022-02-10',
    salary: 77000,
    status: true,
    country: 'Kanada',
    contact: '+14165551234',
    email: 'sophiewilson@example.com',
    language: ['English'],
  },
  {
    id: 30,
    name: 'Mohamed Ali',
    position: 'Mobile App Developer',
    office: 'Cairo',
    age: 30,
    gender: 'Male',
    startDate: '2022-05-25',
    salary: 79000,
    status: true,
    country: 'Mısır',
    contact: '+20255556789',
    email: 'mohamedali@example.com',
    language: ['Arabic, English'],
  },
  {
    id: 31,
    name: 'Laura García',
    position: 'Marketing Specialist',
    office: 'Madrid',
    age: 29,
    gender: 'Female',
    startDate: '2022-06-20',
    salary: 76000,
    status: true,
    country: 'İspanya',
    contact: '34915556677',
    email: 'lauragarcia@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 32,
    name: 'Andrea Martinez',
    position: 'Product Owner',
    office: 'Buenos Aires',
    age: 33,
    gender: 'Female',
    startDate: '2022-04-30',
    salary: 82000,
    status: true,
    country: 'Arjantin',
    contact: '541155551234',
    email: 'andreamartinez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 33,
    name: 'Alex Kim',
    position: 'Systems Engineer',
    office: 'Seoul',
    age: 31,
    gender: 'Male',
    startDate: '2022-09-15',
    salary: 84000,
    status: true,
    country: 'Güney Kore',
    contact: '025556789',
    email: 'alexkim@example.com',
    language: ['Korean, English'],
  },
  {
    id: 34,
    name: 'Sofia López',
    position: 'UI Designer',
    office: 'Mexico City',
    age: 28,
    gender: 'Female',
    startDate: '2022-07-10',
    salary: 78000,
    status: true,
    country: 'Meksika',
    contact: '+525555559876',
    email: 'sofialopez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 35,
    name: 'Maxim Ivanov',
    position: 'Data Scientist',
    office: 'Moscow',
    age: 30,
    gender: 'Male',
    startDate: '2022-08-05',
    salary: 80000,
    status: true,
    country: 'Rusya',
    contact: '74955556677',
    email: 'maximivanov@example.com',
    language: ['Russian, English'],
  },
  {
    id: 36,
    name: 'Luna Silva',
    position: 'Software Engineer',
    office: 'São Paulo',
    age: 26,
    gender: 'Female',
    startDate: '2022-03-25',
    salary: 77000,
    status: true,
    country: 'Brezilya',
    contact: '+551155551234',
    email: 'lunasilva@example.com',
    language: ['Portuguese, English'],
  },
  {
    id: 37,
    name: 'Oscar Li',
    position: 'Database Administrator',
    office: 'Shanghai',
    age: 32,
    gender: 'Male',
    startDate: '2022-01-15',
    salary: 82000,
    status: true,
    country: 'Çin',
    contact: '+862155556789',
    email: 'oscarli@example.com',
    language: ['Chinese, English'],
  },
  {
    id: 38,
    name: 'Emma Kim',
    position: 'Content Writer',
    office: 'Seoul',
    age: 28,
    gender: 'Female',
    startDate: '2022-11-20',
    salary: 76000,
    status: true,
    country: 'Güney Kore',
    contact: '025551234',
    email: 'emmakim@example.com',
    language: ['Korean, English'],
  },
  {
    id: 39,
    name: 'John Smith',
    position: 'Full Stack Developer',
    office: 'San Francisco',
    age: 31,
    gender: 'Male',
    startDate: '2022-04-25',
    salary: 88000,
    status: true,
    country: 'Amerika',
    contact: '9871234567',
    email: 'johnsmith@example.com',
    language: ['English'],
  },
  {
    id: 40,
    name: 'Sophia Kim',
    position: 'UI/UX Designer',
    office: 'Seoul',
    age: 29,
    gender: 'Female',
    startDate: '2022-08-15',
    salary: 77000,
    status: true,
    country: 'Güney Kore',
    contact: '025559876',
    email: 'sophiakim@example.com',
    language: ['Korean, English'],
  },
  {
    id: 41,
    name: 'Max Müller',
    position: 'Software Architect',
    office: 'Berlin',
    age: 34,
    gender: 'Male',
    startDate: '2022-06-20',
    salary: 89000,
    status: true,
    country: 'Almanya',
    contact: '493055551234',
    email: 'maxmuller@example.com',
    language: ['German, English'],
  },
  {
    id: 42,
    name: 'Olivia Wang',
    position: 'Business Analyst',
    office: 'Shanghai',
    age: 28,
    gender: 'Female',
    startDate: '2022-09-10',
    salary: 78000,
    status: true,
    country: 'Çin',
    contact: '+86215556677',
    email: 'oliviawang@example.com',
    language: ['Chinese, English'],
  },
  {
    id: 43,
    name: 'Mohamed Ali',
    position: 'Data Analyst',
    office: 'Cairo',
    age: 27,
    gender: 'Male',
    startDate: '2022-10-30',
    salary: 76000,
    status: true,
    country: 'Mısır',
    contact: '+20255551234',
    email: 'mohamedali@example.com',
    language: ['Arabic, English'],
  },
  {
    id: 44,
    name: 'Isabella García',
    position: 'Software Developer',
    office: 'Madrid',
    age: 30,
    gender: 'Female',
    startDate: '2022-05-15',
    salary: 80000,
    status: true,
    country: 'İspanya',
    contact: '349155556789',
    email: 'isabellagarcia@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 45,
    name: 'Ethan Chen',
    position: 'Network Administrator',
    office: 'Shanghai',
    age: 33,
    gender: 'Male',
    startDate: '2022-03-05',
    salary: 85000,
    status: true,
    country: 'Çin',
    contact: '+862155559876',
    email: 'ethanchen@example.com',
    language: ['Chinese, English'],
  },
  {
    id: 46,
    name: 'Mia Rodriguez',
    position: 'Content Writer',
    office: 'Buenos Aires',
    age: 28,
    gender: 'Female',
    startDate: '2022-01-25',
    salary: 77000,
    status: true,
    country: 'Arjantin',
    contact: '54115556677',
    email: 'miarodriguez@example.com',
    language: ['Spanish, English'],
  },
  {
    id: 47,
    name: 'Liam Smith',
    position: 'Database Administrator',
    office: 'Toronto',
    age: 32,
    gender: 'Male',
    startDate: '2022-11-10',
    salary: 89000,
    status: true,
    country: 'Kanada',
    contact: '+141655551234',
    email: 'liamsmith@example.com',
    language: ['English'],
  },
  {
    id: 48,
    name: 'Olivia Müller',
    position: 'Product Manager',
    office: 'Berlin',
    age: 30,
    gender: 'Female',
    startDate: '2022-07-20',
    salary: 78000,
    status: true,
    country: 'Almanya',
    contact: '493055556789',
    email: 'oliviamuller@example.com',
    language: ['German, English'],
  },
]

const state = {
  users,
  filteredData: null,
}

const mutations = {
  addUser(_, newUser) {
    const lastUserId = Math.max(...state.users.map(user => user.id))

    newUser.id = lastUserId + 1
    state.users.push(newUser)
  },
  deleteUser(_, userId) {
    state.users = state.users.filter(user => user.id !== userId)
  },

  // kullanici bilgilerini duzenlemek
  updateUser(_, updatedUser) {
    const index = state.users.findIndex(user => user.id === updatedUser.id)
    if (index !== -1)
      state.users[index] = updatedUser
  },

  setFilteredProducts(_, selectedAll) {
    state.filteredData = null

    if (selectedAll.selectedStatus !== 1 && selectedAll.selectedStatus !== 2)
      selectedAll.selectedStatus = undefined
    if (selectedAll.selectedStatus === 1)
      selectedAll.selectedStatus = false
    if (selectedAll.selectedStatus === 2)
      selectedAll.selectedStatus = true

    console.log(selectedAll.selectedStatus)

    state.filteredData = state.users.filter(user => {
      if (selectedAll.selectedAmount !== undefined && user.salary <= selectedAll.selectedAmount)
        return false

      if (selectedAll.selectedDate !== undefined && user.startDate !== selectedAll.selectedDate)
        return false

      if (selectedAll.selectedOffice !== undefined && user.office !== selectedAll.selectedOffice)
        return false

      if (selectedAll.selectedStatus !== undefined && user.status !== selectedAll.selectedStatus)
        return false

      if (selectedAll.selectedPosition !== undefined && user.position !== selectedAll.selectedPosition)
        return false

      return true
    })
  },

}

const actions = {

  addUserData({ commit }, newUser) {
    commit('addUser', newUser)
  },
  deleteUserData({ commit }, userId) {
    commit('deleteUser', userId)
  },
  toggleUserStatus({ commit }, user) {
    commit('updateUser', user)
  },
  getUser(_, userId) {
    return new Promise<User | null>(resolve => {
      const selectedUser = state.users.find(user => user.id === userId)

      if (selectedUser)
        resolve(selectedUser)
    })
  },
  filterData({ commit }, selectedAll) {
    commit('setFilteredProducts', selectedAll)
  },
}

export default {
  namespaced: true, // Bu modülün isim alanını açıklayan bir seçenek
  state,
  mutations,
  actions,
}

/* const store = createStore({
  state: {
    users,
  },
  mutations: {
    addUser(state, newUser) {
      state.users.push(newUser)
    },
    deleteUser(state, userId) {
      console.log('geldi')

      // state.users = state.users.filter(user => user.id !== userId)
    },

    // kullanici bilgilerini duzenlemek
    updateUser(state, updatedUser) {
      const index = state.users.findIndex(user => user.id === updatedUser.id)
      if (index !== -1)
        state.users[index] = updatedUser
    },
    setFilterd(state) {
      if (state.filterCategory) {
        state.filteredProducts = state.products.filter(
          product => product.category === state.filterCategory,
        )
      }
      else {
        state.filteredProducts = state.products
      }
    },
  },
  actions: {
    addUserData({ commit }, newUser) {
      commit('addUser', newUser)
    },
    deleteUserData({ commit }, userId) {
      commit('deleteUser', userId)
    },
    toggleUserStatus({ commit }, user) {
      commit('updateUser', user)
    },
    getUser({ state }, userId) {
      // Kullanıcıyı kimliğine göre bul
      const user = state.users.find(user => user.id === userId)

      return Promise.resolve({ data: user })
    },

  },

})

export default store
 */
