const { User, Product, Cart } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.find({ $where: { user_id } })
    return res.status(200).json({ cart })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  try {
    // console.log(req.body)
    const { name, email, newPassword, password, userId } = req.body
    //confirm password
    const user = await User.findById(userId)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        password
      ))
    ) {
      // if password is confirmed, set update body
      let updateBody = {}
      if (name) {
        updateBody.name = name
      }
      if (email) {
        updateBody.email = email
      }
      if (newPassword) {
        let passwordDigest = await middleware.hashPassword(newPassword)
        updateBody.passwordDigest = passwordDigest
      }
      //send the update request
      let updateConfirm = await User.update(updateBody, {
        where: { id: userId },
        returning: true
      })
      console.log(updateConfirm)
      return res.send(updateConfirm)
    }
    console.log('C')
    res
      .status(401)
      .send({ status: 'Error', msg: 'password does not match stored password' })
  } catch (error) {
    // console.log('D')
    throw error
  }
}

module.exports = {
  getAllUsers,
  getUserCart,
  updateUser
}
