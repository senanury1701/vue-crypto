<script setup lang="ts">
import { offices, positions } from './filterData'

const amount = ref()

const status = [
  { title: 'Active', value: 'true' },
  { title: 'Passive', value: 'false' },

]
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
              label="Positions"
              :items="positions"
              placeholder="Select Positions"
            />
          </VCol>

          <!-- 👉 Select Plan -->
          <VCol
            cols="12"
            sm="4"
          >
            <VAutocomplete
              label="Offices"
              :items="offices"
              placeholder="Select Offices"
            />
          </VCol>

          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppDateTimePicker
              v-model="date"
              label=" Date"
              placeholder="Select Date"
              :config="{ dateFormat: 'Y-m-d', disable: [{ from: `${currentYear}-${currentMonth}-20`, to: `${currentYear}-${currentMonth}-25` }] }"
            />
          </VCol>
          <VCol
            cols="12"
            sm="4"
          >
            <VTextField
              v-model="amount"
              label="Amount"
              type="number"
              placeholder="30"
            />
          </VCol>
          <VCol
            cols="12"
            sm="4"
          >
            <VAutocomplete
              label="Status"
              :items="status"
              placeholder="Select Status"
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
