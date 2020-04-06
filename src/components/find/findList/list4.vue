<template>
  <div>
    <div v-for="(item,index) in findListInfo" :key="index">
      <section class="aui-card-content">
        <div>
          <div class="aui-card-box">
            <div class="aui-card-box-user">
              <img :src="item.dianImg" />
            </div>
            <div class="aui-card-box-name">
              <h2 class="aui-card-box-name">{{item.name}}</h2>
              <span class="aui-card-box-btn">{{item.guanzhu}}</span>
            </div>
            <div class="aui-card-box-time">{{item.date}}</div>
          </div>
          <div class="aui-card-media">
            <div class="aui-card-media-inner" style="padding-right:0px;">
              <div class="aui-card-media-text">
                <p>{{item.comments}}</p>
              </div>
            </div>
          </div>
          <div class="aui-card-media-item">
            <div v-for="(Img,index) in item.imgArray" :key="index">
              <img :src="Img.findTopicImg" />
            </div>
          </div>
          <div class="aui-card-media-describe">
            <span>{{item.viewNum}}</span>
          </div>
        </div>
      </section>
      <div class="aui-dri"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Axios from "axios";
export default {
  data: function() {
    return {
      findListInfo: []
    };
  },
  created() {
    let that = this;
    axios
      .get("./static/data/findTopic/findTopic4.json")
      .then(function(res) {
        that.findListInfo = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>