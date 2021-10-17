<template>
  <ul class="todo-main">
    <!-- 每一个小列表 -->
    <!-- :todoObj 加：=后边才能写表达式，=后边写的是表达式 -->
    <!-- :changeDone="changeDone" 是传给MyItem儿子的 -->
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todoObj="todoObj"
      :changeDone="changeDone"
      :deleteList="deleteList"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem";
export default {
  name: "MyList",

  components: {
    MyItem,
  },
  props: ["todos", "changeDone", "deleteList"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
