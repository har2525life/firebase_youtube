import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseApp = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseApp)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();
export const googleLogin = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
}

export const emailSignIn = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((credentialUser) => {
            console.log(credentialUser)
        }).catch((error) => {
            console.log(error)
        })
}