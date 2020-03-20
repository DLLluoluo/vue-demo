<template>
  <div class="home">
    <Slider></Slider>
    <Meiqian></Meiqian>
    <Topic></Topic>
    <Recommend></Recommend>
  </div>
</template>

<script>
import Slider from "./slider";
import Meiqian from "./meiqian";
import Topic from "./topic";
import Recommend from "./recommend";
export default {
  components: { Slider, Meiqian, Topic, Recommend }
};
</script>

<style></style>
