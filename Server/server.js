const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// mongodb+srv://Samaksh:hamux1234@cluster0.spzon.mongodb.net/amazonext?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://hamux:hamux1234@cluster0.spzon.mongodb.net/amazonext?retryWrites=true&w=majority', {useNewUrlParser: true}).then(console.log("connected")).catch(error => console.log(error));

app.get('/', (req, res) => {
  res.send('Hello World!')
})



const body = {
  "name": "amazon_price",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background":{
	   "service_worker": "./background.js"
   },
   "action": {
     "default_popup": "popup.html"
  }
}


app.post('/',(req,res) => {
  res.send(body);
  //console.log(req.json());
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
