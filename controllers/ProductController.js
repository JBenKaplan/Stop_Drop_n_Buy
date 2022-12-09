const { User, Product, Cart } = require('../models')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json({ products })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addProductToCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, {
      $push: { products: req.params.product_id }
    })
    res.status(200).send(cart)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllProducts,
  addProductToCart
}
