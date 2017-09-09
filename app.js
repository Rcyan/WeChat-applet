//app.js

App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
 
//index主题馆
  getThemeItem:function(par){
    var that=this
    wx.request({
      "url":"http://huanqiuxiaozhen.com/wemall/venues/venuesList",
      "method":"GET",
      "data":{},
      "header":{
        'Accept':'application/json'
      },
      success:function(res){
        that.globalData.themeItems = res.data.data;
        typeof par == "function" && par(that.globalData.themeItems)
      }
    })
  },
// index环球精选
  getHandpickedItem:function(par){
    var that=this;
    wx.request({
      "url":"http://huanqiuxiaozhen.com/wemall/goods/choiceList",
      "method":"GET",
      "data":{},
      "header":{
        "Accept":"application/json"
      },
      success:function(res){
        that.globalData.handpickedItems=res.data.data.dataList;
        typeof par == "function" && par(that.globalData.handpickedItems);
        // WxParse.wxParse('par', 'html', par, that, 5)
      }
    })
  },

  globalData: {
    userInfo: null,
    themeItems:null,
    handpickedItems:null
  }
})
