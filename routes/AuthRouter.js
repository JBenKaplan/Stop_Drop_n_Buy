const { Router } = require('express')
const controllers = require('../controllers/AuthController')

const router = Router()

router.get('/auth', (req, res) => {
  res.send('this is the auth router')
})

router.post('/register', controllers.Register)

module.exports = router
