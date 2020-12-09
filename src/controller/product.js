const { getProduct } = require('../model/product')
const { response } = require('../helper/response')

module.exports = {
  getProduct: async (req, res) => {
    try {
      const result = await getProduct()
      return response(res, 200, 'success get product', result)
      // res.status(200).send(result)
    } catch (error) {
      return response(res, 400, 'Bad Request', error)
    }
  },
  postProduct: (req, res) => {
    console.log(req.body)
  }
}
