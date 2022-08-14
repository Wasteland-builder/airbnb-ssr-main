<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
  <button @click="() => router.push({path: '/home'})">首页</button>
  <button @click="() => router.push({path: '/mine'})">个人中心</button>
  <router-link to="/home">首页</router-link>
  <router-link to="/mine">个人中心</router-link>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
