import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Users, 
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
  Settings,
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  Bell,
  Star,
  User,
  Team,
  Event,
  Sponsorship,
  Analytics,
  Notification,
  Sliders,
  Grid,
  List,
  SortAsc,
  SortDesc,
  Filter as FilterIcon,
  X,
  Check,
  AlertCircle,
  Info,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Minus as MinusIcon,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Download as DownloadIcon,
  Bookmark as BookmarkIcon,
  Send,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MessageSquare,
  Video as VideoIcon,
  Image as ImageIcon,
  FileText,
  PieChart,
  BarChart,
  LineChart,
  Activity as ActivityIcon,
  Target as TargetIcon,
  Trophy as TrophyIcon,
  Award as AwardIcon,
  Medal as MedalIcon,
  Crown as CrownIcon,
  Zap as ZapIcon,
  Flame,
  Rocket,
  Lightning,
  Sparkles,
  Diamond,
  Gem,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info as InfoIcon,
  HelpCircle,
  Settings as SettingsIcon,
  User as UserIcon,
  Users as UsersIcon,
  UserPlus,
  UserCheck,
  UserX,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserCheck as UserCheckIcon,
  UserX as UserXIcon,
  UserMinus as UserMinusIcon,
  UserCog as UserCogIcon,
  UserEdit as UserEditIcon,
  UserSearch as UserSearchIcon,
  UserPlus as UserPlusIcon,
  User as UserIcon2,
  Users as UsersIcon2,
  UserCheck as UserCheckIcon2,
  UserX as UserXIcon2,
  UserMinus as UserMinusIcon2,
  UserCog as UserCogIcon2,
  UserEdit as UserEditIcon2,
  UserSearch as UserSearchIcon2,
  UserPlus as UserPlusIcon2
} from 'lucide-react'

const TalentDiscovery = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('athletes')
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    sport: 'all',
    age: 'all',
    region: 'all',
    position: 'all',
    experience: 'all',
    verified: false
  })
  const [sortBy, setSortBy] = useState('rating')
  const [sortOrder, setSortOrder] = useState('desc')

  // Mock talent data
  const athletes = [
    {
      id: '1',
      name: 'Kwame Asante',
      sport: 'Football',
      position: 'Striker',
      age: 18,
      region: 'Greater Accra',
      team: 'Accra United U-19',
      avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
      verified: true,
      rating: 8.7,
      stats: {
        goals: 25,
        assists: 12,
        matches: 30,
        winRate: 85
      },
      achievements: ['Top Scorer U-19 League', 'Player of the Month'],
      highlights: 3,
      followers: 1540,
      trend: 'up',
      availability: 'Available for trials',
      contact: {
        email: 'kwame.asante@email.com',
        phone: '+233 55 123 4567'
      },
      scoutNotes: 'Excellent finishing, good pace, needs work on passing'
    },
    {
      id: '2',
      name: 'Ama Osei',
      sport: 'Basketball',
      position: 'Point Guard',
      age: 17,
      region: 'Ashanti',
      team: 'Kumasi Royals',
      avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff',
      verified: true,
      rating: 8.5,
      stats: {
        points: 18.5,
        assists: 8.2,
        rebounds: 4.1,
        matches: 28
      },
      achievements: ['Best Point Guard Award', 'All-Star Selection'],
      highlights: 5,
      followers: 890,
      trend: 'up',
      availability: 'Available for trials',
      contact: {
        email: 'ama.osei@email.com',
        phone: '+233 55 234 5678'
      },
      scoutNotes: 'Great court vision, excellent ball handling, leadership qualities'
    },
    {
      id: '3',
      name: 'Kofi Mensah',
      sport: 'Athletics',
      position: 'Sprint',
      age: 16,
      region: 'Western',
      team: 'Takoradi Athletics Club',
      avatar: 'https://ui-avatars.com/api/?name=Kofi+Mensah&background=FACC15&color=000',
      verified: false,
      rating: 8.2,
      stats: {
        time100m: '10.8s',
        time200m: '22.1s',
        medals: 5,
        events: 12
      },
      achievements: ['Regional Champion 100m', 'National Youth Record'],
      highlights: 2,
      followers: 650,
      trend: 'up',
      availability: 'Available for trials',
      contact: {
        email: 'kofi.mensah@email.com',
        phone: '+233 55 345 6789'
      },
      scoutNotes: 'Explosive speed, good technique, needs strength training'
    },
    {
      id: '4',
      name: 'Sarah Addo',
      sport: 'Football',
      position: 'Midfielder',
      age: 19,
      region: 'Central',
      team: 'Cape Coast Stars',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Addo&background=EF4444&color=fff',
      verified: true,
      rating: 8.0,
      stats: {
        goals: 8,
        assists: 15,
        matches: 25,
        winRate: 72
      },
      achievements: ['Best Midfielder Award', 'Team Captain'],
      highlights: 4,
      followers: 1200,
      trend: 'stable',
      availability: 'Available for trials',
      contact: {
        email: 'sarah.addo@email.com',
        phone: '+233 55 456 7890'
      },
      scoutNotes: 'Excellent passing range, good vision, strong leadership'
    }
  ]

  const teams = [
    {
      id: '1',
      name: 'Accra United U-19',
      sport: 'Football',
      region: 'Greater Accra',
      players: 22,
      wins: 15,
      losses: 3,
      draws: 4,
      points: 49,
      position: 1,
      rating: 8.5,
      achievements: ['League Champions', 'Cup Winners'],
      verified: true
    },
    {
      id: '2',
      name: 'Kumasi Royals Basketball',
      sport: 'Basketball',
      region: 'Ashanti',
      players: 15,
      wins: 12,
      losses: 5,
      draws: 0,
      points: 36,
      position: 2,
      rating: 8.2,
      achievements: ['Regional Champions'],
      verified: true
    }
  ]

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }

  const filteredAthletes = athletes.filter(athlete => {
    if (filters.sport !== 'all' && athlete.sport !== filters.sport) return false
    if (filters.region !== 'all' && athlete.region !== filters.region) return false
    if (filters.position !== 'all' && athlete.position !== filters.position) return false
    if (filters.verified && !athlete.verified) return false
    if (searchQuery && !athlete.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const sortedAthletes = [...filteredAthletes].sort((a, b) => {
    const aValue = a[sortBy]
    const bValue = b[sortBy]
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUpIcon size={14} className="text-green-500" />
      case 'down': return <TrendingDownIcon size={14} className="text-red-500" />
      case 'stable': return <MinusIcon size={14} className="text-yellow-500" />
      default: return null
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
                <Target className="mr-2 text-primary" size={28} />
                Talent Discovery
              </h1>
              <p className="text-text/70 text-sm">Find and track emerging athletes</p>
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

        {/* Search and Filters */}
        <div className="px-4 mb-6">
          <div className="glass-card p-4">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text/40" size={16} />
              <input
                type="text"
                placeholder="Search athletes by name, team, or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <select
                value={filters.sport}
                onChange={(e) => handleFilterChange('sport', e.target.value)}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text text-sm"
              >
                <option value="all">All Sports</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Athletics">Athletics</option>
              </select>

              <select
                value={filters.region}
                onChange={(e) => handleFilterChange('region', e.target.value)}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text text-sm"
              >
                <option value="all">All Regions</option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Western">Western</option>
                <option value="Central">Central</option>
              </select>

              <select
                value={filters.position}
                onChange={(e) => handleFilterChange('position', e.target.value)}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text text-sm"
              >
                <option value="all">All Positions</option>
                <option value="Striker">Striker</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Defender">Defender</option>
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Point Guard">Point Guard</option>
                <option value="Sprint">Sprint</option>
              </select>

              <select
                value={filters.age}
                onChange={(e) => handleFilterChange('age', e.target.value)}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text text-sm"
              >
                <option value="all">All Ages</option>
                <option value="15-17">15-17</option>
                <option value="18-20">18-20</option>
                <option value="21-23">21-23</option>
              </select>
            </div>

            {/* Additional Filters */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-text">
                <input
                  type="checkbox"
                  checked={filters.verified}
                  onChange={(e) => handleFilterChange('verified', e.target.checked)}
                  className="rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                />
                <span>Verified Only</span>
              </label>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white/10 text-text'}`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white/10 text-text'}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 mb-6">
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('athletes')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'athletes'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Athletes
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
              onClick={() => setActiveTab('analytics')}
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                activeTab === 'analytics'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="px-4 space-y-6">
          {activeTab === 'athletes' && (
            <>
              {/* Sort Options */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-text/60">
                  {sortedAthletes.length} athletes found
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-text/60">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSort(e.target.value)}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded text-sm text-text"
                  >
                    <option value="rating">Rating</option>
                    <option value="age">Age</option>
                    <option value="followers">Followers</option>
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="p-1 text-text/60 hover:text-text"
                  >
                    {sortOrder === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />}
                  </button>
                </div>
              </div>

              {/* Athletes Grid/List */}
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-4' : 'space-y-4'}>
                {sortedAthletes.map((athlete) => (
                  <div key={athlete.id} className="glass-card p-4">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={athlete.avatar}
                          alt={athlete.name}
                          className="w-16 h-16 rounded-full"
                        />
                        {athlete.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <Verified size={10} className="text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-text">{athlete.name}</h3>
                            <p className="text-sm text-text/60">{athlete.sport} • {athlete.position}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1">
                              <span className="text-lg font-bold text-primary">{athlete.rating}</span>
                              {getTrendIcon(athlete.trend)}
                            </div>
                            <div className="text-xs text-text/60">Rating</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                          <div>
                            <span className="text-text/60">Age:</span>
                            <span className="text-text ml-1">{athlete.age}</span>
                          </div>
                          <div>
                            <span className="text-text/60">Region:</span>
                            <span className="text-text ml-1">{athlete.region}</span>
                          </div>
                          <div>
                            <span className="text-text/60">Team:</span>
                            <span className="text-text ml-1">{athlete.team}</span>
                          </div>
                          <div>
                            <span className="text-text/60">Followers:</span>
                            <span className="text-text ml-1">{athlete.followers.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                              View Profile
                            </button>
                            <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                              Contact
                            </button>
                            <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                              Bookmark
                            </button>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-1 text-text/60 hover:text-text">
                              <Eye size={14} />
                            </button>
                            <button className="p-1 text-text/60 hover:text-text">
                              <Bookmark size={14} />
                            </button>
                            <button className="p-1 text-text/60 hover:text-text">
                              <Share size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'teams' && (
            <>
              {/* Teams List */}
              <div className="space-y-4">
                {teams.map((team) => (
                  <div key={team.id} className="glass-card p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <Team size={20} className="text-primary" />
                          </div>
                          {team.verified && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                              <Verified size={8} className="text-white" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-text">{team.name}</h3>
                          <p className="text-sm text-text/60">{team.sport} • {team.region}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{team.rating}</div>
                        <div className="text-xs text-text/60">Rating</div>
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
                        <div className="text-sm font-bold text-text">#{team.position}</div>
                        <div className="text-xs text-text/60">Position</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                          View Team
                        </button>
                        <button className="px-3 py-1 bg-white/10 rounded text-xs text-text hover:bg-white/20">
                          Contact Coach
                        </button>
                      </div>
                      <button className="p-1 text-text/60 hover:text-text">
                        <Eye size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'analytics' && (
            <>
              {/* Analytics Overview */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <BarChart3 size={18} className="mr-2" />
                  Discovery Analytics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Total Athletes</div>
                    <div className="text-lg font-bold text-primary">{athletes.length}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Verified Athletes</div>
                    <div className="text-lg font-bold text-green-500">
                      {athletes.filter(a => a.verified).length}
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Top Rated</div>
                    <div className="text-lg font-bold text-yellow-500">
                      {athletes.filter(a => a.rating >= 8.5).length}
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-text/60">Trending</div>
                    <div className="text-lg font-bold text-purple-500">
                      {athletes.filter(a => a.trend === 'up').length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sport Distribution */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <PieChart size={18} className="mr-2" />
                  Sport Distribution
                </h3>
                <div className="space-y-3">
                  {['Football', 'Basketball', 'Athletics'].map((sport) => {
                    const count = athletes.filter(a => a.sport === sport).length
                    const percentage = (count / athletes.length) * 100
                    return (
                      <div key={sport} className="flex items-center justify-between">
                        <span className="text-sm text-text">{sport}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-white/10 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-text">{count}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                  <Activity size={18} className="mr-2" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-text">New athlete registered: Kwame Asante</p>
                      <p className="text-xs text-text/60">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-text">Ama Osei verified by scout</p>
                      <p className="text-xs text-text/60">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-text">New highlight uploaded by Kofi Mensah</p>
                      <p className="text-xs text-text/60">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TalentDiscovery