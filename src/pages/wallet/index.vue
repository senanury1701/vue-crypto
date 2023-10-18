<script setup lang="ts">
// eslint-disable-next-line regex/invalid
import axios from 'axios'
import { provide, ref } from 'vue'
import BuySellTabs from '@/views/pages/wallet/tabs/BuySellTabs.vue'

const url = 'http://crypto.yahyabatulu.com:571/api/user/wallet/balance/'
const token = localStorage.getItem('token')
const userBallance = ref<any>()

const updateBalance = () => {
  axios(url, {
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
            <h1>Wallet</h1>
          </VTitle>
          <VText>
            <h2>${{ userBallance?.USD.toFixed(3) || "0" }}</h2>
          </VText>
        </VCard>
      </VCol>
      <VCol cols="12">
        <BuySellTabs :user-ballance="userBallance" />
      </VCol>
    </VRow>
  </div>
</template>
