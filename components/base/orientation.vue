<template>
  <div
    v-if="isLandscape"
    class="orientation d-flex align-items-start justify-content-center text-center"
  >
    <p class="w-50 fs-18 text-gray pt-5 mt-5">
      لطفا گوشی خود را چرخانده و فقط در حالت عمودی قرار دهید
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Orientation',
  computed: {
    ...mapGetters(['isLandscape'])
  },
  mounted() {
    if (!navigator.onLine) {
      this.openNotification({
        type: 'wifi-off',
        message: 'اینترنت شما قطع میباشد !'
      })
    }
    const $container = document.querySelector('.main-container')
    if ($container) {
      if (this.isLandscape) {
        $container.style.setProperty('overflowY', 'hidden')
      } else {
        $container.style.setProperty('overflowY', 'auto')
      }
    }
  },
  methods: {
    ...mapActions(['openNotification', 'setLoading'])
  }
}
</script>

<style scoped lang="scss">
.orientation {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  z-index: 9999999999999;
}
</style>
