<template>
  <span class="text-sub-texts fs-3 fw-300">{{ minutes }}:{{ seconds }}</span>
</template>

<script>
const zeroPad = num => {
  const s = '0' + num
  return s.substr(s.length - 2)
}

export default {
  props: {
    type: {
      type: String,
      default: 'second'
    },
    timer: {
      type: Number,
      default: 120
    }
  },
  data() {
    return {
      timeLeft: -1,
      percentTime: 100
    }
  },
  computed: {
    time() {
      return Math.max(0, this.timeLeft)
    },
    minutes() {
      return zeroPad(Math.floor(this.time / 60))
    },
    seconds() {
      return zeroPad(this.time % 60)
    }
  },
  watch: {
    time(newValue) {
      if (newValue === 0) {
        this.emitFinish()
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    async startTimer() {
      this.clearTimer()
      this.setTimer(this.timer)
      window._timer = setInterval(() => {
        if (this.timeLeft === 0) {
          this.$emit('activeBtn', false)
          clearInterval(window._timer)
        } else {
          this.setTimer(this.timeLeft - 1)
        }
      }, 1000)
    },
    async clearTimer() {
      if (window._timer) {
        clearInterval(window._timer)
        delete window._timer
      }

      this.setTimer(-1)
    },
    emitFinish() {
      this.$emit('finish')
    },
    setTimer(time) {
      this.timeLeft = time
    }
  }
}
</script>
