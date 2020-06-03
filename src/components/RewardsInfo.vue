<template>
  <div class="rewards-page-wrapper">
    <h1>{{ msg }}</h1>

    <form v-on:submit.prevent="submit()" class="postersInfo-form">
  
      <fieldset class="item-wrapper">
        <label for="name"  class="item-label">
          <span class="item-title">姓名</span>
          <input class="item-input" id="name" placeholder="请输入姓名" type="text"  v-model="postersInfo.name" />
        </label>
      </fieldset>
      
      <fieldset class="item-wrapper">
        <label for="hbyxhjl" class="item-label">
          <span class="item-title">红包有效户奖励</span>
          <input class="item-input" id="hbyxhjl" placeholder="红包有效户奖励" type="text"  v-model="postersInfo.hbyxhjl" />
        </label>
      </fieldset>

      <fieldset class="item-wrapper">
        <label for="hbvipzjjl" class="item-label">
          <span class="item-title">红包VIP追加奖</span>
          <input class="item-input" id="hbvipzjjl" placeholder="红包VIP追加奖" type="text"  v-model="postersInfo.hbvipzjjl" />
        </label>
      </fieldset>

      <fieldset class="item-wrapper">
        <label for="hbyxhztgjl" class="item-label">
          <span class="item-title">红包转托管奖励</span>
          <input class="item-input" id="hbyxhztgjl" placeholder="红包转托管奖励" type="text"  v-model="postersInfo.hbyxhztgjl" />
        </label>
      </fieldset>

      <fieldset class="item-wrapper">
        <label for="xcyxhjl" class="item-label">
          <span class="item-title">薪酬有效户奖励</span>
          <input class="item-input" id="xcyxhjl" placeholder="薪酬有效户奖励" type="text"  v-model="postersInfo.xcyxhjl" />
        </label>
      </fieldset>

      <fieldset class="item-wrapper">
        <label for="xcszjl" class="item-label">
          <span class="item-title">薪酬市值奖励</span>
          <input class="item-input" id="xcszjl" placeholder="薪酬市值奖励" type="text"  v-model="postersInfo.xcszjl" />
        </label>
      </fieldset>

      <fieldset class="item-wrapper"> 
        <label for="totalRewards" class="item-label">
          <span class="item-title">合计奖励</span>
          <input class="item-input" id="totalRewards" placeholder="合计奖励" type="text"  v-model="postersInfo.totalRewards" />
        </label>
      </fieldset>

      <fieldset class="item-wrapper"> 
        <button type="submit" class="submit-button">

          <span>提交生成海报</span>

        </button>
      </fieldset> 

    </form>

  </div>
</template>

<script>
export default {
  name: 'RewardsInfo',
  data () {
    return {
      msg: 'RewardsInfo page',
      postersInfo: {
          name: '',
          hbyxhjl: '',
          hbvipzjjl: '',
          hbyxhztgjl: '',
          xcyxhjl: '',
          xcszjl: '',
          totalRewards: ''
      },

    }
  },
  methods: {
    submit: function () {
      sessionStorage.setItem('postersInfo', JSON.stringify(this.postersInfo));
      this.$router.push('/posters');
    },

    goToPostersPage: function() {
      this.$router.push('/posters');
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    font-family: "Microsoft YaHei","Hiragino Sans GB";
  }
  
  h1{
    color: #445362;
  }

  .postersInfo-form{
    width: 650px;
    margin: 0 auto;
  }

  .item-wrapper{
    border: solid 1px #ddd;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  .item-label{
    display: flex;
    align-items: center;
  }

  .item-title{
    width: 40%;
    color: #445362;
  }

  .item-input{
    padding: 5px;
    width: 200px;
    border: none;
  }

  .submit-button{ 
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #4f638b;
    border: 0;
    font-size: 16px;
    font-family: "Microsoft YaHei","Hiragino Sans GB";
    cursor: pointer;
    }
</style>
