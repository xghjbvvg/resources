//index.js
//获取应用实例
const app = getApp()
const back = wx.createInnerAudioContext();
back.title = "开启继续阅读";
back.src = "https://raw.githubusercontent.com/xghjbvvg/resources/master/bell.mp3";
Page({
  data: {
    isShow: false,
    backgroundMusic:{} ,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    image:'../../images/download.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  backmusic:function(){
    
    back.play();
    setTimeout(()=>{
      this.setData({
          image: "../../images/download.png"
      });
    },4000);
},

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 放在onReady函数中，使在进入页面后，音乐就自动开始
  onReady () {
  	
    
  },
/**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    this.isShow = true;
    wx.onAccelerometerChange(function (e) {
     
     if (!that.isShow) {
       return
     }
     //console.log(e.x+":"+e.y);
     
     if (Math.abs(e.x) > 0.5 && Math.abs(e.x) >0.5) {
       that.backmusic();
       that.setData({
        image: "../../images/u003dgif.gif"
       });
      
     }else{
      that.setData({
        image: "../../images/download.png"
       });
     }
   })
  
   
  },

  /**
    * 生命周期函数--监听页面隐藏
    */
  onHide: function () {
    this.isShow = false;
  }


})
