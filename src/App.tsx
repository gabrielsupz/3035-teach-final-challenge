import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingContextProvider } from './Contexts/LoadingContext'
import { AccessPage } from './Pages/AccessPage'
import { GlobalStyle } from './Styles/globalStyle'
import { ProfileInformationPage } from './Pages/ProfileInformationPage'
import { RepositoryInfoPage } from './Pages/RepositoryInfoPage'
function App() {
  return (
    <>
      <GlobalStyle />
      <LoadingContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AccessPage />} />
            <Route path="/profile" element={<ProfileInformationPage />} />
            <Route path="/repository" element={<RepositoryInfoPage />} />
          </Routes>
        </BrowserRouter>
      </LoadingContextProvider>
    </>
  )
}

export default App
