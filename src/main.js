// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Home from './Home'
import Eagle from 'eagle.js'
// use ppt template
import slideshows from './slideshows/slideshows.js'
import game from './game/game.vue'
import level from './game/level.vue'
import gameSec from './gameSec/game.vue'
/* eslint-disable no-new */
Vue.use(Eagle)
Vue.use(Router)

var routes = []
slideshows.list.forEach(function (slideshow) {
  routes.push({
    path: '/' + slideshow.infos.path,
    component: slideshow
  })
})
routes.push({path: '/level', component: level})
routes.push({path: '/game', component: game})
routes.push({ path: '*', component: Home })
routes.push({ path: '/gamesec', component: gameSec })
// routes.push({
//   path: '/',
//   name: 'home',
//   components: Home
// })
console.log(routes)

var router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
