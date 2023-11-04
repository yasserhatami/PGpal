<template>
  <div
    v-if="showIosInstallMessage"
    class="install-popup pt-5"
  >
    <div
      class="add-home-part d-flex flex-column align-items-center"
    >
      <div class="pgpal-logo mt-5">
        <img
          class="mt-5"
          alt="icon"
          src="/icon.png"
        >
      </div>
      <div class="fs-3 font-weight-bold mt-5">
        افزودن اپلیکیشن پیشرو پی جی پال
      </div>
      <div class="fs-2 text-black-50 w-75 my-2 text-justify font-weight-normal">
        با این کار همواره می&zwnj;توانید به آسانی از خدمات صدور صورتحساب الکترونیکی حق الوکاله و خدمات حقوقی استفاده کنید
      </div>
      <div class="instruction fs-2 mt-5">
        <div class="item d-flex align-items-center justify-content-between my-3">
          <div>&#8235;۱. دکمه Share را در نوار پایین کلیک کنید</div>
          <img
            class="mr-3"
            alt="share"
            src="/icons/share-apple.svg"
            width="20px"
          >
        </div>
        <div class="item d-flex align-items-center justify-content-between my-3">
          <div>۲. گزینه Add to Home Screen را انتخاب کنید</div>
          <img
            class="mr-3"
            alt="plus"
            src="/icons/add.svg"
            width="13px"
          >
        </div>
        <div class="item d-flex align-items-center justify-content-between my-3">
          <div>۳. در قسمت بالا روی Add کلیک کنید</div>
          <div class="blue mr-3">
            Add
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InstallMessage',
  computed: {
    ...mapGetters(['showIosInstallMessage'])
  }
}
</script>

<style scoped lang="scss">
.install-popup {
  position: fixed;
  bottom: 2vh;
  left: 2vw;
  width: 96vw;
  height: 90vh;
  border-radius: 10px;
  padding: 1rem;
  justify-content: space-between;
  box-shadow: 2px 1px 5px rgba(164, 171, 191, 0.36);
  background: #fff;
  color: var(--text-primary);
  text-align: right;
  direction: rtl;
  z-index: 999;
  &::before {
    content: '';
    position: absolute;
    display: block;
    left: 50%;
    bottom: 5px;
    border: 15px solid transparent;
    border-bottom: 0;
    border-top: 15px solid #fff;
    filter: drop-shadow(2px 1px 5px rgba(164, 171, 191, 0.36));
    transform: translate(-50%, calc(100% + 5px));
  }
  .add-home-part {
    .pgpal-logo img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
