import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingContextProvider } from './Contexts/LoadingContext'
import { AccessPage } from './Pages/AccessPage'
import { GlobalStyle } from './Styles/globalStyle'
import { ProfileInformationPage } from './Pages/ProfileInformationPage'
import { RepositoryInfoPage } from './Pages/RepositoryInfoPage'
import { ShowAlertContextProvider } from './Contexts/ShowAlertMessageContext'
import { UserInfoContextProvider } from './Contexts/UserInfoContext'
function App() {
  return (
    <>
      <GlobalStyle />
      <LoadingContextProvider>
        <ShowAlertContextProvider>
          <UserInfoContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AccessPage />} />

                <Route path="/:user" element={<ProfileInformationPage />} />
                <Route
                  path=":user/repositories/:index"
                  element={<RepositoryInfoPage />}
                />
              </Routes>
            </BrowserRouter>
          </UserInfoContextProvider>
        </ShowAlertContextProvider>
      </LoadingContextProvider>
    </>
  )
}

export default App
