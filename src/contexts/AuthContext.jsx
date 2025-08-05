import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('sportory_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Mock authentication - in real app, this would call Firebase/Supabase
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'fan', // Default role
      avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=1D4ED8&color=fff`,
      createdAt: new Date().toISOString()
    }
    
    setUser(mockUser)
    localStorage.setItem('sportory_user', JSON.stringify(mockUser))
    return mockUser
  }

  const register = async (email, password, name, role = 'fan') => {
    // Mock registration
    const mockUser = {
      id: Date.now().toString(),
      email,
      name,
      role,
      avatar: `https://ui-avatars.com/api/?name=${name}&background=1D4ED8&color=fff`,
      createdAt: new Date().toISOString()
    }
    
    setUser(mockUser)
    localStorage.setItem('sportory_user', JSON.stringify(mockUser))
    return mockUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('sportory_user')
  }

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('sportory_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}