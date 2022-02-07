import Vue from 'vue'
import App from './App.vue'
import router from './router'

import  VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrls
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
