<template>
  <div class="fenlei">
    <section class="aui-scroll-contents">
      <div class="aui-scroll-box">
        <FeileiNav :NavInfo="navArray"></FeileiNav>
        <FeileiTopic></FeileiTopic>
      </div>
    </section>
  </div>
</template>

<script>
import FeileiInfo from "./feileiItem.js";
import FeileiNav from "./feileiNav";
import FeileiTopic from "./feileiTopic";
export default {
  name: "Fenlei",
  components: { FeileiNav, FeileiTopic },
  data: function() {
    return {
      navArray: FeileiInfo.feileiItem
    };
  }
};
</script>

<style></style>
