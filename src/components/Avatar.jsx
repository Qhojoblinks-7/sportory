const Avatar = ({
  src,
  alt,
  size = 'md',
  fallback,
  className = '',
  ...props
}) => {
  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-20 h-20 text-xl',
    '3xl': 'w-32 h-32 text-3xl'
  }

  const baseClasses = 'rounded-full flex items-center justify-center font-medium bg-primary text-white overflow-hidden'
  const classes = `${baseClasses} ${sizes[size]} ${className}`

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={classes}
        {...props}
      />
    )
  }

  return (
    <div className={classes} {...props}>
      {fallback || (alt ? alt.charAt(0).toUpperCase() : '?')}
    </div>
  )
}

export default Avatar