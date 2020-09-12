import firebase from 'firebase'
import * as firebaseui from "firebaseui"

const firebaseConfig = {
    apiKey: "AIzaSyDhP-J14qHa7VK1XCqdBmfqvFNpOydBZqw",
    authDomain: "test-c10cb.firebaseapp.com",
    databaseURL: "https://test-c10cb.firebaseio.com",
    projectId: "test-c10cb",
    storageBucket: "test-c10cb.appspot.com",
    messagingSenderId: "418574315574",
    appId: "1:418574315574:web:cd9ca982bc4b706946a897",
    measurementId: "G-X41VWY8MG4"
  };

  firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore()
    const auth = firebase.auth()

    function authUI () {
        const ui = new firebaseui.auth.AuthUI(auth);
        const uiConfig = {
            signInSuccessUrl: "/form",
            signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }

    export {
        db,
        auth,
        authUI
      }