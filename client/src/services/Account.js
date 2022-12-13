import Client from './api'

export const UpdateAccount = async (updateBody) => {
  let res = await Client.put('/auth/update', updateBody)
  return res
}

export const DeleteAccount = async (email) => {
  const res = await Client.delete(`/auth/${email}`)
  return res.data
}
