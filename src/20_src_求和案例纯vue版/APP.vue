<template>
  <Count></Count>
</template>

<script>
// import axios from "axios";
// 引入组件
import Count from "./components/Count";

export default {
  name: "APP",

  components: { Count },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>