<template>
  <div class="verify-message text-center">
    <div
      class="flex-row-reverse d-flex flex-row align-items-center justify-content-between"
    >
      <div class="mr-3">
        <p class="fs-4 text-danger">
          شما در سامانه مالیاتی فعال نشده اید
        </p>
        <p class="fs-2 mb-0 text-justify">
          جهت استفاده از این اپلیکیشن لطفا ابتدا نسبت به ثبت اطلاعات لازم در سامانه <a
            class="font-weight-bold"
            href="https://tax.pgpal.ir/"
            target="_blank"
          >پی جی پال</a> اقدام فرمایید و سپس دوباره از اینجا وارد شوید
        </p>
      </div>
      <img
        alt="icon"
        src="/images/error.svg"
      >
    </div>
    <a
      class="float-left dir-rtl"
      href="https://tax.pgpal.ir"
    >https://tax.pgpal.ir</a>
    <!--    <p class="mb-0 fs-n1 mt-3 mr-5">-->
    <!--      ضمنا شماره همراه شما در هر دو سامانه باید یکسان باشد-->
    <!--    </p>-->
  </div>
</template>

<script>
export default {
  name: 'VerifyMessage'
}
</script>

<style scoped lang="scss">
.verify-message {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 5vw;
  width: 90vw;
  border-radius: 10px;
  padding: 2rem 1rem 2rem 1.5rem;
  justify-content: space-between;
  box-shadow: 7px 3px 10px rgba(164, 171, 191, 0.36);
  background: #fff;
  color: var(--text-primary);
  text-align: right;
  direction: rtl;
  z-index: 10000;
}
</style>
