const { Router } = require('express')
const controllers = require('../controllers/CartController')
const router = Router()

router.get('/api', (req, res) => res.send('This is root!'))

router.get('/all', controllers.getAllCarts)
router.get('/:id', controllers.getCartById)

router.post('/', controllers.createCart)

module.exports = router
