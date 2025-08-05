import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  Trophy, 
  Star, 
  Users, 
  Calendar, 
  MapPin, 
  Target,
  TrendingUp,
  Award,
  Shield,
  Verified,
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  Play,
  Clock,
  BarChart3,
  Medal,
  Crown,
  Zap,
  Activity,
  Eye,
  ChevronRight,
  ChevronLeft,
  Flag,
  Users2,
  TrendingDown,
  Minus,
  Home as HomeIcon,
  Away,
  Timer,
  BookOpen,
  Camera,
  Video,
  Mic,
  Gift,
  DollarSign,
  ShoppingBag,
  Mail,
  Phone,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  User
} from 'lucide-react'

const AthleteProfile = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [isFollowing, setIsFollowing] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Enhanced athlete data with business strategy features
  const athlete = {
    id: id,
    name: 'Kwame Asante',
    sport: 'Football',
    position: 'Striker',
    team: 'Accra United',
    avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop',
    verified: true,
    followers: 15420,
    following: 890,
    bio: 'Professional footballer passionate about representing Ghana on the international stage. Dedicated to inspiring the next generation of African athletes.',
    location: 'Accra, Ghana',
    age: 24,
    height: '1.85m',
    weight: '78kg',
    nationality: 'Ghanaian',
    languages: ['English', 'Twi', 'French'],
    achievements: [
      { title: 'Ghana Premier League Champion', year: 2023, icon: Trophy },
      { title: 'Top Scorer Award', year: 2023, icon: Award },
      { title: 'Best Young Player', year: 2022, icon: Star },
      { title: 'National Team Call-up', year: 2023, icon: Flag }
    ],
    stats: {
      goals: 45,
      assists: 23,
      matches: 89,
      winRate: 78,
      rating: 8.7,
      form: ['W', 'W', 'D', 'W', 'W']
    },
    recentMatches: [
      { opponent: 'Asante Kotoko', result: 'W 2-1', goals: 1, assists: 1, date: '2024-01-15' },
      { opponent: 'Hearts of Oak', result: 'W 3-0', goals: 2, assists: 0, date: '2024-01-08' },
      { opponent: 'Kumasi Royals', result: 'D 1-1', goals: 0, assists: 1, date: '2024-01-01' }
    ],
    highlights: [
      { title: 'Hat-trick vs Kotoko', views: '12.5K', duration: '2:34', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop' },
      { title: 'Match-winning goal', views: '8.9K', duration: '1:45', thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=200&fit=crop' },
      { title: 'Training session', views: '5.2K', duration: '4:12', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop' }
    ],
    endorsements: [
      { brand: 'Nike', type: 'Equipment', value: '$50K', status: 'Active' },
      { brand: 'Gatorade', type: 'Nutrition', value: '$25K', status: 'Active' },
      { brand: 'Adidas', type: 'Footwear', value: '$75K', status: 'Expired' }
    ],
    sponsorships: [
      { sponsor: 'Ghana Telecom', amount: '$100K', duration: '1 year', status: 'Active' },
      { sponsor: 'Coca-Cola Ghana', amount: '$75K', duration: '6 months', status: 'Active' }
    ],
    socialMedia: {
      instagram: '@kwame_asante',
      twitter: '@kwame_asante_fc',
      facebook: 'Kwame Asante Official',
      youtube: 'Kwame Asante Channel'
    },
    contact: {
      email: 'kwame.asante@accraunited.com',
      phone: '+233 55 123 4567',
      website: 'www.kwameasante.com'
    },
    availability: {
      forSponsorships: true,
      forEvents: true,
      forCoaching: false,
      forInterviews: true
    },
    pricing: {
      sponsorship: '$10K - $50K',
      appearance: '$2K - $5K',
      coaching: '$500/hour',
      interview: '$1K'
    }
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const getFormColor = (result) => {
    switch (result) {
      case 'W': return 'bg-green-500'
      case 'D': return 'bg-yellow-500'
      case 'L': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Cover Image */}
        <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
          <img
            src={athlete.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Back Button */}
          <button className="absolute top-4 left-4 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white">
            <ChevronLeft size={20} />
          </button>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={handleBookmark}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isBookmarked ? 'bg-white text-primary' : 'bg-black/30 text-white'
              }`}
            >
              <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
            <button className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white">
              <Share size={16} />
            </button>
          </div>
        </div>

        {/* Profile Header */}
        <div className="px-4 -mt-16 relative z-10">
          <div className="glass-card p-4">
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <img
                  src={athlete.avatar}
                  alt={athlete.name}
                  className="w-20 h-20 rounded-full border-4 border-background"
                />
                {athlete.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Verified size={12} className="text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h1 className="text-xl font-bold text-text">{athlete.name}</h1>
                  {athlete.verified && <Verified size={16} className="text-primary" />}
                </div>
                <p className="text-text/70 text-sm">{athlete.sport} • {athlete.position}</p>
                <p className="text-primary text-sm font-medium">{athlete.team}</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-text/60">
                  <span>{athlete.location}</span>
                  <span>•</span>
                  <span>{athlete.age} years old</span>
                </div>
              </div>
            </div>

            <p className="text-text/80 text-sm mb-4">{athlete.bio}</p>

            {/* Follow/Contact Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleFollow}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  isFollowing
                    ? 'bg-white/10 text-text border border-white/20'
                    : 'bg-primary text-white'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              <button className="flex-1 py-2 rounded-lg font-medium bg-white/10 text-text border border-white/20">
                Contact
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg font-bold text-text">{athlete.followers.toLocaleString()}</div>
                <div className="text-xs text-text/60">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-text">{athlete.following}</div>
                <div className="text-xs text-text/60">Following</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-text">{athlete.stats.rating}</div>
                <div className="text-xs text-text/60">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 mt-6">
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'overview'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'stats'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Stats
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'highlights'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Highlights
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'business'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Business
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="px-4 mt-6 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Achievements */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Trophy size={18} className="mr-2" />
                  Achievements
                </h3>
                <div className="space-y-3">
                  {athlete.achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                        <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <Icon size={16} className="text-yellow-500" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-text text-sm">{achievement.title}</div>
                          <div className="text-xs text-text/60">{achievement.year}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Recent Matches */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Calendar size={18} className="mr-2" />
                  Recent Matches
                </h3>
                <div className="space-y-3">
                  {athlete.recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <div className="text-sm font-medium text-text">{match.opponent}</div>
                          <div className="text-xs text-text/60">{match.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-text">{match.result}</div>
                        <div className="text-xs text-text/60">
                          {match.goals}G {match.assists}A
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <User size={18} className="mr-2" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-text/70">Height:</span>
                    <p className="text-text">{athlete.height}</p>
                  </div>
                  <div>
                    <span className="text-text/70">Weight:</span>
                    <p className="text-text">{athlete.weight}</p>
                  </div>
                  <div>
                    <span className="text-text/70">Nationality:</span>
                    <p className="text-text">{athlete.nationality}</p>
                  </div>
                  <div>
                    <span className="text-text/70">Languages:</span>
                    <p className="text-text">{athlete.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'stats' && (
            <>
              {/* Performance Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{athlete.stats.goals}</div>
                  <div className="text-xs text-text/60">Goals</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{athlete.stats.assists}</div>
                  <div className="text-xs text-text/60">Assists</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{athlete.stats.matches}</div>
                  <div className="text-xs text-text/60">Matches</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{athlete.stats.winRate}%</div>
                  <div className="text-xs text-text/60">Win Rate</div>
                </div>
              </div>

              {/* Form */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <TrendingUp size={18} className="mr-2" />
                  Recent Form
                </h3>
                <div className="flex space-x-2 justify-center">
                  {athlete.stats.form.map((result, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${getFormColor(result)}`}
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'highlights' && (
            <>
              {/* Video Highlights */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Play size={18} className="mr-2" />
                  Highlights
                </h3>
                <div className="space-y-4">
                  {athlete.highlights.map((highlight, index) => (
                    <div key={index} className="relative">
                      <img
                        src={highlight.thumbnail}
                        alt={highlight.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                        <Play size={32} className="text-white" />
                      </div>
                      <div className="absolute bottom-2 left-2 text-white text-xs">
                        {highlight.duration}
                      </div>
                      <div className="absolute bottom-2 right-2 text-white text-xs flex items-center">
                        <Eye size={12} className="mr-1" />
                        {highlight.views}
                      </div>
                      <div className="mt-2">
                        <h4 className="font-medium text-text text-sm">{highlight.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'business' && (
            <>
              {/* Endorsements */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <DollarSign size={18} className="mr-2" />
                  Endorsements
                </h3>
                <div className="space-y-3">
                  {athlete.endorsements.map((endorsement, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-medium text-text text-sm">{endorsement.brand}</div>
                        <div className="text-xs text-text/60">{endorsement.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-text">{endorsement.value}</div>
                        <div className={`text-xs ${
                          endorsement.status === 'Active' ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {endorsement.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sponsorships */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Shield size={18} className="mr-2" />
                  Sponsorships
                </h3>
                <div className="space-y-3">
                  {athlete.sponsorships.map((sponsorship, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-medium text-text text-sm">{sponsorship.sponsor}</div>
                        <div className="text-xs text-text/60">{sponsorship.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-text">{sponsorship.amount}</div>
                        <div className="text-xs text-green-500">{sponsorship.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & Availability */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Mail size={18} className="mr-2" />
                  Contact & Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail size={14} className="text-text/60" />
                    <span className="text-sm text-text">{athlete.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={14} className="text-text/60" />
                    <span className="text-sm text-text">{athlete.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe size={14} className="text-text/60" />
                    <span className="text-sm text-text">{athlete.contact.website}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="font-medium text-text text-sm mb-2">Availability</h4>
                  <div className="space-y-2">
                    {Object.entries(athlete.availability).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-text/70 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className={`text-sm ${value ? 'text-green-500' : 'text-red-500'}`}>
                          {value ? 'Available' : 'Not Available'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <DollarSign size={18} className="mr-2" />
                  Pricing
                </h3>
                <div className="space-y-3">
                  {Object.entries(athlete.pricing).map(([service, price]) => (
                    <div key={service} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm font-medium text-text capitalize">
                        {service.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-bold text-primary">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AthleteProfile