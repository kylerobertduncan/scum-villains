// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo1j5aWvzlzcHeIZlIIIGo6zrfrAwmpdY",
  authDomain: "scumvillains.firebaseapp.com",
  databaseURL: "https://scumvillains-default-rtdb.firebaseio.com",
  projectId: "scumvillains",
  storageBucket: "scumvillains.appspot.com",
  messagingSenderId: "154737413452",
  appId: "1:154737413452:web:10f2e078f76ee71af9d3e9",
  measurementId: "G-MQF6TPPSYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);

export default dbRef;