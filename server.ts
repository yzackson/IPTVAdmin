import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import express from 'express'
require('dotenv').config()

const serviceAccount = require("./secrete-key-firebase.json")
initializeApp({
  credential: cert(serviceAccount)
});

import {AddUpdateClient, GetClient, GetAllClient} from './source/dbFunctions'

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.post('/NewUser', (req, res) => {
  if(req.query.key as string == process.env.REQ_KEY){
    AddUpdateClient(req.body);
    res.send("Recebido")
  } else {
    res.send('Unauthorized')
  }
});

app.get('/GetUser', async (req, res) => {
  if(req.query.key as string == process.env.REQ_KEY){
    let result = await GetClient(req.query.client as string);
    res.send(result)
  } else {
    res.send('Unauthorized')
  }
});

app.get('/GetAllUser', async (req, res) => {
  if(req.query.key as string == process.env.REQ_KEY){
    let result = await GetAllClient();
    res.send(result)
  } else {
    res.send('Unauthorized')
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
