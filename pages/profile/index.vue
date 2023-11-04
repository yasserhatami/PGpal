<template>
  <div class="pb-3 d-flex flex-column justify-content-between h-100 align-items-center">
    <b-card
      v-if="userData"
      no-body
      class="text-right w-100"
    >
      <b-card-body>
        <div class="text-center">
          <b-card-title>{{ `${userData.Name} ${userData.Family}` }}</b-card-title>
          <b-card-sub-title class="mb-2 fs-1">
            {{ userData.CustomerOrgan }}
          </b-card-sub-title>
          <b-card-text class="mt-4 fs-3 d-none">
            <p><small>ترمینال‌:</small><strong>۲۱۵۸۴۱۵۸۷۴</strong></p>
          </b-card-text>
        </div>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item class="d-flex justify-content-between dir-rtl">
          <small>کدملی : </small><strong>{{ userData.NationalCode }}</strong>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between dir-rtl">
          <small>کد پستی : </small><strong>{{ userData.PostalCode }}</strong>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between dir-rtl">
          <small>تاریخ تولد : </small><strong>{{ userData.BrithDate }}</strong>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between dir-rtl">
          <small>اعتبار باقیمانده :</small><strong>{{ dayActive }} روز</strong>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center dir-rtl">
          <div v-if="!editAddress">
            <small>آدرس : </small><strong class="fs-14"> {{ userData.Address }} </strong>
          </div>
          <b-form-group
            id="input-group-4"
            v-else
            class="mb-0 ml-3 w-100"
            label="آدرس"
            label-for="description"
          >
            <b-form-input
              id="textarea"
              v-model="address"
              class="pr-2 fs-12"
              placeholder=""
            />
          </b-form-group>
          <img
            @click="checkAddress"
            :src="editAddress ? '/icons/checkmark.svg' : '/images/edit.svg'"
          >
        </b-list-group-item>
      </b-list-group>

      <b-card-body
        v-if="false"
        class="d-flex flex-row-reverse justify-content-between"
      >
        <a
          href="#"
          class="card-link"
        >ویرایش</a>
        <a
          href="#"
          class="card-link"
        >لینک دوم</a>
      </b-card-body>
    </b-card>
    <div class="d-flex flex-column align-items-center">
      <p class="small">
        نسخه : <span>{{ getAppVersion }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'Index',
  layout: 'withScroll',
  data() {
    return {
      userData: null,
      editAddress: false,
      address: '...'
    }
  },
  computed: {
    ...mapState(['menuItems', 'activeNavigationItem']),
    ...mapGetters(['getAppVersion']),
    dayActive() {
      return this.userData && this.userData['DayActive']
        ? this.userData['DayActive']
        : null
    }
  },
  mounted() {
    this.changeNavigationActive('profile')
    this.setLoading(true)
    this.getProfileInfo()
  },
  methods: {
    ...mapActions(['openNotification', 'setLoading', 'changeNavigationActive']),
    ...mapActions('authentication', ['getCustomerInfo']),
    updateAddress() {
      this.setLoading(true)
      const token = localStorage.getItem('token')
      const body = {
        CustomerItem: {
          Address: this.address
        },
        Token: token
      }
      this.$axios
        .$post('/Tax/UpdateInformation', body)
        .then(res => {
          this.getProfileInfo()
          this.openNotification({
            type: 'success',
            message: 'آدرس با موفقیت ویرایش شد'
          })
        })
        .catch(err => {
          this.openNotification({
            type: 'error',
            message: err.ResponseMessage
          })
        })
        .finally(() => {
          this.setLoading(false)
        })
    },
    checkAddress() {
      if (this.editAddress) {
        this.updateAddress()
      } else {
        this.address = this.userData.Address ? this.userData.Address : ''
      }
      this.editAddress = !this.editAddress
    },
    getProfileInfo() {
      this.getCustomerInfo()
        .then(res => {
          this.setLoading(false)
          if (res.ResponseCode === 0) {
            this.userData = res.CustomerItem
            localStorage.setItem(
              'fullName',
              `${res.CustomerItem.Name} ${res.CustomerItem.Family}`
            )
            localStorage.setItem('MemorySerial', res.CustomerItem.MemorySerial)
            localStorage.setItem('FollowCode', res.CustomerItem.FollowCode)
            localStorage.setItem(
              'TerminalSerial',
              res.CustomerItem.TerminalSerial
            )
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
