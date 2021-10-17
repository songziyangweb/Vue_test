<template>
  <div id="root">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// import MyHeader from "./components/MyHeader";
// import MyList from "./components/MyList";
// import MyFooter from "./components/MyFooter";
import School from "./components/School";
import Student from "./components/Student";

// 引入组件

export default {
  name: "APP",
  components: { School, Student },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {},
  //   利用监视todos，然后当todos放生变化时会在locaStorage中添加数据，用来保存数据
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>