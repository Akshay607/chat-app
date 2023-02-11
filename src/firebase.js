// Import the functions you need from the SDKs you need
import  firebase  from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIKRL32lB0F_UUePpWJFUNYo6YmglBklA",
  authDomain: "ak-chat-62dfc.firebaseapp.com",
  databaseURL: "https://ak-chat-62dfc-default-rtdb.firebaseio.com",
  projectId: "ak-chat-62dfc",
  storageBucket: "ak-chat-62dfc.appspot.com",
  messagingSenderId: "467338188514",
  appId: "1:467338188514:web:5d7a273ea4e3b117c170bb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const database=firebase.database();
