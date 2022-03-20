<template>
  <div class="login">
    <h2>login</h2>
    <LoginAccount />
  </div>
</template>

<script lang="ts" setup>
import LoginAccount from './cpns/login-account.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
