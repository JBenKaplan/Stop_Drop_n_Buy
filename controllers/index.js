const { User, Product, Cart } = require('../models')

// Get methods
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json({ products })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
    return res.status(200).json({ carts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getAllProducts,
  getAllCarts
}
