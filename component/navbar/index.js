const app = getApp()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },
  data: {
    deviceHeight: '',  //导航栏的高度
    clickInnerHeaderIcon: 1, //菜单按钮是否被点击 默认否
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1
    }
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      deviceHeight: app.globalData.deviceHeight
    })
  },
  methods: {
    //菜单被点击时间
    clickInnerHeaderIcon: function() {
      this.setData({
        clickInnerHeaderIcon: this.data.clickInnerHeaderIcon == 1 ? 0 : 1
      })
    },
  // 返回上一页面
    _navback() {
      wx.navigateBack()
    },
  //返回到首页
    _backhome() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  }
}) 