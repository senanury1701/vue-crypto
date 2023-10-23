<script setup lang="ts">
const roles = [
  { title: 'Admin', value: 'admin' },
  { title: 'Author', value: 'author' },
  { title: 'Editor', value: 'editor' },
  { title: 'Maintainer', value: 'maintainer' },
  { title: 'Subscriber', value: 'subscriber' },
]

const plans = [
  { title: 'Basic', value: 'basic' },
  { title: 'Company', value: 'company' },
  { title: 'Enterprise', value: 'enterprise' },
  { title: 'Team', value: 'team' },
]

const status = [
  { title: 'Pending', value: 'pending' },
  { title: 'Active', value: 'active' },
  { title: 'Inactive', value: 'inactive' },
]
</script>

<template>
  <VCard
    title="Search Filters"
    class="mb-6"
  >
    <VCardText>
      <VRow>
        <!-- 👉 Select Role -->
        <VCol
          cols="12"
          sm="4"
        >
          <VSelect
            v-model="selectedRole"
            label="Select Role"
            placeholder="Select Role"
            :items="roles"
            clearable
            clear-icon="mdi-close"
          />
        </VCol>

        <!-- 👉 Select Plan -->
        <VCol
          cols="12"
          sm="4"
        >
          <VSelect
            v-model="selectedPlan"
            label="Select Plan"
            placeholder="Select Plan"
            :items="plans"
            clearable
            clear-icon="mdi-close"
          />
        </VCol>

        <!-- 👉 Select Status -->
        <VCol
          cols="12"
          sm="4"
        >
          <VSelect
            v-model="selectedStatus"
            label="Select Status"
            placeholder="Select Status"
            :items="status"
            clearable
            clear-icon="mdi-close"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
