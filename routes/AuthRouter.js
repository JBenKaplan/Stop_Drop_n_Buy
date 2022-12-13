const { Router } = require('express')
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')
const router = Router()

router.get('/auth', (req, res) => {
  res.send('this is the auth router')
})
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

router.post('/signin', controller.SignIn)
router.post('/register', controller.Register)

router.put('/update', controller.UpdateUser)

router.delete(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)

module.exports = router
