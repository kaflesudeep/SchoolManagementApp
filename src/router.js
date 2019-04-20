import Vue from "vue";
import Router from "vue-router"

import CreateProfile from "./views/CreateProfile.vue"
import SearchProfile from "./views/SearchProfile.vue"
import Profile from "./views/StudentProfile.vue"


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: CreateProfile
    },
    {
      path: '/search',
      component: SearchProfile
    },
    {
      path: '/profile/:grade/:id',
      component: Profile
    },
  ]
});