import Client from './api'

export const SignInUser = async (data) => {
  const res = await Client.post('/users/login', data)
  localStorage.setItem('token', res.data.token)
  return res.data.user
}

export const RegisterUser = async (data) => {
  try {
    // console.log(data)
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const CheckSession = async () => {
  // Checks if the current token if it exists is valid
  const res = await Client.get('/users/session')
  return res.data
}

export const GetRooms = async (req) => {
  const res = await Client.get(`/rooms/user/${req.id}`)
  return res.data
}
