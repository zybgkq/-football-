// listpage_one.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    currentTab: 0,
    navList:[
      "足球现场", "足球生活","足球美女"
    ],
    page:0,
    flag:false,
    userName:""
  },
    //滑动切换
    swiperTab:function(e) {

      this.setData({
        currentTab: e.detail.current
      });
    },
    //点击切换
    clickTab: function(e) {

      var that = this;

      if (this.data.currentTab === e.target.dataset.current) {
        return
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
    onLoad(options){
      var that = this;
      wx.getStorage({
        key: 'userName',
        success: function (res) {
           console.log(res.data)
          that.setData({
            userName: res.data
          })
        }
      })

      //给一个加载数据的遮罩
      wx.showLoading({
        title:"加载中...",
        mask:true
      })
     
      wx.request({
        url: app.globalData.header + '/wechat/api/list',
        data: { page: that.data.page},
        success(res){
          that.setData({
            page: that.data.page + 1,
            items:res.data.list
          });
          wx.hideLoading()
        }  
      })
    },
    fetchMore(){
      if(this.data.flag) return
      wx.showLoading({
        title: "加载中...",
        mask: true
      });
      this.setData({
        flag:true
      });
      var that = this;
      wx.request({
        url: app.globalData.header + '/wechat/api/list',
        data: { page: that.data.page },
        success(res) {
          that.setData({
            page: that.data.page + 1,
            items: that.data.items.concat(res.data.list)
          });
          setTimeout(()=>{
            wx.hideLoading();
          },100) //经理说加个定时器，后面优化的时候再要100W
          that.setData({
            flag: false
          })
        }
      })

    }
})