import { useContext, createContext, useState } from 'react'
import { RepositoryProps } from '../Pages/ProfileInformationPage'

type UserInfoContextType = {
  userInfo: UserInfoProps
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoProps>>
}

interface UserInfoContextProviderType {
  children: React.ReactNode
}

export interface UserInfoProps {
  bio: string
  name: string
  login: string
  avatar_url: string
  repositoriesList: RepositoryProps[]
}

export const UserInfoContext = createContext<UserInfoContextType>(
  {} as UserInfoContextType
)
export const UserInfoContextProvider = ({
  children
}: UserInfoContextProviderType) => {
  const [userInfo, setUserInfo] = useState({} as UserInfoProps)

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}

export function useUserInfo(): UserInfoContextType {
  const context = useContext(UserInfoContext)
  return context
}
