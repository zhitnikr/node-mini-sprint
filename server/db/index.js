var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hackreactor123',
  database: 'quotesDB'
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;