var app = getApp(); 

Page({

  /**
   * 页面的初始数据
   */
  data: { 
    userName:'yangj',
    id:9527,
    // array: [{
    //   message: 'foo',
    //   unique:"CD001"
    // }, {
    //   message: 'bar',
    //   unique: "CD002"
    // }],
    bool:0,
    item:{
      index: 0,
      msg: 'this is a template',
      time: '2017-09-15'
    
    },
     x: 30,
    y: 40,
    flag:false,
     imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    percent:60,
    checkeditems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    // array: ['美国','中国','巴西','日本']
    array: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国'},
      { name: 'BRA', value: '巴西' }
    ],
    index:1,
    time: '14:38',
    date:'2017-5-23',
    year:'2017',
    month:'5',
    day:'10',
    value:[1,4,9],
    years:['2016','2017','2018','2019'],
    months:[1,2,3,4,5,6,7,8,9,10,11,12],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15],
    markers: [{
      iconPath: "../../imgs/boy.png",
      id: 0,
      latitude: 30.657755,
      longitude: 104.065769,
      width: 20,
      height: 20,
       callout:{
         content:"天府广场吃鸡",
         fontSize:12,
         display:"BYCLICK"
       }
    }],
    controls: [{
      id: 'cd001',
      iconPath: '../../imgs/girl.png',
      position: {
        left: 10,
        top: 50,
        width: 40,
        height: 40
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    console.log(query)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({ //改变data的数据，同事映射到视图改变
      userName: app.globalData.userName
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("你到底了！")
  },
  handleIndex(event){ //事件的处理函数
   // console.log(event)
    wx.redirectTo({
     url: '/pages/logs/logs?id=yangj',
   })
  },
  handleDelete(event){
   //
    console.log(event.target.dataset)
  },
  loaderMore(e){
    if(this.data.flag) return

    // setTimeout(()=>{
    //   console.log(e)
    //   this.setData({
    //     flag:false
    //   })
    // },1000)
    
    // this.setData({
    //   flag: true
    //})
  },
  scroll(e){
    //console.log(e.detail.deltaY)
  },
  handleChange(e){
    //swpipe
    //console.log(e.detail.current)
  },
  checkboxChange(e){
    console.log(e.detail.value)
  },
  handleInput(e){
    this.setData({
      userName: e.detail.value
    })
  },
  bindPickerChange(e){
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerViewChange(e){
     //console.log(e.detail.value)
    var arr = e.detail.value;
     this.setData({
       year: this.data.years[arr[0]]
     })
     //自己加
  },
  handleRadio(e){
    console.log(e.detail.value)
  },
  handleSlider(e){
    console.log(e.detail.value)
  },
  handleSwitch(e){
    console.log(e.detail.value)
  },
  bindFormSubmit(e){
    console.log(e.detail.value)
  },
  handleTextArea(e){
    console.log(e.detail.value)
  },
  imgLoader(e){
    console.log(e.detail);
  },
  handleControl(e){
    console.log(e);
  }
})