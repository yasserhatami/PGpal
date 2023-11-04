export default function toEnNumber(number) {
  const toEn = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
  }

  const str = String(number)
  const enStr = Array.from(str).reduce(
    (prev, curr) => `${prev}${toEn[curr] || curr}`,
    ''
  )
  return enStr
}
