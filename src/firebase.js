// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBkUH_iihtQF3LILu_3jXJ_McEMZchW6fc",
//     authDomain: "project-1-dd7f2.firebaseapp.com",
//     projectId: "project-1-dd7f2",
//     storageBucket: "project-1-dd7f2.appspot.com",
//     messagingSenderId: "271301166846",
//     appId: "1:271301166846:web:ae27b4ed704766919787af",
//     measurementId: "G-NF5N7PPB4C"
// };

import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkUH_iihtQF3LILu_3jXJ_McEMZchW6fc",
    authDomain: "project-1-dd7f2.firebaseapp.com",
    projectId: "project-1-dd7f2",
    storageBucket: "project-1-dd7f2.appspot.com",
    messagingSenderId: "271301166846",
    appId: "1:271301166846:web:ae27b4ed704766919787af",
    measurementId: "G-NF5N7PPB4C"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
  
export  {db, auth, storage};