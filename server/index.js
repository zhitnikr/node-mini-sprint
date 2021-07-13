/*
const http = require('http');

//headers to allows CORS requests
const headers = {
  "Access-Control-Allow-Origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  'Cheeki Breeki',
  'Winner winner chiken Dinner',
  'To be or not to be',
  'four twenty',
  'Math'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  if (req.method == "OPTIONS") {
    //YOUR CODE HERE
    res.writeHead(200, {...headers, Location: `http://localhost:${port}/quote`});
    res.end()
  }
  // TODO: GET ONE
  else if ((req.url == '/quote' || req.url == '/quote/') && req.method == "GET") {
    //YOUR CODE HERE
    res.writeHead(200, {...headers, Location: `http://localhost:${port}/quote`});
    // res.header("Access-Control-Allow-Origin", "*")
    res.end(quotes[getRandomInt(0, (quotes.length - 1))])
  }
  // TODO: POST/CREATE
  else if ((req.url == '/quote/' || req.url == '/quote') && req.method == "POST") {
    //YOUR CODE HERE
    var outsidetheScope = '';
    req.on('data', (data) => {
      outsidetheScope += data;
    })
    req.on('end', () => {
      // console.log(outsidetheScope)
      if (JSON.parse(outsidetheScope).quote.length > 0) {
        quotes.push(JSON.parse(outsidetheScope).quote);
        console.log(quotes);
        res.writeHead(201, {...headers, Location: `http://localhost:${port}/quote`});
        res.end();
      } else {
        res.writeHead(400, {...headers, Location: `http://localhost:${port}/quote`});
        res.end(
          console.log('enter a valid quote')
        );

      }
    })
    // res.end(quotes.push(req.body))
  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
// server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
*/