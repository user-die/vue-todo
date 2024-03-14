<template>
  <div class="list-item" v-if="type === task.type || type === 'all'">
    <p :class="{ lh: task.type === 'complete' }">
      {{ task.text }}
    </p>
    <button
      style="background-color: #0cd10c"
      @click="$emit('toggleComplete', task)"
    >
      <BIconCheck />
    </button>
    <button style="background-color: red" @click="$emit('remove', task)">
      <BIconTrash />
    </button>
    <button style="background-color: yellow" @click="$emit('rename', task)">
      <BIconPencil />
    </button>
  </div>
</template>

<script>
import { BIconTrash, BIconCheck, BIconPencil } from "bootstrap-icons-vue";

export default {
  components: {
    BIconTrash,
    BIconCheck,
    BIconPencil,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  border: #167979 solid 3px;
  border-radius: 5px;
  display: flex;
  gap: 4px;
  width: 1000px;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 5px;

  .lh {
    text-decoration: line-through;
  }

  p {
    width: 75%;
    flex-grow: 1;
    overflow: auto;
    overflow-wrap: break-word;
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 5px;
  }
}
</style>
