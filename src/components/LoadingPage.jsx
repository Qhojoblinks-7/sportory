import { LoadingSpinner } from './index'

const LoadingPage = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <LoadingSpinner size="xl" text={message} />
      </div>
    </div>
  )
}

// Skeleton components for better loading states
export const SkeletonCard = () => (
  <div className="glass-card animate-pulse">
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-white/20 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
          <div className="h-3 bg-white/20 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/20 rounded"></div>
        <div className="h-3 bg-white/20 rounded w-5/6"></div>
      </div>
    </div>
  </div>
)

export const SkeletonGrid = ({ count = 6 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
)

export const SkeletonList = ({ count = 5 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg animate-pulse">
        <div className="w-10 h-10 bg-white/20 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-white/20 rounded w-1/3"></div>
          <div className="h-3 bg-white/20 rounded w-1/2"></div>
        </div>
        <div className="w-16 h-8 bg-white/20 rounded"></div>
      </div>
    ))}
  </div>
)

export default LoadingPage