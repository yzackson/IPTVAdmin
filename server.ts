import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import express from 'express'

//const serviceAccount = require("./iptvadmin-68e78-firebase-adminsdk-jllen-1f2795e027.json")
const serviceAccount = require("./models/apiFirebase")
const k = serviceAccount();
initializeApp({
  credential: cert(k)
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
