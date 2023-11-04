export default function({ $axios, store, $router }) {
  const mobileNumber = localStorage.getItem('phoneNumber')
  $axios.defaults.headers.common['RPAPI'] = 'DD2A230F0CFD58AEA2C8380F03E338A1'
  $axios.defaults.headers.common['Content-Type'] = 'application/json'
  $axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  $axios.interceptors.response.use(
    function(response) {
      if (response.data.ResponseCode === -200) {
        store.dispatch('openNotification', {
          type: 'error',
          message: response.data.ResponseMessage
        })
        localStorage.removeItem('token')
        localStorage.removeItem('tokenlocal')
        localStorage.removeItem('phoneNumber')
        localStorage.removeItem('fullName')
        localStorage.removeItem('MemorySerial')
        localStorage.removeItem('FollowCode')
        localStorage.removeItem('TerminalSerial')
        window.location = '/auth'
      } else return response
    },
    function(error) {
      if (!navigator.onLine) {
        store.dispatch('openNotification', {
          type: 'wifi-off',
          message: 'اینترنت شما قطع میباشد !'
        })
      }
      return Promise.reject(error)
    }
  )
}
