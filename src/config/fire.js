import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJKDI7dNYYFKNZi7RjZMVA_X4cDHEopGM",
    authDomain: "babyland-2b68b.firebaseapp.com",
    databaseURL: "https://babyland-2b68b.firebaseio.com",
    projectId: "babyland-2b68b",
    storageBucket: "babyland-2b68b.appspot.com",
    messagingSenderId: "971900835951",
    appId: "1:971900835951:web:ca283d50e98fd668ed959a",
    measurementId: "G-G4KTEJFFST"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;