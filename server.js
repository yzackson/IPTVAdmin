const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require("C:\\Dev\\Personal\\IPTVManager\\BackEnd\\iptvadmin-68e78-firebase-adminsdk-jllen-7714d4267f.json")

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

/*
const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

const aTuringRef = db.collection('users').doc('aturing');

aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});
*/

db.collection('users').get().then(snapshot => {
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
});
