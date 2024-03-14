<template>
  <task-form @create="addTask" />
  <task-list
    :todoList="todoList"
    @remove="removeTask"
    @toggleComplete="toggleComplete"
    @rename="renameTask"
  />
</template>

<script>
import TaskList from "@/components/taskList";
import TaskForm from "@/components/form";

export default {
  components: {
    TaskList,
    TaskForm,
  },
  data() {
    return {
      todoList: [
        { id: 1, text: "Что-то сделать", type: "uncomplete" },
        { id: 2, text: "Ничего не сделать", type: "uncomplete" },
        { id: 3, text: "Всё сделать", type: "uncomplete" },
      ],
    };
  },
  methods: {
    addTask(task) {
      this.todoList.push(task);
    },
    removeTask(task) {
      this.todoList = this.todoList.filter((el) => el.id !== task.id);
    },
    toggleComplete(task) {
      const toggleTask = this.todoList.find((el) => el.id == task.id);
      toggleTask.type =
        toggleTask.type === "complete" ? "uncomplete" : "complete";
    },
    renameTask(task) {
      const renameTask = this.todoList.find((el) => el.id == task.id);
      renameTask.text = prompt("Введите новое имя для задачи", renameTask.text);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  color: white;
  background-color: #09161c;
  height: 100%;
}

#app {
  height: 85%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
