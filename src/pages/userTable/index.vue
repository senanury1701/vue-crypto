<script setup lang="ts">
import DataTable from '@/views/pages/userTable/DataTable.vue';
import { offices, positions } from '@/views/pages/userTable/filterData';
import NewFilterData from '@/views/pages/userTable/newFiltered.vue';

interface FilterItem {
  type: string
  title: string
  detail: {
    label: string
    placeholder: string
    items?: string[]
  }
}

const sharedData = ref()

watchEffect(() => sharedData)

const handleDataChange = (newData: object) => {
  sharedData.value = newData
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
      @data-changed="handleDataChange"
    />
    <DataTable :shared-data="sharedData" />
  </div>
</template>
