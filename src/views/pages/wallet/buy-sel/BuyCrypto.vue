<script setup lang="ts">
// eslint-disable-next-line regex/invalid
import axios from 'axios'
import { defineProps, inject, ref } from 'vue'
import type { ballanceData } from '@/views/demos/components/tabs/BuySellTabs.vue'

const props = defineProps({
  exchangeRates: {
    type: Object as () => ballanceData,
    required: true,
  },
})

interface GetDataType {
  amount: number
  currency: string | null
}
const selectedItem = ref('Select')
const items = ['USD', 'EURO', 'TL', 'STERLIN']
const { updateBalance } = inject<any>('userBallance')

const exchangeRates = ref(props.exchangeRates)
const selectedCrypto = ref<string | null>(null)
const isDialogVisible = ref(false)
const amount = ref('')

const getData = ref<GetDataType>({
  amount: 0,
  currency: selectedCrypto.value,
})

const equivalentAmount = computed(() => {
  if (!selectedCrypto.value || !exchangeRates.value.rates[selectedCrypto.value])
    return

  return getData.value.amount = parseFloat(amount.value) * exchangeRates.value.rates[selectedCrypto.value]
})

const buyCrypto = () => {
  const getUrl = 'http://crypto.yahyabatulu.com:571/api/user/wallet/buy/'
  const token = localStorage.getItem('token')
  const depositUrl = 'http://crypto.yahyabatulu.com:571/api/user/wallet/deposit/'

  const requestData = {
    amount: getData.value.amount,
    currency: selectedCrypto.value,
  }

  const depositData = {
    amount: getData.value.amount,
  }

  if (selectedCrypto.value === 'USD') {
    axios.post(depositUrl, depositData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log('Buy işlemi başarılı:', response.data)
        updateBalance()
      })
      .catch(error => {
        console.error('Buy işlemi hata:', error)
      })
  }
  else {
    axios.post(getUrl, requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log('Buy işlemi başarılı:', response.data)
        updateBalance()
      })
      .catch(error => {
        console.error('Buy işlemi hata:', error)
      })
  }
}
</script>

<template>
  <div>
    <VRow align="center">
      <VCol
        cols="6"
        class="d-none d-lg-block"
      >
        <img
          style="width: 550px;"
          src="https://img.freepik.com/premium-photo/stock-exchange-market-concept-hand-touching-trading-icon-screen-with-graphs-analysis-candle-line-bokeh-colors-light_2034-2795.jpg?size=626&ext=jpg&uid=R115946161&ga=GA1.2.2069630942.1693917973&semt=sph"
          alt=""
        >
      </VCol>

      <VCol
        cols="12"
        lg="6"
      >
        <VCol class="d-flex justify-center">
          <VCard
            height="400px"
            width="500px"
          >
            <VCol class="d-flex">
              <VCol cols="8">
                <VTextField
                  v-model="amount"
                  label="Amount"
                  prefix="$"
                  type="number"
                  placeholder="10.05"
                />
              </VCol>

              <VCol cols="4">
                <VCombobox
                  v-model="selectedItem"
                  :items="items"
                />
              </VCol>
            </VCol>

            <VCol class="d-flex">
              <VCol cols="8">
                <VTextField
                  v-model="equivalentAmount"
                  label="Equivalent Amount"
                  prefix="$"
                  type="number"
                />
              </VCol>
              <VCol
                class="mt-2"
                cols="4"
              >
                <VDialog
                  v-model="isDialogVisible"
                  scrollable
                  max-width="400"
                >
                  <!-- Dialog Activator -->
                  <template #activator="{ props }">
                    <VBtn v-bind="props">
                      {{ selectedCrypto || "Crypto" }}
                    </VBtn>
                  </template>

                  <!-- Dialog Content -->
                  <VCard>
                    <DialogCloseBtn
                      variant="text"
                      size="small"
                      @click="isDialogVisible = false"
                    />

                    <VCardItem class="pb-3">
                      <VCardTitle>select Crypto</VCardTitle>
                    </VCardItem>

                    <VDivider />
                    <VCardText style="block-size: 300px;">
                      <VRadioGroup
                        v-model="selectedCrypto"
                        :inline="false"
                      >
                        <VRadio
                          v-for="(rate, currency) in exchangeRates.rates"
                          :key="currency"
                          :label="`${currency}`"
                          :value="currency"
                          color="primary"
                          @click="isDialogVisible = false"
                        />
                      </VRadioGroup>
                    </VCardText>

                    <VDivider />
                  </VCard>
                </VDialog>
              </VCol>
            </VCol>

            <VCol
              class="mt-2"
              cols="12"
            />

            <VCol class="m-1 text-center">
              <VBtn
                width="80%"
                @click="buyCrypto"
              >
                Buy Crypto
              </VBtn>
            </VCol>
          </VCard>
        </VCol>
      </VCol>
    </VRow>
  </div>
</template>
