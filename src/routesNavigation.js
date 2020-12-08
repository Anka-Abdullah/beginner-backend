const router = require('Express').Router()
const product = require('./route/product')

router.use('/product', product)
module.exports = router
