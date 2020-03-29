<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="isShow"></Footer>
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
      isShow: "isShow"
    })
  },
  // computed: {
  //   isShow() {
  //     return this.$store.getters.isShow;
  //   }
  // },
  watch: {
    $route(to, from) {
      if (to.name == "Car") {
        this.hideFooter();
        // this.$store.dispatch('hideFooter')
      } else {
        this.showFooter();
        // this.$store.dispatch('showFooter')
      }
    }
  },
  methods: {
    ...mapActions({
      hideFooter: "hideFooter",
      showFooter: "showFooter"
    })
  },
  created() {
    // console.log($route);
  }
};
</script>

<style></style>
