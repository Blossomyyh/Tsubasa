<template>
  <div>
    <game-container></game-container>
  </div>
</template>

<script>
  import GameContainer from './components/gameContainer.vue'
//  import quickMenu from 'vue-quick-menu'
  export default {
    name: 'game',
    components: {
      GameContainer
//      quickMenu
    }
  }
</script>

<style lang="scss">
  body {
    width: 100%;
    /*绝大多数页面用来去除默认样式的方法*/
    margin: 0 0;
  }
  html {
    height: 0;
  }
  #menu{
    float: left;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
  }
</style>
