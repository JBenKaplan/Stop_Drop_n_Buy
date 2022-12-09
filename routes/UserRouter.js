const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/api', (req, res) => res.send('This is root!'))

router.get('/users', controllers.getAllUsers)
router.get('/products', controllers.getAllProducts)
router.get('/carts', controllers.getAllCarts)

module.exports = router
