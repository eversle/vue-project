<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ msg }}</div>
  </div>
</template>
<script setup>
import  { mainStore } from '@/store/index'
const store = mainStore()

let msg = store.msg


</script>
