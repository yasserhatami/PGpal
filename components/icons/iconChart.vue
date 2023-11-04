<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="20"
    viewBox="0 0 23 20"
  >
    <g
      :stroke="fillColor !== '' ? fillColor : '#02021d'"
      fill="none"
    >
      <rect
        width="23"
        height="20"
        stroke="none"
        rx="4"
      />
      <rect
        width="22"
        height="19"
        x=".5"
        y=".5"
        rx="3.5"
      />
    </g>
    <path
      :fill="fillColor !== '' ? fillColor : '#02021d'"
      stroke="#f4f6f9"
      stroke-width="0.5px"
      d="M81.855 76.8H96.9a.657.657 0 1 0 0-1.314h-1.2v-8.61a.653.653 0 0 0-.641-.667h-2.495a.652.652 0 0 0-.641.667v8.61h-.41v-4.825a.7.7 0 0 0-.69-.675h-2.5a.688.688 0 0 0-.673.675v4.825h-.411v-6.832a.642.642 0 0 0-.658-.638h-2.49a.614.614 0 0 0-.624.638v6.833h-.985v-10.2a.657.657 0 1 0-1.314 0v10.881a.663.663 0 0 0 .687.632zm11.382-9.277h1.149v7.964h-1.149zm-4.27 3.777H90.2v4.187h-1.233zm-4.187-1.97h1.15v6.157h-1.15zm0 0"
      transform="translate(-77.831 -61.625)"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconChart',
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
