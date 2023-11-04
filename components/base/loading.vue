<template>
  <div
    v-if="showLoading"
    class="showbox d-flex justify-content-center align-items-center"
  >
    <div class="loader">
      <svg
        class="circular"
        viewBox="25 25 50 50"
      >
        <circle
          class="path"
          cx="50"
          cy="50"
          r="12"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Loading',
  computed: {
    ...mapState(['showLoading'])
  }
}
</script>

<style scoped lang="scss">
@import './assets/styles/general/variables';
$width: 8rem;

.loader {
  position: relative;
  margin: 0 auto;
  width: $width;
  z-index: 101;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: $primary;
  }
  40% {
    stroke: $white;
  }
  66% {
    stroke: $primary;
  }
  80%,
  90% {
    stroke: $white;
  }
}

.showbox {
  position: fixed;
  content: '';
  background-color: rgba($color: $text-primary, $alpha: 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
</style>
