import { forwardRef } from 'react'

const Input = forwardRef(({
  label,
  error,
  helperText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  fullWidth = true,
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200'
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : ''
  const iconClasses = LeftIcon ? 'pl-10' : RightIcon ? 'pr-10' : ''
  const widthClass = fullWidth ? 'w-full' : ''
  
  const classes = `${baseClasses} ${errorClasses} ${iconClasses} ${widthClass} ${className}`

  return (
    <div className={`${fullWidth ? 'w-full' : ''} space-y-1`}>
      {label && (
        <label className="block text-sm font-medium text-text">
          {label}
        </label>
      )}
      
      <div className="relative">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LeftIcon className="h-5 w-5 text-text/40" />
          </div>
        )}
        
        <input
          ref={ref}
          className={classes}
          {...props}
        />
        
        {RightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <RightIcon className="h-5 w-5 text-text/40" />
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <p className={`text-sm ${error ? 'text-red-600' : 'text-text/60'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input