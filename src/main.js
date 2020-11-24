import Vue from 'vue'
import App from './App.vue'
import modal from './plugins/modal';

Vue.config.productionTip = false

Vue.use(modal);

new Vue({
  render: h => h(App),
}).$mount('#app')
