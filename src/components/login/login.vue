<template>
  <div class="login">
    <!-- header -->
    <div>
      <h1>优品购</h1>
    </div>
    <!-- body -->
    <div>
      <div>
        账号:
        <input type="text" v-model="user.name" />
      </div>
      <div>
        密码:
        <input type="text" v-model="user.pwd" />
      </div>
    </div>
    <!-- footer -->
    <div>
      <input type="button" value="登录" @click="login" />
    </div>
    <div v-show="motai">
      <em>{{tishi}}</em>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cookie from "../../assets/js/cookie";
export default {
  data() {
    return {
      user: {
        name: "",
        pwd: ""
      },
      motai: false,
      tishi: ""
    };
  },
  methods: {
    login() {
      // console.log(this.$store.state);
      // console.log(this.userInfo, "用户的信息");
      if (
        this.user.name == this.userInfo.name &&
        this.user.pwd == this.userInfo.pwd
      ) {
        cookie.setCookie("name", this.userInfo.name);
        cookie.setCookie("pwd", this.userInfo.pwd);
        cookie.setCookie("auth", this.userInfo.auth);
        this.$router.push("/user");
      } else {
        this.motai = true;
        this.tishi = "用户名或密码错误";
        setTimeout(function() {
          this.motai = false;
        }, 1000);
      }
    }
  },
  // computed: mapGetters(["userInfo"])
  computed: {
    ...mapGetters({
      userInfo: "userInfo"
    })
  }
};
</script>

<style>
</style>