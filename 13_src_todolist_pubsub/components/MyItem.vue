<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @change="handleDone(todoObj.id)"
      />
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <!-- 输入框 -->
      <input
        type="text"
        v-show="todoObj.isEdit"
        @blur="handleBlur(todoObj, $event)"
        @keyup.enter="handleBlur(todoObj, $event)"
        ref="handlefocus"
      />
    </label>
    <button class="btn btn-danger" @click="handleId(todoObj.id)">删除</button>
    <button
      class="btn btn-edit"
      v-show="!todoObj.isEdit"
      @click="handleEdit(todoObj)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todoObj"],
  methods: {
    //   勾选Or取消勾选
    handleDone(id) {
      // 将id传给APP
      // this.changeDone(id);
      // 消息发送
      pubsub.publish("changeDone", id);
    },
    // 删除list
    handleId(id) {
      if (confirm("确认删除吗？")) {
        // 将id传给APP
        // this.deleteList(id);

        // 消息发送
        pubsub.publish("deleteList", id);
      }
    },
    // 编辑
    handleEdit(todoObj) {
      // 当再次编辑时不用追加isEdit属性
      if (Object.prototype.hasOwnProperty.call(todoObj, "isEdit")) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, "isEdit", true);
      }

      this.$nextTick(() => {
        this.$refs.handlefocus.focus();
      });
      // pubsub.publish("handleEdit", id);
    },
    // 失去焦点或者摁回车键时回调，（真正执行逻辑）
    handleBlur(todoObj, e) {
      todoObj.isEdit = false;
      if (!e.target.value) {
        return alert("输入框不能为空");
      } else {
        this.$bus.$emit("updataTodo", todoObj.id, e.target.value);
      }

      // console.log("handleEdit", todoObj.id, e.target.value);
      // pubsub.publish("updataTodo", todoObj.id, e.target.value);
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