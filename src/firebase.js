import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB0XXuImD2QMxMZEsOkD3AqyYwWqHBWP8I",
  authDomain: "slack-clone-challenge-5c18f.firebaseapp.com",
  projectId: "slack-clone-challenge-5c18f",
  storageBucket: "slack-clone-challenge-5c18f.appspot.com",
  messagingSenderId: "399987827418",
  appId: "1:399987827418:web:90ad73e841d08ae48a7be3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider,db}
export default db;