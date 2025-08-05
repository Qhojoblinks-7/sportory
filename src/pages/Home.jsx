import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Trophy, 
  Users, 
  Video, 
  ShoppingBag, 
  Star,
  ArrowRight,
  Play
} from 'lucide-react'
import SupportUs from '../components/SupportUs'

const Home = () => {
  const { user } = useAuth()

  const features = [
    {
      icon: Trophy,
      title: 'Fan Challenges',
      description: 'Weekly prediction games and leaderboards',
      href: '/challenges'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with athletes and fellow fans',
      href: '/community'
    },
    {
      icon: Video,
      title: 'Live Streaming',
      description: 'Watch matches live (Coming Soon!)',
      href: '/stream'
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Official merchandise and gear',
      href: '/marketplace'
    }
  ]

  const featuredAthletes = [
    {
      id: '1',
      name: 'Kwame Asante',
      sport: 'Football',
      position: 'Striker',
      team: 'Accra United',
      avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
      stats: { goals: 15, assists: 8, matches: 24 }
    },
    {
      id: '2',
      name: 'Ama Osei',
      sport: 'Basketball',
      position: 'Point Guard',
      team: 'Kumasi Royals',
      avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff',
      stats: { points: 18.5, assists: 6.2, rebounds: 4.1 }
    },
    {
      id: '3',
      name: 'Kofi Mensah',
      sport: 'Athletics',
      position: 'Sprint',
      team: 'Ghana Athletics',
      avatar: 'https://ui-avatars.com/api/?name=Kofi+Mensah&background=FACC15&color=000',
      stats: { time: '10.2s', medals: 3, events: '100m, 200m' }
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              Not Just a Game.
              <br />
              <span className="text-primary">It's Your Story.</span>
            </h1>
            <p className="text-xl text-text/70 mb-8 max-w-3xl mx-auto">
              A sports platform built to empower Ghanaian athletes and fans—without betting. 
              Showcase talent, build community, and celebrate the spirit of sport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link to="/challenges" className="btn-primary text-lg px-8 py-3">
                  Join Challenges
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn-primary text-lg px-8 py-3">
                    Get Started
                  </Link>
                  <Link to="/login" className="btn-outline text-lg px-8 py-3">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-text/70">
              Discover all the features that make Sportory special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className="glass-card hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text/70 text-sm mb-4">
                    {feature.description}
                  </p>
                  <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Featured Athletes
            </h2>
            <p className="text-lg text-text/70">
              Meet some of Ghana's rising stars
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAthletes.map((athlete) => (
              <Link
                key={athlete.id}
                to={`/athlete/${athlete.id}`}
                className="glass-card hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={athlete.avatar}
                    alt={athlete.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {athlete.name}
                    </h3>
                    <p className="text-text/70 text-sm">
                      {athlete.sport} • {athlete.position}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {athlete.team}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(athlete.stats).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-2">
                      <div className="text-sm font-semibold text-text">
                        {value}
                      </div>
                      <div className="text-xs text-text/50 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/community" className="btn-outline">
              View All Athletes
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text mb-4">
              Support the Journey
            </h2>
            <p className="text-lg text-text/70">
              Help us keep building for Ghanaian athletes and fans
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <SupportUs />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home