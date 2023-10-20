<script lang="ts" setup>
import UserProfileHeader from '@/views/pages/profile/user-profile/UserProfileHeader.vue'
import ProfilTabs from '@/views/pages/profile/profile-tab/DemoTabUser.vue'
import store from '@/store/userState'

const data = ref()

onMounted(async () => {
  await store.dispatch('loginUser')
  data.value = store.state.user
})
</script>

<template>
  <div>
    <div class="mb-5">
      <UserProfileHeader
        v-if="data"
        z
        :data="data"
      />
    </div>
    <div class="mb-5">
      <ProfilTabs
        v-if="data"
        :data="data"
      />
    </div>
  </div>
</template>
