//logs.js
var util = require('../../utils/util.js');
var app=getApp();//实例化app.js
Page({
  data: {
    userInfo:{},
    myOrder:"我的订单",
    myOrderIcon:"/images/myorder.png",
    myList:[
      {
        icon:"/images/shopaddress.png",
        text:"收获地址管理" 
      },
      {
        icon: "/images/chatwith.png",
        text: "联系客服"
      },
      {
        icon: "/images/faq.png",
        text: "常见问题"
      }
    ],
    dealList:[
      {
        icon: "/images/obligation.png",
        text: "待付款"
      },
      {
        icon: "/images/tosend.png",
        text: "待发货"
      },
      {
        icon: "/images/shipped.png",
        text: "已发货"
      },
      {
        icon: "/images/evaluate.png",
        text: "待评价"
      },
      {
        icon: "/images/refund.png",
        text: "退款/售后"
      }
    ]
  },
  onLoad: function () {
    var that=this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo){
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
