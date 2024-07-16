// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7D68e4zSEcyW3jQAk6pdC9UetpI1I03M",
//   authDomain: "bad-talk.firebaseapp.com",
//   projectId: "bad-talk",
//   storageBucket: "bad-talk.appspot.com",
//   messagingSenderId: "871628983812",
//   appId: "1:871628983812:web:7396c45ac761cdde23af51",
//   measurementId: "G-Z7Q8LTL7B8"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDYkMtLxcGQeL2r_KMSxudDf9YvYZfB-Pg",
  authDomain: "bad-talks.firebaseapp.com",
  projectId: "bad-talks",
  storageBucket: "bad-talks.appspot.com",
  messagingSenderId: "676174438926",
  appId: "1:676174438926:web:f827c1123612bcbb97125f",
  measurementId: "G-BLWVQXQW4B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const  analytics = getAnalytics(app);
export const db = getFirestore(app);