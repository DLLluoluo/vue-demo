<template>
  <swipe class="my-swipe">
    <swipe-item>
      <img src="../assets/img/banner/banner.jpg" alt="123" />
    </swipe-item>
    <swipe-item>
      <img src="../assets/img/banner/banner1.jpg" alt="123" />
    </swipe-item>
    <swipe-item>
      <img src="../assets/img/banner/banner2.jpg" alt="123" />
    </swipe-item>
    <swipe-item>
      <img src="../assets/img/banner/banner3.jpg" alt="123" />
    </swipe-item>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem } from "vue-swipe";
import "vue-swipe/dist/vue-swipe.css";
export default {
  components: {
    Swipe,
    SwipeItem
  }
};
</script>

<style>
.my-swipe {
  height: 180px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.my-swipe img {
  width: 100%;
  height: 180px;
}
</style>
