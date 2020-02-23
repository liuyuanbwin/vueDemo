<template>
  <div>
    <mt-swipe>
      <!-- 父组件传值给子组件轮播图数组 -->
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img" alt="" :class="{full:isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    props: ["lunbotulist", "isfull"],
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe-item {
    text-align: center;
    // &:nth-child(1) {
    //   background-color: red;
    // }

    // &:nth-child(2) {
    //   background-color: yellowgreen;
    // }

    // &:nth-child(3) {
    //   background-color: blueviolet;
    // }

    img {
      height: 100%;
    }
  }

  .full {
    width: 100%;
  }
</style>