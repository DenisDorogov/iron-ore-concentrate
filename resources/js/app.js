require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp({});

app.component('App', App);

app.mount('#app');
    // .use(router)
    // .use(store)
    // .mount('#app');

// import Vue from "vue";
// import Index from "./components/Index";
// import router from "./router"; 


// new Vue ({
//     el: '#app',
//     components: {
//         Index
//     },
//     router
// })

// const { createApp } = Vue

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app')

