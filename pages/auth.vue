<template>
  <div>
    <div
      :style="{filter: showVerifyMessage ? 'blur(2px)' : 'none' }"
      class="sign-up-component 100vh px-3"
    >
      <div class="auth-card mt-4">
        <div
          v-if="!tokenExist"
          class="d-flex align-items-end flex-column h-100"
        >
          <div
            class="w-100 text-center"
          >
            <img
              src="/icons/mobile-shape.svg"
              class="mx-auto"
              alt=""
            >
            <p class="text-dark fs-2 text-center dir-rtl my-4">
              لطفا شماره موبایل خود را وارد کنید
            </p>
            <div class="form-group px-3 w-100 mt-3">
              <label
                for="exampleFormControlInput1"
                class="font-Medium fs-14 d-flex flex-row justify-content-start align-items-center"
              >
                <span class="w-auto">شماره موبایل</span>
              </label>
              <input
                id="exampleFormControlInput1"
                v-model.trim="$v.phoneNumber.$model"
                @focusout="checkPhoneNumber($event)"
                v-model="phoneNumber"
                v-input-digit
                :inputmode="!isIOS ? 'numeric': 'none'"
                class="form-control fs-17 font-w-normal text-left ltr"
                pattern="[0-9]{11}"
                type="tel"
                name="splashNumber-mobile"
                placeholder="0912xxxxx34"
                maxlength="11"
                autocomplete="off"
              >
            </div>
            <div class="mt-5 w-100 text-center fixed-btn">
              <button
                :disabled="$v.phoneNumber.$error"
                @click="login"
                class="btn btn-outline-primary"
              >
                ارسال
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="tokenExist"
          class="d-flex align-items-end flex-column h-100"
        >
          <div
            class="w-100 text-center"
          >
            <img
              src="/icons/gauard.svg"
              alt=""
            >
            <p class="text-dark fs-2 text-center dir-rtl my-4">
              لطفا کد تایید را وارد کنید
            </p>
            <div class="form-group w-100 mt-3 text-right dir-rtl">
              <p
                class="font-Medium fs-14 w-100"
              >
                کد تایید
              </p>
              <otp-input
                ref="otpInput"
                :num-inputs="4"
                :should-auto-focus="true"
                :is-input-num="true"
                @on-complete="submitCode"
                autocomplete="one-time-code"
                class="otp-input d-flex align-items-center justify-content-between flex-row-reverse"
                separator=""
              />
            </div>
            <div class="mt-3 w-100 d-flex flex-row-reverse align-items-center justify-content-center">
              <button
                id="splashConfirm-btn"
                ref="submit"
                :disabled="false"
                @click="login"
                class="btn fs-14 btn-secondary border"
              >
                ارسال مجدد
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <verify-message v-if="showVerifyMessage" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import detectBrowser from '~/mixins/detectBrowser'
import OtpInput from '@bachdgvn/vue-otp-input'

import {
  maxLength,
  minLength,
  numeric,
  required
} from 'vuelidate/lib/validators'
import VerifyMessage from '@/components/verifyMessage'
export default {
  layout: 'actionLayout',
  auth: false,
  name: 'Signup',
  components: {
    VerifyMessage,
    otpInput: OtpInput
  },
  middleware({ redirect }) {
    // If the user is authenticated
    if (
      localStorage.getItem('phoneNumber') &&
      localStorage.getItem('token') &&
      localStorage.getItem('key')
    ) {
      return redirect('/store')
    }
  },
  mixins: [detectBrowser],
  data() {
    return {
      phoneNumber: null,
      tokenExist: false,
      key: null,
      otp: null,
      keys: {
        one: null,
        two: null,
        three: null,
        four: null
      },
      showPopupFlag: false,
      themePopup: '',
      showVerifyMessage: false
    }
  },
  validations: {
    phoneNumber: {
      mobileTemplate(phoneNumber) {
        return /^(0)?9\d{9}$/.test(phoneNumber)
      },
      required,
      numeric,
      maxLength: maxLength(11),
      minLength: minLength(11)
    }
  },
  computed: {
    ...mapState(['device']),
    isIOS() {
      return (
        this.device.apple &&
        this.device.appleVersion &&
        this.device.appleVersion < 13
      )
    },
    userCode() {
      return `${this.keys.one}${this.keys.two}${this.keys.three}${
        this.keys.four
      }`
    }
  },
  mounted() {
    this.changeNavigationActive('')
    const $body = document.querySelector('body')
    $body.style.removeProperty('overflow')
  },
  methods: {
    login() {
      if (this.phoneNumber) {
        this.setLoading(true)
        this.$auth
          .loginWith('local', {
            data: { Mobile: this.phoneNumber }
          })
          .then(res => {
            if (res.data.ResponseCode === 0) {
              localStorage.setItem('phoneNumber', this.phoneNumber)
              this.setLoading(false)
              this.tokenExist = true
              this.openNotification({
                type: 'success',
                message: 'کد تایید برای شماره موبایل شما ارسال شد'
              })
            } else if (res.data.ResponseCode === -205) {
              this.showVerifyMessage = true
            } else {
              this.tokenExist = false
              this.setLoading(false)
              this.openNotification({
                type: 'error',
                message: res.data.ResponseMessage
              })
            }
          })
          .catch(err => {
            this.tokenExist = false
            this.setLoading(false)
            this.openNotification({
              type: 'error',
              message: err.message.toString()
            })
          })
      } else {
        this.openNotification({
          type: 'error',
          message: 'لطفا شماره موبایل خود را وارد نمایید'
        })
      }
    },
    checkPhoneNumber(e) {
      if (this.$v.phoneNumber.$error) {
        // e.target.className += ' material-input--invalid' // TODO: Invalid Form
        this.openNotification({
          type: 'error',
          message: 'شماره وارد شده صحیح نمیباشد'
        })
      } else {
        // e.target.className = 'material-input text-center fs-18 fw-400' // TODO: Invalid Form
      }
    },
    submitCode(value) {
      this.setLoading(true)
      this.checkActivation(value)
        .then(res => {
          this.setLoading(false)
          if (parseInt(res.ResponseCode) === 0) {
            this.setLoading(true)
            this.requestToken(this.phoneNumber)
              .then(res => {
                this.setLoading(false)
                if (parseInt(res.ResponseCode) === 0) {
                  this.$auth.setToken(
                    this.$store.state.auth.strategy,
                    res.Token
                  )
                  localStorage.setItem('token', res.Token)
                  this.$router.push({ path: '/' })
                } else {
                  this.emptyKeys()
                  this.openNotification({
                    type: 'error',
                    message: res.ResponseMessage
                  })
                }
              })
              .catch(err => {
                this.setLoading(false)
                this.emptyKeys()
                this.openNotification({
                  type: 'error',
                  message: err.message
                })
              })
          } else {
            this.emptyKeys()
            this.openNotification({
              type: 'error',
              message: res.ResponseMessage
            })
          }
        })
        .catch(err => {
          this.setLoading(false)
          this.emptyKeys()
          this.openNotification({
            type: 'error',
            message: err.message
          })
        })
    },
    emptyKeys() {
      for (let key in this.keys) {
        this.keys[key] = null
      }
    },
    ...mapActions(['openNotification', 'setLoading']),
    ...mapActions('authentication', [
      'checkActivation',
      'requestToken',
      'getKey',
      'createActivation',
      'setAuthenticated'
    ]),
    ...mapActions(['changeNavigationActive']),
    hiddenHead() {
      this.themePopup = ''
    }
  }
}
</script>
<style scoped lang="scss">
@import './assets/styles/general/variables';
.auth-card {
  padding: 1.5rem;
  border-radius: 25px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}
.splashConfirm-logo {
  width: 300px;
  margin: 48px auto 0;
}
.splashConfirm-img {
  padding-bottom: 15px;
}
.btn-add {
  padding: 6px 16px;
}
/*-------------------------------------*/
.autoprefixerBlur {
  .bottom-sheet-container {
    &::before {
      background: radial-gradient(
        circle,
        rgba(35, 42, 76, 0.9),
        rgba(35, 42, 76, 0.9)
      ) !important;
    }
  }
}
</style>
