<template>
  <div
    v-if="showMessage"
    class="create-bill-popup-wrapper"
  >
    <div
      class="d-flex flex-column create-bill-popup align-items-center"
    >
      <img
        class="mt-5"
        alt="icon"
        src="/images/success.svg"
      >
      <div class="fs-3 font-weight-bold">
        صورتحساب شما با موفقیت ایجاد گردید
      </div>
      <b-button
        @click="hideMessage"
        :block="true"
        href="#"
        size="lg"
        variant="dark"
      >
        قبول
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstallMessage',
  props: {
    showMessage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideMessage() {
      this.$emit('hideMessage', false)
      this.$router.push({ name: 'bills' })
    }
  }
}
</script>

<style scoped lang="scss">
.create-bill-popup-wrapper {
  content: '';
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  bottom: 0;
  filter: drop-shadow(2px 1px 5px rgba(164, 171, 191, 0.36));
  z-index: 999;
  .create-bill-popup {
    position: absolute;
    bottom: 25vh;
    left: 10vw;
    width: 80vw;
    height: 50vh;
    border-radius: 10px;
    padding: 1rem;
    justify-content: space-between;
    box-shadow: 2px 1px 5px rgba(164, 171, 191, 0.36);
    background: #fff;
    color: var(--text-primary);
    text-align: right;
    direction: rtl;
    z-index: 9999;

    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
