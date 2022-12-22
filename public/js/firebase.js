let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAeVRrPYhZHMw-iDNCKjS9ZAesFkPMY3c0",
    authDomain: "shivam-8a8bb.firebaseapp.com",
    projectId: "shivam-8a8bb",
    storageBucket: "shivam-8a8bb.appspot.com",
    messagingSenderId: "393320062378",
    appId: "1:393320062378:web:3479885efaa785d9cd9fd3",
    measurementId: "G-656MMLZYN4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();