const connection = require('../config/mysql')

module.exports = {
  getProduct: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product', (error, result) => {
        console.log(error || 'success')
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  }
}
