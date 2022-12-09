const { Router } = require('express')
const controllers = require('../controllers/ProductController')
const router = Router()

router.get('/api', (req, res) => res.send('This is root!'))

router.get('/all', controllers.getAllProducts)

router.post('/create', controllers.createProduct)

router.put('/cart/:id/:product_id', controllers.addProductToCart)

module.exports = router
