import {initializeApp} from "firebase/app";
import {auth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAfcFYfoDEixFewrrXGiUhZO8jJebiW9Q",
    authDomain: "chatty-79d53.firebaseapp.com",
    projectId: "chatty-79d53",
    storageBucket: "chatty-79d53.appspot.com",
    messagingSenderId: "277349691585",
    appId: "1:277349691585:web:55087941d110e0d1752440",
    measurementId: "G-1D6B7Q4SPN"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const authorise = auth();
  const provider = new authorise.GoogleAuthProvider();

  export {authorise, provider};
  export default db;