<template>
  <div class="notif-container-wrapper">
    <div
      v-for="(notify, i) in notifications"
      :key="i"
      :class="{ show: notifications.length > 0 }"
      @click="closeNotification($event)"
      class="notif-container mt-3"
    >
      <div
        :class="notify.type"
        class="notif-text notif fs-15 fw-300 pl-5"
      >
        {{ notify.message }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Notif',
  data() {
    return {}
  },
  computed: {
    ...mapState(['notifications'])
  },
  methods: {
    ...mapActions(['openNotification']),
    closeNotification(event) {
      event.target.parentElement.classList.remove('show')
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/styles/general/variables';
$notif: (
  'error': 'error',
  'success': 'success',
  'wifi-off': 'wifi-off'
);
.notif-container {
  z-index: 99999999;
  width: 90vw;
  position: absolute;
  top: 0;
  left: 5vw;
  border: 1px solid #d6dae6;
  border-radius: 10px;
  padding: 0 1rem;
  justify-content: space-between;
  visibility: hidden;
  opacity: 0;
  box-shadow: 3px 7px 10px rgba(164, 171, 191, 0.36);
  background: #fff;
  color: $text-primary;
  text-align: right;
  direction: rtl;
  &-wrapper {
    z-index: 99999999;
  }
  .notif-text {
    z-index: 99999999;
    padding: 1rem 0;
    @each $name, $value in $notif {
      &.#{$name} {
        background: url('/images/#{$value}.svg') no-repeat left center;
      }
    }
  }
  &.show {
    visibility: visible;
    opacity: 1;
    -webkit-animation: moveOpen 0.6s;
    animation: moveOpen 0.6s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes moveOpen {
    from {
      top: -15vw;
    }
    10% {
      top: 12vw;
    }
    12% {
      top: 11vw;
    }
    16% {
      top: 9vw;
    }
    80% {
      top: 7vw;
    }
    85% {
      top: 6vw;
    }
    to {
      top: 5vw;
    }
  }
  @keyframes moveOpen {
    from {
      top: -15vw;
    }
    10% {
      top: 12vw;
    }
    12% {
      top: 11vw;
    }
    16% {
      top: 9vw;
    }
    80% {
      top: 7vw;
    }
    85% {
      top: 6vw;
    }
    to {
      top: 5vw;
    }
  }
}
</style>
