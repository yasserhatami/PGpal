<template>
  <div>
    <navbar />
    <div
      class="container scroll-container h-100vh"
    >
      <loading />
      <notif />
      <orientation />
      <install-message />
      <nuxt />
      <bottom-navigation />
    </div>
  </div>
</template>
<script>
import navbar from '~/components/navbar'
import orientation from '~/components/base/orientation'
import { mapState } from 'vuex'
import bottomNavigation from '~/components/bottomNavigation.vue'
import InstallMessage from '~/components/base/installMessage'

export default {
  mode: 'out-in',
  name: 'WithScroll',
  components: {
    InstallMessage,
    navbar,
    orientation,
    bottomNavigation
  },
  computed: {
    ...mapState('authentication', ['authenticated'])
  },
  created() {
    if (
      !localStorage.getItem('phoneNumber') ||
      !localStorage.getItem('token')
    ) {
      this.$router.push({ name: 'auth' })
    }
  },
  mounted() {
    const $body = document.querySelector('body')
    $body.style.removeProperty('overflow')
  }
}
</script>
<style lang="scss">
.scroll-container {
  padding: 150px 15px 70px 15px;
  overflow-y: auto;
}
</style>
