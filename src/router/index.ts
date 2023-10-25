import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from './utils' // utils.ts dosyasından isUserLoggedIn fonksiyonunu içe aktarın
import routes from '~pages'
import UserTableView from '@/pages//userTable/view/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'pages-userTable-view', // Yönlendirmenin adı
      path: '/pages/userTable/:id', // Yönlendirmenin URL'i ve parametresi
      component: UserTableView, // Yönlendirilecek bileşen
    },
    ...setupLayouts(routes),
  ],
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, from, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (to.name === 'login' && isLoggedIn) {
    // Kullanıcı giriş yapmışsa ve hedef sayfa "/login" ise, ana sayfaya yönlendir
    next({ name: 'home' })
  }
  else if (to.name === 'login' || to.name === 'register' || to.name === 'forgot-password') {
    next()
  }
  else if (!isLoggedIn) {
    // Kullanıcı giriş yapmamışsa ve hedef sayfa login, register veya forgot-password değilse, login sayfasına yönlendir
    next({ name: 'login' })
  }
  else {
    // Diğer durumlarda kullanıcıyı hedef sayfaya yönlendir
    next()
  }
})

export default router
