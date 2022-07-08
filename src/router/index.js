import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import routes from './routes';


const createRouter = () => new Router({
  routes
});

const resetRouter = () => {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher;
}

const router = createRouter();

router.beforeEach((to, from, next) => {
  next();
})

import getAuthRoute from './routes/auth-route';
export const addAuthRoute = (type) => {
  resetRouter();
  let authRoute = getAuthRoute(type);
  router.addRoute(authRoute);
  router.options.routes = [...routes, authRoute];
}

export default router;