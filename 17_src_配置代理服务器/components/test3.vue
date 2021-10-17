<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      :appear="true"
      enter-active-class="animate__wobble"
      leave-active-class="animate__backOutLeft"
    >
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="!isShow" key="2">叫爸爸</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
  /* transition 过渡 */
  /* 也可以不加这个而是加在下边 */
}
/* 自己写的动画效果 */
/* .come {
  animation: atguigu 1s linear;
}
.go {
  animation: atguigu 1s reverse;
} */

/* vue的过渡 */
</style>
