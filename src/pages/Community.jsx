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
  Star,
  Bookmark,
  Smile,
  MapPin,
  Calendar,
  UserPlus,
  Play
} from 'lucide-react'
import StoryViewer from '../components/StoryViewer'

const Community = () => {
  const { user } = useAuth()
  const [newPost, setNewPost] = useState('')
  const [activeTab, setActiveTab] = useState('feed')

  const stories = [
    {
      id: '1',
      author: {
        name: 'Kwame Asante',
        avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
        verified: true
      },
      hasStory: true,
      isViewed: false
    },
    {
      id: '2',
      author: {
        name: 'Ama Osei',
        avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff',
        verified: true
      },
      hasStory: true,
      isViewed: true
    },
    {
      id: '3',
      author: {
        name: 'Kumasi Royals',
        avatar: 'https://ui-avatars.com/api/?name=Kumasi+Royals&background=FACC15&color=000',
        verified: true
      },
      hasStory: true,
      isViewed: false
    },
    {
      id: '4',
      author: {
        name: 'Ghana Football',
        avatar: 'https://ui-avatars.com/api/?name=Ghana+Football&background=EF4444&color=fff',
        verified: true
      },
      hasStory: true,
      isViewed: true
    },
    {
      id: '5',
      author: {
        name: 'Accra United',
        avatar: 'https://ui-avatars.com/api/?name=Accra+United&background=8B5CF6&color=fff',
        verified: true
      },
      hasStory: true,
      isViewed: false
    }
  ]

  const posts = [
    {
      id: '1',
      author: {
        name: 'Kwame Asante',
        avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=1D4ED8&color=fff',
        role: 'athlete',
        team: 'Accra United',
        verified: true
      },
      content: 'Just finished an amazing training session! The team is looking sharp for the upcoming match. 💪⚽ #GhanaFootball #AccraUnited',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop'
      ],
      likes: 245,
      comments: 23,
      shares: 12,
      timestamp: '2 hours ago',
      isLiked: false,
      isSaved: false,
      location: 'Accra Sports Complex'
    },
    {
      id: '2',
      author: {
        name: 'Ama Osei',
        avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=10B981&color=fff',
        role: 'athlete',
        team: 'Kumasi Royals',
        verified: true
      },
      content: 'Check out this incredible shot from last night\'s game! 🏀 #Basketball #KumasiRoyals #GameWinner',
      images: [
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop'
      ],
      likes: 892,
      comments: 67,
      shares: 34,
      timestamp: '5 hours ago',
      isLiked: true,
      isSaved: true,
      location: 'Kumasi Arena'
    },
    {
      id: '3',
      author: {
        name: 'David Kofi',
        avatar: 'https://ui-avatars.com/api/?name=David+Kofi&background=8B5CF6&color=fff',
        role: 'fan',
        team: null,
        verified: false
      },
      content: 'The atmosphere at the stadium today was electric! Ghana football fans are the best in the world! 🇬🇭⚽ #GhanaFootball #FanLife #MatchDay',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop'
      ],
      likes: 1567,
      comments: 234,
      shares: 89,
      timestamp: '1 day ago',
      isLiked: false,
      isSaved: false,
      location: 'Accra Stadium'
    },
    {
      id: '4',
      author: {
        name: 'Sarah Addo',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Addo&background=EF4444&color=fff',
        role: 'athlete',
        team: 'Ghana Athletics',
        verified: true
      },
      content: 'New personal best in training today! 💨 #Athletics #Ghana #Training #PersonalBest',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop'
      ],
      likes: 456,
      comments: 45,
      shares: 23,
      timestamp: '3 hours ago',
      isLiked: true,
      isSaved: false,
      location: 'Accra Athletics Track'
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

  const [likedPosts, setLikedPosts] = useState(new Set(['2', '4']))
  const [savedPosts, setSavedPosts] = useState(new Set(['2']))
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const [showComments, setShowComments] = useState({})
  const [showStoryViewer, setShowStoryViewer] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
        // Add animation class
        const heartElement = document.querySelector(`[data-post-id="${postId}"] .heart-button`)
        if (heartElement) {
          heartElement.classList.add('like-animation')
          setTimeout(() => {
            heartElement.classList.remove('like-animation')
          }, 300)
        }
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

  const handleSave = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const handleImageChange = (postId, direction) => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[postId] || 0
      const post = posts.find(p => p.id === postId)
      const maxIndex = post.images.length - 1
      
      if (direction === 'next') {
        return { ...prev, [postId]: currentIndex < maxIndex ? currentIndex + 1 : 0 }
      } else {
        return { ...prev, [postId]: currentIndex > 0 ? currentIndex - 1 : maxIndex }
      }
    })
  }

  const toggleComments = (postId) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }))
  }

  const openStory = (storyIndex) => {
    setCurrentStoryIndex(storyIndex)
    setShowStoryViewer(true)
  }

  const closeStoryViewer = () => {
    setShowStoryViewer(false)
  }

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
    } else {
      closeStoryViewer()
    }
  }

  const previousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Instagram-style Header */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-xl font-bold text-text">Sportory</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-text hover:text-primary transition-colors">
                <Send size={20} />
              </button>
              <button className="p-2 text-text hover:text-primary transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stories Section */}
        <div className="px-4 py-4 border-b border-white/10 bg-background">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => openStory(index)}
                className="flex flex-col items-center space-y-1 flex-shrink-0"
              >
                <div className={`relative w-16 h-16 rounded-full p-0.5 ${
                  story.isViewed 
                    ? 'bg-gray-300' 
                    : 'bg-gradient-to-tr from-yellow-400 to-pink-600'
                }`}>
                  <img
                    src={story.author.avatar}
                    alt={story.author.name}
                    className="w-full h-full rounded-full object-cover border-2 border-background"
                  />
                  {story.author.verified && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Star className="text-white" size={10} />
                    </div>
                  )}
                </div>
                <span className="text-xs text-text/70 truncate max-w-16">{story.author.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} data-post-id={post.id} className="bg-background border-b border-white/10">
              {/* Post Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {post.author.verified && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                        <Star className="text-white" size={8} />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-text text-sm">{post.author.name}</span>
                      {post.author.verified && <Star className="text-primary" size={12} />}
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-text/60">
                      {post.location && (
                        <>
                          <MapPin size={10} />
                          <span>{post.location}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                <button className="p-1 text-text/60 hover:text-text transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>

              {/* Post Images */}
              {post.images && post.images.length > 0 && (
                <div className="relative">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={post.images[currentImageIndex[post.id] || 0]}
                      alt="Post"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Navigation Dots */}
                    {post.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {post.images.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === (currentImageIndex[post.id] || 0)
                                ? 'bg-white'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Image Navigation Arrows */}
                    {post.images.length > 1 && (
                      <>
                        <button
                          onClick={() => handleImageChange(post.id, 'prev')}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() => handleImageChange(post.id, 'next')}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Post Actions */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`heart-button transition-colors ${
                        likedPosts.has(post.id)
                          ? 'text-red-500'
                          : 'text-text hover:text-red-500'
                      }`}
                    >
                      <Heart size={24} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button 
                      onClick={() => toggleComments(post.id)}
                      className="text-text hover:text-text/70 transition-colors"
                    >
                      <MessageCircle size={24} />
                    </button>
                    <button className="text-text hover:text-text/70 transition-colors">
                      <Share size={24} />
                    </button>
                  </div>
                  <button
                    onClick={() => handleSave(post.id)}
                    className={`transition-colors ${
                      savedPosts.has(post.id)
                        ? 'text-text'
                        : 'text-text hover:text-text/70'
                    }`}
                  >
                    <Bookmark size={24} fill={savedPosts.has(post.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Likes Count */}
                <div className="mb-2">
                  <span className="font-semibold text-text text-sm">{post.likes.toLocaleString()} likes</span>
                </div>

                {/* Post Content */}
                <div className="mb-2">
                  <span className="font-semibold text-text text-sm mr-2">{post.author.name}</span>
                  <span className="text-text text-sm">{post.content}</span>
                </div>

                {/* Comments Preview */}
                {post.comments > 0 && (
                  <button 
                    onClick={() => toggleComments(post.id)}
                    className="text-text/60 text-sm mb-2 hover:text-text transition-colors"
                  >
                    View all {post.comments} comments
                  </button>
                )}

                {/* Comments Section */}
                {showComments[post.id] && (
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start space-x-2">
                      <img
                        src="https://ui-avatars.com/api/?name=User&background=1D4ED8&color=fff"
                        alt="User"
                        className="w-6 h-6 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="bg-white/5 rounded-lg p-2">
                          <span className="font-semibold text-text text-sm mr-2">user123</span>
                          <span className="text-text text-sm">Amazing shot! 🔥</span>
                        </div>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-text/60">
                          <span>2h</span>
                          <button className="hover:text-text">Like</button>
                          <button className="hover:text-text">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Add Comment */}
                <div className="flex items-center space-x-2 pt-2 border-t border-white/10">
                  <button className="text-text/60 hover:text-text transition-colors">
                    <Smile size={20} />
                  </button>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 bg-transparent border-none outline-none text-text text-sm placeholder-text/60"
                  />
                  <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                    Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Post Button (Floating) */}
        {user && (
          <button className="fixed bottom-20 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors z-50">
            <Send size={24} />
          </button>
        )}

        {/* Story Viewer */}
        {showStoryViewer && (
          <StoryViewer
            stories={stories}
            currentStoryIndex={currentStoryIndex}
            onClose={closeStoryViewer}
            onNext={nextStory}
            onPrevious={previousStory}
          />
        )}
      </div>
    </div>
  )
}

export default Community