function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function phone(phone) {
  if (!/^(13[0-9]|15[0|1|2|3|6|7|8|9]|18[0-9]|177)\d{8}$/.test(phone)) {
    return false;
  }
  return true;
}

module.exports = {
  formatTime: formatTime,
  phone:phone
}
