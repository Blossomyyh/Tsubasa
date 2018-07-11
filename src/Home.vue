<template lang='pug'>
.frontpage
  .content
    h1(class="tileMain")
    colorfulParticles(:config="particleConfig")

    .disc

      //h2 A slideshow framework for hackers
      //p.
      //  Most of all, Eagle aims at offering a simple and very hackable API so you
      //  can get off the beaten tracks and craft the slideshows you really wa

      .thumbnails
        .box-card(v-for='slideshow in slideshows')
          router-link(:to='slideshow.infos.path' @click.native="click")
            .embedded-slideshow-container
              component(:is="slideshow", :embedded='true',
                          :keyboardNavigation='false',
                          :mouseNavigation='false')

          .caption
            h3 {{slideshow.infos.title}}
            p.thumbnail-description {{slideshow.infos.description}}
      button(class="levelBtn", @click="goLevel")

  //audio(preload="auto",src="./music/ruthless.mp3", autoplay="autoplay")


</template>

<script>
import slideshows from 'slideshows/slideshows'
import colorfulParticles from './particle/colorful-particles.vue'
import quickMenu from 'vue-quick-menu'
export default {
  data: function () {
    return {
      slideshows: slideshows.list,
      particleConfig: {
        mouse_click: false,
        mouse_move: true,
        fix_position: false,
        position_list: [[400, 400], [800, 400]],
        spawn_range: [1, 4],
        radius_range: [10, 30],
        colors: [],
        spawn_interval: 500
      },
      radius_min: 4,
      radius_max: 10,
      colorBuf: `#69D2E7,#A7DBD8,#E0E4CC,#F38630,#FA6900,#FF4E50,#F9D423`
    }
  },
  mounted: function () {
    console.log(this.slideshows)
    document.currentSlide = {}
  },
  components: {
    colorfulParticles,
    quickMenu
  },
  methods: {
    click: function (evt) {
      evt.stopPropagation()
    },
    parseColorInput: function () {
      this.particleConfig.colors = this.colorBuf.split(',')
    },
    goLevel: function () {
      this.$router.push({ path: 'game' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this components only -->
<style lang='scss' scoped>
@import "node_modules/eagle.js/src/themes/frontpage/frontpage";
.frontpage{
  background: url("../static/back.png");
  /*background-position: top;*/
}
.content{
  /*background: black;*/
  opacity: 0.7;
  color: white;
  text-align: center;
  /*height: 1950px;*/
}
.tileMain{
  background-image: url("../static/tileMain.png");
  background-repeat: no-repeat;
  /*margin-top: 2px;*/
  width: 800px;
  height: 150px;
  margin-left: -115px;
  padding-top: 5px;
}

.disc{
  /*opacity: 1;*/
  text-align: center;
  /*margin-top: 580px;*/
}
.levelBtn{
  border: 1px white solid;
  border-radius: 30px;
  height: 140px;
  width: 400px;
  background-image: url("../static/levelButton.png");
  background-position: center;
  /*margin-top: 200px;*/
  /*float: right;*/
  /*margin-left: auto;*/

}
.thumbnails{
  margin-top: 14%;
  margin-bottom: 24%;

}
.box-card{
  /*margin-bottom: 600px;*/
  /*使得div可以并列居中*/
  display: inline-block;
}

.logo {
  display: inline-block;
  width: 130px;
  height:90px;
  margin-right: 0.1em;
  background-image: url(./logo.svg);
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.github-star {
  //display: block;
  margin: 0 auto;
  //margin-top: -10px;
}
</style>
