const router = require('Express').Router()
const { getProduct, postProduct } = require('../controller/product')

router.get('/', getProduct)
router.post('/', postProduct)

module.exports = router
