<script setup lang="ts">
import { inject, ref } from 'vue'
import Swal from 'sweetalert2'
import axios from '@/configs/axiosConfig'
import type { ballanceData } from '@/views/pages/wallet/tabs/BuySellTabs.vue'

const props = defineProps({
  exchangeRates: {
    type: Object as () => ballanceData,
    required: true,
  },

})

const items = ['USD', 'EURO', 'TL', 'STERLIN']
const selectedItem = ref('Select')

const { userBallance, updateBalance } = inject<any>('userBallance')
const isDialogVisible = ref(false)
const amount = ref('')
const selectedCrypto = ref<string | null>(null)
const exchangeRates = ref(props.exchangeRates)

const ballance = ref(Object.fromEntries(
  Object.entries(
    userBallance.value,
  ).filter(
    (item: any) => item[1] !== 0,
  ),
))

console.log(ballance)
watch(userBallance, newBalance => {
  ballance.value = Object.fromEntries(
    Object.entries(newBalance).filter(item => item[1] !== 0),
  )
})
console.log(ballance.value)

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
  const token = localStorage.getItem('accessToken')

  const requestData = {
    amount: parseFloat(getData.amounts.value),
    currency: selectedCrypto.value,
  }

  axios.post('user/wallet/sell/', requestData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      console.log('SEl işlemi başarılı:', response.data)
      if (response.data.status)
        Swal.fire('Buy işlemi başarıli', '', 'success')
      else
        Swal.fire('Buy işlemi başarısiz', '', 'error')

      updateBalance()
    })
    .catch(error => {
      console.error('SEl işlemi hata:', error)
    })
}
</script>

<template>
  <VRow>
    <VCol
      md="6"
      cols="12"
    >
      <VCard class="mb-2 px-5 py-5 ">
        <Vlist>
          <h2 class="text-center">
            Cuzdandakiler
          </h2>
          <div class="scrollable-list">
            <VTable
              height="250"
              fixed-header
            >
              <thead>
                <tr>
                  <th class="text-uppercase">
                    Crypto Name
                  </th>
                  <th class="text-uppercase">
                    Crypto Value
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(item, index) in ballance"
                  :key="index"
                >
                  <td>
                    {{ index }}
                  </td>
                  <td>
                    {{ item }}
                  </td>
                </tr>
              </tbody>
            </VTable>
          </div>
        </Vlist>
      </VCard>
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <VCard class="py-2">
        <VCol
          cols="12"
          align="center"
          class="d-flex"
        >
          <VCol cols="8">
            <VTextField
              v-model="amount"
              label="ne kadar satcan"
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
                  class="w-100"
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
                      v-for="(value, key) in ballance"
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
          align="center"
          class="d-flex"
        >
          <VCol cols="8">
            <VTextField
              v-model="equivalentAmount"
              :label="`Bu kadar ${selectedItem} ediyor`"
              prefix="$"
              disabled
            />
          </VCol>

          <VCol cols="4">
            <VCombobox
              v-model="selectedItem"
              :items="items"
            />
          </VCol>
        </VCol>

        <VCol class="my-5  text-center">
          <VBtn
            class="w-75"
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
