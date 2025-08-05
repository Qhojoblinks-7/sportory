const EmptyState = ({
  icon: Icon,
  title,
  description,
  action,
  className = '',
  ...props
}) => {
  return (
    <div className={`text-center py-12 px-4 ${className}`} {...props}>
      {Icon && (
        <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white/10">
          <Icon className="w-8 h-8 text-text/40" />
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-text mb-2">
        {title}
      </h3>
      
      {description && (
        <p className="text-text/60 mb-6 max-w-sm mx-auto">
          {description}
        </p>
      )}
      
      {action && (
        <div className="flex justify-center">
          {action}
        </div>
      )}
    </div>
  )
}

export default EmptyState