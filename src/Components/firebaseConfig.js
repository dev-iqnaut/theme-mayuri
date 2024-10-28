






import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDqn6JWaE5qnV0UGGYNxesGdvind603Xtk",
//   authDomain: "school-website-4c5fa.firebaseapp.com",
//   projectId: "school-website-4c5fa",
//   storageBucket: "school-website-4c5fa.appspot.com",
//   messagingSenderId: "868030532303",
//   appId: "1:868030532303:web:4d09851c189bb0f56bc5ba",
//   measurementId: "G-C1P01G5LCJ"
// };



const firebaseConfig = {
  apiKey: "AIzaSyBzH0v6igVadt8Fy9KXGpmZ5TxN7kMZn04",
  authDomain: "testing-king-f4bc5.firebaseapp.com",
  projectId: "testing-king-f4bc5",
  storageBucket: "testing-king-f4bc5.appspot.com",
  messagingSenderId: "401822606909",
  appId: "1:401822606909:web:9ce11aae80adffea95ec54",
  measurementId: "G-8RPW8JHC9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };


// const firebaseConfig = {
//   apiKey: "AIzaSyBzH0v6igVadt8Fy9KXGpmZ5TxN7kMZn04",
//   authDomain: "testing-king-f4bc5.firebaseapp.com",
//   projectId: "testing-king-f4bc5",
//   storageBucket: "testing-king-f4bc5.appspot.com",
//   messagingSenderId: "401822606909",
//   appId: "1:401822606909:web:9ce11aae80adffea95ec54",
//   measurementId: "G-8RPW8JHC9Z"
// };