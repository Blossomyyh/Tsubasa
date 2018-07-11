<template>
<div class="container">
  <header>
    <div class="row">
      <h1>Dragon Fly</h1>
    </div>
  </header>

  <section id="game" class="row">
    <start-scene></start-scene>
    <game-scene></game-scene>
    <game-over-scene></game-over-scene>
    <syaoran-path></syaoran-path>
  </section>
</div>
</template>

<script>
  import StartScene from './startSceneComponent'
  import GameOverScene from './gameOverSceneComponent'
  import GameScene from './gameSceneSyaoran'
  import SyaoranPath from './logic/syaoranPath.vue'
  export default {
    components: {
      StartScene,
      GameOverScene,
      GameScene,
      SyaoranPath
    }
  }
</script>

<style scoped>
  .container {
    margin: 0;
    padding: 0;
    height: 1000px;
    color: #2e3b3d;
    /*background: black;*/
    background-image: url("./assets/end.png");
  }
  .container h1{
    float: left;
    margin-left: 10%;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin: 0;
    padding: 1em 0;
  }

  #game {
    /*width: 480px;*/
    height: 750px;
    margin: 0 auto;
    /*padding-top: -10px;*/
    border-radius: 1px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .row {
    /*width: 480px;*/
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
  }
  .row h1{
    text-align: left;
    color: #f8f8f2;
    font-family:'Palatino Linotype', 'Book Antiqua', Palatino, FreeSerif, serif;
    margin-left: 100px;
    font-size: 30pt;
  }
  .scene {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    border-radius: 8px;
    /*border: 2px solid #c5615c;*/
    -webkit-transition: all .3s ease-out;
    background: black url("./assets/end.png");
    background-position-y: -100px;
  }

  .scene.out {
    transform: translate3d(100%, 0, 0);
  }

  .scene.in {
    transform: translate3d(0, 0, 0);
  }

  .hidden {
    display: none;
  }

</style>
