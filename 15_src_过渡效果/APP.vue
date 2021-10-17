<template>
  <div>
    <Test></Test>
    <Test2></Test2>
  </div>
</template>

<script>
import Test from "./components/test";
import Test2 from "./components/test2";

// 引入组件

export default {
  name: "APP",
  components: { Test, Test2 },
};
</script>

<style>
</style>