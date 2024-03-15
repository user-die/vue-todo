<template>
  <div class="task-list">
    <div>
      <h2>Список задач</h2>
      <transition-group name="taskItem">
        <task-item
          v-for="task in todoList"
          :task="task"
          :type="state.type"
          :key="task.id"
          @toggleComplete="$emit('toggleComplete', task)"
          @remove="$emit('remove', task)"
          @rename="$emit('rename', task)"
        ></task-item>
      </transition-group>
    </div>

    <div>
      <button @click="setAll">Все задачи</button>
      <button @click="setComplete">Выполненные</button>
      <button @click="setUncomplete">Незавершённые</button>
    </div>
  </div>
</template>

<script>
import TaskItem from "@/components/taskItem";
export default {
  components: { TaskItem },
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      state: {
        type: "all",
      },
    };
  },
  methods: {
    setAll() {
      this.state.type = "all";
    },
    setComplete() {
      this.state.type = "complete";
    },
    setUncomplete() {
      this.state.type = "uncomplete";
    },
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  flex-grow: 1;
  width: 1000px;

  h2 {
    text-align: center;
  }

  button {
    color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #7b7bff;
    margin-right: 10px;
  }
}

.taskItem-enter-active,
.taskItem-leave-active {
  transition: opacity 0.3s;
}
.taskItem-enter-from,
.taskItem-leave-to {
  opacity: 0;
}
</style>
