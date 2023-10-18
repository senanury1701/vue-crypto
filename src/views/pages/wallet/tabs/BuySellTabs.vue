<script setup lang="ts">
import { ref } from 'vue'
import axios from '@/configs/axiosConfig'
import BuyCrypto from '@/views/pages/wallet/buy-sel/BuyCrypto.vue'
import SellCrypto from '@/views/pages/wallet/buy-sel/SelCrypto.vue'

const props = defineProps({
  userBallance: Object,
})

const userBalance = ref(props.userBallance)
const currentTab = ref(0)

export interface ballanceData {
  currency: string
  rates: Record<string, number>
}

const exchangeRates = ref<ballanceData>({
  currency: 'USD',
  rates: { },
})

axios.get('exchange-rates/').then((r: any) => {
  const data = r.data

  exchangeRates.value.currency = data.currency
  exchangeRates.value.rates = data.rates
})
</script>

<template>
  <div>
    <VTabs
      v-model="currentTab"
      align-tabs="center"
    >
      <VTab>Buy</VTab>
      <VTab>Sell</VTab>
    </VTabs>

    <VWindow
      v-model="currentTab"
      class="mt-5"
    >
      <VWindowItem
        v-for="item in 2"
        :key="item"
      >
        <BuyCrypto
          v-if="currentTab === 0"
          :exchange-rates="exchangeRates"
        />
        <SellCrypto
          v-else-if="currentTab === 1"
          :exchange-rates="exchangeRates"
        />
      </VWindowItem>
    </VWindow>
  </div>
</template>
