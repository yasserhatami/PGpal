export default {
  methods: {
    currency(number) {
      let price = Number(number)
      return price.toLocaleString('fa-IR')
    }
  }
}
