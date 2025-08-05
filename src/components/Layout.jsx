import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Home, 
  Trophy, 
  Users, 
  ShoppingBag, 
  Video, 
  User, 
  Menu, 
  X,
  LogOut,
  Settings
} from 'lucide-react'
import SupportUs from './SupportUs'
import MobileNav from './MobileNav'

const Layout = ({ children }) => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Challenges', href: '/challenges', icon: Trophy },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
    { name: 'Live Stream', href: '/stream', icon: Video },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-text">Sportory</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-text hover:text-primary'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 text-text hover:text-primary transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="hidden sm:block">{user.name}</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="p-2 text-text hover:text-primary transition-colors"
                    title="Settings"
                  >
                    <Settings size={20} />
                  </Link>
                  <button
                    onClick={logout}
                    className="p-2 text-text hover:text-primary transition-colors"
                    title="Logout"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/login" className="btn-outline">
                    Login
                  </Link>
                  <Link to="/register" className="btn-primary">
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-text hover:text-primary transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-text hover:text-primary'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-16 mb-20 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-text">Sportory</span>
              </div>
              <p className="text-text/70 text-sm">
                Not just a game. It's your story.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-text mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-text/70 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-text mb-4">Support</h3>
              <SupportUs />
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-text/50 text-sm">
              © 2024 Sportory. Built with ❤️ for Ghanaian athletes and fans.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}

export default Layout