<template>
  <div class="full-layout">
    <div
      class="d-flex align-items-center justify-content-end"
    >
      <div class="header-nav__left text-right">
        <img
          class="header-nav__left__logo w-100"
          src="/icons/pgpal.svg"
          alt=""
        >
      </div>
      <div class="header-nav__right">
        <img
          class="header-nav__right__border-square"
          src="/images/header-bg.svg"
          alt=""
        >
      </div>
    </div>
    <div class="container h-100vh">
      <loading />
      <notif />
      <orientation />
      <install-message />
      <nuxt />
    </div>
  </div>
</template>
<script>
import orientation from '~/components/base/orientation'
import { mapActions, mapState } from 'vuex'
import InstallMessage from '~/components/base/installMessage'
export default {
  name: 'ActionLayout',
  mode: 'out-in',
  components: {
    InstallMessage,
    orientation
  },
  computed: {
    ...mapState('authentication', ['authenticated'])
  },
  created() {
    if (!navigator.onLine) {
      this.openNotification({
        type: 'wifi-off',
        message: 'اینترنت شما قطع میباشد !'
      })
    }
    if (
      !localStorage.getItem('phoneNumber') ||
      !localStorage.getItem('token')
    ) {
      this.$router.push({ name: 'auth' })
    }
  },
  mounted() {
    const $body = document.querySelector('body')
    const $html = document.querySelector('html')
    $body.style.setProperty('overflow', 'hidden')
    $html.style.setProperty('overflow', 'hidden')
  },
  methods: {
    ...mapActions(['openNotification', 'setLoading'])
  }
}
</script>

<style scoped lang="scss">
.full-layout {
  overflow: hidden;
  background-color: #f4f6f9;
}
.header-nav__left__logo {
  transform: none !important;
}
</style>
