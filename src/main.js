import Vue from 'vue'
import {Table,TableColumn,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.use(Table);
Vue.use(TableColumn);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
