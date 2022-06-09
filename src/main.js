import Vue from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/index.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
    store
}).$mount('#app')