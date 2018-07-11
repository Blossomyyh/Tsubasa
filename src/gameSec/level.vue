<template lang="pug">
  #level
    button(@click="goGame") game
</template>

<script>
  export default {
    name: 'level',
    methods: {
      goGame: function () {
        this.$router.push({ path: 'game' })
      }
    }
  }
</script>

<style lang="scss">
  #level {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
  }
</style>
