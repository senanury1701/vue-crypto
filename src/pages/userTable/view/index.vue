<script setup lang="ts">
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const userData = ref()
const store = useStore()
const route = useRoute()
const userId = Number(route.params.id)

store.dispatch('userData/getUser', userId)
  .then(data => {
    userData.value = data // Set userData to the resolved data
  })
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <UserBioPanel :user-data="userData" />
    </VCol>
    <VCol>
      {{ userData }}
    </VCol>
  </VRow>
</template>
