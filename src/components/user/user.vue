<template>
  <div class="user">
    <header class="aui-header-default aui-header-fixed aui-header-bg">
      <a href="#" class="aui-header-item">
        <!--<i class="aui-icon aui-icon-back-white" id="scrollSearchI" style="display:block"></i>-->
        <div id="scrollSearchDiv">
          <img src="themes/img/user/head-3.jpg" alt />
        </div>
      </a>
      <div class="aui-header-center aui-header-center-clear">
        <div class></div>
      </div>
      <a href="#" class="aui-header-item-icon">
        <i class="aui-icon aui-icon-Set"></i>
      </a>
    </header>

    <section class="aui-me-content">
      <div class="aui-me-content-box">
        <div class="aui-me-content-info"></div>
        <div class="aui-me-content-list">
          <div class="aui-me-content-item">
            <div class="aui-me-content-item-head">
              <div class="aui-me-content-item-img">
                <img src="static/img/user/head-3.jpg" alt />
              </div>
              <div class="aui-me-content-item-title">{{userInfo.name}}</div>
            </div>
            <div class="aui-me-content-item-text">
              <a href="#">
                <span>98</span>
                <span>收藏</span>
              </a>
              <a href="#">
                <span>78</span>
                <span>关注</span>
              </a>
              <a href="#">
                <span>99</span>
                <span>足迹</span>
              </a>
              <a href="#">
                <span>65</span>
                <span>分享</span>
              </a>
            </div>
          </div>
          <div class="aui-me-content-card">
            <h3>
              <i class="aui-icon aui-card-me"></i>铂金会员
            </h3>
            <a href="#">点击查看特权</a>
          </div>
        </div>
      </div>

      <!-- 我的订单 -->
      <div class="aui-me-content-order">
        <a href="#" class="aui-well aui-fl-arrow">
          <div class="aui-well-bd">我的订单</div>
          <div class="aui-well-ft">查看全部</div>
        </a>
      </div>

      <section class="aui-grid-content">
        <div class="aui-grid-row">
          <a href="my-order.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-wallet"></i>
            <p class="aui-grid-row-label">待付款</p>
          </a>
          <a href="my-order.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-goods"></i>
            <p class="aui-grid-row-label">待发货</p>
          </a>
          <a href="my-order.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-receipt"></i>
            <p class="aui-grid-row-label">待收货</p>
          </a>
          <a href="my-order.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-evaluate"></i>
            <p class="aui-grid-row-label">待评价</p>
          </a>
          <a href="my-order.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-refund"></i>
            <p class="aui-grid-row-label">退货退款</p>
          </a>
        </div>
        <div class="aui-dri"></div>
        <div class="aui-me-content-order">
          <a href="#" class="aui-well aui-fl-arrow">
            <div class="aui-well-bd">我的服务</div>
            <div class="aui-well-ft">查看全部</div>
          </a>
        </div>

        <!-- 我的服务 -->
        <div class="aui-grid-row">
          <a href="my-invitation.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-invitation"></i>
            <p class="aui-grid-row-label">邀请好友</p>
          </a>
          <a href="my-sign.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-signs"></i>
            <p class="aui-grid-row-label">签到领币</p>
          </a>
          <a href="my-coupon.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-coupon"></i>
            <p class="aui-grid-row-label">优惠券</p>
          </a>
          <a href="my-purchase.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-fight"></i>
            <p class="aui-grid-row-label">我的拼团</p>
          </a>
          <a href="my-hands.html" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-recommend"></i>
            <p class="aui-grid-row-label">商品推手</p>
          </a>
          <a href="#" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-recharge"></i>
            <p class="aui-grid-row-label">充值中心</p>
          </a>
          <a href="#" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-help"></i>
            <p class="aui-grid-row-label">帮助中心</p>
          </a>
          <a href="#" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-problem"></i>
            <p class="aui-grid-row-label">我的问答</p>
          </a>
          <a href="#" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-evaluates"></i>
            <p class="aui-grid-row-label">我的评价</p>
          </a>
          <a href="#" class="aui-grid-row-item">
            <i class="aui-icon-large aui-icon-large-sm aui-icon-shares"></i>
            <p class="aui-grid-row-label">我的分享</p>
          </a>
        </div>

        <!-- 特色推荐 -->
        <Recommend></Recommend>
      </section>
    </section>
  </div>
</template>

<script>
import Recommend from "../recommend.vue";
import store from "./../../store/index";
import { mapGetters } from "vuex";
export default {
  name: "User",
  beforeRouteEnter(to, from, next) {
    if (store.state.user.auth) {
      next();
    } else {
      next("/login");
    }
  },
  components: {
    Recommend
  },
  mounted() {
    console.log(store.state, "状态仓库");
  },
  computed: {
    ...mapGetters({
      userInfo: "userInfo"
    })
  }
};
</script>

<style>
</style>