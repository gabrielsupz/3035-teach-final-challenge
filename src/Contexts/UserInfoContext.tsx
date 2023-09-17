import { useContext, createContext, useState } from 'react'

type UserInfoContextType = {
  userInfo: UserInfoProps
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoProps>>
}

interface UserInfoContextProviderType {
  children: React.ReactNode
}

interface UserInfoProps {
  bio: string
  name: string
  login: string
  avatar_url: string
  repos_url: string
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
