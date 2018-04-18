Page({
  data: {
    latitude: 39.9219,
    longitude: 116.44355,
    markers:[{
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
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('mymap');
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
  

})