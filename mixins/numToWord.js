export default {
  methods: {
    toWord(num) {
      if (!num) return
      num = Number(num)
      if ((num = num.toString()).length > 12) {
        return 'غیر قابل محاسبه'
      }
      const n = ('000000000000' + num)
        .substr(-12)
        .match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/)
      let str = ''
      str +=
        n[1] != 0
          ? '<strong>' +
            Number(n[1]) +
            '</strong>' +
            ' میلیارد ' +
            (n[2] != 0 ? ' و ' : '')
          : ''
      str +=
        n[2] != 0
          ? '<strong>' +
            Number(n[2]) +
            '</strong>' +
            ' میلیون ' +
            (n[3] != 0 ? ' و ' : '')
          : ''
      str +=
        n[3] != 0
          ? '<strong>' +
            Number(n[3]) +
            '</strong>' +
            ' هزار ' +
            (n[4] != 0 ? ' و ' : '')
          : ''
      str += n[4] != 0 ? '<strong>' + Number(n[4]) + '</strong>' : ''
      str += n[1] != 0 || n[2] != 0 || n[3] != 0 || n[4] != 0 ? ' تومان ' : ''
      return str
    }
  }
}
