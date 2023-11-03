<script setup lang="ts">
import { ref } from 'vue'
import { boolean } from 'yup'
import axios from '@/configs/axiosConfig'

const props = defineProps({
  selectedCrypto: {
    type: Object,
    required: true,
  },
  isDialogVisible: boolean,
})

const isDialogVisible = ref(true)
const selectedItem = ref('Select')
const items = ['USD', 'EURO', 'TL', 'STERLIN']
const selectedCrypto = ref(props.selectedCrypto)
const amount = ref()
const errorMessage = ref('')

interface GetDataType {
  amount: number
  currency: string
}

const getData = ref<GetDataType>({
  amount: 0,
  currency: selectedCrypto.value.raw.crypto,
})

console.log(getData)

const equivalentAmount = computed(() => {
  return getData.value.amount = parseFloat(amount.value) * selectedCrypto.value.raw.rate
})

const buyCrypto = () => {
  const token = localStorage.getItem('accessToken')

  const requestData = {
    amount: getData.value.amount,
    currency: getData.value.currency,
  }

  const depositData = {
    amount: getData.value.amount,
  }

  if (selectedCrypto.value.raw.crypto === 'USD') {
    axios.post('user/wallet/deposit/', depositData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log('Buy işlemi başarılı:', response.data)
        errorMessage.value = response.data.message
      })
      .catch(error => {
        console.error('Buy işlemi hata:', error)
      })
  }
  else {
    axios.post('user/wallet/buy/', requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log('Buy işlemi başarılı:', response.data)
        errorMessage.value = response.data.message
      })
      .catch(error => {
        console.error('Buy işlemi hata:', error)
      })
  }
}
</script>

<template>
  <!--
    <DialogCloseBtn
    variant="text"
    size="small"
    @click="isDialogVisible = false"
    />
  -->
  <!-- Dialog Content -->
  <VCard title="Buy Crypto">
    <VRow class="my-4 mx-1">
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

      <VCol cols="8">
        <VTextField
          v-model="equivalentAmount"
          disabled
        />
      </VCol>
      <VCol cols="4">
        <h4>
          {{ selectedCrypto.value.crypto }}
        </h4>
      </VCol>
    </VRow>
    <VCol class="text-center my-1">
      <VBtn
        width="80%"
        @click="buyCrypto"
      >
        Buy Crypto
      </VBtn>
      <VCol
        v-if="errorMessage"
        class="text-center my-3"
      >
        <p class="text-h5 text-red">
          {{ errorMessage }}
        </p>
      </VCol>
    </VCol>
  </VCard>
</template>
