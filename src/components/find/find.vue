<template>
  <div class="find" style="padding-bottom: 45px;">
    <header class="aui-header-default aui-header-fixed aui-header-bg">
      <a href="#" class="aui-header-item">
        <i class="aui-icon aui-icon-code"></i>
      </a>
      <div class="aui-header-center aui-header-center-clear">
        <div class="aui-header-center-logo">
          <div>
            <img src="../../assets/img/user/icon-dis.png" alt />
          </div>
        </div>
      </div>
      <a href="#" class="aui-header-item-icon">
        <i class="aui-icon aui-icon-packet"></i>
        <i class="aui-icon aui-icon-member"></i>
      </a>
    </header>

    <section class="n-tabs">
      <ul class="n-tabContainer">
        <li
          class="n-tabItem"
          v-for="item in FindList"
          :key="item.id"
          :class="{ findNavcurrent: item.id == findIndex }"
          @click="FindSwitch(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>

    <transition enter-active-class="animated fadeIn" leave-active-class="">
      <component :is="change" class="findTopicstyle"></component>
    </transition>
  </div>
</template>

<script>
import list1 from "./findList/list1";
import list2 from "./findList/list2";
import list3 from "./findList/list3";
import list4 from "./findList/list4";
import list5 from "./findList/list5";
import list6 from "./findList/list6";
import list7 from "./findList/list7";
import list8 from "./findList/list8";
import FindList from "./data/findList.json";
export default {
  name: "Find",
  components: {
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7,
    list8,
  },
  data: function () {
    return {
      findIndex: 1,
      FindList: FindList,
    };
  },
  created() {
    console.log(FindList, "发现组件");
  },
  methods: {
    FindSwitch(id) {
      this.findIndex = id;
    },
  },
  computed: {
    change() {
      return "list" + this.findIndex;
    },
  },
};
</script>

<style scoped>
.n-tabs {
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: 41px;
  overflow: hidden;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 0 10px 0px rgba(155, 143, 143, 0.6);
  -webkit-box-shadow: 0 0 10px 0px rgba(155, 143, 143, 0.6);
  -moz-box-shadow: 0 0 10px 0px rgba(155, 143, 143, 0.6);
}
.n-tabs .edge {
  position: fixed;
  top: 0;
  height: 41px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
}
.n-tabs .n-tabContainer {
  -webkit-overflow-scrolling: touch;
  position: relative;
  top: 0;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 16px;
  padding-right: 16px;
  height: 51px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
}
.n-tabs .n-tabContainer .navtab {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.n-tabs .n-tabContainer .n-tabItem {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  display: inline-block;
  height: 41px;
  line-height: 41px;
  text-align: center;
  margin-left: 20px;
}
.n-tabs .n-tabContainer .n-tabItem:first-child {
  margin-left: 0;
}
.findNavcurrent {
  display: inline-block;
  height: 41px;
  border-bottom: 2px solid #e31436;
  color: #e31436;
  font-weight: 800;
}
.findTopicstyle {
  padding-top: 86px;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
