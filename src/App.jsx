import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import AthleteProfile from './pages/AthleteProfile'
import PartnerDashboard from './pages/PartnerDashboard'
import TalentDiscovery from './pages/TalentDiscovery'
import Challenges from './pages/Challenges'
import Community from './pages/Community'
import Marketplace from './pages/Marketplace'
import Stream from './pages/Stream'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/athlete/:id" element={<AthleteProfile />} />
            <Route path="/partner-dashboard" element={<PartnerDashboard />} />
            <Route path="/talent-discovery" element={<TalentDiscovery />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/community" element={<Community />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App