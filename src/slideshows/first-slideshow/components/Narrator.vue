<template lang='pug'>
  .narrator-container
    .narrator
      h3 Various dimensions they travel
      h4  Looking for
      h4 The lost memory of
      h4 The beloved gril
      h4  <b>Sakura</b>
      h2  That is
      img(src="./feather.jpg")

      <!--.end-credit-category(v-for='category, name in categories')-->
        <!--h4.center {{ name.toUpperCase() }}-->
        <!--.end-credit-line(v-for='person in category')-->
          <!--p.left {{ person.name }}-->
          <!--p.right {{ person.role }}-->
</template>

<script>
  export default {
    props: {
      username: {default: 'Tracy'}
    },
    data: function () {
      return {
        categories: {
          'Crew': [
            {
              name: this.username,
              role: 'Internet Person'
            },
            {
              name: 'Brent Rambo',
              role: 'as Computer Kid'
            },
            {
              name: 'Deadpool',
              role: 'MC'
            },
            {
              name: 'Zulko',
              role: 'Author'
            }
          ],
          'Software': [
            {
              name: 'Vue.js',
              role: 'Front-end engine'
            },
            {
              name: 'Eagle.js',
              role: 'Slideshow framework'
            },
            {
              name: 'Animate.css',
              role: 'Transitions animations'
            },
            {
              name: 'Hammer.js',
              role: 'Swipe events'
            },
            {
              name: 'MoviePy',
              role: 'Gifs Editing'
            },
            {
              name: 'Highlight.js',
              role: '(Bad) highlighting'
            }
          ],
          'Assets': [
            {
              name: 'Irfan iLias',
              role: 'Background Pattern'
            },
            {
              name: 'Karolina Lach',
              role: 'Pompiere Font'
            },
            {
              name: 'Dario @linea.io',
              role: 'Icons'
            },
            {
              name: 'Zulko',
              role: 'Computer Kid GIF'
            },
            {
              name: 'Cem Sagisman @Unsplash',
              role: 'Beach photo'
            },
            {
              name: 'Drew Collins @Unsplash',
              role: 'Forest Road Photo'
            },
            {
              name: 'Jamie Street @Unsplash',
              role: 'Dark Woods Photo'
            },
            {
              name: 'Gabriel Santiago @Unsplash',
              role: 'Bokeh City Lights Photo'
            },
            {
              name: 'Greg Rakozy  @Unsplash',
              role: 'Starry Sky Photo'
            }
          ]
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
  @keyframes scroll {
    from {margin-top: 0%}
    to {margin-top: -500%}
  }
  .narrator-container{
    height: 11em;
    overflow-y: hidden;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    font-family: 'Forum';
    /*font-size: 1.5em;*/
    /*color: rgba(255, 255, 255, 0.75);*/
    letter-spacing: 1.5px;

    .narrator {
      font-size: 0.9em;
      padding-top: 50%;
      img{
        opacity: 0.68;
        width: 1200px;
      }

      .end-credit-category {
        .end-credit-line {
          p {
            margin-top: 0
          }
          .left {
            width: 45%;
            margin-right: 10%;
            text-align: right;
            display: inline-block;
          }
          .right {
            display: inline-block;
            text-align: right;
          }
        }
      }
      animation-name: scroll;
      animation-duration: 40s;
      animation-timing-function: linear;
      -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 */
    }
  }

  .local-eg-theme-space {
    @import url(https://fonts.googleapis.com/css?family=Forum);
    h3 {
      font-family: 'Forum';
      font-size: 1.5em;
      color: rgba(255, 255, 255, 0.75);
      letter-spacing: 1.5px;
      margin-top: 50%
    }
    background-image: url(http://i.imgur.com/yO2ivoD.jpg);
    background-position: center;
    background-size: cover;
  }

</style>
