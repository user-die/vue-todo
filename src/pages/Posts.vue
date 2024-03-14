<template>
  <navbar />
  <transition-group name="todoItem">
    <post-item v-for="post in posts" :post="post" />
  </transition-group>
  <div ref="observer"></div>
</template>

<script>
import Navbar from "@/components/navbar";
import PostItem from "@/components/postItem.vue";
import axios from "axios";

export default {
  components: {
    Navbar,
    PostItem,
  },
  data() {
    return {
      posts: [],
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
    /*
    changePage(pageNumber) {
      this.page = pageNumber;
      this.getPosts();
    },
    */

    async getPosts() {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.posts = response.data;
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },

    async loadMorePosts() {
      try {
        setTimeout(async () => {
          this.page += 1;
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.posts = [...this.posts, ...response.data];
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.$refs.observer);
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 3px;
  border: none;
}
.current-page {
  border-radius: 3px;
  background-color: teal;
}

.todoItem-enter-active,
.todoItem-leave-active {
  transition: opacity 0.3s;
}
.todoItem-enter-from,
.todoItem-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
