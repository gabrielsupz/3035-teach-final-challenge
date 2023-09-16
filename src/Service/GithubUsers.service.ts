import { Api } from './api'

export async function GetUser(userName: string) {
  try {
    const response = await Api.get(`/${userName}`)

    return response.data
  } catch (err) {
    throw new Error(err as string)
  }
}
