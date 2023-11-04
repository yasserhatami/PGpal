<template>
  <div class="d-flex flex-column justify-content-center overflow-auto pb-3 mb-5">
    <div>
      <b-tabs
        content-class="mt-5"
        align="center"
        class=""
        nav-wrapper-class=" d-flex justify-content-center align-items-center px-2"
        nav-class="position-fixed bills-tab w-100 px-3 border-0"
      >
        <b-tab
          class="bills-tab-content px-3"
          title="نهایی شده ها"
          title-item-class="w-50 bills-tab-item"
        >
          <template v-if="confirmedItems.length > 0">
            <div
              v-for="(item, i) in confirmedItems"
              :key="i"
              class="card dir-rtl text-right mt-1 mb-2 bill-card border-0 px-2 pb-2"
            >
              <div class="px-2 py-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <b-card-text class="fs-2 mb-0">
                    <small class="text-dark"> مبلغ </small><strong class="fs-6">{{ currency(item.Amount) }} </strong><span>ریال</span>
                  </b-card-text>
                  <b-card-text class="fs-2 text-dark">
                    <small> تاریخ </small><span>{{ ` ${item.Date}` }}</span>
                  </b-card-text>
                </div>
                <b-card-text class="fs-2 mb-1 text-dark">
                  <small> به نام </small><span>{{ ` ${item.Name}` }}</span>
                </b-card-text>
                <b-card-text
                  v-if="item.Description"
                  class="fs-2 mt-2 text-dark"
                >
                  <small> توضیحات </small><span>{{ ` ${item.Description}` }}</span>
                </b-card-text>
              </div>

              <div class="card-actions">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <button
                      @click.prevent="share(item.Link)"
                      class="btn btn-sm btn-secondary ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        style="fill: #25252A"
                      ><path d="M 12.5 1 C 11.125 1 10 2.125 10 3.5 C 10 3.671875 10.019531 3.835938 10.050781 4 L 5.519531 6.039063 C 5.0625 5.414063 4.328125 5 3.5 5 C 2.125 5 1 6.125 1 7.5 C 1 8.875 2.125 10 3.5 10 C 4.332031 10 5.074219 9.582031 5.527344 8.949219 L 10.0625 10.964844 C 10.023438 11.136719 10 11.316406 10 11.5 C 10 12.875 11.125 14 12.5 14 C 13.875 14 15 12.875 15 11.5 C 15 10.125 13.875 9 12.5 9 C 11.667969 9 10.925781 9.417969 10.472656 10.050781 L 5.9375 8.039063 C 5.976563 7.863281 6 7.683594 6 7.5 C 6 7.3125 5.976563 7.128906 5.9375 6.953125 L 10.445313 4.914063 C 10.898438 5.570313 11.652344 6 12.5 6 C 13.875 6 15 4.875 15 3.5 C 15 2.125 13.875 1 12.5 1 Z M 12.5 2 C 13.335938 2 14 2.664063 14 3.5 C 14 4.335938 13.335938 5 12.5 5 C 11.664063 5 11 4.335938 11 3.5 C 11 2.664063 11.664063 2 12.5 2 Z M 3.5 6 C 4.335938 6 5 6.664063 5 7.5 C 5 8.335938 4.335938 9 3.5 9 C 2.664063 9 2 8.335938 2 7.5 C 2 6.664063 2.664063 6 3.5 6 Z M 12.5 10 C 13.335938 10 14 10.664063 14 11.5 C 14 12.335938 13.335938 13 12.5 13 C 11.664063 13 11 12.335938 11 11.5 C 11 10.664063 11.664063 10 12.5 10 Z" /></svg>
                    </button>
                    <a
                      :href="item.Link"
                      target="_blank"
                      class="btn btn-sm btn-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        style=" fill:#04044d;"
                      ><path d="M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="d-flex flex-column align-items-center justify-content-center pt-5 dir-rtl">
              <small> هیچ صورتحسابی نهایی نشده است</small>
            </div>
          </template>
        </b-tab>
        <b-tab
          title="پیش نویس ها"
          active
          class="bills-tab-content px-3"
          title-item-class="w-50 bills-tab-item"
        >
          <template v-if="draftItems.length > 0">
            <div
              v-for="(item, i) in draftItems"
              :key="i"
              class="card dir-rtl text-right mt-1 mb-2 bill-card border-0 px-2 pb-2"
            >
              <div class="px-2 py-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <b-card-text class="fs-2 mb-0">
                    <small class="text-dark"> مبلغ </small><strong class="fs-6">{{ currency(item.Amount) }} </strong><span>ریال</span>
                  </b-card-text>
                  <b-card-text class="fs-2 text-dark">
                    <small> تاریخ </small><span>{{ ` ${item.Date}` }}</span>
                  </b-card-text>
                </div>
                <b-card-text class="fs-2 mb-1 text-dark">
                  <small> به نام </small><span>{{ ` ${item.Name}` }}</span>
                </b-card-text>
                <b-card-text
                  v-if="item.Description"
                  class="fs-2 mt-2 text-dark"
                >
                  <small> توضیحات </small><span>{{ ` ${item.Description}` }}</span>
                </b-card-text>
              </div>

              <div class="card-actions">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <button
                      @click.prevent="share(item.Link)"
                      class="btn btn-sm btn-secondary ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        style="fill: #25252A"
                      ><path d="M 12.5 1 C 11.125 1 10 2.125 10 3.5 C 10 3.671875 10.019531 3.835938 10.050781 4 L 5.519531 6.039063 C 5.0625 5.414063 4.328125 5 3.5 5 C 2.125 5 1 6.125 1 7.5 C 1 8.875 2.125 10 3.5 10 C 4.332031 10 5.074219 9.582031 5.527344 8.949219 L 10.0625 10.964844 C 10.023438 11.136719 10 11.316406 10 11.5 C 10 12.875 11.125 14 12.5 14 C 13.875 14 15 12.875 15 11.5 C 15 10.125 13.875 9 12.5 9 C 11.667969 9 10.925781 9.417969 10.472656 10.050781 L 5.9375 8.039063 C 5.976563 7.863281 6 7.683594 6 7.5 C 6 7.3125 5.976563 7.128906 5.9375 6.953125 L 10.445313 4.914063 C 10.898438 5.570313 11.652344 6 12.5 6 C 13.875 6 15 4.875 15 3.5 C 15 2.125 13.875 1 12.5 1 Z M 12.5 2 C 13.335938 2 14 2.664063 14 3.5 C 14 4.335938 13.335938 5 12.5 5 C 11.664063 5 11 4.335938 11 3.5 C 11 2.664063 11.664063 2 12.5 2 Z M 3.5 6 C 4.335938 6 5 6.664063 5 7.5 C 5 8.335938 4.335938 9 3.5 9 C 2.664063 9 2 8.335938 2 7.5 C 2 6.664063 2.664063 6 3.5 6 Z M 12.5 10 C 13.335938 10 14 10.664063 14 11.5 C 14 12.335938 13.335938 13 12.5 13 C 11.664063 13 11 12.335938 11 11.5 C 11 10.664063 11.664063 10 12.5 10 Z" /></svg>
                    </button>
                    <a
                      :href="item.Link"
                      target="_blank"
                      class="btn btn-sm btn-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        style=" fill:#04044d;"
                      ><path d="M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z" /></svg>
                    </a>
                  </div>
                  <div class="d-flex align-items-center">
                    <button
                      @click.prevent="deleteId = item.Id;showDeleteModal = !showDeleteModal"
                      class="btn btn-sm btn-secondary ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        style=" fill:#FF1770;"
                      ><path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 10.5 14 C 11.324219 14 12 13.324219 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 4 4 L 11 4 L 11 12.5 C 11 12.78125 10.78125 13 10.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 Z M 5 5 L 5 12 L 6 12 L 6 5 Z M 7 5 L 7 12 L 8 12 L 8 5 Z M 9 5 L 9 12 L 10 12 L 10 5 Z" /></svg>
                    </button>

                    <button
                      @click.prevent="confirmId = item.Id;showConfirmModal = !showConfirmModal"
                      class="btn btn-sm btn-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        style=" fill:#00BFA5;"
                      ><path d="M 14.5 2.792969 L 5.5 11.792969 L 1.851563 8.148438 L 1.5 7.792969 L 0.792969 8.5 L 1.148438 8.851563 L 5.5 13.207031 L 15.207031 3.5 Z" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="d-flex flex-column align-items-center justify-content-center pt-5 dir-rtl">
              <small>پیش نویس برای هیچ صورتحسابی وجود ندارد.</small>
              <nuxt-link
                class="btn btn-outline-primary mt-5"
                to="/"
              >
                صدور صورتحساب
              </nuxt-link>
            </div>
          </template>
        </b-tab>
      </b-tabs>
    </div>
    <b-modal
      v-model="showDeleteModal"
      centered
      hide-footer
      hide-header
    >
      <div class="d-flex flex-column align-items-center justify-content-end">
        <p>آیا این صورتحساب حذف شود؟</p>
        <div class="d-flex align-items-center justify-content-start mt-3">
          <button
            @click="deleteBill"
            class="btn btn-sm btn-dark mr-3"
          >
            حذف
          </button>
          <button
            @click="deleteId = null; showDeleteModal = false"
            class="btn btn-sm btn-secondary"
          >
            انصراف
          </button>
        </div>
      </div>
    </b-modal>
    <b-modal
      v-model="showConfirmModal"
      centered
      hide-footer
      hide-header
    >
      <div class="d-flex flex-column align-items-center justify-content-end">
        <p class="text-right">
          آیا تایید  میفرمایید که این صورتحساب ثبت نهایی شده و به سازمان امور مالیاتی ارسال شود؟
        </p>
        <small class="text-danger"> (در صورت تایید امکان ویرایش وجود ندارد)</small>
        <div class="w-100 d-flex align-items-center justify-content-start mt-5">
          <button
            @click="confirmBill"
            class="btn btn-dark mr-3"
          >
            بله ، تایید می کنم
          </button>
          <button
            @click="confirmId = null; showConfirmModal = false"
            class="btn btn-secondary"
          >
            انصراف
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import currency from '~/mixins/currency'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Index',
  layout: 'default',
  mixins: [currency],
  data() {
    return {
      items: [],
      tabIndex: 1,
      showDeleteModal: false,
      showConfirmModal: false,
      confirmId: null,
      deleteId: null
    }
  },
  computed: {
    ...mapState(['menuItems', 'activeNavigationItem']),
    draftItems() {
      return this.items.filter(item => item.Status === 0)
    },
    confirmedItems() {
      return this.items.filter(item => item.Status === 1)
    }
  },
  mounted() {
    this.changeNavigationActive('bills')
    this.getBillsList()
  },
  methods: {
    ...mapActions(['changeNavigationActive']),
    ...mapActions(['openNotification', 'setLoading']),
    getBillsList() {
      this.setLoading(true)
      const token = localStorage.getItem('token')
      const body = {
        page: '1',
        Token: token
      }
      this.$axios
        .$post('/Tax/List', body)
        .then(res => {
          this.setLoading(false)
          if (res.Lists && res.Lists.Items) {
            this.items = res.Lists.Items
          } else {
            this.items = []
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
    copy(elementId) {
      const input = document.getElementById(elementId)
      const copyIsSuccessfull = Clipboard.copy(input.value)
      if (copyIsSuccessfull) {
        this.openNotification({
          type: 'success',
          message: 'لینک با موفقیت کپی شد'
        })
      } else {
        this.openNotification({
          type: 'error',
          message: 'مشکلی پیش آمده ، لطفا دوباره سعی کنید'
        })
      }
    },
    async share(link = null) {
      if (navigator.share && link) {
        const fullName = localStorage.getItem('fullName')
          ? ` توسط ${localStorage.getItem('fullName')} `
          : ' '
        const text = ` یک صورت حساب الکترونیک${fullName}برای شما صادر شده است. جهت مشاهده به لینک زیر مراجعه فرمایید `
        await navigator
          .share({
            text: text,
            url: link
          })
          .then(() => console.log('Successful share'))
          .catch(error => console.log('Error sharing', error))
      }
    },
    confirmBill() {
      this.setLoading(true)
      const token = localStorage.getItem('token')
      const body = {
        Id: this.confirmId,
        Isfinal: true,
        Isdelete: false,
        Token: token
      }
      this.$axios
        .$post('/Tax/UpdateBill', body)
        .then(res => {
          this.setLoading(false)
          this.getBillsList()
          this.openNotification({
            type: 'success',
            message: 'صورتحساب تایید شد'
          })
          this.confirmId = null
          this.showConfirmModal = false
        })
        .catch(err => {
          this.confirmId = null
          this.showConfirmModal = false
          this.setLoading(false)
          this.openNotification({
            type: 'error',
            message: err.ResponseMessage
          })
        })
    },
    deleteBill() {
      this.setLoading(true)
      const token = localStorage.getItem('token')
      const body = {
        Id: this.deleteId,
        Isfinal: false,
        Isdelete: true,
        Token: token
      }
      this.$axios
        .$post('/Tax/UpdateBill', body)
        .then(res => {
          this.setLoading(false)
          this.getBillsList()
          this.openNotification({
            type: 'success',
            message: 'صورتحساب حذف شد'
          })
          this.showDeleteModal = false
          this.deleteId = null
        })
        .catch(err => {
          this.deleteId = null
          this.showDeleteModal = false
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

<style lang="scss">
.bill-card {
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  .card-actions {
    border-radius: 0 0 0.75rem 0.75rem;
    background-color: #f8f9fa !important;
    padding: 0.5rem;
    .btn-secondary {
      background-color: white;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0rem 4rem 0rem rgba(20, 20, 20, 0.07),
        0 0.125rem 0.25rem -0.0625rem rgba(20, 20, 20, 0.03) !important;
      border: 1px solid rgba(0, 0, 0, 0.03);
      border-radius: 0.75rem;
    }
    button svg,
    a svg {
      transform: scale(1.3);
    }
  }
}

.bills-tab {
  z-index: 9;
  border-radius: 0 0 1rem 1rem;
  text-align: center;
  top: 150px;
  &-item {
    &:nth-child(1) {
      .nav-link {
        border-radius: 1rem 0 0 0;
      }
    }
    &:nth-child(2) {
      .nav-link {
        border-radius: 0 1rem 0 0;
      }
    }
    .nav-link {
      background-color: #fafafa;
      color: var(--borders-color);
      &.active {
        color: var(--primary);
        background-color: white;
        border-bottom: 2px solid var(--primary);
      }
    }
  }
}

.tab-content {
  padding-bottom: 3rem;
  z-index: 9;
  overflow-y: auto;
  max-height: calc(100vh - 230px);
}
</style>
