const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'backend'
})

connection.connect((error) => {
  if (error) {
    console.log(error)
  }
  console.log("you're now connected")
})

module.exports = connection
