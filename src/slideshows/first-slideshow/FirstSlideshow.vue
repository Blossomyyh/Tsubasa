<template lang='pug'>
#MyFirstSlideshow
  audio(src="./prayer.mp3" ,autoplay="autoplay" ,preload="auto")
  .eg-slideshow
    slide.local-eg-theme-space(enter='fadeIn' leave='fadeOut')
      .center.frontpage
        img(src='./assets/tsubasa.jpg')
        eg-transition(enter='fadeInDown')
          h4 A Story of adventrue
        <!--button(@click="play") home   todo！！！！！-->
        eg-transition(enter='fadeInUp')
          h5 To be continued...
        eg-triggered-message(:trigger='slideTimer >= 1',
                              :duration='10', position='top right',
                              enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide.local-eg-theme-space(:steps=2 ,enter='bounceInRight' leave='fadeOut')
      eg-transition(enter="fadeInLeft")
        .center
          h1 <b>They</b> are...
            <!--.inline(class='animated infinite pulse heart')-->
      .intro
        eg-transition(v-if="step >= 2" ,enter='bounceInLeft' leave='bounceOut')
          .introPic
            h5 Sakura
            img(src="./assets/sakuraIntro.jpg")
        eg-transition(v-if="step >= 2 && slideTimer >= 3",enter='bounceInRight' ,leave='bounceOutLeft')
          .introPic
            h5 Syaoran
            img(src="./assets/syaoranIntro.jpg")
        eg-transition(v-if="step >= 2 && slideTimer >= 4",enter='bounceInLeft' leave='bounceOutLeft')
          .introPic
            h5 Fay
            img(src="./assets/fayIntro.jpg")
        eg-transition(v-if="step >= 2 && slideTimer >= 5",enter='bounceInRight' leave='bounceOutLeft')
          .introPic
            h5 Kurogane
            img(src="./assets/kuroganeIntro.jpg")
    slide.local-narrator(enter='bounceInRight', leave='fadeOut')
      .container
        .narrator-container
          narrator
    slide.local-eg-theme-space(:steps=2, enter='fadeIn', leave='fadeOut')
      .locate
        eg-transition(v-if="step <= 1",enter="fadeIn",leave='fadeOut')
          .locateDiv
            h2 Now
            h3 They locate at...

        .piffleDiv
          eg-transition(v-if="step >= 2 && slideTimer >= 3",enter='swing' leave='fadeOut')
            h2 Piffle
          eg-transition(v-if="step >= 2 && slideTimer >= 4",enter='pulse' leave='fadeOut')
            img(src="./assets/piffleblack.png")
    slide.local-eg-theme-space(:steps=1, enter='fadeIn', leave='fadeOut')
      .converse(v-if="slideTimer <= 18",leave='fadeOut')
        eg-triggered-message(:trigger='slideTimer >= 1',
        :duration='8', position='top left',
        enter='bounceInLeft', leave='bounceOutLeft')
          .sakuraCon
            img(src='./assets/sakuraAvatar.png')
            p Look! That is my feather!
        eg-triggered-message(:trigger='slideTimer >= 3',
        :duration='13', position='bottom left',
        enter='bounceInLeft', leave='bounceOutLeft')
          .syaoranCon
            img(src='./assets/syaoranAvatar.png')
            p My princess, I will take it for you.
        eg-triggered-message(:trigger='slideTimer >= 5',
        :duration='11', position='top right',
        enter='bounceInRight', leave='bounceOutRight')
          .fayCon
            img(src='./assets/fayAvatar.png')
            p I can give a hand to you ~
        eg-triggered-message(:trigger='slideTimer >= 7',
        :duration='9', position='bottom right',
        enter='bounceInRight', leave='bounceOutRight')
          .kuroganeC
            img(src='./assets/kuroganeAvatar.png')
            p Piece of cake :)
        eg-triggered-message(:trigger='slideTimer >= 9',
        :duration='7', position='top left',
        enter='bounceInLeft', leave='bounceOutLeft')
          .sakuraCon
            img(src='./assets/sakuraAvatar.png')
            p Thank you my friends!
            p But I also want to try my best!
      .goGame(v-if='slideTimer > 18')
        img(enter='fadeIn')
        button(@click="goLevel")


</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [ eagle.slideshow ],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Prefix',
    description: 'go over it first!',
    path: 'your-first-slideshow'
  },
  data: function () {
    return {
      username: 'Tracy',
      preference: 'baby bunnies',
      preferences: [
        {
          label: 'baby bunnies',
          text: 'Baby bunnies'
        },
        {
          label: 'fluffy puppies',
          text: 'Fluffy puppies'
        },
        {
          label: 'funny kitties',
          text: 'Funny kitties'
        }
      ],
      sentenceCategories: {
        themes: {
          syaoranFinal: true,
          name: 'Theming'
        },
        slideReuse: {
          syaoranFinal: true,
          name: 'Slide reuse'
        },
        interactivity: {
          syaoranFinal: true,
          name: 'Interactivity'
        }
      },
      preloadedImages: {
        computerKid: 'http://i.imgur.com/AAlntwU.gif',
        youRightNow: 'http://i.imgur.com/DFBTj0a.gif',
        bretagne: 'http://i.imgur.com/rYkJ6I8.jpg',
        forrestRoad: 'http://i.imgur.com/hxTMFZW.jpg',
        starrySky: 'http://i.imgur.com/yO2ivoD.jpg',
        cityBokeh: 'http://i.imgur.com/kmmHith.jpg',
        darkWoods: 'http://i.imgur.com/FL9mwpd.jpg'
      }
    }
  },
  components: {
    'narrator': require('./components/Narrator.vue')
  },
  methods: {
    play: function () {
      this.$router.push({ path: '*' })
    },
    goLevel: function () {
      this.$router.push({ path: 'game' })
    },
    message: function (name) {
      return {
        'baby bunnies': 'Yeeeeah my favorite too !',
        'fluffy puppies': 'Wow so original.',
        'funny kitties': 'Good for you ' + this.username + '.',
        'Theming': 'Ok ' + this.username + ', whatever.',
        'Slide reuse': 'Seriously ' + this.username + ' you <em>want</em> to see this.',
        'Interactivity': 'Well that\'s this slide, ' + this.username +
        '. <br/> A bit too late to unsee it, heh ?'
      }[name]
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
        width: 35em;
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
  .container{
    background: url("./assets/magicCircle.jpg") no-repeat;
    background-position-x: 40%;
    height: 80%;
    width: 100%;
  }


  .narrator-container{
    padding-top: 20%;
    text-align: center;
  }


  .locate{
    text-align: center;
    .piffleDiv{
      h2{
        float: left;
        font-family: 'Architects Daughter', cursive;
        margin-left: -10%;
        letter-spacing: 0.3em;
      }
      img{
        float: left;
        /*margin: auto;*/
        margin-left:40%;
        margin-top: -5%;
        width: 1000px;
        height: 500px;
      }

    }

  }

  .converse{
    background-image: url("./assets/converse.png");
    background-size: 810px 540px;
    height: 540px;
    width: 810px;
    margin-left: 7%;
    margin-top: 15%;
    .bounce{
      padding-right: 10%;
    }
    img{
      height: 100px;
      width: 100px;
      margin-right: 100px;
    }

  }

  .goGame{
    background: url("./assets/feather-show.png") no-repeat ;

    background-position: center;
    height: 540px;
    width: 810px;
    margin-left: 7%;
    margin-top: 6%;
    button{
      border: 1px white solid;
      border-radius: 30px;
      height: 140px;
      width: 400px;
      background-image: url("./assets/levelButton.png");
      background-position: center;
      margin-top: 60%;
      margin-left: 23%;
    }
  }

  .local-eg-theme-space {
    @import url(https://fonts.googleapis.com/css?family=Forum);
    /*h3 {*/
      /*font-family: 'Forum';*/
      /*font-size: 1.5em;*/
      /*color: rgba(255, 255, 255, 0.75);*/
      /*letter-spacing: 1.5px;*/
    /*}*/
    /*background-image: url(http://i.imgur.com/yO2ivoD.jpg);*/
    background-position: center;
    background-size: cover;
  }



}
</style>
