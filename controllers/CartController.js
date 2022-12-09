const { User, Product, Cart } = require('../models')

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
    return res.status(200).json({ carts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCarts
}
