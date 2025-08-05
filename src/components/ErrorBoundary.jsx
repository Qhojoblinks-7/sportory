import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Button from './Button'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            <Card className="text-center space-y-6">
              {/* Error Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-text">
                  Oops! Something went wrong
                </h1>
                <p className="text-text/70 text-sm sm:text-base">
                  We encountered an unexpected error. Please try again or go back to the homepage.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="primary"
                  onClick={this.handleRetry}
                  className="flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button
                  variant="outline"
                  as={Link}
                  to="/"
                  className="flex items-center justify-center"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </div>

              {/* Development Error Details */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left">
                  <summary className="cursor-pointer text-sm text-text/60 hover:text-text">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 p-3 bg-red-50 rounded text-xs text-red-800 overflow-auto">
                    <div className="font-semibold mb-2">Error:</div>
                    <div className="mb-3">{this.state.error.toString()}</div>
                    <div className="font-semibold mb-2">Stack Trace:</div>
                    <pre className="whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </Card>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary