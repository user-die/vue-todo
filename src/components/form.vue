<template>
  <form class="form" action="" @submit.prevent>
    <h1>Добавление задачи</h1>
    <div>
      <input
        v-model.trim="task.text"
        type="text"
        placeholder="Введите задачу"
      />
      <button @click="addTask">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        id: "",
        text: "",
      },
    };
  },
  methods: {
    addTask() {
      this.task.id = Date.now();
      this.$emit("create", this.task);
      this.task = {
        id: "",
        text: "",
        type: "uncomplete",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin-top: 50px;

  width: 500px;

  div {
    display: flex;
    margin-top: 18px;
    gap: 10px;
  }

  h1 {
    text-align: center;
  }

  input {
    color: white;
    border: #167979 solid 3px;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
    flex-grow: 1;
    background-color: #09161c;
  }

  button {
    padding: 5px;
    border: #167979 solid 3px;
    border-radius: 5px;
  }
}
</style>
