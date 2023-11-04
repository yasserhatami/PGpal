import moment from 'moment-jalaali'
import en from 'moment/locale/en-au'
import fa from 'moment/locale/fa'

export default {
  methods: {
    getDateToString() {
      let dateString = new Date()
        .toJSON()
        .replace(/-/g, '')
        .slice(0, 8)
      let timeString = new Date()
        .toTimeString()
        .replace(/:/g, '')
        .slice(0, 6)
      let dateToString = dateString + timeString
      return dateToString
    },
    changeFormat(date, from, to) {
      let newDate = moment(date.toString(), from)
        .locale('en', en)
        .format(to)
      return newDate
    },
    getShamsiDate() {
      let shamsiDate = this.getDateToString().slice(0, 8)
      let date = moment(shamsiDate, 'YYYYMMDD')
        .locale('en', en)
        .format('jYYYY/jMM/jDD')
        .replace(/\//g, '')
      let time = this.getDateToString().slice(8, 14)
      return date + time
    }
  }
}
