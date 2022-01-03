import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAWWZ-8UqaV9B4tqp3gcNPhdifDd0zj0ks",
    authDomain: "ahmed-khelili-blog.firebaseapp.com",
    projectId: "ahmed-khelili-blog",
    storageBucket: "ahmed-khelili-blog.appspot.com",
    messagingSenderId: "46420881258",
    appId: "1:46420881258:web:0369ae0d6beb9595373f13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase