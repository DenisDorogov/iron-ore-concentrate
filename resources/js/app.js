require('./bootstrap');
import { createApp } from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import components from './components/UI';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/router';
import store from './store/index';


const app = createApp({});

components.forEach(component => {
  app.component(component.name, component)
})

app.component('App', App);

app.use(router).use(store).mount('#app');

// Vue.use(Vuex)