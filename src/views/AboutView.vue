<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ msg }}</div>
  </div>
</template>
<script setup>
// import  { useStore } from 'pinia'
const store = useStore()

let msg = store.msg


</script>
