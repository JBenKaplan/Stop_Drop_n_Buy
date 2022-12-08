const { Schema } = require('mongoose')

const Product = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: false },
    product_id: { type: Number, required: true },
    cart_id: { type: Schema.Types.ObjectId, ref: 'Cart' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', Product)
