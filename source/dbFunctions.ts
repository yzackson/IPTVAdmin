import Client from '../models/client';
import ClientData from '../models/clientData';
import db from './db'

async function AddUpdateClient(client: Client) {
    const citiesRef = db.collection('users');

    await citiesRef.doc(client.Name).set(
        client
    );
}

async function GetClient(client: string) {
    
    const cityRef = db.collection('users').doc(client);
    const doc = await cityRef.get();
    if (!doc.exists) {
        return 'No such document!';
    } else {
        return doc.data();
    }
}

async function GetAllClient() {
    const citiesRef = db.collection('users');
    const snapshot = await citiesRef.get();
    var result: ClientData[] = [];
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      let obj = new ClientData(doc.id, doc.data() as Client)
      result.push(obj)
    });

    return result;
}

export { AddUpdateClient, GetClient, GetAllClient }