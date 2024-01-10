<!--
 * @Author: eversle everslevivo@gmail.com
 * @Date: 2024-01-10 09:23:56
 * @LastEditors: eversle everslevivo@gmail.com
 * @LastEditTime: 2024-01-10 09:39:41
 * @FilePath: \vue-project\src\views\error\403.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="box">
      <div class="koi-top" id="banner"></div>
      <div class="koi-bottom">
        <div class="koi-text1">403</div>
        <div class="koi-text2">对不起，您没有权限访问👻</div>
        <br />
        <el-button type="primary" plain @click="handleHomePage">返回首页</el-button>
      </div>
    </div>
  </template>
  <script setup>
import { useRouter } from "vue-router";

// 路由跳转
const router = useRouter();
const handleHomePage = () => {
  router.push({ path: HOME_URL });
};
</script>
<style lang="scss" scoped>
#box {
  overflow: hidden;
}
#banner {
  margin-top: 60px;
  background: url("@/assets/images/error/403.png") no-repeat;
  background-size: 100%;
}
.koi-top {
  width: 600px;
  height: 500px;
  margin: 0 auto;
}
.koi-bottom {
  height: 300px;
  margin-top: 20px;
  text-align: center;
}
.koi-text1 {
  font-size: 46px;
  font-weight: bold;
}
.koi-text2 {
  padding-top: 30px;
  font-family: YouYuan;
  font-size: 24px;
  font-weight: 600;
}
</style>
