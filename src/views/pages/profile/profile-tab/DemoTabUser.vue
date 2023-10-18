<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import Account from '@/views/pages/profile/account-settings/AccountSettingsAccount.vue'
import Security from '@/views/pages/profile/account-settings/AccountSettingsSecurity.vue'
import WalletBilling from '@/views/pages/profile/account-settings/AccountSettingsBillingAndPlans.vue'

const props = defineProps({
  data: Object,
})

const data = ref(props.data)

const currentTab = ref(0)
</script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Account</VTab>
    <VTab>Security</VTab>
    <VTab>Blings Wallet</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      <Account
        v-if="currentTab === 0"
        :data="data"
      />
      <Security v-else-if="currentTab === 1" />
      <WalletBilling v-else-if="currentTab === 2" />
    </VWindowItem>
  </VWindow>
</template>
