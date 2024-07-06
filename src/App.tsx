import { BrowserRouter as Router, Route, Routes } from  'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import { ToastContainer } from 'react-toastify';

import theme from './theme'
import store from './store'

import CssBaseline from '@mui/material/CssBaseline'

import DashboardLayout from './layouts/DashboardLayout'

import DashboardPage from './pages/HomePage'

import TestModal from './components/modals/TestModal'
import TaskMenuModal from './components/modals/TaskMenuModal';

import 'react-toastify/dist/ReactToastify.css'

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

          <ToastContainer />

          <TestModal />
          <TaskMenuModal />
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
