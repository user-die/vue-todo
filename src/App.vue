<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script></script>

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
