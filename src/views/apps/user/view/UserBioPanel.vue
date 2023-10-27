<script setup lang="ts">
interface Props {
  userData: {
    id: number
    name: string
    position: string
    office: string
    country: string
    contact: string
    email: string
    gender: string
    status: boolean
    age: number
    salary: number
    startDate: string
    language: string
  }
}

const props = defineProps<Props>()
const isUserInfoEditDialogVisible = ref(false)

console.log(props.userData.data)
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 mt-4">
          {{ props.userData.name }}
        </h6>
      </VCol>
      <VCol>
        <VCard>
          <VCardText>
            <h6 class="text-h6">
              Details
            </h6>

            <VDivider class="mt-4" />

            <!-- 👉 User Details list -->
            <VList class="card-list mt-2">
              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">position:</span>
                  <span class="text-body-2">
                    {{ props.userData.data.position }}
                  </span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    office:
                  </span>
                  <span class="text-body-2">{{ props.userData.data.office }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    country:
                  </span>
                  <VChip
                    label
                    size="small"
                    class="text-capitalize"
                  >
                    {{ props.userData.data.country }}
                  </VChip>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">contact: </span>
                  <span class="text-capitalize text-body-2">{{ props.userData.data.contact }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    email:
                  </span>
                  <span class="text-body-2">
                    {{ props.userData.data.email }}
                  </span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    gender:
                  </span>
                  <span class="text-body-2">{{ props.userData.data.gender }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    status:
                  </span>
                  <span class="text-body-2">{{ props.userData.data.status }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    age:
                  </span>
                  <span class="text-body-2">{{ props.userData.data.age }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    salary:
                  </span>
                  <span class="text-body-2">{{ props.userData.data.salary }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    startDate:
                  </span>
                  <span class="text-body-2">{{ props.userData.data.startDate }}</span>
                </VListItemTitle>
              </VListItem>

              <VListItem>
                <VListItemTitle class="text-sm">
                  <span class="font-weight-medium">
                    language:
                  </span>
                  <span class="text-body-2">{{ props.userData.data.language }}</span>
                </VListItemTitle>
              </VListItem>
            </VList>
          </VCardText>
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
        </VCard>
      </VCol>
    </VRow>
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
