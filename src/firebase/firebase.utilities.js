
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnHmVYqlzt2jzH5vjVetqtgOks3aATVGk",
    authDomain: "crwn-db-fce26.firebaseapp.com",
    databaseURL: "https://crwn-db-fce26.firebaseio.com",
    projectId: "crwn-db-fce26",
    storageBucket: "",
    messagingSenderId: "1057394833621",
    appId: "1:1057394833621:web:a0efaa4a5caa6afea1ca5c",
    measurementId: "G-14J2ZWKY5P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;