<template>
  <div class="Category">
    <h3>{{ title }}分类</h3>
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.Category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
  /* margin-left: 100px; */
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>