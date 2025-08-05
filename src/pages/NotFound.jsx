import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <Card className="space-y-6">
          {/* 404 Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">404</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-text">
              Page Not Found
            </h1>
            <p className="text-text/70 text-sm sm:text-base">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="primary"
              fullWidth
              onClick={() => window.history.back()}
              className="flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button
              variant="outline"
              fullWidth
              as={Link}
              to="/"
              className="flex items-center justify-center"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-text/60 mb-3">Try these pages instead:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                to="/challenges"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Challenges
              </Link>
              <span className="text-text/30">•</span>
              <Link
                to="/community"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Community
              </Link>
              <span className="text-text/30">•</span>
              <Link
                to="/marketplace"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Marketplace
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default NotFound