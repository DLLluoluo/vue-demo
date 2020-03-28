<template>
  <div class="aui-scroll-nav">
    <a href="#" class="aui-scroll-item" v-for="item in NavInfo" :key="item.id">
      <div class="aui-scroll-item-icon"></div>
      <div class="aui-scroll-item-text">{{item.name}}</div>
    </a>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    NavInfo: Array
  }
};
</script>

<style>
</style>