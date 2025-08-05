import { useState, useRef, useEffect } from 'react'
import { Search, X, Users, Trophy, ShoppingBag } from 'lucide-react'

const SearchBar = ({ onSearch, placeholder = "Search athletes, challenges, products..." }) => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const searchRef = useRef(null)

  // Mock suggestions - in a real app, this would come from an API
  const mockSuggestions = [
    { type: 'athlete', name: 'Kwame Asante', icon: Users, href: '/athlete/1' },
    { type: 'athlete', name: 'Ama Osei', icon: Users, href: '/athlete/2' },
    { type: 'challenge', name: 'Premier League Predictions', icon: Trophy, href: '/challenges' },
    { type: 'product', name: 'Sportory Jersey', icon: ShoppingBag, href: '/marketplace' },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.trim()) {
      const filtered = mockSuggestions.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [query])

  const handleSearch = (searchQuery) => {
    onSearch?.(searchQuery)
    setQuery('')
    setIsOpen(false)
  }

  const handleSuggestionClick = (suggestion) => {
    // In a real app, this would navigate to the suggestion
    console.log('Navigating to:', suggestion.href)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-text/40" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white/5 backdrop-blur-sm"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-text/40 hover:text-text/60" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto">
          {suggestions.map((suggestion, index) => {
            const Icon = suggestion.icon
            return (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full flex items-center space-x-3 p-3 hover:bg-white/10 transition-colors text-left"
              >
                <Icon className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-text">{suggestion.name}</div>
                  <div className="text-sm text-text/60 capitalize">{suggestion.type}</div>
                </div>
              </button>
            )
          })}
        </div>
      )}

      {/* Recent Searches (Mobile) */}
      {isOpen && query === '' && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 p-4">
          <div className="text-sm font-medium text-text mb-3">Recent Searches</div>
          <div className="space-y-2">
            {['Kwame Asante', 'Premier League', 'Sportory Jersey'].map((recent, index) => (
              <button
                key={index}
                onClick={() => setQuery(recent)}
                className="w-full text-left text-sm text-text/70 hover:text-text p-2 rounded hover:bg-white/10"
              >
                {recent}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar