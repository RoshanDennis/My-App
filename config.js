import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyDRk5sdWHQCtlePRYnwnch7mz16zsdPqA8",
    authDomain: "wireless-buzzer-55700.firebaseapp.com",
    projectId: "wireless-buzzer-55700",
    storageBucket: "wireless-buzzer-55700.appspot.com",
    messagingSenderId: "550270530461",
    appId: "1:550270530461:web:6a63d3db66534282d37574",
    measurementId: "G-QNWJJ998DL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.database()