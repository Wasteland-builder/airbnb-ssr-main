<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { h, getCurrentInstance } from 'vue'
const router = useRouter()
const route = useRoute()
console.log(route.params)

const { proxy }:any = getCurrentInstance()
proxy.$message({
    message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
    ]),
})
</script>

<template>
    首页
    <button @click="() => router.push({path: '/mine', query: {id: 1}})">跳转到个人中心</button>
    <el-button>Default</el-button>
</template>

<style scoped>
</style>
