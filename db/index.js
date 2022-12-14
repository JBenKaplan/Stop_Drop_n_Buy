const mongoose = require('mongoose')
require('dotenv').config() // Add this line

// let MONGODB_URI = 'mongodb://127.0.0.1:27017/stopDropNBuy'
let MONGODB_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/StopDropBuy'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
