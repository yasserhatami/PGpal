export const state = () => ({
  navigationItems: [
    {
      id: 0,
      name: 'index',
      faTitle: 'صدور صورتحساب',
      icon: 'iconInvoice',
      link: 'index'
    },
    {
      id: 1,
      name: 'bills',
      faTitle: 'صورتحساب ها',
      icon: 'iconChart',
      link: 'bills'
    },
    {
      id: 2,
      name: 'tax',
      faTitle: 'حافظه مالیاتی',
      icon: 'iconTax',
      link: 'tax'
    },
    {
      id: 3,
      name: 'profile',
      faTitle: 'پروفایل',
      icon: 'iconProfile',
      link: 'profile'
    }
  ],
  activeNavigationItem: '',
  notifications: [],
  paymentDesc: '',
  device: {},
  orientation: true,
  showLoading: false,
  showIosInstallMessage: false,
  appVersion: '1.2'
})

export const mutations = {
  SET_ACTIVE_NAVIGATION(state, activeItem) {
    state.activeNavigationItem = activeItem
  },
  SET_MENU_ITEMS(state, items) {
    if (items) {
      state.menuItems = items
    }
  },
  SET_PAYMENT_DESC(state, desc) {
    state.paymentDesc = desc
  },
  PUSH_NOTIFICATION(state, notification) {
    state.notifications.push(notification)
  },
  POP_NOTIFICATION(state) {
    state.notifications = []
  },
  SET_DEVICE(state, device) {
    state.device = device
  },
  SET_ORIENTATION(state, orientation) {
    state.orientation = orientation
  },
  SET_LOADING(state, status) {
    state.showLoading = status
  },
  SHOW_INSTALL_MESSAGE(state, flag) {
    state.showIosInstallMessage = flag
  }
}

export const getters = {
  getPaymentDescription: state => {
    return state.paymentDesc
  },
  isIOS: state => {
    return (
      state.device.apple &&
      state.device.appleVersion &&
      state.device.appleVersion < 13
    )
  },
  getAppVersion: state => state.appVersion,
  isLandscape: state => !state.orientation,
  showIosInstallMessage: state => state.showIosInstallMessage
}

export const actions = {
  changeNavigationActive({ commit }, payload) {
    commit('SET_ACTIVE_NAVIGATION', payload)
  },
  async getServiceStatus({ commit }) {
    const userToken = localStorage.getItem('token')
    const body = {
      Version: '1.0',
      Platform: 'PWA',
      Token: userToken
    }
    const serviceStatus = await this.app.$axios.$post(
      '/Config/ServiceStatus',
      body
    )
    return serviceStatus
  },
  setMenuItems({ commit }, payload) {
    commit('SET_MENU_ITEMS', payload)
  },
  setPaymentDescription({ commit }, payload) {
    commit('SET_PAYMENT_DESC', payload)
  },
  openNotification({ commit }, payload) {
    commit('PUSH_NOTIFICATION', payload)
    setTimeout(function() {
      commit('POP_NOTIFICATION')
    }, 5000)
  },
  setOrientation({ commit }, payload) {
    commit('SET_ORIENTATION', payload)
  },
  setLoading({ commit }, payload) {
    commit('SET_LOADING', payload)
  },
  showInstallMessage({ commit }, payload) {
    commit('SHOW_INSTALL_MESSAGE', payload)
  }
}
