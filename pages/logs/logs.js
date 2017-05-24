//logs.js
var util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (option) {
    console.log(option);//拿到了跳转页面传过来的数据
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
