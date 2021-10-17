<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @change="handleDone(todoObj.id)"
      />
      <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleId(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todoObj", "changeDone", "deleteList"],
  methods: {
    //   勾选Or取消勾选
    handleDone(id) {
      // 将id传给APP
      this.changeDone(id);
    },
    // 删除list
    handleId(id) {
      if (confirm("确认删除吗？")) {
        // 将id传给APP
        this.deleteList(id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>