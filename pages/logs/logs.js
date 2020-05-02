//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  /**
   * 监听页面出事渲染完成
   */
  onReady:function(){},
  /**
   *监听页面显示
   */
  onShow:function(){

  },
  /**
   * 页面隐藏
   */
  onHide:function(){},
  /**
   * 页面卸载
   */
  onUnload:function(){

  },
  
})
