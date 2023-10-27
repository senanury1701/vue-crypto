<script setup lang="ts">
import { useStore } from 'vuex'

/* interface Props {
  userData: {
    id: number
    name: string
    position: string
    office: string
    age: number
    gender: string
    startDate: string
    salary: number
    status: boolean
    country: string
    contact: string
    email: string
    language: string
  }
} */
const store = useStore()
const route = useRoute()
const userId = parseInt(route.params.id)
const isUserInfoEditDialogVisible = ref(false)
const userData = ref(null)

onMounted(async () => {
  try {
    const user = await store.dispatch('userData/getUser', userId)
    if (user) {
      console.log('Kullanıcı bulundu:')
      console.log(user)
      userData.value = user
    }

    else { console.log('Kullanıcı bulunamadı.') }
  }
  catch (error) {
    console.error('Kullanıcı getirme hatası:', error)
  }
})
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard v-if="userData">
          <VCardText class="text-center pt-15">
            <h6 class="text-h6 mt-4">
              {{ userData.name }}
            </h6>

            <VChip
              label
              size="small"
              class="text-capitalize mt-4"
            >
              {{ userData.position }}
            </VChip>
          </VCardText>

          <VCardText>
            <div class="d-flex align-center me-8 mb-2">
              <!-- 👉 Details -->
              <VCardText>
                <h6 class="text-h6">
                  Details
                </h6>

                <VDivider class="mt-4" />

                <!-- 👉 User Details list -->
                <VList class="card-list mt-2">
                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">office:</span>
                      <span class="text-body-2">
                        {{ userData.office }}
                      </span>
                    </VListItemTitle>
                  </VListItem>

                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        age:
                      </span>
                      <span class="text-body-2">{{ userData.age }}</span>
                    </VListItemTitle>
                  </VListItem>

                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        gender:
                      </span>
                      <VChip
                        label
                        size="small"
                        class="text-capitalize"
                      >
                        {{ userData.gender }}
                      </VChip>
                    </VListItemTitle>
                  </VListItem>

                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">startDate: </span>
                      <span class="text-capitalize text-body-2">{{ userData.startDate }}</span>
                    </VListItemTitle>
                  </VListItem>

                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        salary:
                      </span>
                      <span class="text-body-2">
                        {{ userData.salary }}
                      </span>
                    </VListItemTitle>
                  </VListItem>

                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        status:
                      </span>
                      <span class="text-body-2">{{ userData.status }}</span>
                    </VListItemTitle>
                  </VListItem>

                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        country:
                      </span>
                      <span class="text-body-2">{{ userData.country }}</span>
                    </VListItemTitle>
                  </VListItem>

                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        email:
                      </span>
                      <span class="text-body-2">{{ userData.email }}</span>
                    </VListItemTitle>
                  </VListItem>
                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        contact:
                      </span>
                      <span class="text-body-2">{{ userData.contact }}</span>
                    </VListItemTitle>
                  </VListItem>
                  <VListItem>
                    <VListItemTitle class="text-sm">
                      <span class="font-weight-medium">
                        language:
                      </span>
                      <span class="text-body-2">{{ userData.language }}</span>
                    </VListItemTitle>
                  </VListItem>
                </VList>
              </VCardText>

              <!-- 👉 Edit and Suspend button -->
              <VCardText class="d-flex justify-center">
                <VBtn
                  variant="elevated"
                  class="me-4"
                  @click="isUserInfoEditDialogVisible = true"
                >
                  Edit
                </VBtn>
                <VBtn
                  variant="outlined"
                  color="error"
                >
                  Suspend
                </VBtn>
              </VCardText>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <UserInfoEditDialog
      v-model:isDialogVisible="isUserInfoEditDialogVisible"
      :user-data="userData"
    />
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.8rem;
}

.current-plan {
  border: 2px solid rgb(var(--v-theme-primary));
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>
