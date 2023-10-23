<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { offices, positions } from './filterData'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const status = [
  { title: 'Active', value: 'true' },
  { title: 'Passive', value: 'false' },

]

const gender = [
  { title: 'Female', value: 'female' },
  { title: 'Male', value: 'male' },
]

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
  (e: 'userData', value: UserProperties): void
}

interface Props {
  isDrawerOpen: boolean
}

const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref('')

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {

}

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Add User"
      @cancel="closeNavigationDrawer"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="name"
                  label="Regular"
                  placeholder="Placeholder Text"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  label="Positions"
                  :items="positions"
                  placeholder="Select Positions"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  label="Offices"
                  :items="offices"
                  placeholder="Select Offices"
                />
              </VCol>

              <VCol cols="12">
                <AppDateTimePicker
                  v-model="date"
                  label="Start Date"
                  placeholder="Select Date"
                  :config="{ dateFormat: 'Y-m-d', disable: [{ from: `${currentYear}-${currentMonth}-20`, to: `${currentYear}-${currentMonth}-25` }] }"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="amount"
                  label="Age"
                  type="number"
                  placeholder="30"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  label="Gender"
                  :items="gender"
                  placeholder="Select gender"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="amount"
                  label="Salary"
                  type="number"
                  placeholder="30"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  label="Status"
                  :items="status"
                  placeholder="Select Status"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="outlined"
                  color="secondary"
                  @click="closeNavigationDrawer"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
