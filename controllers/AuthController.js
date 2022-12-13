const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    console.log(req.body)
    let passwordDigest = await middleware.hashPassword(password)
    const user = new User({ username, email, passwordDigest })
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
