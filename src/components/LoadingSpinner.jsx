import { Loader2 } from 'lucide-react'

const LoadingSpinner = ({
  size = 'md',
  color = 'primary',
  text,
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white',
    highlight: 'text-highlight'
  }

  const classes = `${sizes[size]} ${colors[color]} animate-spin ${className}`

  return (
    <div className="flex flex-col items-center justify-center space-y-2" {...props}>
      <Loader2 className={classes} />
      {text && (
        <p className="text-sm text-text/60">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner