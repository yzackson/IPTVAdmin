import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import express from 'express'

const serviceAccount = require("./secrete-key-firebase.json")
initializeApp({
  credential: cert(serviceAccount)
});

import {TestConn} from './source/db'

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  console.log(req.body)
  res.send(TestConn(req.body))
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
