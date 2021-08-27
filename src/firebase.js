// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJnG_jgh_tbzK9YLqjpP2hFRDKc4K_H-I",
    authDomain: "crudreact-6c85b.firebaseapp.com",
    projectId: "crudreact-6c85b",
    storageBucket: "crudreact-6c85b.appspot.com",
    messagingSenderId: "342959758463",
    appId: "1:342959758463:web:3aacb2907424faf9b8b34a"
};


// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)
