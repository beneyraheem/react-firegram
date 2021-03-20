import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2UTmd9H1BbzktVc8d6NZBMSr2lt1Cc3k",
  authDomain: "beney-firegram.firebaseapp.com",
  projectId: "beney-firegram",
  storageBucket: "beney-firegram.appspot.com",
  messagingSenderId: "358547824596",
  appId: "1:358547824596:web:db67d74afd9acd24368041",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialise storage service
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
