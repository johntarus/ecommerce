import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4YkEiZusCHc7kfiwqpyyj-Qo2a_S8SB0",
  authDomain: "ecommerce-82675.firebaseapp.com",
  projectId: "ecommerce-82675",
  storageBucket: "ecommerce-82675.appspot.com",
  messagingSenderId: "127261082331",
  appId: "1:127261082331:web:e82930c36b9940f3b282fe",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
