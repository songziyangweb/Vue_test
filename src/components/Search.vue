<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWords"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWords: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新list的数据
      this.$bus.$emit("upDataListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`http://api.github.com/search/users?q=${this.keyWords}`).then(
        (response) => {
          console.log("请求成功了", response.data.items);
          //   this.$bus.$emit("upDataListData", response.data.items);
          // 请求成功后更新list的数据
          this.$bus.$emit("upDataListData", {
            isFirst: false,
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("请求失败了", error.message);
          // 请求失败后更新list的数据
          this.$bus.$emit("upDataListData", {
            isFirst: false,
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>