<template>
  <div
    class="nav nav-tabs navigation-items flex-row-reverse bg-white justify-content-around"
  >
    <div
      v-for="item in navigationItems"
      :class="{ active: activeNavigationItem === item.link }"
      class="nav-item nav-link navigation-item"
    >
      <router-link
        :to="{ name: item.link }"
        @click.native="changeNavigationActive(item.link)"
      >
        <div class="navigation-item__icon">
          <component
            :is="item.icon"
            v-bind="{
              fillColor:
                activeNavigationItem === item.link
                  ? colors.colorDark
                  : colors.colorSecondary
            }"
          />
        </div>
        <span class="navigation-item__title fs-10 text-nowrap mt-n1">{{ item.faTitle }}</span>
      </router-link>
    </div>
    <div class="navigation-items__active-border" />
  </div>
</template>

<script>
import iconInvoice from '@/components/icons/iconInvoice.vue'
import iconChart from '~/components/icons/iconChart.vue'
import iconShop from '~/components/icons/iconShop.vue'
import iconTax from '@/components/icons/iconTax.vue'
import iconProfile from '@/components/icons/iconProfile.vue'
import { mapState, mapActions } from 'vuex'
import color from '~/mixins/color'
export default {
  name: 'BottomNavigation',
  components: {
    iconInvoice,
    iconChart,
    iconShop,
    iconTax,
    iconProfile
  },
  mixins: [color],
  data() {
    return {}
  },
  computed: {
    ...mapState(['activeNavigationItem', 'navigationItems'])
  },
  methods: {
    ...mapActions(['changeNavigationActive'])
  }
}
</script>

<style lang="scss">
@import './assets/styles/general/variables';
$items: 1 0%, 2 -100%, 3 -200%, 4 -300%;
.navigation-items {
  box-shadow: 0 3px 10px rgba(103, 17, 121, 0.16);
  border-radius: 5px 5px 25px 25px;
  border: 1px solid rgba(76, 61, 96, 0.18);
  height: 60px;
  position: fixed;
  width: calc(100% - 30px);
  bottom: 15px;
  left: 15px;
  &__active-border {
    display: none;
    width: 25%;
    height: 3px;
    transition: transform 0.5s ease;
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    &:before {
      content: '';
      display: block;
      width: 17px;
      margin: 0 auto;
      z-index: 1;
      height: 3px;
      background: $primary;
    }
  }
  @each $item in $items {
    $key: nth($item, 1);
    $value: nth($item, 2);
    .navigation-item:nth-child(#{$key}).active ~ &__active-border {
      transform: translateX($value);
    }
  }
}
.navigation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0;
  width: 25%;
  transition: all 0.3s ease;
  padding: 0.75rem 1rem 0.5rem 1rem;
  height: 60px;
  &:focus,
  &:hover {
    background-color: transparent !important;
    border-color: transparent !important;
  }
  &.active {
    background-color: transparent !important;
    border-color: transparent !important;
    .navigation-item__title {
      color: $text-primary;
    }
    & ~ .navigation-items__active-border {
      display: block;
    }
  }
  &__title {
    color: $borders-color;
  }
}
</style>
