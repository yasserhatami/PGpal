<template>
  <div class="splashscreen overflow-hidden">
    <div class="d-flex align-items-end flex-column h-100">
      <div class="splash-logo" />
      <div class="mb-2 mt-auto w-100">
        <img
          class="splash-img"
          src="/images/town.svg"
          alt="splash"
          srcset=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'actionLayout',
  name: 'Splashscreen'
}
</script>

<style scoped lang="scss">
.splashscreen {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999999999;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: visible;
  background: var(--bg-color);
  animation: fadeout forwards;
  animation-delay: 1s;
  animation-duration: 1s;
}
.splash-logo {
  width: 300px;
  height: 160px;
  background-image: url('/images/logo-splash.png');
  background-position: center center;
  background-repeat: no-repeat;
  margin: 40px auto 0;
}
.splash-img {
  width: 100%;
  height: auto;
}

@keyframes fadeout {
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
