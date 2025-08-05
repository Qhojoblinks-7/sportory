import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  Trophy, 
  Users, 
  Calendar, 
  Target,
  Award,
  Clock,
  CheckCircle,
  XCircle,
  Play,
  Zap,
  Flag,
  Shield,
  Activity,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  Wifi,
  WifiOff,
  Timer,
  MapPin,
  Eye,
  Users2,
  Target as TargetIcon,
  Medal,
  Crown,
  TrendingDown,
  Minus,
  Star,
  TrendingUp,
  CalendarDays,
  Clock3,
  Home,
  Away
} from 'lucide-react'

const Challenges = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('matches')
  const [selectedLeague, setSelectedLeague] = useState('premier-league')

  // Live Matches
  const liveMatches = [
    {
      id: '1',
      home: { name: 'Chelsea', logo: '🔵', score: 2 },
      away: { name: 'Arsenal', logo: '🔴', score: 1 },
      time: '67\'',
      status: 'live',
      league: 'Premier League',
      venue: 'Stamford Bridge',
      viewers: '2.4M'
    },
    {
      id: '2',
      home: { name: 'Hearts of Oak', logo: '💙', score: 0 },
      away: { name: 'Asante Kotoko', logo: '🟡', score: 0 },
      time: '23\'',
      status: 'live',
      league: 'Ghana Premier League',
      venue: 'Accra Sports Stadium',
      viewers: '45K'
    },
    {
      id: '3',
      home: { name: 'Man City', logo: '🔵', score: 3 },
      away: { name: 'Liverpool', logo: '🔴', score: 2 },
      time: '89\'',
      status: 'live',
      league: 'Premier League',
      venue: 'Etihad Stadium',
      viewers: '1.8M'
    }
  ]

  // Upcoming Matches
  const upcomingMatches = [
    {
      id: '4',
      home: { name: 'Man United', logo: '🔴' },
      away: { name: 'Tottenham', logo: '⚪' },
      time: '20:00',
      date: 'Today',
      league: 'Premier League',
      venue: 'Old Trafford',
      prediction: null
    },
    {
      id: '5',
      home: { name: 'Accra United', logo: '🔵' },
      away: { name: 'Kumasi Royals', logo: '🟡' },
      time: '15:30',
      date: 'Tomorrow',
      league: 'Ghana Premier League',
      venue: 'Accra Sports Complex',
      prediction: null
    },
    {
      id: '6',
      home: { name: 'Barcelona', logo: '🔵🔴' },
      away: { name: 'Real Madrid', logo: '⚪' },
      time: '21:00',
      date: 'Tomorrow',
      league: 'La Liga',
      venue: 'Camp Nou',
      prediction: null
    },
    {
      id: '7',
      home: { name: 'Bayern Munich', logo: '🔴' },
      away: { name: 'Dortmund', logo: '🟡' },
      time: '19:30',
      date: 'Saturday',
      league: 'Bundesliga',
      venue: 'Allianz Arena',
      prediction: null
    }
  ]

  // League Tables
  const leagueTables = {
    'premier-league': [
      { position: 1, team: 'Arsenal', played: 20, won: 15, drawn: 3, lost: 2, gf: 45, ga: 18, gd: 27, points: 48, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Man City', played: 20, won: 14, drawn: 3, lost: 3, gf: 52, ga: 22, gd: 30, points: 45, form: ['W', 'W', 'W', 'D', 'W'] },
      { position: 3, team: 'Newcastle', played: 20, won: 13, drawn: 4, lost: 3, gf: 38, ga: 15, gd: 23, points: 43, form: ['W', 'D', 'W', 'W', 'L'] },
      { position: 4, team: 'Man United', played: 20, won: 12, drawn: 3, lost: 5, gf: 35, ga: 25, gd: 10, points: 39, form: ['W', 'W', 'L', 'W', 'D'] },
      { position: 5, team: 'Tottenham', played: 20, won: 11, drawn: 3, lost: 6, gf: 40, ga: 31, gd: 9, points: 36, form: ['L', 'W', 'W', 'D', 'W'] }
    ],
    'ghana-premier': [
      { position: 1, team: 'Hearts of Oak', played: 18, won: 12, drawn: 4, lost: 2, gf: 28, ga: 12, gd: 16, points: 40, form: ['W', 'W', 'D', 'W', 'W'] },
      { position: 2, team: 'Asante Kotoko', played: 18, won: 11, drawn: 5, lost: 2, gf: 25, ga: 10, gd: 15, points: 38, form: ['W', 'D', 'W', 'W', 'L'] },
      { position: 3, team: 'Accra United', played: 18, won: 10, drawn: 4, lost: 4, gf: 22, ga: 15, gd: 7, points: 34, form: ['L', 'W', 'W', 'D', 'W'] },
      { position: 4, team: 'Kumasi Royals', played: 18, won: 9, drawn: 5, lost: 4, gf: 20, ga: 14, gd: 6, points: 32, form: ['W', 'D', 'L', 'W', 'W'] },
      { position: 5, team: 'Medeama SC', played: 18, won: 8, drawn: 6, lost: 4, gf: 18, ga: 12, gd: 6, points: 30, form: ['D', 'W', 'W', 'L', 'D'] }
    ]
  }

  // Challenges
  const currentChallenges = [
    {
      id: '1',
      title: 'Premier League Predictions',
      description: 'Predict the outcomes of this weekend\'s matches',
      deadline: '2024-01-15T20:00:00',
      participants: 156,
      prize: '500 points',
      status: 'active',
      matches: [
        { id: 1, home: 'Chelsea', away: 'Arsenal', prediction: null },
        { id: 2, home: 'Man City', away: 'Liverpool', prediction: null },
        { id: 3, home: 'Man United', away: 'Tottenham', prediction: null }
      ]
    },
    {
      id: '2',
      title: 'Ghana Premier League',
      description: 'Local league predictions for Accra teams',
      deadline: '2024-01-14T15:00:00',
      participants: 89,
      prize: '300 points',
      status: 'active',
      matches: [
        { id: 4, home: 'Hearts of Oak', away: 'Asante Kotoko', prediction: null },
        { id: 5, home: 'Accra United', away: 'Kumasi Royals', prediction: null }
      ]
    }
  ]

  const leaderboard = [
    { rank: 1, name: 'Kwame Asante', points: 1850, wins: 15, avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff' },
    { rank: 2, name: 'Ama Osei', points: 1720, wins: 13, avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff' },
    { rank: 3, name: 'Kofi Mensah', points: 1650, wins: 12, avatar: 'https://ui-avatars.com/api/?name=Kofi+Mensah&background=FACC15&color=000' },
    { rank: 4, name: 'Sarah Addo', points: 1580, wins: 11, avatar: 'https://ui-avatars.com/api/?name=Sarah+Addo&background=EF4444&color=fff' },
    { rank: 5, name: 'David Kofi', points: 1520, wins: 10, avatar: 'https://ui-avatars.com/api/?name=David+Kofi&background=8B5CF6&color=fff' }
  ]

  const [predictions, setPredictions] = useState({})
  const [matchPredictions, setMatchPredictions] = useState({})
  const [showLiveScores, setShowLiveScores] = useState(true)

  const handlePrediction = (matchId, prediction) => {
    setPredictions(prev => ({
      ...prev,
      [matchId]: prediction
    }))
  }

  const submitPredictions = (challengeId) => {
    // In a real app, this would submit to the backend
    console.log('Submitting predictions for challenge:', challengeId, predictions)
    alert('Predictions submitted successfully!')
  }

  const handleMatchPrediction = (matchId, prediction) => {
    setMatchPredictions(prev => ({
      ...prev,
      [matchId]: prediction
    }))
  }

  const getFormColor = (result) => {
    switch (result) {
      case 'W': return 'bg-green-500'
      case 'D': return 'bg-yellow-500'
      case 'L': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getPositionColor = (position) => {
    if (position <= 4) return 'bg-green-500/20 text-green-600'
    if (position <= 6) return 'bg-blue-500/20 text-blue-600'
    if (position >= 18) return 'bg-red-500/20 text-red-600'
    return 'bg-gray-500/20 text-gray-600'
  }

  const getTimeRemaining = (deadline) => {
    const now = new Date()
    const deadlineDate = new Date(deadline)
    const diff = deadlineDate - now
    
    if (diff <= 0) return 'Expired'
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    if (days > 0) return `${days}d ${hours}h`
    return `${hours}h`
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Sports Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-text flex items-center">
                <Trophy className="mr-3 text-primary" size={32} />
                Sports Hub
              </h1>
              <p className="text-text/70 mt-1">Live scores, predictions, and league tables</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-red-500/20 text-red-500 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">LIVE</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('matches')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                activeTab === 'matches'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              <Play size={16} />
              <span>Matches</span>
            </button>
            <button
              onClick={() => setActiveTab('tables')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                activeTab === 'tables'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              <BarChart3 size={16} />
              <span>Tables</span>
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                activeTab === 'challenges'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              <Target size={16} />
              <span>Challenges</span>
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                activeTab === 'leaderboard'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              <Award size={16} />
              <span>Leaderboard</span>
            </button>
          </div>
        </div>

        {/* Live Matches Banner */}
        {showLiveScores && liveMatches.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-text flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                Live Matches
              </h2>
              <button
                onClick={() => setShowLiveScores(false)}
                className="text-text/60 hover:text-text transition-colors"
              >
                <XCircle size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{match.away.logo}</span>
                      <span className="font-semibold text-text">{match.away.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-text">{match.away.score}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-text/60">
                    <span>{match.venue}</span>
                    <span>{match.viewers} watching</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        {activeTab === 'matches' && (
          <div className="space-y-6">
            {/* Upcoming Matches */}
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center">
                <Calendar size={20} className="mr-2" />
                Upcoming Matches
              </h3>
              
              <div className="space-y-4">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="text-center min-w-[60px]">
                        <div className="text-sm font-medium text-text">{match.date}</div>
                        <div className="text-lg font-bold text-primary">{match.time}</div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <div className="text-2xl mb-1">{match.home.logo}</div>
                          <div className="text-sm font-medium text-text">{match.home.name}</div>
                        </div>
                        <div className="text-text/50 font-bold">vs</div>
                        <div className="text-center">
                          <div className="text-2xl mb-1">{match.away.logo}</div>
                          <div className="text-sm font-medium text-text">{match.away.name}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-text">{match.league}</div>
                        <div className="text-xs text-text/60">{match.venue}</div>
                      </div>
                      
                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleMatchPrediction(match.id, 'home')}
                          className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                            matchPredictions[match.id] === 'home'
                              ? 'bg-primary text-white'
                              : 'bg-white/10 text-text hover:bg-white/20'
                          }`}
                        >
                          {match.home.name}
                        </button>
                        <button
                          onClick={() => handleMatchPrediction(match.id, 'draw')}
                          className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                            matchPredictions[match.id] === 'draw'
                              ? 'bg-primary text-white'
                              : 'bg-white/10 text-text hover:bg-white/20'
                          }`}
                        >
                          Draw
                        </button>
                        <button
                          onClick={() => handleMatchPrediction(match.id, 'away')}
                          className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                            matchPredictions[match.id] === 'away'
                              ? 'bg-primary text-white'
                              : 'bg-white/10 text-text hover:bg-white/20'
                          }`}
                        >
                          {match.away.name}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tables' && (
          <div className="space-y-6">
            {/* League Selector */}
            <div className="flex space-x-2 mb-6">
              <button
                onClick={() => setSelectedLeague('premier-league')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedLeague === 'premier-league'
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-text hover:bg-white/20'
                }`}
              >
                Premier League
              </button>
              <button
                onClick={() => setSelectedLeague('ghana-premier')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedLeague === 'ghana-premier'
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-text hover:bg-white/20'
                }`}
              >
                Ghana Premier League
              </button>
            </div>

            {/* League Table */}
            <div className="glass-card overflow-x-auto">
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center">
                <Shield size={20} className="mr-2" />
                {selectedLeague === 'premier-league' ? 'Premier League' : 'Ghana Premier League'} Table
              </h3>
              
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-2 text-sm font-medium text-text/60">Pos</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-text/60">Team</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">P</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">W</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">D</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">L</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">GF</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">GA</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">GD</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">Pts</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-text/60">Form</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueTables[selectedLeague].map((team) => (
                    <tr key={team.position} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${getPositionColor(team.position)}`}>
                          {team.position}
                        </span>
                      </td>
                      <td className="py-3 px-2 font-medium text-text">{team.team}</td>
                      <td className="py-3 px-2 text-center text-text/70">{team.played}</td>
                      <td className="py-3 px-2 text-center text-text/70">{team.won}</td>
                      <td className="py-3 px-2 text-center text-text/70">{team.drawn}</td>
                      <td className="py-3 px-2 text-center text-text/70">{team.lost}</td>
                      <td className="py-3 px-2 text-center text-text/70">{team.gf}</td>
                      <td className="py-3 px-2 text-center text-text/70">{team.ga}</td>
                      <td className="py-3 px-2 text-center text-text/70">{team.gd > 0 ? `+${team.gd}` : team.gd}</td>
                      <td className="py-3 px-2 text-center font-bold text-text">{team.points}</td>
                      <td className="py-3 px-2">
                        <div className="flex space-x-1 justify-center">
                          {team.form.map((result, index) => (
                            <div
                              key={index}
                              className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white ${getFormColor(result)}`}
                            >
                              {result}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-6">
            {currentChallenges.map((challenge) => (
              <div key={challenge.id} className="glass-card">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-text/70 mb-2">{challenge.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-text/60">
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {challenge.participants} participants
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="mr-1" />
                        {challenge.prize}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {getTimeRemaining(challenge.deadline)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-text">Make Your Predictions:</h4>
                  {challenge.matches.map((match) => (
                    <div key={match.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <span className="font-medium text-text">{match.home}</span>
                        <span className="text-text/50">vs</span>
                        <span className="font-medium text-text">{match.away}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePrediction(match.id, 'home')}
                          className={`px-3 py-1 rounded-md transition-colors ${
                            predictions[match.id] === 'home'
                              ? 'bg-primary text-white'
                              : 'bg-white/10 text-text hover:bg-white/20'
                          }`}
                        >
                          {match.home}
                        </button>
                        <button
                          onClick={() => handlePrediction(match.id, 'draw')}
                          className={`px-3 py-1 rounded-md transition-colors ${
                            predictions[match.id] === 'draw'
                              ? 'bg-primary text-white'
                              : 'bg-white/10 text-text hover:bg-white/20'
                          }`}
                        >
                          Draw
                        </button>
                        <button
                          onClick={() => handlePrediction(match.id, 'away')}
                          className={`px-3 py-1 rounded-md transition-colors ${
                            predictions[match.id] === 'away'
                              ? 'bg-primary text-white'
                              : 'bg-white/10 text-text hover:bg-white/20'
                          }`}
                        >
                          {match.away}
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => submitPredictions(challenge.id)}
                      className="btn-primary"
                    >
                      Submit Predictions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="glass-card">
            <h3 className="text-xl font-semibold text-text mb-6 flex items-center">
              <Award className="mr-2" />
              Top Predictors
            </h3>
            
            <div className="space-y-4">
              {leaderboard.map((player, index) => (
                <div
                  key={player.rank}
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                    index === 0 ? 'bg-highlight/10 border border-highlight/20' : 'bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-highlight text-black' : 
                      index === 1 ? 'bg-gray-300 text-gray-700' : 
                      index === 2 ? 'bg-amber-600 text-white' : 'bg-white/10 text-text'
                    }`}>
                      {player.rank}
                    </div>
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-text">{player.name}</h4>
                      <p className="text-sm text-text/60">{player.wins} wins</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-text">{player.points}</div>
                    <div className="text-sm text-text/60">points</div>
                  </div>
                </div>
              ))}
            </div>

            {user && (
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-text mb-2">Your Stats</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">1,250</div>
                    <div className="text-sm text-text/60">Total Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-text/60">Wins</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">#8</div>
                    <div className="text-sm text-text/60">Rank</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Challenges