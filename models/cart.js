const { Schema } = require('mongoose')

const Cart = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  },
  { timestamps: true }
)

module.exports = Cart
