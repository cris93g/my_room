import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyByLspHCUfAR2_4YB8qZi-vhBZNlJaVADc",
    authDomain: "my-room-b9e85.firebaseapp.com",
    databaseURL: "https://my-room-b9e85.firebaseio.com",
    projectId: "my-room-b9e85",
    storageBucket: "my-room-b9e85.appspot.com",
    messagingSenderId: "446018574644",
    appId: "1:446018574644:web:304ae3c039352b970aad61",
    measurementId: "G-KMZCR5LHZK"
}

firebase.initializeApp(config)
window.firebase = firebase;

export const firestore = firebase.firestore()