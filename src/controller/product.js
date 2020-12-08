module.exports = {
  getProduct: (req, res) => {
    const data = {
      data: [
        {
          product_id: 1,
          product_name: 'meja',
          product_status: 1
        }
      ]
    }
    res.status(200).send(data)
  },
  postProduct: (req, res) => {
    console.log(req.body)
  }
}
