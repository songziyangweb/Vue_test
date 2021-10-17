<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 把addObj函数传给MyHeader -->
        <MyHeader :addObj="addObj" />
        <!-- 把todos数组传给MyList -->
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          :checkAllDone="checkAllDone"
          :clearAllTodos="clearAllTodos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
import pubsub from "pubsub-js";

// 引入组件

export default {
  name: "APP",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      //   todos从localStorage中获取todos，如果为null则todos为空数组
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addObj(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 修改done值
    changeDone(id) {
      // 第一种方法
      //   for (let todo of this.todos) {
      //     if (todo.id == id) {
      //       todo.done = !todo.done;
      //     }
      //   }
      // 第二种方法
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done;
        }
      });

      //   console.log(id);
    },
    // 删除list
    deleteList(id) {
      // 获取到要删除的id然后从数组中删掉
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },

    // 编辑list
    updataTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          // todo.done = !todo.done;
          todo.title = title;
        }
      });
    },
    // 全选or全不选
    checkAllDone(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 删除已完成的任务
    clearAllTodos() {
      this.todos = this.todos.filter((todo) => {
        return todo.done !== true;
      });
    },
  },
  //   利用监视todos，然后当todos放生变化时会在locaStorage中添加数据，用来保存数据
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // 消息订阅 （接收消息的）
    this.pid1 = pubsub.subscribe("changeDone", (msgName, id) => {
      this.changeDone(id);
    });
    this.pid2 = pubsub.subscribe("deleteList", (msgName, id) => {
      this.deleteList(id);
    });
    this.$bus.$on("updataTodo", (id, title) => {
      this.updataTodo(id, title);
    });
    // this.pid3 = pubsub.subscribe("updataTodo", (msgName, id, title) => {
    //   // 执行回调函数
    //   this.updataTodo(id, title);
    //   console.log(id);
    // });
    // this.pid3 = pubsub.subscribe("updataTodo", this.updataTodo);
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pid1);
    pubsub.unsubscribe(this.pid2);
    pubsub.unsubscribe(this.pid3);
  },
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

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(43, 171, 221);
  margin-right: 5px;
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