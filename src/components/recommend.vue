<template>
  <div>
    <div class="aui-recommend">
      <img src="static/img/bg/icon-tj1.jpg" alt />
    </div>
    <section class="aui-list-product">
      <div class="aui-list-product-box">
        <router-link
          :to="'/detail/' +  item.id + '?dataName=' + dataName"
          class="aui-list-product-item"
          v-for="(item,key) in listArray"
          :key="key"
        >
          <div class="aui-list-product-item-img">
            <img :src="item.img" alt />
          </div>
          <div class="aui-list-product-item-text">
            <h3>{{item.title}}</h3>
            <div class="aui-list-product-mes-box">
              <div>
                <span class="aui-list-product-item-price">{{item.xianjia}}</span>
                <span class="aui-list-product-item-del-price">{{item.yuanjia}}</span>
              </div>
              <div class="aui-comment">{{item.comment}}</div>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      listArray: [],
      dataName: "recommend"
    };
  },
  created() {
    let that = this;
    axios
      .get("./static/data/recommend.json")
      .then(function(res) {
        that.listArray = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
