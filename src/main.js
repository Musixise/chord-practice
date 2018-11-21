import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import router from './router'
import store from './store'
import MIDIDevice from './plugins/MIDIDevice/'

import './index.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(MIDIDevice)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // if(to.name === 'Workspace') {
  // }
  next();
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')