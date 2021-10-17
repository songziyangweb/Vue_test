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
  /* transition 过渡 */
  /* 也可以不加这个而是加在下边 */

  transition: 0.5s linear;
}
/* 自己写的动画效果 */
/* .come {
  animation: atguigu 1s linear;
}
.go {
  animation: atguigu 1s reverse;
} */

/* vue的过渡 */

/* 进入的起点 */
.hello-enter {
  /* animation: atguigu 0.5s linear; */
  /* 转换 翻译 */
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  /* animation: atguigu 0.5s linear reverse; */
  transform: translateX(0);
}

/* 动画效果 */
/* 整个进入过程中 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 离开的起点=进入的终点 */
.hello-leave {
  transform: translateX(0);
}

/* 离开的终点=进入的起点 */
.hello-leave-to {
  transform: translateX(-100%);
}

/* 精简一下 */

/* * 动画效果 */
/* 整个进入过程中 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的起点 */
.hello-enter,
.hello-leave-to {
  /* animation: atguigu 0.5s linear; */
  /* 转换 翻译 */
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to,
.hello-leave {
  /* animation: atguigu 0.5s linear reverse; */
  transform: translateX(0);
}
</style>
