<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import { offices, positions } from '@/views/pages/userTable/filterData'
import { requiredValidator } from '@validators'

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const store = useStore()
const userEditData = computed(() => props.userEditData)
const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref()
const position = ref()
const office = ref()
const startDate = ref()
const age = ref()
const gender = ref()
const salary = ref()
const status = ref()

watch(userEditData, newValue => {
  if (newValue) {
    name.value = newValue.name
    position.value = newValue.position
    office.value = newValue.office
    startDate.value = newValue.startDate
    age.value = newValue.age
    gender.value = newValue.gender
    salary.value = newValue.salary
    status.value = newValue.status
  }
})

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
  userEditData: Record<string, string | number | boolean >
}

// 👉 drawer close
function closeNavigationDrawer() {
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
      if (userEditData.value) {
        Swal.fire('Saved!', '', 'success')

        const userData = {
          id: userEditData.value.id,
          name: name.value,
          position: position.value,
          office: office.value,
          startDate: startDate.value,
          age: age.value,
          gender: gender.value,
          salary: salary.value,
          status: status.value,
        }

        store.dispatch('userData/toggleUserStatus', userData)
        nextTick(() => {
          const updatedData = store.state.userData.filteredData

          filterData.value = updatedData
        })
        closeNavigationDrawer()
      }
      else {
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

        store.dispatch('userData/addUserData', userData)
        nextTick(() => {
          const updatedData = store.state.userData.filteredData

          filterData.value = updatedData
        })
        closeNavigationDrawer()
      }
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
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}
</script>

<template>
  <div>
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
        :title="userEditData ? 'Düzenle' : 'Yeni Kullanici Ekle'"
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
                  <h2> Isim </h2>
                  <VTextField
                    v-model="name"
                    placeholder="Name"
                    :rules="[requiredValidator]"
                    class="my-2"
                  />
                </VCol>

                <VCol cols="12">
                  <h2> Positions </h2>
                  <VAutocomplete
                    v-model="position"
                    :items="positions"
                    placeholder="Select Positions"
                    :rules="[requiredValidator]"
                    class="my-2"
                  />
                </VCol>

                <VCol cols="12">
                  <h2> Office </h2>
                  <VAutocomplete
                    v-model="office"
                    :items="offices"
                    placeholder="Select Offices"
                    :rules="[requiredValidator]"
                    class="my-2"
                  />
                </VCol>

                <VCol cols="12">
                  <h2> Start Date </h2>
                  <AppDateTimePicker
                    v-model="startDate"
                    placeholder="Select date"
                    :rules="[requiredValidator]"
                    class="my-2"
                  />
                </VCol>

                <VCol cols="12">
                  <h2> Age </h2>
                  <VTextField
                    v-model="age"
                    type="number"
                    placeholder="30"
                    class="my-2"
                  />
                </VCol>

                <VCol cols="12">
                  <h2> Gender </h2>
                  <VAutocomplete
                    v-model="gender"
                    :items="genderItem"
                    placeholder="Select gender"
                    :rules="[requiredValidator]"
                    class="my-2"
                  />
                </VCol>

                <VCol cols="12">
                  <h2> Salary </h2>
                  <VTextField
                    v-model="salary"
                    type="number"
                    placeholder="30"
                    :rules="[requiredValidator]"

                    class="my-2"
                  />
                </VCol>

                <VCol cols="12">
                  <h2> Status </h2>
                  <VAutocomplete
                    v-model="status"
                    :items="statusItem"
                    placeholder="Select Status"

                    :false-value="false"
                    class="my-2"
                  />
                </VCol>

                <!-- 👉 Submit and Cancel -->
                <VCol
                  cols="12"
                  class="mb-5"
                >
                  <VBtn
                    type="submit"
                    class="me-3"
                  >
                    {{ userEditData ? 'duzenle' : 'ekle' }}
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
  </div>
</template>
