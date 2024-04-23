import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
import Client from '../models/client';

const db = getFirestore();

async function TestConn(client: Client) {
    const citiesRef = db.collection('users');

    await citiesRef.doc(client.Name).set(
        client
    );
    
    const cityRef = db.collection('users').doc(client.Name);
    const doc = await cityRef.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log(doc.data());
        return doc.data();
    }
}

export { TestConn }