<template>
  <div>
    <b-card
      :header="`استعلام مشخصات `"
      class="text-right mb-3 d-none"
    >
      <b-form-group
        class="mb-0"
        label="ورود کد مالیاتی"
        label-for="input-formatter"
      >
        <b-form-input
          id="input-formatter"
          v-model="code"
          placeholder="کد مالیاتی"
          class="pr-3"
        />
        <b-button
          :block="true"
          href="#"
          class="mt-3"
          variant="dark"
        >
          استعلام
        </b-button>
      </b-form-group>
    </b-card>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="card w-100 p-3">
        <p class="text-right mb-0">
          سریال حافظه مالیاتی
        </p>
        <strong>{{ MemorySerial }}</strong>
      </div>
      <div class="card w-100 p-3 mt-2">
        <p class="text-right mb-0">
          سریال پایانه فروشگاهی
        </p>
        <strong>{{ TerminalSerial }}</strong>
      </div>
      <div class="card w-100 p-3 mt-2">
        <p class="text-right mb-0">
          شماره پیگیری ثبت نام
        </p>
        <strong>{{ FollowCode }}</strong>
      </div>
      <div class="card w-100 p-3 mt-5 position-relative overflow-hidden">
        <img
          class="shaparak-logo"
          src="/images/shaparak-blue.svg"
          alt=""
        >
        <div class="d-flex flex-column align-items-end">
          <p class="text-right mb-0">
            شماره پذیرنده
          </p>
          <p
            v-if="ShaparakMerchant"
            class="text-dark dir-rtl text-right mb-0"
          >
            <strong>{{ ShaparakMerchant }}</strong>
          </p>
          <p
            v-else
            class="text-dark dir-rtl text-right mb-0"
          >
            <small>
              در حال حاضر  پذیرنده ای برای شما تعریف نشده است
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Index',
  layout: 'withScroll',
  data() {
    return {
      code: null,
      MemoryData: null,
      TerminalData: null,
      FollowData: null,
      ShaparakData: null
    }
  },
  computed: {
    ...mapState(['menuItems', 'activeNavigationItem']),
    MemorySerial() {
      return this.MemoryData || localStorage.getItem('MemorySerial')
    },
    TerminalSerial() {
      return this.TerminalData || localStorage.getItem('TerminalSerial')
    },
    FollowCode() {
      return this.FollowData || localStorage.getItem('FollowCode')
    },
    ShaparakMerchant() {
      return this.ShaparakData
    }
  },
  watch: {
    MemorySerial(newValue, oldValue) {
      return newValue
    }
  },
  mounted() {
    if (!localStorage.getItem('MemorySerial')) {
      this.getUserInfo()
    }
    this.changeNavigationActive('tax')
  },
  methods: {
    ...mapActions(['changeNavigationActive', 'setLoading']),
    ...mapActions('authentication', ['getCustomerInfo']),
    getTaxValidation() {
      this.setLoading(true)
      const token = localStorage.getItem('token')
      const body = {
        FollowCode: '',
        Token: token
      }
      this.$axios
        .$post('/Tax/Validation', body)
        .then(res => {
          this.setLoading(false)
          if (res.ResponseCode === 0) {
            this.openNotification({
              type: 'success',
              message: 'صورتحساب شما با موفقیت ایجاد گردید'
            })
          }
        })
        .catch(err => {
          this.setLoading(false)
          this.openNotification({
            type: 'error',
            message: err.ResponseMessage
          })
        })
    },
    getUserInfo() {
      this.setLoading(true)
      this.getCustomerInfo()
        .then(res => {
          this.setLoading(false)
          if (res.ResponseCode === 0) {
            this.userData = res.CustomerItem
            localStorage.setItem('MemorySerial', res.CustomerItem.MemorySerial)
            localStorage.setItem('FollowCode', res.CustomerItem.FollowCode)
            localStorage.setItem(
              'TerminalSerial',
              res.CustomerItem.TerminalSerial
            )
            this.MemoryData = res.CustomerItem.MemorySerial
            this.TerminalData = res.CustomerItem.TerminalSerial
            this.FollowData = res.CustomerItem.FollowCode
            this.ShaparakData = res.CustomerItem.IsShaparak
              ? res.CustomerItem.ShaparakMerchant
              : null
          } else {
            this.openNotification({
              type: 'error',
              message: res.ResponseMessage
            })
          }
        })
        .catch(err => {
          this.setLoading(false)
          this.openNotification({
            type: 'error',
            message: err.ResponseMessage
          })
        })
    }
  }
}
</script>

<style scoped lang="scss">
.shaparak-logo {
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0.3;
  height: 100px;
  width: 100px;
  transform: translateY(-50%);
}
</style>
