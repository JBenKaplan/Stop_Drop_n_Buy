const db = require('../db')
const { Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      name: 'Apple AirPods',
      description: 'https://www.apple.com/airpods',
      price: '250',
      category: 'tech',
      quantity: 10
    },
    {
      name: 'Apple iPhone Pro',
      description: 'https://www.apple.com/iphone-11-pro',
      price: '1000',
      category: 'tech',
      quantity: 10
    },
    {
      name: 'Apple Watch',
      description: 'https://www.apple.com/watch',
      price: '499',
      category: 'tech'
    },
    {
      name: 'Vespa Primavera',
      description: 'https://www.vespa.com/us_EN/vespa-models/primavera.html',
      price: '3000',
      category: 'transportation',
      quantity: 10
    },
    {
      name: 'New Balance 574 Core',
      description: 'https://www.newbalance.com/pd/574-core/ML574-EG.html',
      price: '84',
      category: 'shoes',
      quantity: 10
    },
    {
      name: 'Tribe Messenger Bike 004',
      description:
        'https://tribebicycles.com/collections/messenger-series/products/mess-004-tx',
      price: '675',
      category: 'transportation',
      quantity: 10
    },
    {
      name: 'Stumptown Hair Bender Coffee',
      description: 'https://www.stumptowncoffee.com/products/hair-bender',
      price: '17',
      category: 'kitchen',
      quantity: 10
    }
  ]

  await Product.insertMany(products)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()
