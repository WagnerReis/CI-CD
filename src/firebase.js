import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA5EEisq3tuFVJ62b0o0VKEGT2hJaym3S8",
  authDomain: "comentaki-react-app.firebaseapp.com",
  databaseURL: "https://comentaki-react-app.firebaseio.com",
  projectId: "comentaki-react-app",
  storageBucket: "comentaki-react-app.appspot.com",
  messagingSenderId: "810251522778",
  appId: "1:810251522778:web:03f501c80b8e8b3d248be3"
}

firebase.initializeApp(firebaseConfig)

export default firebase