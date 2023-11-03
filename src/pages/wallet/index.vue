<script setup lang="ts">
import { provide, ref } from 'vue'
import axios from '@/configs/axiosConfig'
import BuySellTabs from '@/views/pages/wallet/tabs/BuySellTabs.vue'

const token = localStorage.getItem('accessToken')
const userBallance = ref<any>()

const updateBalance = () => {
  axios('user/wallet/balance/', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((r: any) => {
    userBallance.value = r.data

    return null
  }).catch((e: any) => {
    console.error(e.response.data)
  })
}

provide('userBallance', {
  userBallance,
  updateBalance,
})

onMounted(() => {
  updateBalance()
})
</script>

<template>
  <div>
    <VRow>
      <VCol>
        <VCard class="text-center wallet">
          <VTitle>
            Wallet
          </VTitle>
          <VText>
            <h2>${{ userBallance?.USD.toFixed(2) || "0" }}</h2>
          </VText>
        </VCard>
      </VCol>
      <VCol cols="12">
        <BuySellTabs :user-ballance="userBallance" />
      </VCol>
    </VRow>
  </div>
</template>
