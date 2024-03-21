// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAUkG4HrRAvh5rRpgdMU-QOvtEL5WP9uA",
  authDomain: "fir-chas-test.firebaseapp.com",
  projectId: "fir-chas-test",
  storageBucket: "fir-chas-test.appspot.com",
  messagingSenderId: "258234892503",
  appId: "1:258234892503:web:997b0b494aa2b7c02cf092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};