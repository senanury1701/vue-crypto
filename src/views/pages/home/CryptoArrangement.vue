<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'

const props = defineProps({
  exchangeRates: Object,
})

const exchangeRate = ref<any>(props.exchangeRates)
const search = ref('')

// headers
const headers = [
  { title: 'Kripto Para', key: 'crypto' },
  { title: 'Değer', key: 'rate' },
  { title: 'Aksiyon', key: 'button', sortable: false },
]

const cryptoRates = computed(() => {
  const list = []
  for (const crypto in exchangeRate.value.rates)
    list.push({ crypto, rate: exchangeRate.value.rates[crypto] })

  return list
})

const handleButtonClick = () => {
  // Burada butona tıklanınca yapılacak işlemleri tanımlayabilirsiniz
  // Örneğin, crypto'nun detay sayfasına yönlendirebilirsiniz.
}
</script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <VTextField
            v-model="search"
            density="compact"
            label="Search"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="cryptoRates"
      :search="search"
      :items-per-page="5"
    >
      <!-- product -->
      <template #item.name="{ item }">
        <div class="d-flex align-center">
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.name }}</span>
          </div>
        </div>
      </template>

      <!-- buyer -->
      <template #item.value="{ item }">
        <div class="d-flex align-center">
          <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.value }}</span>
        </div>
      </template>

      <!-- Delete -->
      <template #item.button="{ item }">
        <VBtn
          color="primary"
          @click="handleButtonClick"
        >
          Buy
        </VBtn>
      </template>
    </VDataTable>
  </div>
</template>
