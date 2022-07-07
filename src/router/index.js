import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import routes from './routes';

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  next();
})


import getAuthRoute from './routes/auth-route';
export const addAuthRoute = (type) => {
  let authRoute = getAuthRoute(type);
  router.addRoute(authRoute);
  router.options.routes = [...routes, authRoute];
}

addAuthRoute(1);

export default router;