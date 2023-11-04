<template>
  <div class="header-nav">
    <div
      class="d-flex align-items-center justify-content-between"
    >
      <div class="header-nav__left">
        <img
          src="/icons/secondarySquare.svg"
          class="header-nav__left__secondary-square"
          alt=""
        >
        <img
          class="header-nav__left__logo"
          src="/icons/pgpal.svg"
          alt=""
        >
      </div>
      <div class="header-nav__right">
        <img
          class="header-nav__right__border-square"
          src="/icons/borderSqure.svg"
          alt=""
        >
        <img
          class="header-nav__right__fill-square"
          src="/icons/fillSqure.svg"
          alt=""
        >
      </div>
    </div>
    <div class="d-flex flex-row-reverse justify-content-between container pb-3 mt-n3">
      <div class="header-nav__title text-right position-relative pr-2">
        <p class="fs-5 mb-0 font-weight-bold">
          پی جی پال
        </p>
        <p class="fs-9 mb-0">
          صدور صورتحساب الکترونیکی حق الوکاله و خدمات حقوقی
        </p>
      </div>
      <div
        v-if="activeNavigationItem === 'profile'"
        @click="showLogoutModal = true"
        class="header-nav__profile d-flex align-items-center bg-white justify-content-center mb-n3"
      >
        <img
          src="/icons/logout.svg"
          alt="logout"
          class=" border-0 logout"
        >
      </div>
    </div>
    <b-modal
      id="modal-1"
      v-model="showLogoutModal"
      :hide-header="true"
      :hide-footer="true"
      :centered="true"
      size="sm"
    >
      <p class="mb-4 text-right">
        آیا مایل به خروج از اپلیکیشن هستید ؟
      </p>
      <div class="d-flex justify-content-start w-100 mt-3">
        <button
          @click="logout()"
          class="btn btn-dark mr-3"
        >
          بلی
        </button>
        <button
          @click="showLogoutModal = false"
          class="btn btn-secondary"
        >
          خیر
        </button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      showLogoutModal: false
    }
  },
  computed: {
    ...mapState(['menuItems', 'activeNavigationItem'])
  },
  methods: {
    logout() {
      this.$auth.logout()
      localStorage.removeItem('token')
      localStorage.removeItem('tokenlocal')
      localStorage.removeItem('phoneNumber')
      localStorage.removeItem('fullName')
      localStorage.removeItem('MemorySerial')
      localStorage.removeItem('FollowCode')
      localStorage.removeItem('TerminalSerial')
      this.$router.push('auth')
    }
  }
}
</script>
<style lang="scss">
.header-nav {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: contain;
  box-shadow: 0 5px 15px 0 rgba(2, 2, 29, 0.15);
  background-color: #f4f6f9;
  border-radius: 0 0 1rem 1rem;
  &__right {
    display: flex;
    flex-direction: column;
    &__fill-square {
      transform: translateY(-31px) translateX(60px);
    }
    &__border-square {
      transform: translateX(15px);
    }
  }
  &__left {
    &__secondary-square {
      transform: translateX(-20px);
    }
    &__logo {
      transform: translateX(-85px) translateY(-10px);
    }
  }
  &__title:before {
    content: '';
    position: absolute;
    right: 0;
    top: 6px;
    width: 2px;
    height: 30px;
    background-color: var(--primary);
  }
  .logout {
    &:focus {
      outline: none;
    }
  }
  &__profile {
    width: 34px;
    height: 34px;
    border-radius: 0.75rem;
    box-shadow: 0 2px 7px 0 rgba(2, 2, 29, 0.05);
  }
}
</style>
