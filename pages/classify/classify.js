// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navLeftItems:[],
      navRightItems:[],
      curNav:1,
      curIndex:0,
      "active":""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      var that=this;
      wx.request({
        "url":"http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList",
        "method":"GET",
        "data":{},
        "header":{
          "Accept":"application/json"
        },
        success:function(res){
          that.setData({
            navLeftItems: res.data,
            navRightItems:res.data
          })
        }
      })
  },

  everyItemC:function(e){
      var that=this;
      var index=e.target.dataset.id;//获取触发当前事件元素的data-id
      that.setData({
        curIndex: index-1,
        curNav: index
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})