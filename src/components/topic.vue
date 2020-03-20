<template>
  <div class="aui-list-content">
    <div class="aui-list-item">
      <!-- topic图片 -->
      <div class="aui-list-item-img">
        <img :src="topic_data1.background" alt="" />
      </div>
      <div class="aui-slide-box">
        <div class="aui-slide-list">
          <ul class="aui-slide-item-list">
            <!-- topic部分 -->
            <li class="aui-slide-item-item">
              <a href="ui-product.html" class="v-link">
                <img class="v-img" src="../assets/img/pd/pd-zf-5.jpg" />
                <p class="aui-slide-item-title aui-slide-item-f-els">
                  茵曼2017秋装新款小清新文艺圆领长袖条纹针织衫女套
                </p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">¥249</span
                  >&nbsp;&nbsp;<span class="aui-slide-item-mrk">¥499</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      topic_data1: {}
    };
  },
  created() {
    let that = this;
    axios
      .get("./static/data/topic.json")
      .then(function(res) {
        // console.log(res.data);
        that.topic_data1 = res.data;
        console.log(that);
        console.log(that.topic_data1.background, "数据");
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {},
  components: {}
};
</script>

<style></style>
