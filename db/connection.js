const mysql = require('mysql2');

// Connect to the MySQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '2022',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );


  // Export the file
     module.exports = db;
  