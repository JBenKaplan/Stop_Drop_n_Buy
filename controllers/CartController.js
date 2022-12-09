const { User, Product, Cart } = require('../models')

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
    return res.status(200).json({ carts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCartById = async (req, res) => {
  try {
    const { id } = req.params
    const cart = await Cart.findById(id)
    if (cart) {
      return res.status(200).json({ cart })
    }
    return res.status(404).send('Cart with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createCart = async (req, res) => {
  try {
    const cart = await new Cart(req.body)
    await cart.save()
    return res.status(201).json({
      cart
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllCarts,
  getCartById,
  createCart
}
