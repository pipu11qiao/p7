<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  <br />
  <button @click="count++">{{ count }}</button>
  <br />
  <!-- <router-link to="/a">-----A------</router-link>
  <br />
  <router-link to="/b">-----B------</router-link>
  <br />
  <router-link to="/c">-----C------</router-link>
  <br /> -->
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <!-- <router-view></router-view> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
