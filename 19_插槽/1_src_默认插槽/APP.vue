<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>

    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>

    <Category title="电影" :listData="films">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
// import axios from "axios";
// 引入组件
import Category from "./components/Category";

export default {
  name: "APP",
  data() {
    return {
      foods: ["火锅", "牛杂面", "麻辣烫", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《我叫马牛逼》", "《速度与激情》"],
    };
  },
  components: { Category },
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