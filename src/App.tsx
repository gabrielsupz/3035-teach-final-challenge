import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingContextProvider } from './Contexts/LoadingContext'
import { AccessPage } from './Pages/AccessPage'
import { GlobalStyle } from './Styles/globalStyle'
import { ProfileInformationPage } from './Pages/ProfileInformationPage'
import { RepositoryInfoPage } from './Pages/RepositoryInfoPage'
import { ShowAlertContextProvider } from './Contexts/ShowAlertMessageContext'
function App() {
  return (
    <>
      <GlobalStyle />
      <LoadingContextProvider>
        <ShowAlertContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AccessPage />} />

              <Route
                path="/profile/:user"
                element={<ProfileInformationPage />}
              />
              <Route path="/repository" element={<RepositoryInfoPage />} />
            </Routes>
          </BrowserRouter>
        </ShowAlertContextProvider>
      </LoadingContextProvider>
    </>
  )
}

export default App
