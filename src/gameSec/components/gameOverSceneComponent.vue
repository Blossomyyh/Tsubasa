<template>
  <div id="gameover-scene" :class="{'scene in' : showOver,
                                   'scene out': !showOver,
                                    'won': isWin,
                                    'lose': !isWin}">
    <p><a  id="back-to-menu-button" class="button" @click="backToStartScene()"></a></p>
  </div>
</template>

<script>
  import Constant from './logic/constant'
  export default {
    data () {
      return {
        showOver: false,
        isWin: false
      }
    },

    mounted () {
      // 监听是否有over
      Constant.Event.$on(Constant.MSG_SHOW_OVER_SCENE, function (userWon) {
        this.showOver = true
        this.isWin = userWon
      }.bind(this))
    },

    methods: {
      backToStartScene () {
        console.log('back to start scene')
        this.showOver = false
        Constant.Event.$emit(Constant.MSG_SHOW_START_SCENE)
//        Constant.Event.$emit(Constant.MSG_SHOW_GAME_SCENE)
//        this.$router.back()
      }
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
  #gameover-scene {
    background: rgba(0, 0, 0, .5) url(assets/gameOver.png) no-repeat center;
  }
  .won {
    /*background:   rgba(0, 0, 0, .5) center;*/
  }
  .loss {
    /*background:  rgba(0, 0, 0, .5) center;*/
  }
</style>
