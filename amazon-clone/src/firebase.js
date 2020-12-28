import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHZA2eAeWy3YKq-SXHRPoWkJvtuZp06Ig",
    authDomain: "clone-9cda2.firebaseapp.com",
    projectId: "clone-9cda2",
    storageBucket: "clone-9cda2.appspot.com",
    messagingSenderId: "1047907916617",
    appId: "1:1047907916617:web:6a569a36865bbb82c21898"
})

const auth = firebaseApp.auth()

export {auth}

