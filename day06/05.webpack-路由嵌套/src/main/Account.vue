<template>
  <div>
    <h1>这是账号 vue</h1>

    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  /* 普通的style 标签, 只支持普通的样式,如果要启用sass 或less 需要为style 元素设置 lang属性 */
  body {
    div {
      font-style: italic;
    }
  }
</style>