<template>
  <div id="game-scene" :class="{'scene in' : showGame,
                                   'scene out': !showGame}">
    <!--<button @click="goLevel">home</button>-->

    <audio src="./assets/break the sword of justice.mp3"  autoplay="autoplay" loop="loop"></audio>
    <div class="actor">
      <div class="user-index">
        <p>POINT  <span>{{POINT}}</span></p>
      </div>
      <img src="./assets/syaoranPer.png">
      <div>
        <button id="backHome" @click="goHome">Go Back</button>
      </div>
    </div>
    <img src="./assets/otherActor.png" class="otherActor">

    <div id="floor" class="floor" :style="backgroundStyle">
      <div id="player" :class="{lane1: isOnLane1,
                                lane2: !isOnLane1}">
      </div>

      <div v-for="tile in tiles">
        <div :class="tile.class" :style="tile.style"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Constant from './logic/constant'
  export default {
    data () {
      return {
        showGame: false,
        tiles: [],
        runway: [
          [0, 1, 2, 0],
          [0, 100, 2, 0],
          [0, 1, 2, 0],
          [0, 1, 2, 4],
          [0, 1, 100, 0],
          [0, 1, 2, 0],
          [0, 100, 2, 0],
          [0, 1, 2, 0],
          [4, 1, 2, 0],
          [0, 1, 100, 0],
          [0, 1, 2, 0],
          [4, 100, 2, 0],
          [0, 1, 2, 0],
          [0, 1, 100, 0],
          [0, 1, 2, 0]
        ],
        roundTimes: 0,
        isGameOver: false,
        inWin: false,
        runwayIndex: 0,
        BOUNDARY: 1000,
        TILE_WIDTH: 100,
        TILE_HEIGHT: 100,
        backgroundStyle: '',
        BACKGROUND_MOVEMENT_SPEED: 30,
        PLOT: 10,
        OVERTIME: 10,
        POINT: window.loc,
        isOnLane1: true
      }
    },

    mounted () {
      Constant.Event.$on(Constant.MSG_SHOW_GAME_SCENE, function () {
        this.showGame = true
        this.isGameOver = false
        this.init()
      }.bind(this))
      Constant.Event.$on(Constant.MSG_SYAORAN_RESULT, function (isWin) {
        this.gameOver(isWin)
      }.bind(this))
      var storage = window.localStorage
      storage.clear()
      storage.setItem('point', 0)
      this.POINT = storage.getItem('point')
    },

    methods: {
      goHome: function () {
        this.$router.push({ path: '*' })
      },
      init () {
        console.log('game scene')
        this.startOver()
        // 相应松开键盘的事件
        window.onkeyup = this.handleKeyUp
      },
      handleKeyUp (e) {
        if (e.keyCode === 37) {
          this.isOnLane1 = true
        } else if (e.keyCode === 39) {
          this.isOnLane1 = false
        }

        return false
      },

      resetTiles () {
        this.tiles = []
      },
      startOver () {
        this.resetTiles()
        // 两个循环——
        setTimeout(this.tick, 800)
        requestAnimationFrame(this.onFrame)
      },
      onFrame () {
        this.updateTilesPosition()
        requestAnimationFrame((this.onFrame).bind(this))
      },
      updateTilesPosition () {
        for (var i = 0; i < this.tiles.length; i++) {
          this.tiles[i].style = 'transform: translate3d(' + this.tiles[i].x + 'px, ' + this.tiles[i].y + 'px, 0)'
        }
      },
      // round一次 并判断是否结束
      tick () {
        if (this.roundTimes < this.OVERTIME) {
          // use function in js
//          syaoranLogic(this.roundTimes)
          this.roundTimes ++
          this.POINT ++
          console.log('roundTimes :' + this.roundTimes)
          this.runwayTick(this.roundTimes)
          if (!this.isGameOver) {
            // 加速
            var duration = Math.max(801 - this.roundTimes, 100)
            setTimeout(this.tick, duration)
          }
          // 设置背景的移动
          this.backgroundStyle = 'background-position: 0px ' + this.roundTimes * this.BACKGROUND_MOVEMENT_SPEED + 'px'
        } else {
          Constant.Event.$emit(Constant.MSG_SHOW_SYAORAN_FINAL)
//          this.gameOver(this.isWin)
        }
      },
      runwayTick (round) {
        this.moveTilesDown()
        this.runwayIndex ++
        if (this.runwayIndex >= this.runway.length) {
          this.runwayIndex = 0
        }

        var row = this.runway[this.runwayIndex]
        // change the tile for plot
        if (this.roundTimes === this.PLOT) {
          row = [0, 200, 200, 0]
        }
        for (var i = 0, len = row.length; i < len; i++) {
          this.createTile(row[i], i * this.TILE_WIDTH, 0)
        }
      },
      createTile (type, x, y) {
        var tile = {}
        tile.class = 'tile tile-' + type
        tile.x = x
        tile.y = y
        tile.style = 'transform: translate3d(' + x + 'px, ' + y + 'px, 0)'
        if (type === 100) {
          tile.isBlock = true
        }
        this.tiles.push(tile)
      },
      moveTilesDown () {
        for (var i = 0; i < this.tiles.length; i++) {
          this.tiles[i].y += this.TILE_HEIGHT
          if (this.tiles[i].y > this.BOUNDARY) {
            // 从第四个开始-后的1位被删除
            this.tiles.splice(i, 1)
          } else {
            // 对于没有消除的检查collision
            this.checkCollision(this.tiles[i])
          }
        }
      },
      checkCollision (tile) {
        if (tile.isBlock) {
          if (tile.y === 500) {
            if ((tile.x === this.TILE_WIDTH && this.isOnLane1 === true) || (tile.x === this.TILE_WIDTH * 2 && this.isOnLane1 === false)) {
              console.log('collision')
              this.isWin = false
              this.gameOver(this.isWin)
            }
          }
        }
      },
      gameOver (isWin) {
        this.roundTimes = 0
        this.isGameOver = true
        this.POINT = 0
        Constant.Event.$emit(Constant.MSG_SHOW_OVER_SCENE, isWin)
      }

    }
  }
</script>

<style scoped>
  .floor {
    position: relative;
    width: 400px;
    height: 100%;
    margin: auto;
    background: url(./assets/space-runner-bg.png) 0 0;
  }


  .tile {
    position: absolute;
    width: 100px;
    height: 100px;
  }

  .tile-0 {}
  .tile-1 {
    /*background: url(./assets/runway.png);*/
  }
  .tile-2 {
    /*background: url(./assets/runway2.png);*/
  }
  .tile-100 {
    background: url(./assets/block.png);
  }

  .tile-4 {
    background: url(./assets/star.png) center center no-repeat;
  }
  .tile-200 {
    background: url(./assets/star.png);
  }


  #player {
    position: absolute;
    width: 100px;
    height: 100px;
    background-image: url(syaoranPla.png);
    background-size: 100px 100px;
    bottom: 100px;
    animation: myfirst 1s ease-in;
    -moz-animation: myfirst 1s ease-in;	/* Firefox */
    -webkit-animation: myfirst 1s ease-in;	/* Safari 和 Chrome */
    animation-iteration-count: infinite;
  }

  .actor{
      float: left;
      margin-left: 100px;
      /*margin-top: 100px;*/
  }
  .actor p{
    text-align: left;
    color: #f8f8f2;
    font-family: "American Typewriter";
    font-size: x-large;
  }
  .actor img {
    width: 230px;
  }

  .otherActor{
      float: right;
      margin-right: 100px;
      width: 230px;
      margin-top: 30px;
  }

  #backHome{
    border: 1px white solid;
    border-radius: 20px;
    background: black;
    color: #f8f8f2;
    font-size: 20pt;
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, FreeSerif, serif;
    height: 70px;
    width: 200px;
  }
  #player.lane1{-webkit-transform: translate3d(100px, 0, 0);}
  #player.lane2{-webkit-transform: translate3d(200px, 0, 0);}

  @keyframes myfirst
  {
    95% {background-image: url("syaoranPla2.png")}
    100%  {background-image: url("syaoranPla.png")}
  }


</style>
