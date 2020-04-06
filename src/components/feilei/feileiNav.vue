<template>
  <div>
    <ul class="aui-scroll-nav">
      <li
        class="aui-scroll-item"
        v-for="(item, index) in NavInfo"
        :key="index"
        :class="{ feileiNavActive: index == NavItemActive }"
        @click="returnIdAddress(item.id, index)"
      >
        <div class="aui-scroll-item-icon"></div>
        <div class="aui-scroll-item-text">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      NavItemActive: 0
    };
  },
  props: {
    NavInfo: Array
  },
  methods: {
    returnIdAddress(id, index) {
      //使元素滚动到浏览器窗口的可见区域 ——> scrollIntoView()
      var element = document.getElementById(id);
      element.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
      this.NavItemActive = index;
    }
  }
};
</script>

<style scoped>
.feileiNavActive {
  background: #fff;
}

.aui-scroll-nav .feileiNavActive .aui-scroll-item-text {
  color: #fc6248;
}
</style>
