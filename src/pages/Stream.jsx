import { Video, Camera, Wifi, Settings } from 'lucide-react'

const Stream = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Video className="text-primary" size={48} />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
              <Camera className="text-secondary" size={16} />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-highlight/20 rounded-full flex items-center justify-center">
              <Wifi className="text-highlight" size={16} />
            </div>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
              <Settings className="text-primary" size={12} />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="glass-card">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            🎥 Match Streaming
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Coming Soon!
          </h2>
          
          <p className="text-xl text-text/70 mb-8 leading-relaxed">
            We're setting up the gear to bring you live action. 
            <br />
            Stay tuned for an incredible streaming experience!
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-text mb-2">HD Quality</h3>
              <p className="text-text/60 text-sm">
                Crystal clear streams in high definition
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wifi className="text-secondary" size={24} />
              </div>
              <h3 className="font-semibold text-text mb-2">Live Coverage</h3>
              <p className="text-text/60 text-sm">
                Real-time matches and events
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="text-highlight" size={24} />
              </div>
              <h3 className="font-semibold text-text mb-2">Multi-Angle</h3>
              <p className="text-text/60 text-sm">
                Multiple camera angles for the best view
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-text/50 text-sm">
              Equipment setup in progress...
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8">
          <a 
            href="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>← Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Stream