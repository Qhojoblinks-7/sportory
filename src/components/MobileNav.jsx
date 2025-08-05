import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Trophy, 
  Users, 
  ShoppingBag, 
  Video, 
  User,
  Target,
  Building
} from 'lucide-react'

const MobileNav = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide/show navigation on scroll
  useState(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Sports', href: '/challenges', icon: Trophy },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Talent', href: '/talent-discovery', icon: Target },
    { name: 'Partners', href: '/partner-dashboard', icon: Building },
    { name: 'Shop', href: '/marketplace', icon: ShoppingBag },
    { name: 'Profile', href: '/profile', icon: User },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-white/20 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      } md:hidden`}>
        <div className="flex items-center justify-around px-2 py-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-text/60 hover:text-text'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Spacer for mobile navigation */}
      <div className="h-20 md:hidden" />
    </>
  )
}

export default MobileNav