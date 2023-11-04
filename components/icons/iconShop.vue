<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25.002"
    height="24.056"
    viewBox="0 0 25.002 24.056"
  >
    <g
      id="shop-cart"
      transform="translate(0.003 -0.397)"
    >
      <path
        id="Path_4506"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Path 4506"
        d="M22.136,8.841V22.424A1.033,1.033,0,0,1,21.1,23.456H3.533A1.033,1.033,0,0,1,2.5,22.424V8.841"
        transform="translate(0.18 0.497)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        id="Path_4507"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Path 4507"
        d="M22.7,1.606A1.04,1.04,0,0,0,21.765,1H3.231a1.04,1.04,0,0,0-.933.6L.5,5.361h24Z"
        transform="translate(0)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        id="Path_4508"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Path 4508"
        d="M24.5,6.09A3.127,3.127,0,0,1,22.621,9.1,2.9,2.9,0,0,1,19.28,8.27a4.211,4.211,0,0,1-3.222,2.146A4.129,4.129,0,0,1,12.5,8.967a4.13,4.13,0,0,1-3.56,1.448A4.212,4.212,0,0,1,5.717,8.27a2.9,2.9,0,0,1-3.341.823A3.128,3.128,0,0,1,.5,6.09V5h24Z"
        transform="translate(0 0.118)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        id="Path_4509"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Path 4509"
        d="M5.5,8.634V5.364L6.59,1"
        transform="translate(0.206 0)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        id="Path_4510"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Path 4510"
        d="M12,9.337V1"
        transform="translate(0.498 0)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        id="Path_4511"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Path 4511"
        d="M18.59,8.634V5.364L17.5,1"
        transform="translate(0.7 0)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        id="Path_4512"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Path 4512"
        d="M16.9,15l-1.817,5.451H9.635L8,15h8.9"
        transform="translate(0.132 0.414)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <line
        id="Line_300"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Line 300"
        y1="2.725"
        x2="1.635"
        transform="translate(9.861 12.932)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <line
        id="Line_301"
        :stroke="fillColor !== '' ? fillColor : '#9f9aa7'"
        data-name="Line 301"
        x1="1.635"
        y1="2.725"
        transform="translate(13.501 12.932)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconShop',
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
