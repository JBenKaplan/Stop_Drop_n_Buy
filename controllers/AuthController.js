const { User } = require('../models')
const middleware = require('../middleware')

const SignIn = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'SignIn Error' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const payload = res.locals
  res.send(payload)
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

const UpdateUser = async (req, res) => {
  try {
    const { username, email, password, newPassword } = req.body
    //confirm password
    const user = await User.findOne({ where: { username } })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, password))
    ) {
      // if password is confirmed, set update body
      let updateBody = {}
      if (username) {
        updateBody.username = username
      }
      if (email) {
        updateBody.email = email
      }
      if (newPassword) {
        let passwordDigest = await middleware.hashPassword(newPassword)
        updateBody.passwordDigest = passwordDigest
      }
      //send the update request
      let updateConfirm = await User.findOneAndUpdate({
        where: { username },
        updateBody
      })
      console.log(updateConfirm)
      return res.send(updateConfirm)
    }
    console.log('C')
    res
      .status(401)
      .send({ status: 'Error', msg: 'password does not match stored password' })
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let email = parseInt(req.params.email)
    let user = await User.findOne({ where: { email } })
    await user.remove()
    res.send({
      message: `Deletion Confirmed: User: ${email}`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  SignIn,
  CheckSession,
  Register,
  UpdateUser,
  DeleteUser
}
