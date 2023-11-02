<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import AddNewUserDrawer from './DataPanel.vue'

const props = defineProps({
  sharedData: Object,
})

const { sharedData } = toRefs(props)
const store = useStore()
const filterData = ref(store.state.userData.filteredData)
const search = ref('')
const isAddNewUserDrawerVisible = ref(false)
const userEditData = ref()
const selectedRows = ref<string[]>([])

watchEffect(() => filterData)

function handleDataChange(newData: object) {
  filterData.value = newData
  console.log('gekdu')
}

const toggleStatus = (user: object) => {
  store.dispatch('userData/toggleUserStatus', user)
  nextTick(() => {
    const updatedData = store.state.userData.filteredData

    filterData.value = updatedData
  })
}

const deleteItem = (userId: number) => {
  store.dispatch('userData/deleteUserData', userId)
  nextTick(() => {
    const updatedData = store.state.userData.filteredData

    filterData.value = updatedData
  })
}

const editItem = (user: object) => {
  userEditData.value = user
  isAddNewUserDrawerVisible.value = true
  nextTick(() => {
    const updatedData = store.state.userData.filteredData

    filterData.value = updatedData
  })
}

const addUser = () => {
  userEditData.value = null
  isAddNewUserDrawerVisible.value = true
  nextTick(() => {
    const updatedData = store.state.userData.filteredData

    filterData.value = updatedData
  })
}

const swal = (userId: number) => Swal.fire({
  title: 'Are You Sure?',
  text: 'Bu işlemi geri alamayacaksınız!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete!',
}).then(result => {
  if (result.isConfirmed)
    deleteItem(userId)
})

const selectedDelete = () => {
  if (selectedRows.value.length === 0)
    return

  const selectedIds = selectedRows.value.map(selectedId => parseInt(selectedId))

  selectedIds.forEach(userId => {
    deleteItem(userId)
  })

  selectedRows.value = []
}

// headers
const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Position', key: 'position' },
  { title: 'Office', key: 'office' },
  { title: 'StartDate', key: 'startDate' },
  { title: 'Age', key: 'age' },
  { title: 'Gender', key: 'gender' },
  { title: 'Salary', key: 'salary' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions' },
]

watch(sharedData, newData => {
  const updatedData = store.state.userData.filteredData

  filterData.value = updatedData
})
</script>

<template>
  <div>
    <VCard>
      <VCardText class="d-flex align-center  gap-4">
        <div class="me-3">
          <VBtn
            :disabled="!selectedRows.length"
            @click="selectedDelete"
          >
            delete
          </VBtn>
        </div>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-4">
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

          <VBtn
            prepend-icon="mdi-plus"
            @click="addUser"
          >
            Add User
          </VBtn>
        </div>
      </VCardText>

      <!-- 👉 Data Table  -->
      <VDataTable
        v-model="selectedRows"
        :headers="headers"
        :items="filterData"
        :search="search"
        :items-per-page="5"
        show-select
      >
        <!-- name -->

        <template #item.name="{ item }">
          <RouterLink
            :to="{ name: 'userTable-id', params: { id: item.raw.id } }"
            class="font-weight-medium user-list-name"
          >
            {{ item.raw.name }}
          </RouterLink>
        </template>

        <!-- position -->
        <template #item.position="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ">{{ item.raw.position }}</span>
          </div>
        </template>

        <!-- office -->
        <template #item.office="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ">{{ item.raw.office }}</span>
          </div>
        </template>

        <!-- startDate -->
        <template #item.startDate="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ">{{ item.raw.startDate }}</span>
          </div>
        </template>

        <!-- age -->
        <template #item.age="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ">{{ item.raw.age }}</span>
          </div>
        </template>

        <!-- gender -->
        <template #item.gender="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ">{{ item.raw.gender }}</span>
          </div>
        </template>

        <!-- salary -->
        <template #item.salary="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ">{{ item.raw.salary }}$</span>
          </div>
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <div class="d-flex align-center">
            <VSwitch
              v-model="item.raw.status"
              @change="toggleStatus(item.raw)"
            />
          </div>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <div class="d-flex gap-1">
            <IconBtn @click="editItem(item.raw)">
              <VIcon icon="mdi-pencil-outline" />
            </IconBtn>
            <IconBtn @click="swal(item.raw.id)">
              <VIcon icon="mdi-delete-outline" />
            </IconBtn>
          </div>
        </template>
      </VDataTable>
    </VCard>
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      :user-edit-data="userEditData"
      @dataChanged="handleDataChange"
    />
  </div>
</template>

<style lang="scss">
.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
