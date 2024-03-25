<template>
  <div class="text">
    <h1>Hi,👋</h1>
    <p>
      我是 Krau ,<br /><br />我也不知道我当年为什么会买了这么个域名, 并且最近把它年限续期满了...
      <br />
      <br />所以为了物尽其用就做了个小页面来展示些和博客不一样的东西 ( <br /><br />
      <var-link type="primary" underline="none" to="/home">
        <var-button text size="large" block>来看看吧→</var-button></var-link
      >
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  height: 50vh;
}
</style>
