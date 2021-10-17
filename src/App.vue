<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
// import axios from "axios";
// 引入组件
import Search from "./components/Search";
import List from "./components/List";

export default {
  name: "APP",
  components: { Search, List },
};
</script>

<style>
</style>