// pages/fistPage/water/littleTool/littleTool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    len: '',
    wid: '',
    dip: '',
  },
  riverValue: function (e) {
    var detail = e.detail.value
    var len = detail.lenth
    var wid = detail.width
    var dep = detail.dipth
    if (len <= 0) {
      wx.showModal({
        title: '错误',
        content: '输入有误，请输入正确数值',
        showCancel: false,
      })
    }
    else if (len > 0 && len <= 1) {
      this.setData({
        len: '1、在工程内设置 2 个站点，工程外设置 1 个站点（推荐设置于河道上游）'
      })
    }
    else if (len > 1 && len <= 3) {
      this.setData({
        len: '1、设置上中下游 3 个采样站点，上下游监测站点布置离工程范围端点 100 m 左右'
      })
    }
    else {
      this.setData({
        len: '1、上下游各设置 1 个采样站点，站点布置离工程范围端点 100 m 左右，在中游设置 2 - 3 个站点'
      })
    }

    if (wid <= 0) {
      wx.showModal({
        title: '错误',
        content: '输入有误，请输入正确数值',
        showCancel: false,
      })
    }
    else if (wid > 0 && wid <= 50) {
      this.setData({
        wid: '2、设置河心 1 个采样站点'
      })
    }
    else {
      this.setData({
        wid: '2、设置河心一个采样站点，增加离岸 20 m 采样站点 1 个'
      })
    }

    if (dep <= 0) {
      wx.showModal({
        title: '错误',
        content: '输入有误，请输入正确数值',
        showCancel: false,
      })
    }
    else if (dep > 0 && dep <= 2) {
      this.setData({
        dep: '3、取水下 0.5 m 处 1 个监测站点'
      })
    }
    else {
      this.setData({
        dep: '3、采集水下 0.5 m 水层和离水底 0.5m 水层混合取样'
      })
    }
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