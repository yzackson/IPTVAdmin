import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import express from 'express'
require('dotenv').config()

const serviceAccount = require("./secrete-key-firebase.json")
initializeApp({
  credential: cert(serviceAccount)
});

import {TestConn} from './source/db'

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.get('/NovoUsuario', (req, res) => {
  res.send(TestConn(req.body))
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
