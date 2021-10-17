<template>
  <div class="demo">
    <h2>学生名：{{ Name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="snedStudentName">点我把Name传给School组件</button>
  </div>
</template> 


<script>
export default {
  // 直接暴露
  name: "Student",
  data() {
    return {
      Name: "宋子洋",
      age: "21",
    };
  },
  methods: {
    snedStudentName() {
      this.$bus.$emit("hello", this.Name);
    },
  },
};
</script> 

<style>
.demo {
  background-color: pink;
}
</style>