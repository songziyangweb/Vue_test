<template>
  <div>
    <h2>学校名：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template> 


<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "华航",
      address: "廊坊",
    };
  },

  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("这是Student的数据", data);
      alert("这是Student的数据", data);
    });
  },
  beforeDestroy() {
    this.$busthis.$off("hello");
  },
};
</script> 

<style>
div {
  background-color: #bfa;
}
</style>