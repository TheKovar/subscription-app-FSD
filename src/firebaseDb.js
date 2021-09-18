import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDTbEXus1XDNgcddM6aYKdzKyZn2vldyTM',
  authDomain: 'my-subscriptions-428a8.firebaseapp.com',
  projectId: 'my-subscriptions-428a8',
  storageBucket: 'my-subscriptions-428a8.appspot.com',
  messagingSenderId: '46799650221',
  appId: '1:46799650221:web:f9ab107521031c5028f524'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
