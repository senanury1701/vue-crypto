<script setup lang="ts">
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import { VForm } from 'vuetify/components/VForm'
import { countryes, languages, offices, positions } from '@/views/pages/userTable/filterData'
import { emailValidator, numericStringValidator, requiredValidator } from '@validators'

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
    id: 0,
    name: '',
    position: '',
    office: '',
    age: 0,
    gender: '',
    startDate: '',
    salary: 0,
    status: false,
    country: '',
    contact: '',
    email: '',
    language: '',
  }),
})

const emit = defineEmits<Emit>()
const isFormValid = ref(false)
const refForm = ref<VForm>()
const store = useStore()

console.log(props.userData)

const userData = ref<UserData>(structuredClone(toRaw(props.userData)))

const tempData = userData

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData))
})

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))

  emit('update:isDialogVisible', false)
}

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) {
      const data = {
        name: tempData.value.name,
        position: tempData.value.position,
        office: tempData.value.office,
        startDate: tempData.value.startDate,
        age: tempData.value.age,
        gender: tempData.value.gender,
        salary: tempData.value.salary,
        status: tempData.value.status,
        country: tempData.value.country,
        contact: tempData.value.contact,
        email: tempData.value.email,
        language: tempData.value.language,
      }

      store.dispatch('userData/toggleUserStatus', data)
      Swal.fire('Guncellendi')
      emit('update:isDialogVisible', false)
      emit('submit', tempData.value)
    }
  })
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 800"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogVisibleUpdate"
  >
    <VCard class="pa-sm-9 pa-5">
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
          ref="refForm"
          v-model="isFormValid"
          class="mt-6"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <h2> Isim </h2>
              <VTextField
                v-model="tempData.name"
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
                v-model="tempData.position"
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
                v-model="tempData.email"
                placeholder="Email"
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>

            <!-- 👉 Tax Id -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Office </h2>
              <VAutocomplete
                v-model="tempData.office"
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
                v-model="tempData.contact"
                prepend-inner-icon="mdi-cellphone"
                :rules="[numericStringValidator]"
              />
            </VCol>

            <!-- 👉 Language -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Language </h2>

              <VSelect
                v-model="tempData.language"
                :items="languages"
                item-title="language"

                placeholder="Select Item"
                multiple
                clearable
                clear-icon="mdi-close"
              />
            </VCol>

            <!-- 👉 Country -->
            <VCol
              cols="12"
              md="6"
            >
              <h2> Country </h2>
              <VAutocomplete
                v-model="tempData.country"
                :items="countryes"
                placeholder="Select Offices"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <h2> Start Date </h2>
              <AppDateTimePicker
                v-model="tempData.startDate"
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
                v-model="tempData.age"
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
                v-model="tempData.salary"
                type="number"
                placeholder="30"
                :rules="[requiredValidator]"

                class="my-2"
              />
            </VCol>

            <!-- 👉 Switch -->
            <VCol cols="12">
              <VSwitch
                v-model="tempData.status"
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
