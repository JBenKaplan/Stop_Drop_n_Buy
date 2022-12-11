const { User, Product, Cart } = require('../models')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json({ products })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.product_id)
    return res.status(201).json({ product })
  } catch (error) {}
}

const addProductToCart = async (req, res) => {
  try {
    // if (product_id in products) {
    // add one to a counter in the cart for item
    // } else {
    // push new item
    // }
    const cart = await Cart.findByIdAndUpdate(req.params.id, {
      $push: { products: req.params.product_id }
    })
    res.status(200).send(cart)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateProduct = async (req, res) => {
  try {
    let productId = req.params.product_id
    let { name, description, price, category, quantity } = req.body
    let updatedProduct = await Product.findByIdAndUpdate(productId, {
      name,
      description,
      price,
      category,
      quantity
    })
    res.send(updatedProduct)
  } catch (error) {
    throw error
  }
}

const removeProductFromCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, {
      $pull: { products: req.params.product_id }
    })
    return res.status(202).send(cart)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.product_id)
    res.send(product)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  addProductToCart,
  updateProduct,
  deleteProduct,
  removeProductFromCart
}
