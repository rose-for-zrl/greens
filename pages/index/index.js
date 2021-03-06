const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
    data: {
        currentIndex: 0, //记录swiper 自定义面板指示器
        nvabarData: {
            showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
            title: '我的主页', //导航栏 中间的标题
            backgroundColor: 'rgba(255,255,255,0.6)'
          },
        //业务数据
        title:"老邹家的蔬菜", //当前页面名称
        newGoods: [],
        hotGoods: [],
        topics: [],
        brands: [],
        floorGoods: [],
        banner: [],
        channel: []
    },
    onShareAppMessage: function () {
        return {
            title: 'NideShop',
            desc: '仿网易严选微信小程序商城',
            path: '/pages/index/index'
        }
    }, onPullDownRefresh() {
        // 增加下拉刷新数据的功能
        var self = this;
        this.getIndexData();
    },
    getIndexData: function () {
        let that = this;
        var data = new Object();
        util.request(api.IndexUrlNewGoods).then(function (res) {
            if (res.errno === 0) {
                data.newGoods = res.data.newGoodsList
                that.setData(data);
            }
        });
        util.request(api.IndexUrlHotGoods).then(function (res) {
            if (res.errno === 0) {
                data.hotGoods = res.data.hotGoodsList
                that.setData(data);
            }
        });
        util.request(api.IndexUrlTopic).then(function (res) {
            if (res.errno === 0) {
                data.topics = res.data.topicList
                that.setData(data);
            }
        });
        util.request(api.IndexUrlBrand).then(function (res) {
            if (res.errno === 0) {
                data.brand = res.data.brandList
                that.setData(data);
            }
        });
        util.request(api.IndexUrlCategory).then(function (res) {
            if (res.errno === 0) {
                data.floorGoods = res.data.categoryList
                that.setData(data);
            }
        });
        util.request(api.IndexUrlBanner).then(function (res) {

            if (res.errno === 0) {
                data.banner = res.data.banner;
                that.setData(data);
            }
        });
        util.request(api.IndexUrlChannel).then(function (res) {
            if (res.errno === 0) {
                data.channel = res.data.channel
                that.setData(data);
            }
        });

    },
    swiperChange: function(event) {
        const index = event.detail.current;
        this.setData({
            currentIndex: index
          })
    },
    onLoad: function (options) {
        //设置当前页面标题
        wx.setNavigationBarTitle({
            title: this.data.title
          });
        this.getIndexData();
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
})
