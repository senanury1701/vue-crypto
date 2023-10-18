<script setup lang="ts">
// eslint-disable-next-line regex/invalid
import axios from 'axios'
import { inject, ref } from 'vue'
import type { ballanceData } from '@/views/pages/wallet/tabs/BuySellTabs.vue'

const props = defineProps({
  exchangeRates: {
    type: Object as () => ballanceData,
    required: true,
  },

})

const { userBallance, updateBalance } = inject<any>('userBallance')
const isDialogVisible = ref(false)
const amount = ref('')
const selectedCrypto = ref<string | null>(null)
const exchangeRates = ref(props.exchangeRates)

const getData = {
  amounts: amount,
  currency: selectedCrypto,
}

const equivalentAmount = computed(() => {
  if (!selectedCrypto.value || !exchangeRates.value.rates[selectedCrypto.value])
    return null // Handle this case appropriately

  return (parseFloat(amount.value) / exchangeRates.value.rates[selectedCrypto.value])
})

const sellCrypto = () => {
  const token = localStorage.getItem('token')
  const url = 'http://crypto.yahyabatulu.com:571/api/user/wallet/sell/'

  const requestData = {
    amount: parseFloat(getData.amounts.value),
    currency: selectedCrypto.value,
  }

  axios.post(url, requestData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      console.log('SEl işlemi başarılı:', response.data)
      updateBalance()
    })
    .catch(error => {
      console.error('SEl işlemi hata:', error)
    })
}
</script>

<template>
  <VRow>
    <VCol>
      <VCard class="mb-2 px-5 py-5 ">
        <Vlist>
          <h2>Cuzdandakiler</h2><div class="scrollable-list">
            <div class="scrollable-list">
              <VListItem
                v-for="(item, index) in userBallance"
                :key="index"
              >
                <h4 v-if="item !== 0">
                  {{ index }} : {{ item }}
                </h4>
              </VListItem>
            </div>
          </div>
        </Vlist>
      </VCard>
    </VCol>
    <VCol
      cols="12"
      lg="6"
    >
      <VCard>
        <VCol
          align="center"
          class="d-flex"
        >
          <VCol cols="8">
            <VTextField
              v-model="amount"
              label="Amount"
              type="number"
              placeholder="0.05"
            />
          </VCol>
          <VCol
            cols="4"
            class="my-2"
          >
            <VDialog
              v-model="isDialogVisible"
              scrollable
              max-width="350"
            >
              <!-- Dialog Activator -->
              <template #activator="{ on }">
                <VBtn
                  v-bind="on"
                  @click="isDialogVisible = !isDialogVisible"
                >
                  {{ selectedCrypto || "SEC" }}
                </VBtn>
              </template>

              <!-- Dialog Content -->
              <VCard>
                <VCardItem class="pb-3">
                  <VCardTitle>Select Crypto</VCardTitle>
                </VCardItem>

                <VDivider />
                <VCardText style="block-size: 300px;">
                  <VRadioGroup
                    v-model="selectedCrypto"
                    :inline="false"
                    @click="isDialogVisible = false"
                  >
                    <VRadio
                      v-for="(value, key) in userBallance"
                      :key="key"
                      :label="key"
                      :value="key"
                      color="primary"
                    />
                  </VRadioGroup>
                </VCardText>

                <VDivider />
              </VCard>
            </VDialog>
          </VCol>
        </VCol>
        <VCol
          cols="12"
          class="my-5 "
        >
          <VTextField
            v-model="equivalentAmount"
            label="Equivalent Amount"
            prefix="$"
            type="number"
          />
        </VCol>

        <VCol class="my-5  ">
          <VBtn
            class="w-100"
            @click="sellCrypto"
          >
            Sat
          </VBtn>
        </VCol>
      </VCard>
    </VCol>
  </VRow>
</template>

<style scoped>
.scrollable-list {
  max-block-size: 300px; /* Set a suitable maximum height for the list container */
  overflow-y: auto; /* Enable vertical scrolling when content overflows the container */
}
</style>
