// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwgdBKJiGClG2t_6NBGxy3pvHIh9oGV_U",
    authDomain: "ioc-project-e598c.firebaseapp.com",
    projectId: "ioc-project-e598c",
    storageBucket: "ioc-project-e598c.appspot.com",
    messagingSenderId: "139724487456",
    appId: "1:139724487456:web:5823aa203b38d051a03545",
    measurementId: "G-C84BKXVDW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
