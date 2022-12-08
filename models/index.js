const { model } = require('mongoose')
const UserSchema = require('./user')
const CartSchema = require('./cart')
const ProductSchema = require('./product')

const User = model('User', UserSchema)
const Cart = model('Cart', CartSchema)
const Product = model('Product', ProductSchema)

module.exports = {
  User,
  Cart,
  Product
}
