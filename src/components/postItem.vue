<template>
  <div class="item">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin-top: 40px;
  border: solid 3px #854343;
}
</style>
