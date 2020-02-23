<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotulist="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->

    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>¥{{ goodsinfo.market_price }}</del>
            &nbsp;&nbsp;销售价:
            <span class="now_price">¥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>购买数量:
            <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
            <!-- 涉及到了子组件向父组件传值(事件调用机制) -->
            <!-- 父向子传递函数, 子函数调用函数返回值 -->
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:
            {{ goodsinfo.goods_no }}</p>
          <p>库存情况:
            {{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间:
            {{ goodsinfo.add_time|dateFormat }}</p>

        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain="plain" @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain="plain" @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import swiper from "../subcomponents/swiper.vue";
  import numbox from "../subcomponents/goodsinfo_numberbox.vue";
  export default {
    data() {
      return {
        id: this.$route.params.id,
        lunbotu: [], //轮播图的数据
        goodsinfo: {}, //获取到的商品的信息
        ballFlag: false, //控制小球显示和隐藏的标识符
        selectedCount: 1 //保存用户选中的商品数量,默认认为用户买一个
      };
    },
    created() {
      this.getLunbotu();
      this.getGoodsInfo();
    },

    methods: {
      getLunbotu() {
        this
          .$http
          .get("api/getthumimages/" + this.id)
          .then(result => {
            if (result.body.status === 0) {
              result
                .body
                .message
                .forEach(item => {
                  item.img = item.src;
                });
              this.lunbotu = result.body.message;
            }
          });
      },
      getGoodsInfo() {
        this
          .$http
          .get("api/goods/getinfo/" + this.id)
          .then(result => {
            if (result.body.status === 0) {
              this.goodsinfo = result
                .body
                .message[0];
            }
          });
      },
      goDesc(id) {
        //跳转到图文介绍
        this
          .$router
          .push({
            name: "goodsdesc",
            params: {
              id
            }
          });
      },
      goComment(id) {
        //点击跳转到评论页面
        this
          .$router
          .push({
            name: "goodscomment",
            params: {
              id
            }
          });
      },
      addToShopCar() {
        //添加到购物车
        this.ballFlag = !this.ballFlag
      },
      beforeEnter(el) {
        el.style.transform = "translate(0px, 0px)"
      },
      enter(el, done) {
        //小球动画优化思路
        // 1. 先分析导致动画不准确的本质原因,我们把小球的最终位移移动到的位置,已经局限在了一个分辨率下, 滚动条未动的情况下
        // 2. 分辨率变化和位移变化, 显示就会有问题
        // 3. 需要动态计算 小球起点 终点 坐标值
        // 4. 解决思路

        //获取小球在页面中的位置
        const ballPostition = this.$refs.ball.getBoundingClientRect()
        //获取会标在页面中的位置
        const badgePosition = document.getElementById('badge').getBoundingClientRect()

        const xDist = badgePosition.left - ballPostition.left
        const yDist = badgePosition.top - ballPostition.top
        el.offsetWidth;
        el.style.transform = `translate(${xDist}px, ${yDist}px)`
        el.style.transition = 'all 1s cubic-bezier(0,1.39,1,-0.07)'
        done()
      },
      afterEnter(el) {
        this.ballFlag = !this.ballFlag
      },
      getSelectedCount(count) {
        this.selectedCount = count
        console.log(`父组件拿到的数量值为${count}`)
      }

    },
    components: {
      swiper,
      numbox
    }
  };
</script>

<style lang="scss" scoped="scoped">
  .goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
  }

  .now_price {
    color: red;
    font-size: 16px;
  }

  .mui-card-footer {
    display: block;

    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 140px;
  }
</style>