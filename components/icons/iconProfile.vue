<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20pt"
    height="20pt"
    viewBox="0 0 20 20"
  >
    <g id="surface1">
      <path
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;"
        d="M 23.000601 13.74994 C 23.065615 10.936626 21.599854 8.312442 19.176622 6.893964 C 16.753389 5.469576 13.745034 5.469576 11.321802 6.893964 C 8.898569 8.312442 7.432809 10.936626 7.497822 13.74994 Z M 23.000601 13.74994 "
        transform="matrix(0.66092,0,0,0.66092,-0.330459,6.553017)"
      />
      <path
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;"
        d="M 9.470252 4.736425 C 9.470252 7.354698 7.354356 9.470594 4.736083 9.470594 C 2.117809 9.470594 0.00191348 7.354698 0.00191348 4.736425 C 0.00191348 2.118152 2.117809 0.00225587 4.736083 0.00225587 C 7.354356 0.00225587 9.470252 2.118152 9.470252 4.736425 Z M 9.470252 4.736425 "
        transform="matrix(0.66092,0,0,0.66092,6.623735,4.256322)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconProfile',
  props: {
    fillColor: {
      type: String,
      default: ''
    }
  },
  watch: {
    fillColor(newVal) {
      if (newVal) {
        this.fillColor = newVal
      }
    }
  }
}
</script>

<style scoped>
</style>
