
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

export const createuserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();
        try {
            userRef.set({
                email,
                displayName,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('error while saving user', error.message);
        }
    }
    return userRef;
};

export default firebase;