const express = require('express');
const db = require('./db')
const { getAll, create } = require('./model')
const cors = require('cors')
// const router = express.Router(); // ? is this necessary ?
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/', router)
// app.use(bodyParser);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
// const http = require('http');

// TODO: Fill with strings of your favorite quotes :)
// const quotes = [
  // 'Cheeki Breeki',
  // 'Winner winner chiken Dinner',
  // 'To be or not to be',
  // 'four twenty',
  // 'Math'
// ];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

app.get('/quotes', (req, res) => {
  // SQL COMMAND HERE
  let quotes = [];
  getAll((err, result) => {
    quotes = result.map((item) => {
      return item.quote
    })
    console.log('this is quotes ', quotes)
    res.send(quotes[getRandomInt(0, quotes.length)])
  })
})

app.post('/quotes', (req, res) => {
  if (req.body.quote) {
    create(req.body.quote, (err, results) => {
      if (err) {
        // console.error(err)
      } else {
        console.log('Sent it: ', results)
        res.send();
      }
    })}})
    // quotes.push(Object.values(req.body)[0]);
    // console.log(quotes)

// const server = http.createServer(handleRequest);
// app.use(express.static('../react-client/dist'))
app.use(express.static(path.join(__dirname, '../react-client/dist')))
app.listen(port);
// console.log('checkdirname: ', __dirname.toString())
// console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
