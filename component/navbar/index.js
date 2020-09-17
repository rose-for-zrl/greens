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
    deviceHeight: 0,  //导航栏的高度
    menuHeight: 0, //导航下拉菜单高度
    clickInnerHeaderIcon: 1, //菜单按钮是否被点击 默认否
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1,
      backgroundColor: 'rgba(255,255,255,0.6)'
    },
    backgroundColor: 0 //记录调用组件传递过来的背景颜色
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    let menuHeight =  wx.getSystemInfoSync().windowHeight - app.globalData.deviceHeight;
    this.setData({
      deviceHeight: app.globalData.deviceHeight,
      menuHeight: menuHeight,
      backgroundColor: this.data.navbarData.backgroundColor
    })
  },
  methods: {
    //菜单被点击时间
    clickInnerHeaderIcon: function() {
      //修改导航栏颜色与菜单下拉一直，关闭时还原 
      if(this.data.clickInnerHeaderIcon == 1){ //点击打开
        this.setData({
          ['navbarData.backgroundColor'] : 'rgba(255,255,255,0.85)',
          clickInnerHeaderIcon: 0
        });
      }else{ //点击关闭
        this.setData({
          ['navbarData.backgroundColor'] : this.data.backgroundColor,
          clickInnerHeaderIcon: 1
        });
      }
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