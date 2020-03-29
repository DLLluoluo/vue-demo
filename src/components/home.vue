<template>
  <div class="home">
    <Slider></Slider>
    <Meiqian></Meiqian>
    <Topic
      v-for="(topic, key) in topic_Array"
      :key="key"
      :topicInfo="topic"
      :dataName="'topic'"
    ></Topic>
    <Recommend></Recommend>
  </div>
</template>

<script>
import axios from "axios";
import Slider from "./slider";
import Meiqian from "./meiqian";
import Topic from "./topic";
import Recommend from "./recommend";
export default {
  components: { Slider, Meiqian, Topic, Recommend },
  data: function() {
    return {
      topic_Array: []
    };
  },
  created() {
    let that = this;
    axios
      .get("./static/data/topic.json")
      .then(function(res) {
        // console.log(res.data);
        that.topic_Array = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
