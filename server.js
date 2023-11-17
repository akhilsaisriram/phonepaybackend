const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

// const Routs=require('/Routs.js')
require("dotenv").config();

app.use(express.json());  
app.use(cors());
const bodyParser = require('body-parser');

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


// app.use(Routs ,function (req, res, next) {
//     // console.log("Middleware called")
//      next();
//    });
const {newPayment, checkStatus} = require('./phonepy');


app.post('/payment', newPayment);
app.post('/status/:txnId', checkStatus);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });