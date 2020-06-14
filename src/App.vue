<template>
  <div id="app">
    <loading v-show="false"></loading>
    <Header v-show="isHeaderShow"></Header>
    <router-view></router-view>
    <Footer v-show="isFooterShow"></Footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Footer from "./components/footer";
import Header from "./components/header";
export default {
  name: "App",
  components: { Footer, Header },
  computed: {
    // ...mapState({
    //   isShow: state => state.footerStatus
    // })
    ...mapGetters({
      isFooterShow: "isFooterShow",
      isHeaderShow: "isHeaderShow"
    })
  },
  created() {
    this.watchRoute(this.$route.path);
  },
  watch: {
    $route(to, from) {
      this.watchRoute(to.path);
    }
  },
  methods: {
    ...mapActions({
      hideFooter: "hideFooter",
      showFooter: "showFooter",
      hideHeader: "hideHeader",
      showHeader: "showHeader"
    }),
    watchRoute(path) {
      if (/find|car|user|login|res|/.test(path)) {
        this.hideHeader();
      } else {
        this.showHeader();
      }

      if (/home|find|fenlei|car|user/.test(path)) {
        this.showFooter();
      } else {
        this.hideFooter();
      }
    }
  }
};
</script>

<style></style>
