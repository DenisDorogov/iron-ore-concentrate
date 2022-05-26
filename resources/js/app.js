require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/router';


const app = createApp({});

components.forEach(component => {
  app.component(component.name, component)
})

app.component('App', App);

app.use(router).mount('#app'); 
    // .use(store)
    // .mount('#app');

