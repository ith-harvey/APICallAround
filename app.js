const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const data = require('./data')
const port = process.env.PORT || 3000
const path = require('path')

app.use(bodyParser.json())

app.get('/', connected)
app.get('/data', getData)
app.post('/data', addData)

app.listen(port, () => {
  console.log(`Friday Warm Up API on ${port}!!!!!!!`);
})



function connected (req,res) {
  res.send('you are connected');
}

function getData (req, res) {
  res.send(data[0])
}

function addData (req, res) {
  let url = req.body.Data.replace(/([aeiou])+/g, 'DOLPHINS = Awesome')
  data[0] = url
  console.log(data[0]);
  res.json(url)
}
