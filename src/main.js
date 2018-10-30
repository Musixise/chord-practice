import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import MIDIDevice from './plugins/MIDIDevice/'

Vue.use(MIDIDevice)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.name === 'Workspace') {
  }
  next();
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')