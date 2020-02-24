
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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });



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
export const convertCollectionsToMap = (collections) => {

    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollections.reduce((acc, coll) => {
        acc[coll.title.toLowerCase()] = coll;
        return acc;
    }, {});
}
export const createCollectionsAndDocuments = async (collectionKey, docsToAdd) => {
    const collRef = firestore.collection(collectionKey);
    // Firebase can only call one set() a time.
    // even if we called collRef.set(array) it's going to call one at a time also
    // so we should use batch() as a transaction

    const batch = firestore.batch();
    docsToAdd.forEach(({ items, title }) => {
        const docRef = collRef.doc();// if id arg is null so it will return new objects;
        batch.set(docRef, { items, title });
    });
    return await batch.commit();
}
export const checkIfUserAuthenticated = () => {
    return new Promise((resolve, reject) => {
        const unsubscribeAuth = auth.onAuthStateChanged(user => {
            unsubscribeAuth();
            resolve(user);
        }, error => reject(error));
    });
}
export default firebase;    