export default {
  methods: {
    detectBrowser() {
      const ua = navigator.userAgent.toLowerCase()
      if (
        ua.indexOf('firefox') > -1 ||
        ua.indexOf('ie') > -1 ||
        ua.indexOf('edge') > -1
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
