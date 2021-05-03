import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5Jmp0g3G9gBgQYI1RC-VpfdwjvWQnOac",
    authDomain: "fir-crud-17e62.firebaseapp.com",
    databaseURL: "https://fir-crud-17e62-default-rtdb.firebaseio.com",
    projectId: "fir-crud-17e62",
    storageBucket: "fir-crud-17e62.appspot.com",
    messagingSenderId: "562629410382",
    appId: "1:562629410382:web:c2cf731c74312531de8d1f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;