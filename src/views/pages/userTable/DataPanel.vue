<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import { offices, positions } from '@/views/pages/userTable/filterData'
import { requiredValidator } from '@validators'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const store = useStore()

const statusItem = [
  { title: 'Active', value: true },
  { title: 'Passive', value: false },

]

const genderItem = [
  { title: 'Female', value: 'female' },
  { title: 'Male', value: 'male' },
]

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
}

interface Props {
  isDrawerOpen: boolean
}

const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref('')
const position = ref()
const office = ref()
const startDate = ref()
const age = ref()
const gender = ref()
const salary = ref()
const status = ref()

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const swal = () => {
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: 'Don\'t save',
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')

      const userData = {
        name: name.value,
        position: position.value,
        office: office.value,
        startDate: startDate.value,
        age: age.value,
        gender: gender.value,
        salary: salary.value,
        status: status.value,
      }

      store.dispatch('addUserData', userData)
      closeNavigationDrawer()
    }

    else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      swal()
  })
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
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  v-model="position"
                  label="Positions"
                  :items="positions"
                  placeholder="Select Positions"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  v-model="office"
                  label="Offices"
                  :items="offices"
                  placeholder="Select Offices"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <AppDateTimePicker
                  v-model="startDate"
                  label="Start Date"
                  placeholder="Select Date"
                  :config="{ dateFormat: 'Y-m-d', disable: [{ from: `${currentYear}-${currentMonth}-20`, to: `${currentYear}-${currentMonth}-25` }] }"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="age"
                  label="Age"
                  type="number"
                  placeholder="30"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  v-model="gender"
                  label="Gender"
                  :items="genderItem"
                  placeholder="Select gender"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="salary"
                  label="Salary"
                  type="number"
                  placeholder="30"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VAutocomplete
                  v-model="status"
                  label="Status"
                  :items="statusItem"
                  placeholder="Select Status"
                  :rules="[requiredValidator]"
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
