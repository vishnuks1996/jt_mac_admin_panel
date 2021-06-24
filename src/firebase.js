import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAj6dvndRfNim6P0nIEQBc-ZPx06hz4Lg",
    authDomain: "jt-mac.firebaseapp.com",
    projectId: "jt-mac",
    storageBucket: "jt-mac.appspot.com",
    messagingSenderId: "563984327282",
    appId: "1:563984327282:web:c70c70b78f7b6feba298eb",
    measurementId: "G-81ZYHS4HP2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export default firebaseApp;