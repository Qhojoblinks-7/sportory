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
  X
} from 'lucide-react'

const Profile = () => {
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    sport: user?.sport || '',
    team: user?.team || ''
  })

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text mb-2">Profile</h1>
          <p className="text-text/70">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="glass-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text">Personal Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  {isEditing ? <X size={16} /> : <Edit size={16} />}
                  <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                </button>
              </div>

              <div className="space-y-6">
                {/* Avatar and Basic Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-text">{user.name}</h3>
                    <p className="text-text/70 capitalize">{user.role}</p>
                    <p className="text-sm text-text/50">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-text">{user.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Email
                    </label>
                    <p className="text-text/70">{user.email}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Sport
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., Football, Basketball"
                      />
                    ) : (
                      <p className="text-text">{user.sport || 'Not specified'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Team
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., Accra United"
                      />
                    ) : (
                      <p className="text-text">{user.team || 'Not specified'}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows={4}
                      className="input-field"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-text">{user.bio || 'No bio added yet'}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex space-x-4">
                    <button
                      onClick={handleSave}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Save size={16} />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="btn-outline"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <Trophy size={20} className="mr-2" />
                Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text/70">Challenges Won</span>
                  <span className="font-semibold text-text">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Total Points</span>
                  <span className="font-semibold text-text">1,250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text/70">Rank</span>
                  <span className="font-semibold text-primary">#8</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <Settings size={20} className="mr-2" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded-lg hover:bg-white/10 transition-colors text-text/70 hover:text-text">
                  View Challenges
                </button>
                <button className="w-full text-left p-2 rounded-lg hover:bg-white/10 transition-colors text-text/70 hover:text-text">
                  Community Posts
                </button>
                <button className="w-full text-left p-2 rounded-lg hover:bg-white/10 transition-colors text-text/70 hover:text-text">
                  Account Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile