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
  XCircle
} from 'lucide-react'

const Challenges = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('current')

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4 flex items-center justify-center">
            <Trophy className="mr-3 text-primary" size={40} />
            Fan Challenges
          </h1>
          <p className="text-xl text-text/70">
            Test your sports knowledge with weekly prediction games
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'current'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Current Challenges
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'leaderboard'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Leaderboard
            </button>
          </div>
        </div>

        {activeTab === 'current' && (
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