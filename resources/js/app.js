require('./bootstrap');
import { createApp } from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import components from './components/UI';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router/router';
import store from './store/index';
// import '/servises/firebase.js';
// import { getDatabase, ref, child, push, update } from "firebase/database";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


let app = createApp({});

components.forEach(component => {
  app.component(component.name, component)
})

app.component('App', App);

app.use(router).use(store).mount('#app');



// debug($var1, $someString, $intValue, $object);
// Debugbar::info($object);
// Debugbar::error("Ошибка!");
// Debugbar::warning("Осторожно ...");
// Debugbar::addMessage('Другое сообщение', 'mylabel');
// try {
//     throw new Exception('foobar');
// } catch (Exception $e) {
//     Debugbar::addThrowable($e);
// }


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCwgdBKJiGClG2t_6NBGxy3pvHIh9oGV_U",
//     authDomain: "ioc-project-e598c.firebaseapp.com",
//     projectId: "ioc-project-e598c",
//     storageBucket: "ioc-project-e598c.appspot.com",
//     messagingSenderId: "139724487456",
//     appId: "1:139724487456:web:5823aa203b38d051a03545",
//     measurementId: "G-C84BKXVDW2"
// };

// Initialize Firebase
//  app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//
// let iocDB = [];

// const fillTheTable = (count) => {
//     const database = getDatabase();
//     for (let i = 1; i <= count; i++) {
//         let al = Math.random()*10+10;
//         let si = Math.random()*2+5;
//         let ca = Math.random()*5+3;
//         let s = Math.random()*3+2;
//         let fe = 99-al-si-ca-s;
//         let date = new Date();
//         date = date - Math.random()*153600000;
//         const data = {
//             id: i,
//             date: date,
//             fe: fe,
//             al: al,
//             si: si,
//             ca: ca,
//             s: s
//         };
//         iocDB.push(data);
//         // push(ref(database), 'table');
//     }
// }

// fillTheTable(100);
