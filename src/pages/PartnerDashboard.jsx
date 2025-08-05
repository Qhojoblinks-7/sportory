import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  Building, 
  Users, 
  Calendar, 
  DollarSign, 
  Trophy, 
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
  ShoppingBag,
  Mail,
  Phone,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Filter,
  Search,
  Bell,
  Star,
  MapPin,
  User,
  Team,
  Event,
  Sponsorship,
  Analytics,
  Notification
} from 'lucide-react'

const PartnerDashboard = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedTeam, setSelectedTeam] = useState('all')

  // Mock partner data (school/club)
  const partner = {
    id: '1',
    name: 'Accra Sports Academy',
    type: 'school',
    verified: true,
    avatar: 'https://ui-avatars.com/api/?name=Accra+Sports+Academy&background=1D4ED8&color=fff',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop',
    location: 'Accra, Ghana',
    founded: 2015,
    description: 'Premier sports academy dedicated to developing young talent in Ghana. We focus on football, basketball, and athletics.',
    contact: {
      email: 'info@accrasportsacademy.com',
      phone: '+233 55 123 4567',
      website: 'www.accrasportsacademy.com',
      address: '123 Sports Avenue, Accra'
    },
    stats: {
      totalStudents: 450,
      activeTeams: 12,
      coaches: 25,
      championships: 8,
      sponsorships: 15,
      events: 24
    },
    teams: [
      {
        id: '1',
        name: 'Under-17 Football',
        sport: 'Football',
        coach: 'Kwame Mensah',
        players: 22,
        wins: 15,
        losses: 3,
        draws: 4,
        points: 49,
        position: 1,
        nextMatch: '2024-01-20',
        opponent: 'Kumasi Academy'
      },
      {
        id: '2',
        name: 'Senior Basketball',
        sport: 'Basketball',
        coach: 'Ama Osei',
        players: 15,
        wins: 12,
        losses: 5,
        draws: 0,
        points: 36,
        position: 2,
        nextMatch: '2024-01-22',
        opponent: 'Tema Sports Club'
      },
      {
        id: '3',
        name: 'Under-15 Athletics',
        sport: 'Athletics',
        coach: 'Kofi Addo',
        players: 18,
        wins: 8,
        losses: 7,
        draws: 0,
        points: 24,
        position: 3,
        nextMatch: '2024-01-25',
        opponent: 'Regional Championships'
      }
    ],
    events: [
      {
        id: '1',
        title: 'Annual Sports Festival',
        date: '2024-02-15',
        type: 'tournament',
        participants: 200,
        status: 'upcoming',
        revenue: '$5,000'
      },
      {
        id: '2',
        title: 'Talent Scouting Day',
        date: '2024-01-30',
        type: 'scouting',
        participants: 150,
        status: 'upcoming',
        revenue: '$2,500'
      },
      {
        id: '3',
        title: 'Championship Final',
        date: '2024-01-15',
        type: 'match',
        participants: 500,
        status: 'completed',
        revenue: '$8,000'
      }
    ],
    sponsorships: [
      {
        id: '1',
        sponsor: 'Nike Ghana',
        amount: '$50,000',
        duration: '1 year',
        status: 'active',
        type: 'equipment',
        startDate: '2024-01-01',
        endDate: '2024-12-31'
      },
      {
        id: '2',
        sponsor: 'Ghana Telecom',
        amount: '$30,000',
        duration: '6 months',
        status: 'active',
        type: 'technology',
        startDate: '2024-01-01',
        endDate: '2024-06-30'
      },
      {
        id: '3',
        sponsor: 'Coca-Cola Ghana',
        amount: '$25,000',
        duration: '1 year',
        status: 'pending',
        type: 'beverages',
        startDate: '2024-02-01',
        endDate: '2025-01-31'
      }
    ],
    analytics: {
      monthlyRevenue: '$15,000',
      studentGrowth: '+12%',
      eventAttendance: '85%',
      sponsorshipValue: '$105,000',
      socialMediaFollowers: '8,500',
      websiteVisits: '12,000'
    },
    notifications: [
      { id: '1', message: 'New sponsorship proposal from Adidas', time: '2 hours ago', type: 'sponsorship' },
      { id: '2', message: 'Team registration deadline approaching', time: '1 day ago', type: 'event' },
      { id: '3', message: 'Championship match scheduled', time: '2 days ago', type: 'match' }
    ]
  }

  const handleTeamSelect = (teamId) => {
    setSelectedTeam(teamId)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-500'
      case 'pending': return 'text-yellow-500'
      case 'completed': return 'text-blue-500'
      case 'upcoming': return 'text-purple-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-text flex items-center">
                <Building className="mr-2 text-primary" size={28} />
                Partner Dashboard
              </h1>
              <p className="text-text/70 text-sm">Manage your sports organization</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-text">
                <Bell size={16} />
              </button>
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-text">
                <Settings size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Partner Info Card */}
        <div className="px-4 mb-6">
          <div className="glass-card p-4">
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <img
                  src={partner.avatar}
                  alt={partner.name}
                  className="w-16 h-16 rounded-full"
                />
                {partner.verified && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Verified size={10} className="text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h2 className="text-lg font-bold text-text">{partner.name}</h2>
                  {partner.verified && <Verified size={16} className="text-primary" />}
                </div>
                <p className="text-text/70 text-sm capitalize">{partner.type}</p>
                <p className="text-primary text-sm font-medium">{partner.location}</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-text/60">
                  <span>Founded {partner.founded}</span>
                  <span>•</span>
                  <span>{partner.stats.totalStudents} students</span>
                </div>
              </div>
            </div>

            <p className="text-text/80 text-sm mb-4">{partner.description}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{partner.stats.activeTeams}</div>
                <div className="text-xs text-text/60">Teams</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{partner.stats.coaches}</div>
                <div className="text-xs text-text/60">Coaches</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{partner.stats.championships}</div>
                <div className="text-xs text-text/60">Titles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 mb-6">
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
              onClick={() => setActiveTab('teams')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'teams'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Teams
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'events'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('sponsorships')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'sponsorships'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Sponsorships
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="px-4 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Analytics */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <BarChart3 size={18} className="mr-2" />
                  Analytics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Monthly Revenue</div>
                    <div className="text-lg font-bold text-primary">{partner.analytics.monthlyRevenue}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Student Growth</div>
                    <div className="text-lg font-bold text-green-500">{partner.analytics.studentGrowth}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Event Attendance</div>
                    <div className="text-lg font-bold text-blue-500">{partner.analytics.eventAttendance}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Sponsorship Value</div>
                    <div className="text-lg font-bold text-purple-500">{partner.analytics.sponsorshipValue}</div>
                  </div>
                </div>
              </div>

              {/* Recent Notifications */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Bell size={18} className="mr-2" />
                  Recent Notifications
                </h3>
                <div className="space-y-3">
                  {partner.notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm text-text">{notification.message}</p>
                        <p className="text-xs text-text/60">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Zap size={18} className="mr-2" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-3 bg-white/5 rounded-lg text-left hover:bg-white/10 transition-colors">
                    <Plus size={16} className="text-primary mb-2" />
                    <div className="text-sm font-medium text-text">Add Team</div>
                    <div className="text-xs text-text/60">Create new team</div>
                  </button>
                  <button className="p-3 bg-white/5 rounded-lg text-left hover:bg-white/10 transition-colors">
                    <Calendar size={16} className="text-primary mb-2" />
                    <div className="text-sm font-medium text-text">Schedule Event</div>
                    <div className="text-xs text-text/60">Plan new event</div>
                  </button>
                  <button className="p-3 bg-white/5 rounded-lg text-left hover:bg-white/10 transition-colors">
                    <DollarSign size={16} className="text-primary mb-2" />
                    <div className="text-sm font-medium text-text">Add Sponsorship</div>
                    <div className="text-xs text-text/60">New partnership</div>
                  </button>
                  <button className="p-3 bg-white/5 rounded-lg text-left hover:bg-white/10 transition-colors">
                    <Users size={16} className="text-primary mb-2" />
                    <div className="text-sm font-medium text-text">Manage Staff</div>
                    <div className="text-xs text-text/60">Coaches & staff</div>
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'teams' && (
            <>
              {/* Team Filter */}
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={() => handleTeamSelect('all')}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    selectedTeam === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-white/10 text-text hover:bg-white/20'
                  }`}
                >
                  All Teams
                </button>
                {partner.teams.map((team) => (
                  <button
                    key={team.id}
                    onClick={() => handleTeamSelect(team.id)}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      selectedTeam === team.id
                        ? 'bg-primary text-white'
                        : 'bg-white/10 text-text hover:bg-white/20'
                    }`}
                  >
                    {team.name}
                  </button>
                ))}
              </div>

              {/* Teams List */}
              <div className="space-y-4">
                {partner.teams
                  .filter(team => selectedTeam === 'all' || team.id === selectedTeam)
                  .map((team) => (
                    <div key={team.id} className="glass-card p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-text">{team.name}</h3>
                          <p className="text-sm text-text/60">{team.sport} • Coach: {team.coach}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-text">#{team.position}</div>
                          <div className="text-xs text-text/60">Position</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-3 mb-3">
                        <div className="text-center">
                          <div className="text-sm font-bold text-text">{team.players}</div>
                          <div className="text-xs text-text/60">Players</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-text">{team.wins}</div>
                          <div className="text-xs text-text/60">Wins</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-text">{team.losses}</div>
                          <div className="text-xs text-text/60">Losses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-text">{team.points}</div>
                          <div className="text-xs text-text/60">Points</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div className="text-sm text-text/60">
                          Next: vs {team.opponent}
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-text/60 hover:text-text">
                            <Eye size={14} />
                          </button>
                          <button className="p-1 text-text/60 hover:text-text">
                            <Edit size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}

          {activeTab === 'events' && (
            <>
              {/* Events List */}
              <div className="space-y-4">
                {partner.events.map((event) => (
                  <div key={event.id} className="glass-card p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-text">{event.title}</h3>
                        <p className="text-sm text-text/60 capitalize">{event.type}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-text/60">
                          <span>{event.date}</span>
                          <span>•</span>
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-bold ${getStatusColor(event.status)}`}>
                          {event.status}
                        </div>
                        <div className="text-sm font-bold text-primary">{event.revenue}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                          Edit
                        </button>
                      </div>
                      <button className="p-1 text-text/60 hover:text-text">
                        <Share size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Event Button */}
              <button className="w-full p-4 glass-card border-2 border-dashed border-white/20 text-text/60 hover:border-primary hover:text-primary transition-colors">
                <Plus size={24} className="mx-auto mb-2" />
                <div className="text-sm font-medium">Add New Event</div>
              </button>
            </>
          )}

          {activeTab === 'sponsorships' && (
            <>
              {/* Sponsorships List */}
              <div className="space-y-4">
                {partner.sponsorships.map((sponsorship) => (
                  <div key={sponsorship.id} className="glass-card p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-text">{sponsorship.sponsor}</h3>
                        <p className="text-sm text-text/60 capitalize">{sponsorship.type}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-text/60">
                          <span>{sponsorship.duration}</span>
                          <span>•</span>
                          <span>{sponsorship.startDate} - {sponsorship.endDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-bold ${getStatusColor(sponsorship.status)}`}>
                          {sponsorship.status}
                        </div>
                        <div className="text-sm font-bold text-primary">{sponsorship.amount}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                          Manage
                        </button>
                      </div>
                      <button className="p-1 text-text/60 hover:text-text">
                        <DollarSign size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Sponsorship Button */}
              <button className="w-full p-4 glass-card border-2 border-dashed border-white/20 text-text/60 hover:border-primary hover:text-primary transition-colors">
                <Plus size={24} className="mx-auto mb-2" />
                <div className="text-sm font-medium">Add New Sponsorship</div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PartnerDashboard