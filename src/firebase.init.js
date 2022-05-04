// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVOywha8yduNSQreeXMUfD-673le6ez3o",
  authDomain: "assignment-eleven-9deb6.firebaseapp.com",
  projectId: "assignment-eleven-9deb6",
  storageBucket: "assignment-eleven-9deb6.appspot.com",
  messagingSenderId: "529312217333",
  appId: "1:529312217333:web:5bb2690e68ce6ccd30edbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
