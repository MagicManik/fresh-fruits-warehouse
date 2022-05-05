import { getAuth } from "firebase/auth";


import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq17_QvZ31y9X1zQgZL1Sd8w3ByTk1KBI",
    authDomain: "fresh-fruits-warehouse-64fd3.firebaseapp.com",
    projectId: "fresh-fruits-warehouse-64fd3",
    storageBucket: "fresh-fruits-warehouse-64fd3.appspot.com",
    messagingSenderId: "263915533665",
    appId: "1:263915533665:web:fb5f3d031042c06d8b0120"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;