const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hea'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al cenectarse a la base de datos', err);
  } else {
    console.log('Conectado a la base de datos');
  }
});

module.exports = connection;
