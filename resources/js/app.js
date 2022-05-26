require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp({});

components.forEach(component => {
  app.component(component.name, component)
})

app.component('App', App);

app.mount('#app');
    // .use(router)
    // .use(store)
    // .mount('#app');

