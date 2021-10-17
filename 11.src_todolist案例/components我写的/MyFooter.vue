<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
      <input type="checkbox" v-model="isAll2" />
    </label>
    <span>
      <span>已完成{{ doneTotle }}</span> / 全部{{ totle }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllDone", "clearAllTodos"],
  computed: {
    // 一共有几个任务
    totle() {
      return this.todos.length;
    },
    // 已完成的任务 todos任务中的 done值为true的次数
    doneTotle() {
      // 第一种 filter方法
      // // 找出done为true的值
      // let x = this.todos.filter((todo) => {
      //   return todo.done === true;
      // });
      // return x.length;

      // 第二种 reduce 方法
      // reduce()有两个参数，第一个是一个函数，第二个是从第几位开始遍历 数组中有几个元素执行几次函数
      // reduce作用
      // 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，
      // 接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。
      const x = this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
      return x;
    },
    isAll() {
      return this.doneTotle === this.totle && this.totle > 0;
    },
    isAll2: {
      get() {
        // console.log("getter");
        return this.doneTotle === this.totle && this.totle > 0;
      },
      set(value) {
        // console.log("@", value);
        this.checkAllDone(value);
      },
    },
  },
  methods: {
    checkAll(e) {
      // console.log(e.target.checked);
      // 将done值传递给APP
      this.checkAllDone(e.target.checked);
    },
    clearAll() {
      this.clearAllTodos();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>