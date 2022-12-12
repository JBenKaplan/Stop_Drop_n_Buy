const { Schema } = require('mongoose')

const Product = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: false },
    splash: { type: String, required: false },
    icon: { type: String, required: false },
    cart_id: { type: Schema.Types.ObjectId, ref: 'Cart' }
  },
  { timestamps: true }
)

module.exports = Product
