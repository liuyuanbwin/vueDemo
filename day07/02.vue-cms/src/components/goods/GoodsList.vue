<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥ {{ item.sell_price }}</span>
          <span class="old">¥ {{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        goodslist: [],
        pageIndex: 1
      }
    },
    created() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList() {
        this.$http.get('api/getgoods?pageindex=' + this.pageIndex).then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message
          } else {
            Toast("fuck")
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
  }

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;

    img {
      width: 100%;
    }

    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;

      p {
        margin: 0px;
        padding: 5px;
      }

      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }

        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }

      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
</style>