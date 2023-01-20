import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCx6K6aV-R63UdeFyVJmxfi6ImYs4Ky7WM",
    authDomain: "olx-react-7392f.firebaseapp.com",
    projectId: "olx-react-7392f",
    storageBucket: "olx-react-7392f.appspot.com",
    messagingSenderId: "619229234518",
    appId: "1:619229234518:web:33218b15ac02a9be9dc2f7",
    measurementId: "G-FYLQ43L2CP"
  //   apiKey: "AIzaSyCzl5LqY4XydaujyB-LYRlMPdGi2h093fE",

  // authDomain: "olxx-3dc9b.firebaseapp.com",

  // projectId: "olxx-3dc9b",

  // storageBucket: "olxx-3dc9b.appspot.com",

  // messagingSenderId: "578134600455",

  // appId: "1:578134600455:web:a0405ed2675ad4d3acb3a2"

  };

 export default firebase.initializeApp(firebaseConfig)