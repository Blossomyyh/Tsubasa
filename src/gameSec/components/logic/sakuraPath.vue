<template>
  <div id="syaoran-final"  :class="{'scene in' : syaoranFinal,
                                'scene out': !syaoranFinal}">
    <!--<p><a id="start-btn" class="button" @click="winSyaoran()" hidden></a></p>-->
    <div id="syaoranChoice" class="syaoran-end">
      <div id="syaoran-choose" class="choose-disappear">
        <button id="evadeBtn" class="chooseBtn" @click="evadeLiu(event)" ></button>
        <button id="saveBtn" class="chooseBtn" @click="saveLiu(event)"></button>
      </div>
      <button id="syaoran-success"  class="choose-disappear" @click="goToSakura(event)"></button>
    </div>

  </div>
</template>

<script>
  import Constant from './constant.vue'
  export default {
    data () {
      return {
        syaoranFinal: false,
        isWin: false,
        INTERVAL: 1000
      }
    },

    mounted () {
      console.log('start syaoran final path')
      Constant.Event.$on(Constant.MSG_SHOW_SYAORAN_FINAL, function () {
        console.log('syaoran path start')
        this.syaoranFinal = true
        var choice = document.getElementById('syaoranChoice')
        choice.classList.add('show-0')
        this.init()
      }.bind(this))
    },
    methods: {
      init () {
        // 使用() => 指向该vue组件的setTimeout
        setTimeout(() => this.syaoranCircum(1), 8 * this.INTERVAL)
      },
      // syaoran的最后情形
      syaoranCircum (i) {
        if (i < 11) {
          var choice = document.getElementById('syaoranChoice')
          console.log(i)
          choice.classList.remove('show-' + (i - 1))
          console.log('remove(\'show-\' + ' + (i - 1))
          choice.classList.add('show-' + i)
          console.log('add(\'show-\' + ' + i)
          i++
          setTimeout(() => this.syaoranCircum(i), this.INTERVAL * 0.8)
        } else {
          setTimeout(() => {
            console.log('end intro')
            this.toChoose()
          }, this.INTERVAL * 4)
        }
      },
      // 显示choose界面
      toChoose () {
        console.log('start choose ')
        var choice = document.getElementById('syaoranChoice')
        choice.classList.remove('show-10')
        choice.classList.add('showback')
        var ofChoice = document.getElementById('syaoran-choose')
        ofChoice.classList.remove('choose-disappear')
        ofChoice.classList.add('choose-appear')
        console.log('visibility true')
      },
      evadeLiu (event) {
        setTimeout(() => {
          var ofChoice = document.getElementById('syaoran-choose')
          ofChoice.classList.remove('choose-appear')
          ofChoice.classList.add('choose-disappear')
          var choice = document.getElementById('syaoranChoice')
          choice.classList.remove('showback')
          choice.classList.add('evade-lose')
        }, 3 * this.INTERVAL)
        setTimeout(() => {
          this.isWin = false
          var choice = document.getElementById('syaoranChoice')
          choice.classList.remove('evade-lose')
          this.winSyaoran()
        }, 6 * this.INTERVAL)
        event.stopPropagation()
      },
      saveLiu (event) {
        var ofChoice = document.getElementById('syaoran-choose')
        ofChoice.classList.remove('choose-appear')
        ofChoice.classList.add('choose-disappear')
        var choice = document.getElementById('syaoranChoice')
        choice.classList.remove('showback')
        choice.classList.add('ssave-0')
        setTimeout(() => this.saveAnimation(1), 2 * this.INTERVAL)
        this.isWin = true
        console.log('win')
        event.stopPropagation()
      },
      saveAnimation (m) {
        var choice = document.getElementById('syaoranChoice')
        if (m < 10) {
          choice.classList.remove('ssave-' + (m - 1))
          console.log('remove(\'ssave-\' + ' + (m - 1))
          choice.classList.add('ssave-' + m)
          console.log('add(\'ssave-\' + ' + m)
          m++
          if (m < 7) {
            setTimeout(() => this.saveAnimation(m), this.INTERVAL * 0.8)
          } else {
            setTimeout(() => this.saveAnimation(m), this.INTERVAL * 3)
          }
        } else {
          choice.classList.remove('ssave-9')
          setTimeout(() => {
            choice.classList.add('ssave-10')
            var go = document.getElementById('syaoran-success')
            go.classList.remove('choose-disappear')
            go.classList.add('choose-appear')
          })
        }
      },
      winSyaoran () {
        console.log('syaoran path is over')
        this.syaoranFinal = false
        Constant.Event.$emit(Constant.MSG_SYAORAN_RESULT, this.isWin)
      },
      goToSakura (event) {
        console.log('syaoran is pass TO SAKURA')
//        Constant.Event.$emit(Constant.)
        this.$router.push({ path: 'gamesec' })
        event.stopPropagation()
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
  #syaoran-final {
    background: rgba(0, 0, 0, .7)  no-repeat center;
    text-align: center;
  }
  .syaoran-end{
    height: 600px;
    width: 800px;
    position: relative;
    margin: auto;
    background-size: 600px 800px;
  }
  .show-0 {
    background: url("./static/sshow-0.png") no-repeat center;
  }
  .show-1 {
    background: url("./static/sshow-1.png") no-repeat center;
  }
  .show-2 {
    background: url("./static/sshow-2.png") no-repeat center;
  }
  .show-3 {
    background: url("./static/sshow-3.png") no-repeat center;
  }
  .show-4 {
    background: url("./static/sshow-4.png") no-repeat center;
  }
  .show-5 {
    background: url("./static/sshow-5.png") no-repeat center;
  }
  .show-6 {
    background: url("./static/sshow-6.png") no-repeat center;
  }
  .show-7 {
    background: url("static/sshow-6.png") no-repeat center;
  }
  .show-8 {
    background: url("./static/sshow-8.png") no-repeat center;
  }
  .show-9 {
    background: url("./static/sshow-9.png") no-repeat center;
  }
  .show-10 {
    background: url("./static/sshow-10.png") no-repeat center;
  }
  .showback{
    background: url("./static/sshowback.png") no-repeat center;
  }
  .ssave-0 {
    background: url("./static/ssave-0.png") no-repeat center;
  }
  .ssave-1 {
    background: url("./static/ssave-1.png") no-repeat center;
  }
  .ssave-2 {
    background: url("./static/ssave-2.png") no-repeat center;
  }
  .ssave-3 {
    background: url("./static/ssave-3.png") no-repeat center;
  }
  .ssave-4 {
    background: url("./static/ssave-4.png") no-repeat center;
  }
  .ssave-5 {
    background: url("./static/ssave-5.png") no-repeat center;
  }
  .ssave-6 {
    background: url("./static/ssave-6.png") no-repeat center;
  }
  .ssave-7 {
    background: url("./static/ssave-7.png") no-repeat center;
  }
  .ssave-8 {
    background: url("./static/ssave-8.png") no-repeat center;
  }
  .ssave-9 {
    background: url("./static/ssave-9.png") no-repeat center;
  }
  .ssave-10 {
    background: url("./static/ssave-10.png") no-repeat center;
  }

  #syaoran-choose{
    display: inline-block;
    height: 600px;
    width: 800px;
    float: left;
    margin-top: 400px;
    margin-left: 35px;
  }
  .choose-disappear{
    visibility: hidden;
  }
  .choose-appear{
    visibility: visible;
  }
  .chooseBtn {
    width: 20%;
    height: 10%;
    bottom: 40%;
    /*background-color: #f8f8f2;*/
    margin-right: 50px;
    border-radius: 7px;
  }
  #evadeBtn{
    background-image: url("./static/syaoran-choose-evade.png");
  }
  #saveBtn{
    background-image: url("./static/syaoran-choose-save.png");
  }
  .evade-lose{
    background: url("./static/slose.png") no-repeat center;
  }
  #syaoran-success{
    height: 50px;
    width: 200px;
    position: absolute;
    margin-top: 220px;
    padding-right: -20%;
    background: url("./static/goToSakura.png") no-repeat center;
    border-radius: 7px;
    border: white;
  }



</style>
