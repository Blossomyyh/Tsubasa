<template lang='pug'>
  #MyFirstSlideshow
    .eg-slideshow
      slide.local-eg-theme-space(enter='fadeIn' leave='bounceOutLeft')
        .center.frontpage
          eg-transition(enter='fadeInDown')
            h4 A Story of adventrue
          <!--button(@click="play") home   todo！！！！！-->
          eg-transition(enter='fadeInUp')
            h5 To be continued...
          eg-triggered-message(:trigger='slideTimer >= 1',
          :duration='10', position='top right',
          enter='bounceInRight', leave='bounceOutRight')
            p Next:
            p Previous:

      slide.local-eg-theme-space(:steps=5 ,enter='bounceInRight' leave='fadeOut')
        eg-transition(enter="fadeInLeft")
          .center
            h2 <b>They</b> are...
              <!--.inline(class='animated infinite pulse heart')-->
        .intro
          eg-transition(v-if="step >= 2",enter='bounceInLeft' leave='bounceOutLeft')
            .introPic
              h5 Sakura
          eg-transition(v-if="step >= 3",enter='bounceInRight' leave='bounceOutLeft')
            .introPic
              h5 Syaoran
          eg-transition(v-if="step >= 4",enter='bounceInLeft' leave='bounceOutLeft')
            .introPic
              h5 Fay
          eg-transition(v-if="step >= 5",enter='bounceInRight' leave='bounceOutLeft')
            .introPic
              h5 Kurogane

</template>

<script>
  import eagle from 'eagle.js'
  export default {
    mixins: [ eagle.slideshow ],
    infos: {
      // These infos appear on the home page, below the slideshow's thumbnail
      title: 'Sakura Introduction',
      description: 'Princess',
      path: 'sakura-introduction'
    },
    methods: {
      play: function () {
        this.$router.push({ path: '*' })
      }
    }
  }
</script>

<style lang='scss'>
  @import url(https://fonts.googleapis.com/css?family=Raleway);
  #MyFirstSlideshow{
    .eg-slideshow{
      /*font-family: 'Raleway';*/
      /*background-color: #eef;*/
      font-family: 'Forum';
      background: black;
      background-size: contain;
      color: white;
      .eg-slide{
        .eg-slide-content{
          width: 30em;
          height: auto;

          margin: 0 auto;
        }
      }
    }
    .eg-slide-content{
      width: 30em;
      max-width: 90%;
      margin: 0 auto;
    }

    .frontpage {
      width: 25em;
      margin-top: 10%;
      img {
        height: 7em;
      }
      img.control-schema {
        width: 10em;
        height: 3em;
      }
      h5{
        margin-top:30%;
        margin-right: -120%;
      }
    }

    .intro{
      position: relative;
      margin-top: -8%;
      margin-left: 10%;
      .introPic{
        /*使得div可以并列居中*/
        display: inline-block;
        text-align: left;
        font-size: 40pt;
      }
      img{
        width: 200px;
        border: solid 0.5px white;
        padding: 2px;
        margin-top: -50px;
      }
    }



    .local-eg-theme-space {
      @import url(https://fonts.googleapis.com/css?family=Forum);
      h3 {
        font-family: 'Forum';
        font-size: 1.5em;
        color: rgba(255, 255, 255, 0.75);
        letter-spacing: 1.5px;
      }
      /*background-image: url(http://i.imgur.com/yO2ivoD.jpg);*/
      background-position: center;
      background-size: cover;
    }

  }
</style>
