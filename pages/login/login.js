// login.js

var util = require('../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     phone:'18508256624',
     pwd:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  handlePhone(e){
     this.setData({
       phone:e.detail.value
     })
  },
   handlePwd(e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  handleSubmit(){
    //验证电话
    
    if (!util.phone(this.data.phone)){
       //
      wx.showToast({
        title:"号码错误",
        mask:true,
        icon:'loading'
      })
      return
    }
   if(this.data.pwd.lenght>20 || this.data.pwd.lenght<6){
     wx.showToast({
       title: "密码长度错误",
       mask: true,
       icon: 'loading'
     })
     return   
   }
   const param = {};
   param.phone = this.data.phone,
   param.pwd = this.data.pwd
   //发http请求
    wx.request({
      url: app.globalData.header+'/wechat/api/login',
      data: param,
      method:"POST",
      success(res){
        //页面跳转
        //console.log(res);
        wx.setStorage({
          key: "userName",
          data: res.data.username
        });
        wx.redirectTo({
          url: `/pages/listpage/listpage_one?username=${res.data.username}`,
        })
      }
    })
  }
})