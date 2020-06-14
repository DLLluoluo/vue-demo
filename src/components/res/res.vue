<template>
  <div class="res">
    <!-- header -->
    <div>
      <h1>优品购</h1>
    </div>
    <!-- body -->
    <div>
      <div>
        账号:
        <input type="text" v-model="list.userName" />
      </div>
      <div>
        密码:
        <input type="text" v-model="list.passWord" />
      </div>
    </div>
    <!-- footer -->
    <div>
      <input type="button" value="登录" @click="reg" />
    </div>
    <div class="reg_motai" v-show="motai">
      <em>{{tishi}}</em>
    </div>
  </div>
</template>

<script>
import user from "../../assets/js/user";
import cookie from "../../assets/js/cookie";
// import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      list: {
        userName: "",
        passWord: ""
      },
      motai: false,
      tishi: ""
    };
  },
  methods: {
    reg() {
      if (this.list.userName != "" && this.list.passWord != "") {
        user.name = this.list.userName;
        user.pwd = this.list.passWord;
        // console.log(this.$store.dispatch("updateUser", user), "reg组件");
        this.$store.dispatch("updateUser", user);
        this.$router.push("/login");
      } else {
        this.motai = true;
        this.tishi = "账户名或密码格式错误";
        setTimeout(function() {
          this.motai = false;
        }, 1000);
      }
    }
  }
};
</script>

<style>
</style>