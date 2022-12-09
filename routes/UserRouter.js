const { Router } = require('express')
const controllers = require('../controllers/UserController')
const middleware = require('../middleware')
const router = Router()

router.get('/api', (req, res) => res.send('This is root!'))

router.get('/all', controllers.getAllUsers)
router.get(
  '/cart',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.getAllUsers
)

router.put('/update', controllers.updateUser)

module.exports = router
