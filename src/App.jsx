import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import AthleteProfile from './pages/AthleteProfile'
import Challenges from './pages/Challenges'
import Community from './pages/Community'
import Marketplace from './pages/Marketplace'
import Stream from './pages/Stream'
import SupportUs from './components/SupportUs'

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/athlete/:id" element={<AthleteProfile />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/community" element={<Community />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/stream" element={<Stream />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App