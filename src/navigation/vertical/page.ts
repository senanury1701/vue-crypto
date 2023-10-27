import type { VerticalNavLink } from '@/@layouts/types'

export default [
  {
    title: 'User',
    icon: { icon: 'mdi-account-outline' },
    children: [
      { title: 'User Profile', to: { name: 'pages-user-profile-tab', params: { tab: 'profile' } } },
      { title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
      { title: 'Account Settings', to: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
    ],
  },
] as VerticalNavLink
