const { Schema } = require('mongoose')

const Cart = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: false },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    cart_id: { type: Number, required: false },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  },
  { timestamps: true }
)

module.exports = Cart
