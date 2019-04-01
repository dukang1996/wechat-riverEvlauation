// pages/fistPage/C1/C1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'',
    score:'',
    array:['中心城区河道','新城新镇河道','农村地区河道'],
    objectArray:[
      { id: 0, name: '中心城区河道'},
      { id: 1, name: '新城新镇河道' },
      { id: 2, name: '农村地区河道' },
    ],
    index:0,
  },
  judgeDO:function(e){
    var result = e.detail.value
    var score =0
    if(result >= 5){
      this.setData({result:'优良'})
    }
    else if(result < 5 && result >= 3 ){
      this.setData({result:'合格'})
    }
    else{
      this.setData({result:'不合格'})
    }
    if(result >= 7){
      this.setData({score:100})
    }
    else if(result <= 7 && result >=1){
      score = 10*result+30
      this.setData({score:score})
    }
    else{
      this.setData({score:40})
    }
  },
  bindPickerChange:function(e){
    this.setData({index:e.detail.value})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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