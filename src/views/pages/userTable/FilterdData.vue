<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { offices, positions } from './filterData'

const store = useStore()
const selectedAmount = ref()
const selectedDate = ref()
const selectedOffice = ref()
const selectedStatus = ref()
const selectedPosition = ref()

const status = [
  { title: 'Active', value: true },
  { title: 'Passive', value: false },
]

const updateFilter = () => {
  const selectedAll = {
    selectedAmount: undefined,
    selectedDate: undefined,
    selectedOffice: undefined,
    selectedStatus: undefined,
    selectedPosition: undefined,
  }

  if (selectedAmount.value)
    selectedAll.selectedAmount = selectedAmount.value

  if (selectedDate.value)
    selectedAll.selectedDate = selectedDate.value

  if (selectedOffice.value)
    selectedAll.selectedOffice = selectedOffice.value

  if (selectedStatus.value)
    selectedAll.selectedStatus = selectedStatus.value

  if (selectedPosition.value)
    selectedAll.selectedPosition = selectedPosition.value

  store.dispatch('setFilteredAll', selectedAll)
  console.log(selectedAll)
}
</script>

<template>
  <div>
    <VCard
      title="Search Filters"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 Select Role -->
          <VCol
            cols="12"
            sm="4"
          >
            <VAutocomplete
              v-model="selectedPosition"
              label="Positions"
              :items="positions"
              placeholder="Select Positions"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>

          <!-- 👉 Select Plan -->
          <VCol
            cols="12"
            sm="4"
          >
            <VAutocomplete
              v-model="selectedOffice"
              label="Offices"
              :items="offices"
              placeholder="Select Offices"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>

          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppDateTimePicker
              v-model="selectedDate"

              label=" Date"
              placeholder="Select Date"
              :config="{ dateFormat: 'Y-m-d', disable: [{ from: `${currentYear}-${currentMonth}-20`, to: `${currentYear}-${currentMonth}-25` }] }"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>
          <VCol
            cols="12"
            sm="4"
          >
            <VTextField
              v-model="selectedAmount"
              label="Amount"
              type="number"
              placeholder="30"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>
          <VCol
            cols="12"
            sm="4"
          >
            <VAutocomplete
              v-model="selectedStatus"

              label="Status"
              :items="status"
              placeholder="Select Status"
              clearable
              clear-icon="mdi-close"
            />
          </VCol>
          <VCol
            cols="12"
            sm="4"
          >
            <VBtn class="w-100 h-100  ">
              Filtrele
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
