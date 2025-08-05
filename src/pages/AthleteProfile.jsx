import { useParams } from 'react-router-dom'
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Heart,
  Share2,
  MessageCircle,
  Star,
  Award,
  Target
} from 'lucide-react'

const AthleteProfile = () => {
  const { id } = useParams()

  // Mock athlete data - in a real app, this would come from an API
  const athlete = {
    id: '1',
    name: 'Kwame Asante',
    sport: 'Football',
    position: 'Striker',
    team: 'Accra United',
    avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop',
    bio: 'Professional footballer from Accra, Ghana. Known for my speed and goal-scoring ability. Proud to represent Accra United and the Ghana national team.',
    location: 'Accra, Ghana',
    age: 24,
    height: '1.78m',
    weight: '75kg',
    followers: 1240,
    following: 89,
    verified: true,
    stats: {
      goals: 15,
      assists: 8,
      matches: 24,
      goalsPerMatch: 0.63,
      passAccuracy: 85,
      shotsOnTarget: 78
    },
    achievements: [
      { title: 'Top Scorer 2023', description: 'Ghana Premier League', icon: Trophy },
      { title: 'Player of the Month', description: 'September 2023', icon: Award },
      { title: 'Team Captain', description: 'Accra United', icon: Star }
    ],
    recentMatches: [
      { opponent: 'Kumasi Royals', result: 'W 2-1', goals: 1, assists: 1, date: '2024-01-10' },
      { opponent: 'Hearts of Oak', result: 'D 1-1', goals: 0, assists: 1, date: '2024-01-07' },
      { opponent: 'Asante Kotoko', result: 'W 3-0', goals: 2, assists: 0, date: '2024-01-03' }
    ],
    highlights: [
      { title: 'Amazing Goal vs Kotoko', url: '#', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop' },
      { title: 'Training Session', url: '#', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop' },
      { title: 'Match Highlights', url: '#', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop' }
    ]
  }

  return (
    <div className="min-h-screen">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <img
          src={athlete.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Profile Header */}
        <div className="glass-card mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img
                src={athlete.avatar}
                alt={athlete.name}
                className="w-32 h-32 rounded-full border-4 border-white"
              />
              {athlete.verified && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Star className="text-white" size={16} />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-text">{athlete.name}</h1>
                <Trophy className="text-highlight" size={24} />
              </div>
              <p className="text-lg text-text/70 mb-2">{athlete.position} • {athlete.team}</p>
              <p className="text-text/60 mb-4">{athlete.bio}</p>
              
              <div className="flex items-center space-x-6 text-sm text-text/60">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {athlete.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {athlete.age} years old
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-1" />
                  {athlete.followers} followers
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="btn-primary flex items-center space-x-2">
                <Heart size={16} />
                <span>Follow</span>
              </button>
              <button className="btn-outline flex items-center space-x-2">
                <MessageCircle size={16} />
                <span>Message</span>
              </button>
              <button className="btn-outline p-2">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-text mb-6 flex items-center">
                <Target className="mr-2" />
                Season Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{athlete.stats.goals}</div>
                  <div className="text-sm text-text/60">Goals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">{athlete.stats.assists}</div>
                  <div className="text-sm text-text/60">Assists</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-highlight">{athlete.stats.matches}</div>
                  <div className="text-sm text-text/60">Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{athlete.stats.goalsPerMatch}</div>
                  <div className="text-sm text-text/60">Goals/Match</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">{athlete.stats.passAccuracy}%</div>
                  <div className="text-sm text-text/60">Pass Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-highlight">{athlete.stats.shotsOnTarget}%</div>
                  <div className="text-sm text-text/60">Shots on Target</div>
                </div>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-text mb-6">Recent Matches</h2>
              <div className="space-y-4">
                {athlete.recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        match.result.startsWith('W') ? 'bg-green-500' :
                        match.result.startsWith('D') ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <div className="font-medium text-text">vs {match.opponent}</div>
                        <div className="text-sm text-text/60">{match.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-text">{match.result}</div>
                      <div className="text-sm text-text/60">
                        {match.goals}G {match.assists}A
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-text mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {athlete.highlights.map((highlight, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={highlight.thumbnail}
                        alt={highlight.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-text mt-2">{highlight.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <Award className="mr-2" />
                Achievements
              </h3>
              <div className="space-y-3">
                {athlete.achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                      <Icon className="text-highlight" size={20} />
                      <div>
                        <div className="font-medium text-text">{achievement.title}</div>
                        <div className="text-sm text-text/60">{achievement.description}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Personal Info */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-text mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text/70">Age</span>
                  <span className="text-text">{athlete.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Height</span>
                  <span className="text-text">{athlete.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Weight</span>
                  <span className="text-text">{athlete.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Position</span>
                  <span className="text-text">{athlete.position}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Team</span>
                  <span className="text-primary font-medium">{athlete.team}</span>
                </div>
              </div>
            </div>

            {/* Follow Stats */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-text mb-4">Follow Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text/70">Followers</span>
                  <span className="text-text font-medium">{athlete.followers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Following</span>
                  <span className="text-text font-medium">{athlete.following}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AthleteProfile