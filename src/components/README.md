# Sportory Components

A collection of mobile-first, reusable React components built with Tailwind CSS.

## Components

### Core Components

#### Button
A versatile button component with multiple variants and sizes.

```jsx
import { Button } from '../components'

<Button variant="primary" size="md" fullWidth>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `disabled`: boolean
- `fullWidth`: boolean

#### Input
A form input component with icon support and validation states.

```jsx
import { Input } from '../components'
import { Mail } from 'lucide-react'

<Input
  label="Email"
  leftIcon={Mail}
  error="Invalid email"
  placeholder="Enter your email"
/>
```

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `leftIcon`: React component
- `rightIcon`: React component
- `fullWidth`: boolean

#### Card
A container component with glassmorphism styling.

```jsx
import { Card } from '../components'

<Card variant="default" padding="md">
  Content here
</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined' | 'solid'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'

#### Avatar
A circular avatar component with fallback support.

```jsx
import { Avatar } from '../components'

<Avatar src="image.jpg" alt="User" size="lg" />
```

**Props:**
- `src`: string
- `alt`: string
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
- `fallback`: string

#### Badge
A small status indicator component.

```jsx
import { Badge } from '../components'

<Badge variant="success" size="md">
  Active
</Badge>
```

**Props:**
- `variant`: 'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'outline' | 'highlight'
- `size`: 'sm' | 'md' | 'lg'

### Layout Components

#### Layout
The main layout wrapper with navigation and footer.

#### MobileNav
Bottom navigation for mobile devices with auto-hide on scroll.

#### Modal
A modal dialog component with backdrop.

```jsx
import { Modal } from '../components'

<Modal isOpen={isOpen} onClose={onClose} title="Modal Title">
  Modal content
</Modal>
```

**Props:**
- `isOpen`: boolean
- `onClose`: function
- `title`: string
- `size`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
- `showCloseButton`: boolean

### Feedback Components

#### LoadingSpinner
A loading indicator component.

```jsx
import { LoadingSpinner } from '../components'

<LoadingSpinner size="lg" color="primary" text="Loading..." />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `color`: 'primary' | 'secondary' | 'white' | 'highlight'
- `text`: string

#### LoadingPage
A full-page loading component.

```jsx
import { LoadingPage } from '../components'

<LoadingPage message="Loading your profile..." />
```

#### EmptyState
A component for when there's no data to display.

```jsx
import { EmptyState } from '../components'
import { Users } from 'lucide-react'

<EmptyState
  icon={Users}
  title="No users found"
  description="Try adjusting your search criteria"
  action={<Button>Add User</Button>}
/>
```

#### ErrorBoundary
A React error boundary component for graceful error handling.

```jsx
import { ErrorBoundary } from '../components'

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### Navigation Components

#### Tabs
A tab navigation component.

```jsx
import { Tabs } from '../components'
import { Home, Settings } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'settings', label: 'Settings', icon: Settings }
]

<Tabs tabs={tabs} onChange={handleTabChange} />
```

**Props:**
- `tabs`: array of tab objects
- `defaultTab`: string
- `onChange`: function
- `variant`: 'default' | 'pills' | 'underline'

#### SearchBar
A search input with autocomplete and suggestions.

```jsx
import { SearchBar } from '../components'

<SearchBar
  onSearch={handleSearch}
  placeholder="Search athletes..."
/>
```

**Props:**
- `onSearch`: function
- `placeholder`: string

### Utility Components

#### SupportUs
The MoMo support component with copy functionality.

## Mobile-First Design

All components are built with mobile-first principles:

- **Responsive breakpoints**: `sm:`, `md:`, `lg:`, `xl:`
- **Touch-friendly**: Minimum 44px touch targets
- **Flexible layouts**: Grid and flexbox for responsive layouts
- **Progressive enhancement**: Basic functionality on mobile, enhanced on desktop

## CSS Classes

### Mobile-First Utilities

- `.container-mobile`: Responsive padding
- `.text-mobile-responsive`: Responsive text sizing
- `.heading-mobile-responsive`: Responsive heading sizes
- `.btn-mobile`: Mobile-optimized buttons
- `.card-mobile`: Mobile-optimized cards
- `.grid-mobile`: Mobile-optimized grids
- `.space-mobile`: Responsive spacing
- `.text-mobile-center`: Responsive text alignment

### Glassmorphism

- `.glass`: Basic glassmorphism effect
- `.glass-card`: Card with glassmorphism

## Usage

```jsx
import { 
  Button, 
  Input, 
  Card, 
  Avatar, 
  Badge,
  Modal,
  LoadingSpinner,
  EmptyState,
  Tabs,
  SearchBar
} from '../components'

function MyComponent() {
  return (
    <Card>
      <div className="space-mobile">
        <h1 className="heading-mobile-responsive">Title</h1>
        <div className="grid-mobile">
          {/* Content */}
        </div>
      </div>
    </Card>
  )
}
```

## Best Practices

1. **Always use mobile-first responsive classes**
2. **Test on various screen sizes**
3. **Use semantic HTML elements**
4. **Provide proper accessibility attributes**
5. **Handle loading and error states**
6. **Use consistent spacing and typography**