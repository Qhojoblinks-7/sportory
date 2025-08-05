const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300'
  
  const variants = {
    default: 'glass-card',
    elevated: 'bg-white/20 backdrop-blur-md border border-white/20 shadow-xl',
    outlined: 'border border-white/20 bg-white/5',
    solid: 'bg-white/10'
  }
  
  const paddingSizes = {
    none: '',
    sm: 'p-3',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-12'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${paddingSizes[padding]} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card