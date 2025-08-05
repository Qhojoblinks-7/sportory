import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  User, 
  Mail, 
  Calendar, 
  Trophy, 
  Settings, 
  Edit,
  Save,
  X,
  Medal,
  TrendingUp,
  Target,
  Activity,
  Award,
  Star,
  Shield,
  Users,
  Bookmark,
  Heart,
  MessageCircle,
  Share,
  ChevronRight,
  BarChart3,
  Clock,
  MapPin,
  Flag,
  Crown,
  TrendingDown,
  Minus,
  Play,
  Zap
} from 'lucide-react'

const Profile = () => {
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    sport: user?.sport || '',
    team: user?.team || ''
  })

  // Mock sports data
  const sportsStats = {
    challengesWon: 12,
    totalPoints: 1250,
    rank: 8,
    winRate: 68,
    streak: 5,
    favoriteSport: 'Football',
    totalPredictions: 89,
    accuracy: 72
  }

  const recentActivity = [
    { type: 'prediction', text: 'Predicted Chelsea vs Arsenal', time: '2 hours ago', correct: true },
    { type: 'challenge', text: 'Won Premier League Challenge', time: '1 day ago', points: 50 },
    { type: 'post', text: 'Shared match analysis', time: '2 days ago', likes: 12 },
    { type: 'achievement', text: 'Earned "Prediction Master" badge', time: '3 days ago' }
  ]

  const achievements = [
    { name: 'Prediction Master', icon: Target, earned: true, description: 'Win 10 challenges' },
    { name: 'Streak King', icon: Zap, earned: true, description: '5-day winning streak' },
    { name: 'Community Star', icon: Users, earned: false, description: '100 community posts' },
    { name: 'Accuracy Expert', icon: Award, earned: true, description: '80% prediction accuracy' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    updateProfile(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      bio: user?.bio || '',
      sport: user?.sport || '',
      team: user?.team || ''
    })
    setIsEditing(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Please log in to view your profile</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-text">Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              {isEditing ? <X size={16} /> : <Edit size={16} />}
              <span className="text-sm">{isEditing ? 'Cancel' : 'Edit'}</span>
            </button>
          </div>
        </div>

        {/* Profile Info Card */}
        <div className="glass-card mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-text">{user.name}</h2>
              <p className="text-text/70 text-sm capitalize">{user.role}</p>
              <p className="text-text/50 text-xs">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Sport</label>
                  <input
                    type="text"
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., Football, Basketball"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Team</label>
                  <input
                    type="text"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., Accra United"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="input-field"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  className="btn-primary flex-1 flex items-center justify-center space-x-2"
                >
                  <Save size={16} />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text/70">Sport:</span>
                  <p className="text-text">{user.sport || 'Not specified'}</p>
                </div>
                <div>
                  <span className="text-text/70">Team:</span>
                  <p className="text-text">{user.team || 'Not specified'}</p>
                </div>
              </div>
              <div>
                <span className="text-text/70 text-sm">Bio:</span>
                <p className="text-text text-sm">{user.bio || 'No bio added yet'}</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1 mb-6">
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
            onClick={() => setActiveTab('activity')}
            className={`px-3 py-2 rounded-md transition-colors text-sm ${
              activeTab === 'activity'
                ? 'bg-primary text-white'
                : 'text-text/70 hover:text-text'
            }`}
          >
            Activity
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-3 py-2 rounded-md transition-colors text-sm ${
              activeTab === 'achievements'
                ? 'bg-primary text-white'
                : 'text-text/70 hover:text-text'
            }`}
          >
            Achievements
          </button>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">{sportsStats.totalPoints}</div>
                <div className="text-xs text-text/60">Total Points</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">#{sportsStats.rank}</div>
                <div className="text-xs text-text/60">Rank</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">{sportsStats.challengesWon}</div>
                <div className="text-xs text-text/60">Wins</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">{sportsStats.accuracy}%</div>
                <div className="text-xs text-text/60">Accuracy</div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <BarChart3 size={18} className="mr-2" />
                Performance
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text/70">Win Rate</span>
                  <span className="text-sm font-semibold text-text">{sportsStats.winRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text/70">Current Streak</span>
                  <span className="text-sm font-semibold text-text">{sportsStats.streak} days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text/70">Total Predictions</span>
                  <span className="text-sm font-semibold text-text">{sportsStats.totalPredictions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text/70">Favorite Sport</span>
                  <span className="text-sm font-semibold text-text">{sportsStats.favoriteSport}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="glass-card p-4">
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'prediction' ? 'bg-blue-500/20' :
                    activity.type === 'challenge' ? 'bg-green-500/20' :
                    activity.type === 'post' ? 'bg-purple-500/20' :
                    'bg-yellow-500/20'
                  }`}>
                    {activity.type === 'prediction' && <Target size={16} className="text-blue-500" />}
                    {activity.type === 'challenge' && <Trophy size={16} className="text-green-500" />}
                    {activity.type === 'post' && <MessageCircle size={16} className="text-purple-500" />}
                    {activity.type === 'achievement' && <Award size={16} className="text-yellow-500" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text">{activity.text}</p>
                    <p className="text-xs text-text/60">{activity.time}</p>
                    {activity.points && (
                      <p className="text-xs text-green-500">+{activity.points} points</p>
                    )}
                    {activity.likes && (
                      <p className="text-xs text-text/60">{activity.likes} likes</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className={`glass-card p-4 ${achievement.earned ? '' : 'opacity-50'}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-yellow-500/20' : 'bg-gray-500/20'
                    }`}>
                      <Icon size={20} className={achievement.earned ? 'text-yellow-500' : 'text-gray-500'} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text text-sm">{achievement.name}</h3>
                      <p className="text-xs text-text/60">{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Star size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile