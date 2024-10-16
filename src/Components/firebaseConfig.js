

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from "firebase/firestore"; // Import Firestore functions

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDqn6JWaE5qnV0UGGYNxesGdvind603Xtk",
//   authDomain: "school-website-4c5fa.firebaseapp.com",
//   projectId: "school-website-4c5fa",
//   storageBucket: "school-website-4c5fa.appspot.com",
//   messagingSenderId: "868030532303",
//   appId: "1:868030532303:web:4d09851c189bb0f56bc5ba",
//   measurementId: "G-C1P01G5LCJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app); // Initialize Firestore

// const storage = getStorage(app);
// export { auth,db,storage };
















// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getAuth } from "firebase/auth"; // Import Auth if needed
// import { getStorage } from "firebase/storage"; // Import Storage if needed




// const firebaseConfig = {
//   apiKey: "AIzaSyDqn6JWaE5qnV0UGGYNxesGdvind603Xtk",
//   authDomain: "school-website-4c5fa.firebaseapp.com",
//   projectId: "school-website-4c5fa",
//   storageBucket: "school-website-4c5fa.appspot.com",
//   messagingSenderId: "868030532303",
//   appId: "1:868030532303:web:4d09851c189bb0f56bc5ba",
//   measurementId: "G-C1P01G5LCJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app); // Initialize Firestore
// const auth = getAuth(app); // Initialize Auth if needed
// const storage = getStorage(app); // Initialize Storage if needed

// export { auth, db, storage };







import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqn6JWaE5qnV0UGGYNxesGdvind603Xtk",
  authDomain: "school-website-4c5fa.firebaseapp.com",
  projectId: "school-website-4c5fa",
  storageBucket: "school-website-4c5fa.appspot.com",
  messagingSenderId: "868030532303",
  appId: "1:868030532303:web:4d09851c189bb0f56bc5ba",
  measurementId: "G-C1P01G5LCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };