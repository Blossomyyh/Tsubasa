<template lang="pug">
#IntroducingEagle.eg-theme-agrume
  .eg-slideshow
    slide(:step=1 enter='fadeIn' leave='bounceOutLeft')
      eg-transition(enter='flipInY')
        .center.frontpage
          h1 Syaoran
          img(src='./assets/syaoranAvatar.png')
          h4 A brave boy protecting his princess
          h5 Also kind and helpful

    slide(:step=1 enter='bounceInRight' leave='bounceOutDown')
      eg-transition(enter='flipInX')
        .center.frontpage
          h1 Sakura
          img(src='./assets/sakuraAvatar.png')
          h4 A princess who lost her feather(carrier of memory)
          h5 But never surrender

    slide(:step=1 enter='bounceInRight', leave='fadeOut')
      eg-transition(enter='flipInX')
        .center.frontpage
          h1 Fay
          img(src='./assets/fayAvatar.png')
          h4 A witch travelling with them
          h5 Secrets hidden

    slide.boredYet(:step=1 enter='fadeIn', :mouseNavigation='false', :keyboardNavigation='false')
      eg-transition(enter='flipInY')
        .center.frontpage
          h1 Kurogane
          img(src='./assets/kuroganeAvatar.png')
          h4 A Ninjia travelling with them by chance
          h5 Actually all is inevitable
          button(@click="goHome") back
</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Protagonist',
    description: 'Characters',
    path: 'introducing-eagle'
  },
  components: {
    'awesome-inserted-slide': require('./AwesomeInsertedSlide'),
    'figures-slide': require('./FiguresSlide'),
    'end-credits': require('./components/EndCredits'),
    'themes-slideshow': require('../themes-slideshow/ThemesSlideshow')
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
      slideCategories: {
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
  methods: {
    message: function (name) {
      return {
        'baby bunnies': 'Yeeeeah my favorite too !',
        'fluffy puppies': 'Wow so original.',
        'funny kitties': 'Good for you ' + this.username + '.',
        'Theming': 'Ok ' + this.username + ', whatever.',
        'Slide reuse': 'Seriously ' + this.username + ' you <em>want</em> to see this.',
        'Interactivity': 'Well that\'s this slide, ' + this.username +
                         '. <br /> A bit too late to unsee it, heh ?'
      }[name]
    },
    goHome: function () {
      this.$router.push({ path: '*' })
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/src/themes/agrume/agrume';
#IntroducingEagle {
  .frontpage {
    img {
      height: 7em;
    }
    img.control-schema {
      width: 8em;
      height: 3em;
    }
  }
  .heart {
    width: 1em;
    height: 0.8em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    background-image: url('./assets/heart.svg');
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: contain;

  }

  .quarter {
    text-align: center;
    p {
      margin-top: 0;
      text-align: center;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0
    }
  }
  .boredYet {
    p {
      margin-bottom: 0.3em;
      margin-top: 1.3em;
    }
    .button {
      border: none;
    }
    .button.prev {
      float: left;
    }
    .button.next {
      float: right;
    }
  }
  img.computerkid {
    height: 6.5em;
  }
  .intro{
    display: inline;
  }

  a {
    color: black;
  }
}
</style>
