<script setup lang="ts">
import CryptoArrangement from '@/views/pages/home/CryptoArrangement.vue'

const combinedDataQueue = ref<any>({
  BTC: [],
  ETH: [],
})

const exchangeRates = ref<any>({
  currency: 'USD',
  rates: { },
})

const isLoading = ref()
const url = 'ws://crypto.yahyabatulu.com:571/ws/exchange-rates'
const ws = new WebSocket(url)

let updateInterval = 0

isLoading.value = false

onMounted(() => {
  ws.addEventListener('message', event => {
    if (updateInterval > Date.now())
      return

    updateInterval = Date.now() + 60000

    const data = JSON.parse(event.data)

    exchangeRates.value.currency = data.currency
    exchangeRates.value.rates = data.rates

    combinedDataQueue.value.BTC.push(data.rates.BTC)
    combinedDataQueue.value.ETH.push(data.rates.ETH)

    // Dizi 10 elemandan fazla ise en eski veriyi silin
    if (combinedDataQueue.value.ETH.length > 10)
      combinedDataQueue.value.ETH.shift() // En eski veriyi sil

    if (combinedDataQueue.value.BTC.length > 10)
      combinedDataQueue.value.BTC.shift() // En eski veriyi sil

    // Yükleme durumunu false olarak güncelle

    if (combinedDataQueue.value.BTC.length === 0)
      isLoading.value = true
    localStorage.setItem('isLoading', JSON.stringify(isLoading.value))
  })
})
</script>

<template>
  <CryptoArrangement :exchange-rates="exchangeRates" />
</template>
