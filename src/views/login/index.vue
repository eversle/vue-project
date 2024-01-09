<template>
  <div>
    {{ message }}
    <button @click="loginMethod">登录</button>
  </div>
</template>
<script setup>
const message = '欢迎登录'
const loginMethod = () => {
  debugger
  console.log('111')
}
</script>
