var app = getApp()
Page({
  data: {
    isShow:false,
    isShowTip:false,
    btnText:'我知道了',
    contentTip:'请您到指定地点还车哦~',
    latitude:0,
    longitude:0,
    markers:[{ //车辆标记
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '../images/liucheng.png',
      width: 20,
      height: 20
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '../images/liucheng.png',
      width: 20,
      height: 20
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../images/liucheng.png',
      position: {        
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onLoad: function (e) {
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
    //显示附近的单车

  },
  suoche:function(){
    console.log(555)
  },
  returnCar: function (e) { //显示还车提示语
    this.setData({ 
      isShow:true
    })
    console.log(e)
  },
  myeventlistener:function(){ //成功还车
    this.setData({
      isShowTip: false
    })
    wx.showToast({
      title: '还车成功',
      icon: 'success',
      duration: 1000
    })
    setTimeout(function () {
      wx.navigateTo({
        url: '../estate/estate'
      })
    },1000)
  },
  cancelListener:function(){
    this.setData({
      isShow: false
    })
  },
  ensureListener:function(){
    this.setData({
      isShow: false,
      isShowTip:true
    })
  },

 
  onShow:function(){
    this.mapCtx = wx.createMapContext('mymap');
    this.movetoPosition()
  },
 
  movetoPosition:function(){
    this.mapCtx.moveToLocation();
  }

})