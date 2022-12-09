const { Router } = require('express')
const controllers = require('../controllers/ProductController')
const router = Router()

router.get('/api', (req, res) => res.send('This is root!'))

router.get('/products')

module.exports = router
