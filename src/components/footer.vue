<template>
  <div class="footer">
    <footer class="aui-footer-default aui-footer-fixed">
      <router-link to="/home" class="aui-footer-item" active-class="aui-footer-active">
        <span class="aui-footer-item-icon aui-icon aui-footer-icon-home"></span>
        <span class="aui-footer-item-text">首页</span>
      </router-link>
      <router-link to="/fenlei" class="aui-footer-item" active-class="aui-footer-active">
        <span class="aui-footer-item-icon aui-icon aui-footer-icon-class"></span>
        <span class="aui-footer-item-text">分类</span>
      </router-link>
      <router-link to="/find" class="aui-footer-item" active-class="aui-footer-active">
        <span class="aui-footer-item-icon aui-icon aui-footer-icon-find"></span>
        <span class="aui-footer-item-text">发现</span>
      </router-link>
      <router-link to="/car" class="aui-footer-item" active-class="aui-footer-active">
        <span class="aui-footer-item-icon aui-icon aui-footer-icon-car"></span>
        <span class="aui-footer-item-text">购物车</span>
      </router-link>
      <router-link to="/user" class="aui-footer-item" active-class="aui-footer-active">
        <span class="aui-footer-item-icon aui-icon aui-footer-icon-me"></span>
        <span class="aui-footer-item-text">我的</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  height: 45px;
}
</style>