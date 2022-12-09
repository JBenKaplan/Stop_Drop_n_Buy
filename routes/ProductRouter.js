const { Router } = require('express')
const controllers = require('../controllers/ProductController')
const router = Router()

router.get('/api', (req, res) => res.send('This is root!'))

router.get('/all', controllers.getAllProducts)

router.post('/create', controllers.createProduct)

router.put('/cart/:id/:product_id', controllers.addProductToCart)
router.put('/update/:product_id', controllers.updateProduct)

router.delete('/delete/:product_id', controllers.deleteProduct)

module.exports = router
