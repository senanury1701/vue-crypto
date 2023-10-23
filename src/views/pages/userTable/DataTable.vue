<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { useStore } from 'vuex'

const store = useStore()
const users = computed(() => store.state.users)
const search = ref('')
const usersData = ref(users.value)

console.log(usersData)

// headers
const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Position', key: 'position' },
  { title: 'Office', key: 'office' },
  { title: 'StartDate', key: 'startDate' },
  { title: 'Age', key: 'age' },
  { title: 'Gender', key: 'gender' },
  { title: 'Salary', key: 'salary' },
]
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <VRow>
          <VCardText class="d-flex ">
            <VCol cols="6">
              <!-- 👉 Export button -->
              <VBtn
                variant="outlined"
                color="secondary"
                prepend-icon="mdi-tray-arrow-up"
              >
                Export
              </VBtn>
            </VCol>
            <VCol
              cols="6"
              class="d-flex"
            >
              <!-- 👉 Search  -->
              <VTextField
                v-model="search"
                density="compact"
                label="Search"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                dense
                outlined
                class="mx-3"
              />

              <!-- 👉 Add user button -->
              <VBtn
                class="order-sm-2 order-1"
                @click="isAddNewUserDrawerVisible = true"
              >
                Add User
              </VBtn>
            </VCol>
          </VCardText>
        </VRow>
      </VCardText>

      <!-- 👉 Data Table  -->
      <VDataTable
        :headers="headers"
        :items="usersData"
        :search="search"
        :items-per-page="5"
      >
        <!-- name -->
        <template #item.value.name="{ item }">
          <div class="d-flex align-center">
            <div class="d-flex flex-column ms-3">
              <span class="text-xs">{{ item.name }}</span>
            </div>
          </div>
        </template>

        <!-- position -->
        <template #item.value.position="{ item }">
          <div class="d-flex align-center">
            <span class="ms-1 text-no-wrap">{{ item.position }}</span>
          </div>
        </template>

        <!-- office -->
        <template #item.value.office="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.office }}</span>
          </div>
        </template>

        <!-- startDate -->
        <template #item.value.startDate="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.startDate }}</span>
          </div>
        </template>

        <!-- age -->
        <template #item.value.age="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.age }}</span>
          </div>
        </template>

        <!-- gender -->
        <template #item.value.gender="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.gender }}</span>
          </div>
        </template>

        <!-- salary -->
        <template #item.value.salary="{ item }">
          <div class="d-flex align-center">
            <span class="text-no-wrap font-weight-medium text-high-emphasis ms-2">{{ item.salary }}$</span>
          </div>
        </template>

        <!-- Delete -->
        <!--
          <template #item.delete="{ item }">
          <IconBtn @click="deleteItem(item.raw.product.id)">
          <VIcon icon="mdi-delete-outline" />
          </IconBtn>
          </template>
        -->
      </VDataTable>
    </VCard>
  </div>
</template>
