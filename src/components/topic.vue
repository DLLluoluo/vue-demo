<template>
  <div class="aui-list-content">
    <div class="aui-list-item">
      <!-- topic图片 -->
      <div class="aui-list-item-img">
        <img :src="topicInfo.background" alt />
      </div>
      <div class="aui-slide-box">
        <div class="aui-slide-list">
          <ul class="aui-slide-item-list">
            <!-- topic部分 -->
            <li class="aui-slide-item-item" v-for="(topic,key) in topicInfo.topicInfo" :key="key">
              <router-link :to="'./detail/' + topic.id + '?dataName=' + dataName" class="v-link">
                <img class="v-img" :src="topic.img" />
                <p class="aui-slide-item-title aui-slide-item-f-els">{{topic.title}}</p>
                <p class="aui-slide-item-info">
                  <span class="aui-slide-item-price">{{topic.xianjia}}</span>&nbsp;&nbsp;
                  <span class="aui-slide-item-mrk">{{topic.yuanjia}}</span>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    topicInfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    dataName: String
  },
  created() {
    console.log(this.topicInfo);
  },
  methods: {},
  components: {}
};
</script>

<style></style>
