<template>
  <div>
    <!-- <h1>page 2</h1>
{{ msg }}
{{postersInfo.name}} -->

   <div class="wrapper">
        <div class="main">

            <p class="tips">奖励金额仅供参考，以实发为准</p>

           <div class="content">
                

               <p class="title" v-if="postersInfo.name">恭喜{{postersInfo.name}}</p>

               <div class="list">

                   <p class="item" v-if="postersInfo.hbyxhjl">
                      <span class="text">红包有效户奖励</span>
                      <span class="number">{{postersInfo.hbyxhjl}}</span>
                      <span class="text">元</span>
                   </p>

                   <p class="item" v-if="postersInfo.hbvipzjjl">
                     <span class="text">红包VIP追加奖励</span>
                        <span class="number">{{postersInfo.hbvipzjjl}}</span>
                        <span class="text">元</span></p>

                   <p class="item" v-if="postersInfo.hbyxhztgjl">
                       <span class="text">红包转托管奖励</span>
                        <span class="number">{{postersInfo.hbyxhztgjl}}</span>
                        <span class="text">元</span>
                   </p>

                    <p class="item" v-if="postersInfo.xcyxhjl">
                       <span class="text">薪酬有效户奖励</span>
                        <span class="number">{{postersInfo.xcyxhjl}}</span>
                        <span class="text">元</span>
                   </p>

                    <p class="item" v-if="postersInfo.xcszjl">
                       <span class="text">薪酬市值奖励</span>
                        <span class="number">{{postersInfo.xcszjl}}</span>
                        <span class="text">元</span>
                   </p>

                    <p class="item" v-if="postersInfo.totalRewards">
                       <span class="text">合计奖励</span>
                        <span class="number">{{postersInfo.totalRewards}}</span>
                        <span class="text">元</span>
                   </p>
               </div>
           </div>
       </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Posters',
  data () {
    return {
      msg: 'Posters',
      postersInfo: {
          name: '',
          hbyxhjl: '',
          hbvipzjjl: '',
          hbyxhztgjl: '',
          xcyxhjl: '',
          xcszjl: '',
          totalRewards: ''
      }
    }
  },
  created: function () {
    this.postersInfo = JSON.parse(sessionStorage.getItem('postersInfo'));
    console.log('postersInfo:', this.postersInfo);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
      width: 750px;
      background: url(~@/assets/bgimage.jpg);
      height: 1334px;
      margin: 0 auto;
  }

  .bgimage{
      width: 100%;
  }

  .content{
      text-align: center;
      padding-top: 70%;
  }

  .title{
      font-family: Microsoft YaHei;
      font-size: 44px;
      color: #fff;
  }

  .list{
      padding: 0;
      text-align: center;
  }

  .item{
      list-style: none;
      font-family: Microsoft YaHei;
      font-size: 30px;
      color: #fff;
      margin-top: 0;
      margin-bottom: 20px;
  }

  .number{
      color: #ffff00;
  }

  .tips{
      color: #fff;
      text-align: center;
      padding-top: 40px;
  }

</style>
