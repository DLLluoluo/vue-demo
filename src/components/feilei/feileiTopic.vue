<template>
  <div class="aui-scroll-content">
    <div
      class="aui-scroll-content-item"
      v-for="(topic, index) in topicArray"
      :key="index"
    >
      <h2 class="aui-scroll-content-title" :id="topic.topic_id">
        {{ topic.topic_title }}
      </h2>
      <section class="aui-grid-content">
        <ul class="aui-grid-row aui-grid-row-clear">
          <li
            class="aui-grid-row-item"
            v-for="(item, index) in topic.topic_item"
            :key="index"
          >
            <i class="aui-icon-large aui-icon-sign"
              ><img :src="item.topic_img" alt=""
            /></i>
            <p class="aui-grid-row-label">{{ item.topic_name }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      topicArray: []
    };
  },
  created() {
    let that = this;
    axios
      .get("./static/data/fenleiTopic.json")
      .then(function(res) {
        that.topicArray = res.data;
        console.log(that.topicArray);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
