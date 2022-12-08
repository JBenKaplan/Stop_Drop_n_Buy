const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: false },
    shippingAddress: { type: String, required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
