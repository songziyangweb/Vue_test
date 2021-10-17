<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      // 校验输入内容 .trim()是去掉前后的空格
      if (!this.title.trim()) {
        return alert("输入内容不能为空");
      }
      // 创造一个对象，把对象传给todos数组
      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false,
      };
      //   将对象传给APP的todos
      this.addObj(todoObj);
      //   清空搜索框
      this.title = "";
    },
  },
  // 接收APP传来的数据，然后addObj出现在vc身上了就
  props: ["addObj"],
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>