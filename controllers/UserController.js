const { User, Product, Cart } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.find({ $where: { user_id } })
    return res.status(200).json({ cart })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getUserCart
}
