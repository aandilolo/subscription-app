import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA3ARDNlPvrMpG6PFHpLJKs2Xor3cqHEQw',
  authDomain: 'my-subscriptions-3ece4.firebaseapp.com',
  databaseURL: 'https://my-subscriptions-3ece4.firebaseio.com',
  projectId: 'my-subscriptions-3ece4"',
  storageBucket: 'my-subscriptions-3ece4.appspot.com',
  messagingSenderId: '761125135314',
  appId: '1:761125135314:web:2a23bd5e6a40c8063e5e0b'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
