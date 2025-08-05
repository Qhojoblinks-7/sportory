import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const StoryViewer = ({ stories, currentStoryIndex, onClose, onNext, onPrevious }) => {
  const [progress, setProgress] = useState(0)
  const currentStory = stories[currentStoryIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          onNext()
          return 0
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onNext])

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowLeft') {
      onPrevious()
    } else if (e.key === 'ArrowRight') {
      onNext()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!currentStory) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Story Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-sm h-full max-h-[600px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden">
          {/* Story Image/Content */}
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{currentStory.author.name}</h3>
              <p className="text-sm opacity-80">Story from {currentStory.author.name}</p>
            </div>
          </div>

          {/* Story Header */}
          <div className="absolute top-4 left-4 right-4 flex items-center space-x-3">
            <div className="relative">
              <img
                src={currentStory.author.avatar}
                alt={currentStory.author.name}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              {currentStory.author.verified && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{currentStory.author.name}</div>
              <div className="text-white/80 text-xs">2 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryViewer