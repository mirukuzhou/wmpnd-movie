// pages/collection/collection.js
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    collectionList: []
  },

  getCollectionList() {
    wx.showLoading({
      title: '刷新收藏数据...',
    })

    qcloud.request({
      url: config.service.collectionList,
      login: true,
      success: result => {
        wx.hideLoading()

        let data = result.data

        if (!data.code) {
          let collectionList = data.data
          collectionList.forEach(d =>
            d.content.length > 40
            ? d.content = `${d.content.substring(0, 40)}...`
            : d.content)
          this.setData({
            collectionList: collectionList
          })
        } else {
          wx.showToast({
            icon: 'none',
            title: '数据刷新失败',
          })
        }
      },
      fail: () => {
        wx.hideLoading()

        wx.showToast({
          icon: 'none',
          title: '数据刷新失败',
        })
      }
    })
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
    app.checkSession({
      success: ({ userInfo }) => {
        this.setData({
          userInfo
        })
        this.getCollectionList()
      }
    })
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