<script setup lang="ts">
import { offices, positions } from '@/views/pages/userTable/filterData'
import DataTable from '@/views/pages/userTable/DataTable.vue'
import NewFilterData from '@/views/pages/userTable/newFiltered.vue'

interface FilterItem {
  type: string
  title: string
  detail: {
    label: string
    placeholder: string
    items?: string[]
  }
}

const filter: FilterItem[] = [
  {
    type: 'VAutocomplete',
    title: 'position',
    detail: {
      label: 'Positions',
      items: positions,
      placeholder: 'Positions',
    },
  },
  {
    type: 'VAutocomplete',
    title: 'office',
    detail: {
      label: 'Offices',
      items: offices,
      placeholder: 'SelectOffices',
    },
  },
  {
    type: 'AppDateTimePicker',
    title: 'startDate',
    detail: {
      label: 'date',

      placeholder: 'Selectdate',
    },
  },

]
</script>

<template>
  <div>
    <NewFilterData
      class="mt-5"
      :filter="filter"
    />
    <DataTable />
  </div>
</template>
