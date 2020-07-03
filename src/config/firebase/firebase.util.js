import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBOBTi2I0a3e9XM8Ef953oNZufsqUid1A",
    authDomain: "react-ecommerce-f0de3.firebaseapp.com",
    databaseURL: "https://react-ecommerce-f0de3.firebaseio.com",
    projectId: "react-ecommerce-f0de3",
    storageBucket: "react-ecommerce-f0de3.appspot.com",
    messagingSenderId: "585465511046",
    appId: "1:585465511046:web:04972cff5b42a78b4ca507"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
