import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'home' },
    icon: { icon: 'mdi-home-outline' },
  },
  {
    title: 'Second page',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-file-document-outline' },
  },
  {
    title: 'User',
    icon: { icon: 'mdi-account-outline' },
    to: { name: 'user' },
  },
  {
    title: 'Wallet',
    icon: { icon: 'mdi-wallet-outline' },
    to: { name: 'wallet' },
  },

] as VerticalNavItems
