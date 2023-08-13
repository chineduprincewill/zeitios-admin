import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/public/Login'
import Register from './pages/public/Register'
import Header from './components/Header'
import PrivateRoute from './pages/private/PrivateRoute'
import Dashboard from './pages/private/Dashboard'
import AuthContextProvider from './context/AuthContext'
import Projects from './pages/private/Projects'
import User from './pages/private/User'
import Messages from './pages/private/Messages'
import Payouts from './pages/private/Payouts'
import Statement from './pages/private/Statement'
import Myprofile from './pages/private/Myprofile'

const App = () => {

  return (
    <div>
        <AuthContextProvider>
          <Router>
            {localStorage.getItem('auth') !== null && <Header />}
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route exact path='/projects' element={<PrivateRoute><Projects /></PrivateRoute>} />
              <Route exact path='/user' element={<PrivateRoute><User /></PrivateRoute>} />
              <Route exact path='/messages' element={<PrivateRoute><Messages /></PrivateRoute>} />
              <Route exact path='/payouts' element={<PrivateRoute><Payouts /></PrivateRoute>} />
              <Route exact path='/statement' element={<PrivateRoute><Statement /></PrivateRoute>} />
              <Route exact path='/my-profile' element={<PrivateRoute><Myprofile /></PrivateRoute>} />
            </Routes>
          </Router>
        </AuthContextProvider>
    </div>
  )
}

export default App
