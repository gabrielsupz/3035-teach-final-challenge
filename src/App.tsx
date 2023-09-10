import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingContextProvider } from './Contexts/LoadingContext'
import { AccessPage } from './Pages/AccessPage'
import { GlobalStyle } from './Styles/globalStyle'
function App() {
  return (
    <>
      <GlobalStyle />
      <LoadingContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AccessPage />} />
          </Routes>
        </BrowserRouter>
      </LoadingContextProvider>
    </>
  )
}

export default App
