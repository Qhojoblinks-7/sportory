import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Trophy, 
  Users, 
  Video, 
  ShoppingBag, 
  Star,
  ArrowRight,
  Play,
  Zap,
  Shield,
  Activity,
  BarChart3,
  Clock,
  Wifi,
  Flag,
  Medal,
  Crown,
  Target as TargetIcon,
  Users2,
  TrendingDown,
  Minus,
  Home as HomeIcon,
  Away,
  Timer,
  Eye,
  Bookmark,
  Heart,
  MessageCircle,
  Share,
  ChevronRight,
  ChevronLeft,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Target
} from 'lucide-react'
import SupportUs from '../components/SupportUs'

const Home = () => {
  const { user } = useAuth()

  // Live Matches Data
  const liveMatches = [
    {
      id: '1',
      home: { name: 'Chelsea', logo: '🔵', score: 2 },
      away: { name: 'Arsenal', logo: '🔴', score: 1 },
      time: '67\'',
      league: 'Premier League',
      venue: 'Stamford Bridge'
    },
    {
      id: '2',
      home: { name: 'Hearts of Oak', logo: '💙', score: 0 },
      away: { name: 'Asante Kotoko', logo: '🟡', score: 0 },
      time: '23\'',
      league: 'Ghana Premier League',
      venue: 'Accra Sports Stadium'
    }
  ]

  // Upcoming Matches
  const upcomingMatches = [
    {
      id: '3',
      home: { name: 'Man United', logo: '🔴' },
      away: { name: 'Tottenham', logo: '⚪' },
      time: '20:00',
      date: 'Today',
      league: 'Premier League'
    },
    {
      id: '4',
      home: { name: 'Accra United', logo: '🔵' },
      away: { name: 'Kumasi Royals', logo: '🟡' },
      time: '15:30',
      date: 'Tomorrow',
      league: 'Ghana Premier League'
    }
  ]

  // Top Performers
  const topPerformers = [
    {
      id: '1',
      name: 'Kwame Asante',
      sport: 'Football',
      team: 'Accra United',
      avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
      stats: { goals: 15, assists: 8, rating: 8.5 },
      trend: 'up'
    },
    {
      id: '2',
      name: 'Ama Osei',
      sport: 'Basketball',
      team: 'Kumasi Royals',
      avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff',
      stats: { points: 18.5, assists: 6.2, rating: 8.2 },
      trend: 'up'
    },
    {
      id: '3',
      name: 'Kofi Mensah',
      sport: 'Athletics',
      team: 'Ghana Athletics',
      avatar: 'https://ui-avatars.com/api/?name=Kofi+Mensah&background=FACC15&color=000',
      stats: { time: '10.2s', medals: 3, rating: 8.8 },
      trend: 'down'
    }
  ]

  const features = [
    {
      icon: Trophy,
      title: 'Live Sports',
      description: 'Real-time scores and match updates',
      href: '/challenges',
      color: 'text-red-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with athletes and fans',
      href: '/community',
      color: 'text-blue-500'
    },
    {
      icon: Target,
      title: 'Predictions',
      description: 'Test your sports knowledge',
      href: '/challenges',
      color: 'text-green-500'
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Official merchandise and gear',
      href: '/marketplace',
      color: 'text-purple-500'
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
    <div className="min-h-screen bg-background">
      {/* Mobile-First Sports Dashboard */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-text flex items-center">
                <Trophy className="mr-2 text-primary" size={28} />
                Sportory
              </h1>
              <p className="text-text/70 text-sm">Your sports companion</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-red-500/20 text-red-500 px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">LIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Matches Section */}
        {liveMatches.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-text flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                Live Now
              </h2>
              <Link to="/challenges" className="text-primary text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {liveMatches.map((match) => (
                <div key={match.id} className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-red-500 font-medium">{match.league}</span>
                    <div className="flex items-center space-x-1">
                      <Wifi size={12} className="text-red-500" />
                      <span className="text-xs text-red-500 font-bold">{match.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{match.home.logo}</span>
                      <span className="font-semibold text-text">{match.home.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-text">{match.home.score}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{match.away.logo}</span>
                      <span className="font-semibold text-text">{match.away.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-text">{match.away.score}</span>
                  </div>
                  
                  <div className="text-xs text-text/60">
                    {match.venue}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className="glass-card p-4 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className={`flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg mb-3 group-hover:bg-white/20 transition-colors`}>
                    <Icon className={feature.color} size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-text mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-text/70 text-xs">
                    {feature.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Upcoming Matches */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-text flex items-center">
              <Calendar size={18} className="mr-2" />
              Upcoming
            </h2>
            <Link to="/challenges" className="text-primary text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="glass-card p-4 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-center min-w-[50px]">
                      <div className="text-xs font-medium text-text">{match.date}</div>
                      <div className="text-sm font-bold text-primary">{match.time}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="text-center">
                        <div className="text-lg mb-1">{match.home.logo}</div>
                        <div className="text-xs font-medium text-text">{match.home.name}</div>
                      </div>
                      <div className="text-text/50 font-bold text-sm">vs</div>
                      <div className="text-center">
                        <div className="text-lg mb-1">{match.away.logo}</div>
                        <div className="text-xs font-medium text-text">{match.away.name}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xs font-medium text-text">{match.league}</div>
                    <ChevronRight size={16} className="text-text/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-text flex items-center">
              <Medal size={18} className="mr-2" />
              Top Performers
            </h2>
            <Link to="/community" className="text-primary text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {topPerformers.map((performer, index) => (
              <Link
                key={performer.id}
                to={`/athlete/${performer.id}`}
                className="glass-card p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === 0 ? 'bg-yellow-500 text-black' : 
                      index === 1 ? 'bg-gray-300 text-gray-700' : 
                      'bg-amber-600 text-white'
                    }`}>
                      {index + 1}
                    </div>
                    <img
                      src={performer.avatar}
                      alt={performer.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-text text-sm">{performer.name}</h3>
                      <p className="text-text/70 text-xs">{performer.sport} • {performer.team}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-bold text-text">{performer.stats.rating}</span>
                      {performer.trend === 'up' ? (
                        <TrendingUp size={14} className="text-green-500" />
                      ) : (
                        <TrendingDown size={14} className="text-red-500" />
                      )}
                    </div>
                    <div className="text-xs text-text/60">Rating</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {!user && (
          <div className="mb-6">
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-semibold text-text mb-2">Join the Community</h3>
              <p className="text-text/70 text-sm mb-4">
                Start predicting matches and competing with other fans
              </p>
              <div className="flex space-x-3">
                <Link to="/register" className="btn-primary flex-1">
                  Get Started
                </Link>
                <Link to="/login" className="btn-outline flex-1">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Support Section */}
        <div className="mb-6">
          <div className="glass-card p-4">
            <h3 className="text-lg font-semibold text-text mb-3 text-center">Support Sportory</h3>
            <SupportUs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home