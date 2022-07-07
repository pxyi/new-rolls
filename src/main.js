import Vue from 'vue';
import App from './App.vue'

import store from './store';

import router, { addAuthRoute } from './router';

store.state.userInfo?.signUtype > 0 && addAuthRoute(store.state.userInfo.signUtype);

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';


console.log(store)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');