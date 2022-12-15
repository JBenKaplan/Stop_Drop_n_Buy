const db = require('../db')
const { Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      name: 'Apple AirPods',
      description: 'https://www.apple.com/airpods',
      price: 125,
      category: 'tech',
      quantity: 10,
      splash:
        'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      icon: 'https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Apple iPhone 14',
      description: 'https://www.apple.com/iphone-14-pro',
      price: 800,
      category: 'tech',
      quantity: 10,
      splash:
        'https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80',
      icon: 'https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80'
    },
    {
      name: 'Apple Watch',
      description: 'https://www.apple.com/watch',
      price: 399,
      category: 'tech',
      quantity: 20,
      splash:
        'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
      icon: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
    },
    {
      name: 'Vespa Primavera',
      description: 'https://www.vespa.com/us_EN/vespa-models/primavera.html',
      price: 3000,
      category: 'transportation',
      quantity: 10,
      splash:
        'https://images.unsplash.com/photo-1545341944-c3e00468c932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      icon: 'https://images.unsplash.com/photo-1527484885616-7f73af7fade2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'New Balance 574 Core',
      description: 'https://www.newbalance.com/pd/574-core/ML574-EG.html',
      price: 85,
      category: 'shoes',
      quantity: 10,
      splash:
        'https://nb.scene7.com/is/image/NB/wl574evg_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600',
      icon: 'https://nb.scene7.com/is/image/NB/wl574evg_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600'
    },
    {
      name: 'Tribe Messenger Bike 004',
      description:
        'https://tribebicycles.com/collections/messenger-series/products/mess-004-tx',
      price: 675,
      category: 'transportation',
      quantity: 10,
      splash:
        'https://cdn.shopify.com/s/files/1/0604/3445/products/DSC_0035_cbf0228f-da71-48f5-93cc-6b4e70bf34cd.JPG?v=1506714571',
      icon: 'https://cdn.shopify.com/s/files/1/0604/3445/products/texas_mess.jpg?v=1490109070'
    },
    {
      name: 'Stumptown Hair Bender Coffee',
      description: 'https://www.stumptowncoffee.com/products/hair-bender',
      price: 16,
      category: 'kitchen',
      quantity: 10,
      splash:
        'https://stumptown-shop.imgix.net/products/HairBender_PDP_2.jpg?v=1654617976&auto=format,compress&w=375',
      icon: 'https://global-uploads.webflow.com/5f17639b4b18ef4943eb27ed/5f3d93b1f4f2f395a848502f_stumptown%20hair%20bender-p-500.jpeg'
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
