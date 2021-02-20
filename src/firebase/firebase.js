import * as firebase from 'firebase'


import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQbAanDPodud7xR3iPdktMm-mygdiTIRU",
    authDomain: "form-list-app.firebaseapp.com",
    projectId: "form-list-app",
    storageBucket: "form-list-app.appspot.com",
    messagingSenderId: "759242741885",
    appId: "1:759242741885:web:c4f139df82bd13536bb914"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;