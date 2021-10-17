<template>
  <div>
    <h2>学校名：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template> 


<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      schoolName: "华航",
      address: "廊坊",
    };
  },

  mounted() {
    // this.$bus.$on("hello", (data) => {
    //   console.log("这是Student的数据", data);
    //   alert("这是Student的数据", data);
    // });
    // 接收数据
    this.pid = pubsub.subscribe("hello", (msgName, data) => {
      console.log("有人出发了hello消息，数据为", msgName, data);
    });
  },
  beforeDestroy() {
    // this.$busthis.$off("hello");
    pubsub.unsubscribe(this.pid);
  },
};
</script> 

<style>
div {
  background-color: #bfa;
}
</style>