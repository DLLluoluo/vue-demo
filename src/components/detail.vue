<template>
  <div class="detail">
    <!-- 详情页头部 -->
    <header class="aui-header-default aui-header-fixed aui-header-bg">
      <a href="javascript:history.back(-1)" class="aui-header-item">
        <i class="aui-icon aui-icon-back-white"></i>
      </a>
      <div class="aui-header-center aui-header-center-clear">
        <div class="aui-header-center-logo">
          <div id="scrollSearchPro">
            <span class="current">商品</span>
            <span>评价</span>
            <span>详情</span>
          </div>
        </div>
      </div>
      <a href="javascript:;" class="aui-header-item-icon select" style="min-width:0;">
        <i class="aui-icon aui-icon-share-pd selectVal" onselectstart="return false"></i>
        <div class="aui-header-drop-down selectList">
          <div class="aui-header-drop-down-san"></div>
          <div class>
            <p class onclick="location='http://www.a-ui.cn/'">消息</p>
            <p class onclick="location='index.html'">首页</p>
            <p class onclick="location='index.html'">帮助</p>
            <p class onclick="location='index.html'">分享</p>
          </div>
        </div>
      </a>
    </header>

    <!-- 详情页主要信息 -->
    <swipe class="detail-swipe">
      <swipe-item>
        <img :src="detailInfo.img" alt="123" />
      </swipe-item>
      <swipe-item>
        <img :src="detailInfo.img" alt="123" />
      </swipe-item>
      <swipe-item>
        <img :src="detailInfo.img" alt="123" />
      </swipe-item>
      <swipe-item>
        <img :src="detailInfo.img" alt="123" />
      </swipe-item>
    </swipe>
    <div class="aui-product-content">
      <div class="aui-real-price clearfix">
        <span>{{detailInfo.xianjia}}</span>
        <del>
          <span class="aui-font-num">{{detailInfo.yuanjia}}</span>
        </del>
        <div class="aui-settle-choice">
          <span>促销价</span>
        </div>
      </div>
      <div class="aui-product-title">
        <h2>{{detailInfo.title}}</h2>
      </div>
      <div class="aui-product-boutique clearfix">
        <img src="/static/img/icon/icon-usa.png" alt />
        <span class="aui-product-tag-text">美国品牌</span>
        <img src="/static/img/icon/icon-sj.png" alt />
        <span class="aui-product-tag-text">精选商家</span>
      </div>
      <div class="aui-product-strip">
        <img src="/static/img/bg/ssy.jpg" alt />
      </div>
      <div class="aui-product-coupon">
        <a
          href="#"
          class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear"
          data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}"
        >
          <div class="aui-address-cell-bd">选择</div>
          <div class="aui-address-cell-ft">颜色分类</div>
        </a>
        <div class="m-actionsheet" id="actionSheet">
          <div style="position:relative">
            <div style="height:400px;">
              <h3>内容填充</h3>
            </div>
            <a href="javascript:;" class="actionsheet-action" id="cancel">关闭</a>
            <div class="aui-product-function">
              <a href="car.html" class="yellow-color">加入购物车</a>
              <a href="order.html" class="red-color">立即购买</a>
            </div>
          </div>
        </div>
        <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
          <div class="aui-address-cell-bd">领券</div>
          <div class="aui-address-cell-ft">
            <span>满159减10券</span>
            <span>满299减30券</span>
          </div>
        </a>
        <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
          <div class="aui-address-cell-bd">配送</div>
          <div class="aui-address-cell-ft">上海 至 北京海淀区</div>
        </a>
        <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
          <div class="aui-address-cell-bd">运费</div>
          <div class="aui-address-cell-ft">免运费</div>
        </a>
        <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
          <div class="aui-address-cell-bd">说明</div>
          <div class="aui-address-cell-ft">假一赔十 7天无忧退货</div>
        </a>
      </div>
      <div class="aui-dri"></div>
      <div class="aui-product-evaluate">
        <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
          <div class="aui-address-cell-bd">
            商品评价
            <em>(3290)</em>
          </div>
          <div class="aui-address-cell-ft">
            <span>好评 100%</span>
          </div>
        </a>
      </div>
      <div class="aui-dri"></div>
      <div class="aui-product-evaluate">
        <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
          <div class="aui-address-cell-bd">
            <div class="clearfix">
              <div class="aui-product-shop-img">
                <img src="/static/img/user/user10.png" alt />
              </div>
              <div class="aui-product-shop-text">
                <h3>Versace官方旗舰店</h3>
                <p>精选商家 服务保障</p>
                <p>在售商品2390件</p>
              </div>
            </div>
          </div>
          <div class="aui-address-cell-ft">
            <span>进店看看</span>
          </div>
        </a>
      </div>
      <div class="aui-dri"></div>
      <div class="aui-slide-box">
        <div class="aui-slide-list">
          <ul class="aui-slide-item-list">
            <li class="aui-slide-item-item">
              <a href="#" class="v-link">
                <img class="v-img" src="/static/img/pd/sf-1.jpg" />
                <p
                  class="aui-slide-item-title aui-slide-item-f-els"
                >NIKE耐克男女鞋 ROSHE ONE 男女情侣小黑鞋奥利奥轻便休闲鞋</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥349</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">¥499</span>
                </p>
              </a>
            </li>
            <li class="aui-slide-item-item">
              <a href="#" class="v-link">
                <img class="v-img" src="/static/img/pd/sf-2.jpg" />
                <p class="aui-slide-item-title aui-slide-item-f-els">【防晒神器】let's diet 防晒帽 SPF50PA++</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥99</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">¥198</span>
                </p>
              </a>
            </li>
            <li class="aui-slide-item-item">
              <a href="#" class="v-link">
                <img class="v-img" src="/static/img/pd/sf-3.jpg" />
                <p class="aui-slide-item-title aui-slide-item-f-els">秋冬新款 女士优雅宽松麂皮绒彷皮毛一体中长款仿皮</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥399</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">¥999</span>
                </p>
              </a>
            </li>
            <li class="aui-slide-item-item">
              <a href="#" class="v-link">
                <img class="v-img" src="/static/img/pd/sf-4.jpg" />
                <p
                  class="aui-slide-item-title aui-slide-item-f-els"
                >adidas 阿迪达斯 运动型格 女子短袖T恤 CF3657 CF3658</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥189</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">¥299</span>
                </p>
              </a>
            </li>
            <li class="aui-slide-item-item">
              <a href="#" class="v-link">
                <img class="v-img" src="/static/img/pd/sf-5.jpg" />
                <p class="aui-slide-item-title aui-slide-item-f-els">独立日限定 pop-up 短袖T恤 T-2</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥1349</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">¥4199</span>
                </p>
              </a>
            </li>
            <li class="aui-slide-item-item">
              <a href="#" class="v-link">
                <img class="v-img" src="/static/img/pd/sf-6.jpg" />
                <p class="aui-slide-item-title aui-slide-item-f-els">秋冬纯棉床单套件</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥349</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">¥499</span>
                </p>
              </a>
            </li>
            <li class="aui-slide-item-item">
              <a href="#" class="v-link">
                <img class="v-img" src="/static/img/pd/sf-7.jpg" />
                <p class="aui-slide-item-title aui-slide-item-f-els">法国品牌尚玛可 W-梵诺克·二合一七孔纤维冬被</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥349</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">¥499</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="aui-dri"></div>
      <!-- 商品详情 -->
      <div class="aui-product-pages">
        <div class="aui-product-pages-title">
          <h2>图文详情</h2>
        </div>
        <div class="aui-product-pages-img">
          <img src="/static/img/pd/pd-cp0.jpg" alt />
          <img src="/static/img/pd/pd-cp2.jpg" alt />
          <img src="/static/img/pd/pd-cp3.jpg" alt />
          <img src="/static/img/pd/pd-cp1.jpg" alt />
          <img src="/static/img/pd/pd-cp.jpg" alt />
          <img src="/static/img/pd/pd-cp4.jpg" alt />
        </div>
      </div>

      <!-- 为您推荐 -->
    </div>

    <!-- 详情页的footer -->
    <footer class="aui-footer-product">
      <div class="aui-footer-product-fixed">
        <div class="aui-footer-product-concern-cart">
          <a href="#">
            <span class="aui-f-p-icon">
              <img src="/static/img/icon/icon-kf.png" alt />
            </span>
            <span class="aui-f-p-focus-info">客服</span>
          </a>
          <a href="#">
            <span class="aui-f-p-icon">
              <img src="/static/img/icon/icon-sc.png" alt />
            </span>
            <span class="aui-f-p-focus-info">收藏</span>
          </a>
          <a href="#">
            <span class="aui-f-p-icon">
              <img src="/static/img/icon/icon-dp.png" alt />
            </span>
            <span class="aui-f-p-focus-info">店铺</span>
          </a>
        </div>
        <div class="aui-footer-product-action-list">
          <a href="car.html" class="yellow-color">加入购物车</a>
          <a href="order.html" class="red-color">立即购买</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { Swipe, SwipeItem } from "vue-swipe";
import "vue-swipe/dist/vue-swipe.css";
export default {
  components: { Swipe, SwipeItem },
  data: function() {
    return {
      detailInfo: {}
    };
  },
  created() {
    let id = this.$route.params.id;
    let dataName = this.$route.query.dataName;
    let that = this;
    axios
      .get(`/static/data/${dataName}.json`)
      .then(function(res) {
        if (dataName == "topic") {
          let topicArray = [];
          res.data.forEach(function(item) {
            item.topicInfo.forEach(function(topic) {
              topicArray.push(topic);
            });
          });
          that.detailInfo = topicArray[id - 1];
          console.log(that.detailInfo, "需要的数据");
        } else {
          that.detailInfo = res.data[id - 1];
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
.detail-swipe {
  height: 360px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.detail-swipe img {
  width: 100%;
  height: 360px;
}

.m-button {
  padding: 0 0.24rem;
}

.btn-block {
  text-align: center;
  position: relative;
  border: none;
  pointer-events: auto;
  width: 100%;
  display: block;
  font-size: 1rem;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-top: 0.5rem;
  border-radius: 3px;
}

.btn-primary {
  background-color: #04be02;
  color: #fff;
}

.btn-warning {
  background-color: #ffb400;
  color: #fff;
}
.mask-black {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 999;
}

.m-actionsheet {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #efeff4;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.actionsheet-toggle {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.actionsheet-item {
  display: block;
  position: relative;
  font-size: 0.8rem;
  color: #555;
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
}
.actionsheet-item:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #d9d9d9;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.actionsheet-action {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.8rem;
  color: #555;
  height: 3rem;
  line-height: 3rem;
  background-color: #fff;
  position: absolute;
  top: 10px;
  right: 0;
}
</style>