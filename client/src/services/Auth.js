import Client from './api'

export const SignInUser = async (data) => {
  const res = await Client.post('/auth/signin', data)
  localStorage.setItem('token', res.data.token)
  return res.data.user
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const CheckSession = async () => {
  // Checks if the current token if it exists is valid
  const res = await Client.get('/auth/session')
  return res.data
}
