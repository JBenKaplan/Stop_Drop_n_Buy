import Client from './api'

export const DeleteAccount = async (email) => {
  const res = await Client.delete(`/auth/${email}`)
  return res.data
}

export const UpdateAccount = async (updateBody) => {
  console.log(updateBody)
  let res = await Client.put('/auth/update', updateBody)
  return res
}
