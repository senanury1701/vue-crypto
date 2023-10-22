<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { useStore } from 'vuex'
import BuyBtn from './BuyBtn.vue'

const props = defineProps({
  exchangeRates: Object,
})

const store = useStore()
const favoriteCryptoList = computed(() => store.state.favoriteCryptos)
const selectedCrypto = ref()
const exchangeRate = ref<any>(props.exchangeRates)
const search = ref('')
const isDialogVisible = ref(false)

// headers
const headers = [
  { title: 'favori', key: 'favori', sortable: false },
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

const toggleFavorite = item => {
  item.isFavorite = !item.isFavorite
  if (item.isFavorite)
    store.dispatch('addCrypto', item) // Favori eklemek için Vuex action'ını çağırın

  else
    store.dispatch('removeCrypto', item) // Favoriyi kaldırmak için Vuex action'ını çağırın
}

const handleButtonClick = (crypto: string) => {
  selectedCrypto.value = crypto
  console.log(selectedCrypto.value)
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
      <template #item.favori="{ item }">
        <IconBtn @click="toggleFavorite(item)">
          <VIcon
            :icon="item.isFavorite ? 'mdi-star' : 'mdi-star-outline'"
            :color="item.isFavorite ? 'warning' : ''"
          />
        </IconBtn>
      </template>
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
        <VDialog
          v-model="isDialogVisible"
          max-width="600"
        >
          <template #activator="{ props }">
            <VBtn
              v-bind="props"
              color="primary"
              @click="handleButtonClick(item)"
            >
              Buy
            </VBtn>
          </template>
          <BuyBtn
            v-model:is-dialog-visible="isDialogVisible"
            :selected-crypto="selectedCrypto"
          />
        </VDialog>
      </template>
    </VDataTable>

    <VCol>
      <VCard>
        <VCardText>
          <h3>Favori Kripto Paralar</h3>
          <ul>
            <li
              v-for="crypto in favoriteCryptoList"
              :key="crypto"
            >
              {{ crypto.value.crypto }} :
              {{ crypto.value.rate }}
            </li>
          </ul>
        </VCardText>
      </VCard>
    </VCol>
  </div>
</template>
