<template>
  <div id="start-scene"  :class="{'scene in' : syaoranFinal,
                                'scene out': !syaoranFinal}">
    <p><a id="start-btn" class="button"></a></p>
  </div>
</template>

<script>
  import Constant from './logic/constant'
  export default {
    data () {
      return {
        syaoranFinal: true
      }
    },

    mounted () {
      console.log('start scene mounted')
      // startScene 显示时间为3s
      setTimeout(function () {
        console.log('time out')
        this.syaoranFinal = false
        // start结束：广播组件 发送数据
        Constant.Event.$emit(Constant.MSG_SHOW_GAME_SCENE)
      }.bind(this), 3000)
      // 同时监听start
      Constant.Event.$on(Constant.MSG_SHOW_START_SCENE, function () {
        this.syaoranFinal = true
        setTimeout(function () {
          console.log('time out')
          this.syaoranFinal = false
          // start结束：广播组件 发送数据
          Constant.Event.$emit(Constant.MSG_SHOW_GAME_SCENE)
        }.bind(this), 3000)
      }.bind(this))
    }
  }
</script>

<style scoped>
  .button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  #start-scene {
    background: url(./assets/start-scene-bg.png) no-repeat;
    background-size: 1400px 800px;
    margin-left: 1%;
    /*margin-top: -12%;*/
  }
</style>
