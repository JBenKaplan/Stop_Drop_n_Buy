const { Schema } = require('mongoose')

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    shippingAddress: { type: String, required: false },
    cart_id: { type: Schema.Types.ObjectId, ref: 'Cart' }
  },
  { timestamps: true }
)

module.exports = User
