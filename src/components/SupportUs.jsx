import { Phone, User, MessageSquare } from 'lucide-react'

const SupportUs = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  return (
    <div className="glass-card">
      <h4 className="font-semibold text-text mb-3 flex items-center">
        <MessageSquare size={16} className="mr-2" />
        Support Sportory
      </h4>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User size={14} className="text-primary" />
            <span className="text-sm text-text/70">Name:</span>
          </div>
          <span className="text-sm font-medium text-text">Immanuel Eshun</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-primary" />
            <span className="text-sm text-text/70">MoMo:</span>
          </div>
          <button
            onClick={() => copyToClipboard('+233 55 465 6612')}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            title="Copy number"
          >
            +233 55 465 6612
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-text/70">Message:</span>
          <button
            onClick={() => copyToClipboard('Support for Sportory')}
            className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
            title="Copy message"
          >
            "Support for Sportory"
          </button>
        </div>
      </div>
      
      <p className="text-xs text-text/50 mt-3">
        Your support helps keep the dream alive! 💛
      </p>
    </div>
  )
}

export default SupportUs