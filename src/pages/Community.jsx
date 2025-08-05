import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Share, 
  MoreHorizontal,
  Send,
  Image,
  Video,
  Trophy,
  Star
} from 'lucide-react'

const Community = () => {
  const { user } = useAuth()
  const [newPost, setNewPost] = useState('')
  const [activeTab, setActiveTab] = useState('feed')

  const posts = [
    {
      id: '1',
      author: {
        name: 'Kwame Asante',
        avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
        role: 'athlete',
        team: 'Accra United'
      },
      content: 'Just finished an amazing training session! The team is looking sharp for the upcoming match. 💪⚽ #GhanaFootball #AccraUnited',
      image: null,
      likes: 45,
      comments: 12,
      shares: 3,
      timestamp: '2 hours ago',
      isLiked: false
    },
    {
      id: '2',
      author: {
        name: 'Ama Osei',
        avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff',
        role: 'athlete',
        team: 'Kumasi Royals'
      },
      content: 'Check out this incredible shot from last night\'s game! 🏀 #Basketball #KumasiRoyals',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop',
      likes: 89,
      comments: 23,
      shares: 7,
      timestamp: '5 hours ago',
      isLiked: true
    },
    {
      id: '3',
      author: {
        name: 'David Kofi',
        avatar: 'https://ui-avatars.com/api/?name=David+Kofi&background=8B5CF6&color=fff',
        role: 'fan',
        team: null
      },
      content: 'The atmosphere at the stadium today was electric! Ghana football fans are the best in the world! 🇬🇭⚽ #GhanaFootball #FanLife',
      image: null,
      likes: 156,
      comments: 34,
      shares: 15,
      timestamp: '1 day ago',
      isLiked: false
    }
  ]

  const athletes = [
    {
      id: '1',
      name: 'Kwame Asante',
      sport: 'Football',
      position: 'Striker',
      team: 'Accra United',
      avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
      followers: 1240,
      verified: true
    },
    {
      id: '2',
      name: 'Ama Osei',
      sport: 'Basketball',
      position: 'Point Guard',
      team: 'Kumasi Royals',
      avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff',
      followers: 890,
      verified: true
    },
    {
      id: '3',
      name: 'Kofi Mensah',
      sport: 'Athletics',
      position: 'Sprint',
      team: 'Ghana Athletics',
      avatar: 'https://ui-avatars.com/api/?name=Kofi+Mensah&background=FACC15&color=000',
      followers: 567,
      verified: false
    }
  ]

  const [likedPosts, setLikedPosts] = useState(new Set(['2']))

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()
    if (newPost.trim()) {
      // In a real app, this would submit to the backend
      console.log('New post:', newPost)
      setNewPost('')
      alert('Post created successfully!')
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4 flex items-center justify-center">
            <Users className="mr-3 text-primary" size={40} />
            Community
          </h1>
          <p className="text-xl text-text/70">
            Connect with athletes and fellow sports fans
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('feed')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'feed'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Feed
            </button>
            <button
              onClick={() => setActiveTab('athletes')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'athletes'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
            >
              Athletes
            </button>
          </div>
        </div>

        {activeTab === 'feed' && (
          <div className="space-y-6">
            {/* Create Post */}
            {user && (
              <div className="glass-card">
                <form onSubmit={handleSubmitPost} className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="What's on your mind?"
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button type="button" className="p-2 text-text/60 hover:text-text transition-colors">
                        <Image size={20} />
                      </button>
                      <button type="button" className="p-2 text-text/60 hover:text-text transition-colors">
                        <Video size={20} />
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!newPost.trim()}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="glass-card">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-text">{post.author.name}</h3>
                          {post.author.role === 'athlete' && (
                            <Trophy className="text-highlight" size={16} />
                          )}
                        </div>
                        <p className="text-sm text-text/60">
                          {post.author.team} • {post.timestamp}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 text-text/60 hover:text-text transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="text-text mb-4">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full rounded-lg"
                      />
                    )}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          likedPosts.has(post.id)
                            ? 'text-red-500'
                            : 'text-text/60 hover:text-red-500'
                        }`}
                      >
                        <Heart size={20} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-text/60 hover:text-text transition-colors">
                        <MessageCircle size={20} />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-text/60 hover:text-text transition-colors">
                        <Share size={20} />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'athletes' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {athletes.map((athlete) => (
                <div key={athlete.id} className="glass-card hover:bg-white/20 transition-all duration-300">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <img
                        src={athlete.avatar}
                        alt={athlete.name}
                        className="w-20 h-20 rounded-full"
                      />
                      {athlete.verified && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Star className="text-white" size={12} />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-text mb-1">{athlete.name}</h3>
                    <p className="text-text/70 text-sm mb-2">{athlete.sport} • {athlete.position}</p>
                    <p className="text-primary text-sm font-medium mb-3">{athlete.team}</p>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-text/60 mb-4">
                      <span>{athlete.followers} followers</span>
                    </div>
                    
                    <button className="btn-outline w-full">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community