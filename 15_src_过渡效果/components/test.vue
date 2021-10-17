<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" :appear="true">
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
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
}
/* 自己写的动画效果 */
.come {
  animation: atguigu 1s linear;
}
.go {
  animation: atguigu 1s reverse;
}
/* vue的动画 */
.hello-enter-active {
  animation: atguigu 0.5s linear;
}
.hello-leave-active {
  animation: atguigu 0.5s linear reverse;
}

/* 定义一个关键帧 + 动画名称*/
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
