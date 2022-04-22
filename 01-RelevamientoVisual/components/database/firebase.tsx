// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi1CxKV-Zvv_9lnEd1gCtUY0k2xodStOg",
  authDomain: "pps-auth-527d0.firebaseapp.com",
  projectId: "pps-auth-527d0",
  storageBucket: "pps-auth-527d0.appspot.com",
  messagingSenderId: "1036552941918",
  appId: "1:1036552941918:web:05f37c9ebbc078311c5fcf"
};

// Initialize Firebase
let app;
if(firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app();
}

const auth = firebase.default.auth();

export { auth };
