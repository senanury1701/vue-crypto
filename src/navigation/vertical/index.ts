import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'home' },
    icon: { icon: 'mdi-home-outline' },
  },

  {
    title: 'User',
    icon: { icon: 'mdi-account-outline' },
    to: { name: 'profile' },
  },
  {
    title: 'Wallet',
    icon: { icon: 'mdi-wallet-outline' },
    to: { name: 'wallet' },
  },
  {
    title: 'Users',
    icon: { icon: 'mdi-account-box' },
    to: { name: 'userTable' },
  },

] as VerticalNavItems
