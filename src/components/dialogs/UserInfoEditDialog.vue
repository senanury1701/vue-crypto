<script setup lang="ts">
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import { offices, positions } from '@/views/pages/userTable/filterData'
import { emailValidator, requiredValidator } from '@validators'

interface UserData {
  id: number
  name: string
  position: string
  email: string
  office: string
  contact: string
  language: string
  country: string
  startDate: string
  age: number
  gender: string
  salary: number
  status: boolean

}

interface Props {
  userData?: UserData
  isDialogVisible: boolean
}

interface Emit {
  (e: 'submit', value: UserData): void
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  userData: () => ({
    id: '',
    name: '',
    position: '',
    office: '',
    age: '',
    gender: '',
    startDate: '',
    salary: '',
    status: '',
    country: '',
    contact: '',
    email: '',
    language: '',
  }),
})

const emit = defineEmits<Emit>()
const store = useStore()

const userData = ref<UserData>(structuredClone(toRaw(props.userData)))

watch(props, () => {
  userData.value = props.userData
})

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))

  emit('update:isDialogVisible', false)
}

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const onFormSubmit = () => {
  const data = {
    name: userData.value.name,
    position: userData.value.position,
    office: userData.value.office,
    startDate: userData.value.startDate,
    age: userData.value.age,
    gender: userData.value.gender,
    salary: userData.value.salary,
    status: userData.value.status,
    country: userData.value.country,
    contact: userData.value.contact,
    email: userData.value.email,
    language: userData.value.language,
  }

  store.dispatch('userData/toggleUserStatus', data)
  Swal.fire('Guncellendi')

  emit('update:isDialogVisible', false)
  emit('submit', userData.value)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 800"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogVisibleUpdate"
  >
    <VCard class="pa-sm-9 pa-5">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="onFormReset"
      />

      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-2">
          kullanici Duzenle
        </VCardTitle>
      </VCardItem>

      <VCardText>
        <!-- 👉 Form -->
        <VForm
          class="mt-6"
          @submit.prevent="onFormSubmit"
        >
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <h2> Isim </h2>
              <VTextField
                v-model="userData.name"
                placeholder="Name"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 👉 Username -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Positions </h2>
              <VAutocomplete
                v-model="userData.position"
                :items="positions"
                placeholder="Select Positions"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 👉 Billing Email -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Email </h2>
              <VTextField
                v-model="userData.email"
                placeholder="Email"
                :rules="[requiredValidator][emailValidator]"
              />
            </VCol>

            <!-- 👉 Tax Id -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Office </h2>
              <VAutocomplete
                v-model="userData.office"
                :items="offices"
                placeholder="Select Offices"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 👉 Contact -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Contact </h2>
              <VTextField
                v-model="userData.contact"
                placeholder="+1 9876543210"
              />
            </VCol>

            <!-- 👉 Language -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Language </h2>
              <VTextField
                v-model="userData.language"
                placeholder="English"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 👉 Country -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Country </h2>
              <VTextField
                v-model="userData.country"
                placeholder="United States"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <h2> Start Date </h2>
              <AppDateTimePicker
                v-model="userData.startDate"
                placeholder="Select date"
                :rules="[requiredValidator]"
                class="my-2"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <h2> Age </h2>
              <VTextField
                v-model="userData.age"
                type="number"
                placeholder="30"
                class="my-2"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <h2> Salary </h2>
              <VTextField
                v-model="userData.salary"
                type="number"
                placeholder="30"
                :rules="[requiredValidator]"

                class="my-2"
              />
            </VCol>

            <!-- 👉 Switch -->
            <VCol cols="12">
              <VSwitch
                v-model="userData.status"
                density="compact"
                label="hala calisiyormu?"
              />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-center gap-4"
            >
              <VBtn type="submit">
                Submit
              </VBtn>

              <VBtn
                color="secondary"
                variant="outlined"
                @click="onFormReset"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
