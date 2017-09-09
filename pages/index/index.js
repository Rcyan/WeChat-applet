//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    "swipers": ["/images/ad1.jpg","/images/ad2.jpg","/images/ad3.jpg","/images/ad4.jpg","/images/ad5.jpg"],
    "theme":"主题馆",
    "handpicked":"环球精选",
     themeItems:{},
     handpickedItems:{}
  },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  jumpDetailInfo:function(){
    wx.navigateTo({
      url: '../jump/jump'
    })
  },
  onLoad: function () {
    var that=this;
    app.getThemeItem(function (themeItems){
      that.setData({
        themeItems:themeItems
      })
    });
    app.getHandpickedItem(function (handpickedItems){
      that.setData({
        handpickedItems: handpickedItems
      })
      console.log(handpickedItems);
    })
    
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
