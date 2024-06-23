import { BrowserRouter as Router, Route, Routes } from  'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import theme from './theme'
import store from './store'

import CssBaseline from '@mui/material/CssBaseline'

import DashboardLayout from './layouts/DashboardLayout'

import DashboardPage from './pages/HomePage'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>
            <Route path='/' element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
