<script lang="ts" setup>
import { useStore } from 'vuex'
import UserProfileHeader from '@/views/pages/profile/user-profile/UserProfileHeader.vue'
import ProfilTabs from '@/views/pages/profile/profile-tab/DemoTabUser.vue'

const store = useStore()

const data = ref(store.state.userState.user)

console.log(data)

onMounted(async () => {
  await store.dispatch('userDatate/loginUser')
  data.value = store.state.userState.user
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
