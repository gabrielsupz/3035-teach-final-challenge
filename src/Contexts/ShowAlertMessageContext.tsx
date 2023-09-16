import { useContext, createContext, useState } from 'react'
type ShowAlertContextType = {
  showAlert: boolean
  setShowAlertState(state: boolean): void
}

interface ShowAlertContextProviderType {
  children: React.ReactNode
}

export const ShowAlertContext = createContext<ShowAlertContextType>(
  {} as ShowAlertContextType
)
export const ShowAlertContextProvider = ({
  children
}: ShowAlertContextProviderType) => {
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const setShowAlertState = (state: boolean) => {
    setShowAlert(state)
  }

  return (
    <ShowAlertContext.Provider value={{ showAlert, setShowAlertState }}>
      {children}
    </ShowAlertContext.Provider>
  )
}
export function useShowAlert(): ShowAlertContextType {
  const context = useContext(ShowAlertContext)
  return context
}
