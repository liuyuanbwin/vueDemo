<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容,最多输入120字" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">

      <div class="cmt-item" v-for="(item,i) in comments" :key=" item.add_time">
        <div class="cmt-title">
          第{{ i + 1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒,什么都没说' : item.content }}
        </div>
      </div>

    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {
    Toast
  } from "mint-ui"
  export default {
    data() {
      return {
        pageIndex: 1,
        comments: [], //所有的评论数据
        msg: ''
      }
    },
    created() {
      this.getComments()
    },
    methods: {
      getComments() {
        this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then((result) => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            // 每当获取新评论数据的时候,不要把老数据清空
            this.comments = this.comments.concat(result.body.message)
          } else {
            Toast('获取评论失败')
          }
        })
      },
      getMore() {
        this.pageIndex++;
        this.getComments()
      },
      postComment() {
        //校验是否为空内容
        if (this.msg.trim().length === 0) {
          return Toast("评论内容不能为空")
        }
        this.$http.post('api/postcomment/' + this.$route.params.id, {
          content: this.msg.trim()
        }).then(result => {
          if (result.body.status === 0) {
            //1. 拼接出一个评论对象,
            var cmt = {
              user_name: '隔壁老王',
              add_time: Date.now(),
              content: this.msg.trim()
            }
            this.comments.unshift(cmt)
            this.msg = ""

          } else {
            Toast('')
          }
        })
      }
    },
    props: ["id"]
  }
</script>

<style lang="scss" scoped>
  .cmt-container {
    h3 {
      font-size: 16px;
    }

    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0px;
    }
  }

  .cmt-list {
    margin: 5px 0px;

    .cmt-item {
      font-size: 13px;

      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }

      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
</style>