import { useState } from 'react'

const Tabs = ({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className = '',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  const variants = {
    default: 'bg-white/10 rounded-lg p-1',
    pills: 'space-x-1',
    underline: 'border-b border-white/10'
  }

  const tabVariants = {
    default: {
      active: 'bg-primary text-white',
      inactive: 'text-text/70 hover:text-text'
    },
    pills: {
      active: 'bg-primary text-white',
      inactive: 'text-text/70 hover:text-text'
    },
    underline: {
      active: 'border-b-2 border-primary text-primary',
      inactive: 'text-text/70 hover:text-text'
    }
  }

  const baseClasses = 'flex items-center justify-center px-3 py-2 rounded-md transition-colors duration-200 font-medium text-sm'
  const containerClasses = `flex ${variants[variant]} ${className}`

  return (
    <div className={containerClasses} {...props}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        const tabClasses = `${baseClasses} ${
          isActive ? tabVariants[variant].active : tabVariants[variant].inactive
        }`

        return (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={tabClasses}
          >
            {tab.icon && <tab.icon className="w-4 h-4 mr-2" />}
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs