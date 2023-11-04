import dateTime from '~/mixins/dateTime'
export const state = () => ({
  token: localStorage.getItem('token') || '',
  authenticated: false
})

export const mutations = {
  SET_AUTHENTICATED(state, status) {
    state.authenticated = status
  }
}
export const actions = {
  setAuthenticated({ commit }, payload) {
    commit('SET_AUTHENTICATED', payload)
  },
  async createActivation({ commit }, phoneNumber) {
    const body = {
      Mobile: phoneNumber
    }
    const apiCall = await this.app.$axios.$post(
      '/Customer/CreateActivation',
      body
    )
    return apiCall
  },
  async checkActivation({ commit }, code) {
    const phone = localStorage.getItem('phoneNumber')
    const body = {
      Mobile: phone.toString(),
      Code: code.toString()
    }
    const apiCall = await this.app.$axios.$post(
      '/Customer/CheckActivation',
      body
    )
    return apiCall
  },
  async requestToken({ commit }, mobile) {
    // eslint-disable-next-line
    const body = {
      Mobile: mobile
    }
    const apiCall = await this.app.$axios.$post('/Security/GetToken', body)
    return apiCall
  },
  async getKey({ commit }, code) {
    const userToken = localStorage.getItem('token')
    const body = {
      ActiveCode: code,
      Token: userToken
    }
    const apiCall = await this.app.$axios.$post('/Security/GetKey', body)
    return apiCall
  },
  async getCustomerInfo() {
    const token = localStorage.getItem('token')
    const body = {
      Token: token
    }
    return await this.$axios.$post('/Tax/CustomerInformation', body)
  }
}
export const getters = {
  isAuthenticated: state => state.authenticated
}
