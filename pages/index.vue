<template>
  <div class="pb-3">
    <b-card
      v-if="!showPreview"
      class="dir-rtl text-right border-0"
    >
      <b-form
        :novalidate="true"
        :validated="checkValidation"
        @submit.prevent="onSubmit"
        @reset="onReset"
        autocomplete="off"
      >
        <b-form-group
          id="input-group-2"
          label="کد ملی / شناسه ملی موکل"
          label-for="national-code"
        >
          <b-form-input
            id="national-code"
            v-model="bill.nationalCode"
            v-input-digit="'number'"
            :inputmode="!isIOS ? 'numeric': 'none'"
            :state="checkValidation ? !$v.bill.nationalCode.$invalid: null"
            tabindex="1"
            maxlength="11"
            class="pr-3 text-left ltr"
            type="tel"
          />
          <b-form-invalid-feedback id="national-code-feedback">
            لطفا کد ملی / شناسه ملی موکل را صحیح وارد نمایید
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="last-name"
          label="نام و نام خانوادگی موکل / نام شرکت "
          label-for="input-2"
        >
          <b-form-input
            id="last-name"
            v-model="bill.name"
            :class="{'pr-5': checkValidation}"
            :state="checkValidation ? !$v.bill.name.$invalid: null"
            tabindex="2"
            class="pr-3"
            required
            type="text"
          />
          <b-form-invalid-feedback id="last-name-feedback">
            لطفا نام و نام خانوادگی موکل / نام شرکت را وارد نمایید
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="شماره موبایل موکل"
          label-for="mobile-number"
          class="dir-rtl "
        >
          <b-form-input
            id="mobileNumber"
            v-model="bill.mobileNumber"
            v-input-digit="'number'"
            :inputmode="!isIOS ? 'numeric': 'none'"
            :state="checkValidation ? !$v.bill.mobileNumber.$invalid : null"
            tabindex="3"
            pattern="09[0-9]{9}"
            class="pl-3 text-left ltr"
            type="tel"
            maxlength="11"
            required
            placeholder="09123456789"
          />
          <b-form-invalid-feedback id="mobileNumber-feedback">
            لطفا شماره موبایل موکل را صحیح وارد نمایید (۱۱ رقم)
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="contractNumber"
          label="شماره قرارداد"
          label-for="contractNumber"
        >
          <b-form-input
            id="contractNumber"
            v-model="bill.contractNumber"
            :inputmode="!isIOS ? 'numeric': 'none'"
            v-input-digit="'number'"
            tabindex="4"
            pattern="[0-9]*"
            class="pr-3 text-left ltr"
            type="tel"
          />
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="توضیحات"
          label-for="description"
        >
          <b-form-input
            id="description"
            v-model="bill.description"
            :class="{'pr-5': checkValidation}"
            tabindex="5"
            class="pr-3 text-right"
            type="text"
          />
        </b-form-group>
        <div class="bg-light bill-payment-box p-3">
          <b-form-group
            id="input-group-5"
            label="شیوه پرداخت"
            label-for="way"
            class="light-input"
          >
            <b-form-select
              id="way"
              v-model="bill.way"
              :options="wayOptions"
              :state="checkValidation ? !$v.bill.way.$invalid: null"
              tabindex="6"
              required
            />
            <b-form-invalid-feedback id="way-feedback">
              لطفا شیوه پرداخت را انتخاب نمایید
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            id="input-group-6"
            v-if="bill.way === 3"
            label="شماره چک"
            label-for="checkNumber"
            class="light-input"
          >
            <b-form-input
              id="checkNumber"
              v-model="bill.checkNumber"
              v-input-digit="'number'"
              :inputmode="!isIOS ? 'numeric': 'none'"
              :state="checkValidation ? !$v.bill.checkNumber.$invalid : null"
              tabindex="7"
              pattern="[0-9]*"
              class="pr-3 text-left ltr"
              required
              type="tel"
            />
            <b-form-invalid-feedback id="contractNumber-feedback">
              لطفا شماره چک را وارد نمایید
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group
            id="input-group-7"
            label="مبلغ صورتحساب(ریال)"
            label-for="amount"
            class="light-input mb-0"
          >
            <b-form-input
              id="amount"
              v-model="bill.amount"
              v-input-digit="'price'"
              :inputmode="!isIOS ? 'numeric': 'none'"
              :state="checkValidation ? !$v.bill.amount.$invalid : null"
              tabindex="8"
              pattern="[0-9,]*"
              class="pl-3 text-left ltr"
              required
              type="tel"
              placeholder="ریال"
            />
            <b-form-invalid-feedback id="contractNumber-feedback">
              لطفا مبلغ صورتحساب را وارد نمایید
            </b-form-invalid-feedback>
            <span
              v-if="bill.amount && bill.amount.length > 2"
              v-html="toWord(Math.round(Number(bill.amount.replace(/,/g, '')) / 10))"
              class="fs-0 mt-1"
            />
          </b-form-group>
        </div>
        <b-form-group class="text-left">
          <b-button
            class="btn-block mt-4"
            type="submit"
            tabindex="9"
            variant="dark"
          >
            تایید و ادامه
          </b-button>
        </b-form-group>
      </b-form>
    </b-card>
    <template v-else>
      <b-card
        :title="`مبلغ ${currency(parseInt(bill.amount.replace(/,/g, '')))} ریال`"
        title-tag="h6"
        header="پیش نمایش صورتحساب"
        footer-tag="footer"
        class="dir-rtl text-right preview-card border-0"
      >
        <b-card-text
          v-if="bill.name"
          class="fs-2"
        >
          {{ `به نام ${bill.name}` }}
        </b-card-text>
        <b-card-text
          v-if="bill.nationalCode"
          class="fs-2"
        >
          {{ `به شماره ملی ${bill.nationalCode}` }}
        </b-card-text>
        <b-card-text
          v-if="wayOptions.find(item => item.value === bill.way).text"
          class="fs-2"
        >
          {{ `به صورت ${wayOptions.find(item => item.value === bill.way).text}` }}
        </b-card-text>
        <b-card-text
          v-if="bill.contractNumber"
          class="fs-2"
        >
          {{ `بابت قرارداد شماره ${bill.contractNumber}` }}
        </b-card-text>
        <b-card-text
          v-if="bill.description"
          class="fs-2"
        >
          {{ bill.description }}
        </b-card-text>
        <template #footer>
          <b-button
            @click="createBill"
            :block="true"
            href="#"
            size="lg"
            variant="dark"
          >
            صدور صورت حساب
          </b-button>
        </template>
      </b-card>
      <b-button
        @click.prevent="showPreview = false"
        class="mt-3 text-nowrap w-50"
        href="#"
        size="sm"
        type="outline"
        variant="secondary"
      >
        اصلاح صورت حساب
      </b-button>
    </template>
    <create-bill-message
      v-if="showCreateMessage"
      :show-message="showCreateMessage"
      @hideMessage="showCreateMessage = false"
    />
  </div>
</template>

<script>
import currency from '~/mixins/currency'
import { mapActions, mapState, mapGetters } from 'vuex'
import { VMoney } from 'v-money'
import toEnNumber from '~/scripts/toEnNumber'
import numToWord from '~/mixins/numToWord'
import createBillMessage from '~/components/createBillMessage'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Index',
  layout: 'withScroll',
  components: {
    createBillMessage
  },
  directives: {
    money: VMoney,
    price: {
      update(el) {
        const event = new Event('input', { bubbles: true })
        let elementValue = el.value.replace(/,/g, '')
        const previousValue = elementValue.substring(
          0,
          elementValue.toString().length - 1
        )
        const latestCharacter = elementValue.substring(
          elementValue.length - 1,
          elementValue.length
        )
        const numberPattern = /^[\u06F0-\u06F90-9,]+$/
        var nf = new Intl.NumberFormat()
        if (numberPattern.test(latestCharacter)) {
          el.value = nf.format(parseInt(toEnNumber(elementValue)))
        } else {
          el.value = nf.format(parseInt(previousValue))
        }
        el.dispatchEvent(event)
      }
    }
  },
  mixins: [currency, numToWord],
  data() {
    return {
      checkValidation: false,
      showCreateMessage: false,
      bill: {
        way: null,
        nationalCode: null,
        name: '',
        mobileNumber: null,
        account: null,
        description: null,
        amount: null,
        contractNumber: null,
        checkNumber: null
      },
      money: {
        thousands: ',',
        precision: 0,
        prefix: '',
        suffix: '',
        masked: false,
        maxValue: 500000000
      },
      wayOptions: [
        { value: null, text: 'شیوه پرداخت' },
        { value: 1, text: 'نقدی' },
        { value: 2, text: 'الکترونیکی' },
        { value: 3, text: 'اعتباری (چک)' },
        { value: 4, text: 'تهاتر' }
      ],
      showPreview: false
    }
  },
  validations() {
    if (this.bill.way === 3) {
      return {
        bill: {
          way: {
            required
          },
          nationalCode: {
            minLength: minLength(10),
            maxLength: maxLength(11)
          },
          name: {
            required
          },
          mobileNumber: {
            required,
            minLength: minLength(11),
            maxLength: maxLength(11)
          },
          amount: {
            required
          },
          checkNumber: {
            required
          }
        }
      }
    } else {
      return {
        bill: {
          way: {
            required
          },
          nationalCode: {
            minLength: minLength(10),
            maxLength: maxLength(11)
          },
          name: {
            required
          },
          mobileNumber: {
            required,
            minLength: minLength(11),
            maxLength: maxLength(11)
          },
          amount: {
            required
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['isIOS']),
    ...mapState(['menuItems', 'activeNavigationItem'])
  },
  mounted() {
    this.changeNavigationActive('index')
  },
  methods: {
    ...mapActions(['openNotification', 'setLoading']),
    ...mapActions(['changeNavigationActive']),
    onSubmit() {
      this.checkValidation = true
      if (this.isValid()) {
        this.showPreview = true
      } else {
        return
      }
    },
    isValid() {
      this.$v.bill.$touch()
      return !this.$v.bill.$invalid
    },
    onReset() {
      console.log('onReset')
    },
    onChange(e) {
      e.target.value = parseInt(this.toPersianNumber(e.target.value))
    },
    convert(str) {
      const numberRange = '[\u06F0-\u06F9]'
      const persianRegex = new RegExp('^' + numberRange + '+$')
      return $englishNumbersOnly
    },
    toEnglishNumber(value) {
      const arabicNumbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'],
        persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'],
        englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      if (!value) {
        return
      }
      let i = 0,
        numbersLen = englishNumbers.length
      for (; i < numbersLen; i++) {
        value = value
          .replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i])
          .replace(new RegExp(arabicNumbers[i], 'g'), englishNumbers[i])
      }
      return value
    },
    createBill() {
      this.setLoading(true)
      const token = localStorage.getItem('token')
      const body = {
        Amount: this.bill.amount.replace(/,/g, ''),
        NationalCode: this.bill.nationalCode,
        Mobile: this.bill.mobileNumber,
        Name: this.bill.name,
        Description: this.bill.description ? this.bill.description : '',
        BillType: this.bill.way,
        ContractNumber: this.bill.contractNumber,
        Token: token
      }
      if (this.bill.way === 3 && this.bill.checkNumber)
        body.CheckNumber = this.bill.checkNumber
      this.$axios
        .$post('/Tax/CreateBill', body)
        .then(res => {
          this.setLoading(false)
          if (res.ResponseCode === 0) {
            this.showCreateMessage = true
          } else {
            this.showCreateMessage = false
            this.openNotification({
              type: 'error',
              message: res.ResponseMessage
            })
          }
        })
        .catch(err => {
          this.showCreateMessage = false
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
.bill-payment-box {
  border-radius: 10px;
}
.preview-card {
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  .card-header {
    border-radius: 1rem 1rem 0 0;
  }
  .card-footer {
    border-radius: 0 0 1rem 1rem;
  }
}
</style>
