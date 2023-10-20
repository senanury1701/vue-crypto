import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from './utils'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
  ],
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (!isLoggedIn && to.name !== 'login')
    next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } })

  else if (isLoggedIn && from.query.to && to.fullPath !== from.query.to)
    next({ path: from.query.to as string })

  else if (to.name === 'login' && isLoggedIn)
    next({ name: 'home' })

  else
    next()
})

export default router
