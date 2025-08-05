import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  Settings as SettingsIcon,
  Bell,
  Shield,
  Palette,
  Globe,
  Smartphone,
  Moon,
  Sun,
  Volume2,
  VolumeX
} from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import Tabs from '../components/Tabs'

const Settings = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('general')
  const [settings, setSettings] = useState({
    notifications: {
      push: true,
      email: false,
      sms: false
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium'
    },
    language: 'en'
  })

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette }
  ]

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }))
  }

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text">Account Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Display Name</label>
            <input
              type="text"
              defaultValue={user?.name}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-2">Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text">Language & Region</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', null, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-2">Time Zone</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="GMT">GMT (Accra)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text">Notification Preferences</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Bell className="text-primary" size={20} />
              <div>
                <div className="font-medium text-text">Push Notifications</div>
                <div className="text-sm text-text/60">Receive notifications on your device</div>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.push}
                onChange={(e) => handleSettingChange('notifications', 'push', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Globe className="text-primary" size={20} />
              <div>
                <div className="font-medium text-text">Email Notifications</div>
                <div className="text-sm text-text/60">Receive updates via email</div>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={(e) => handleSettingChange('notifications', 'email', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <Smartphone className="text-primary" size={20} />
              <div>
                <div className="font-medium text-text">SMS Notifications</div>
                <div className="text-sm text-text/60">Receive updates via SMS</div>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.sms}
                onChange={(e) => handleSettingChange('notifications', 'sms', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text">Privacy Settings</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Profile Visibility</label>
            <select
              value={settings.privacy.profileVisibility}
              onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <div className="font-medium text-text">Show Email Address</div>
              <div className="text-sm text-text/60">Allow others to see your email</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.privacy.showEmail}
                onChange={(e) => handleSettingChange('privacy', 'showEmail', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <div className="font-medium text-text">Show Phone Number</div>
              <div className="text-sm text-text/60">Allow others to see your phone number</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.privacy.showPhone}
                onChange={(e) => handleSettingChange('privacy', 'showPhone', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text">Appearance</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Theme</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSettingChange('appearance', 'theme', 'light')}
                className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-colors ${
                  settings.appearance.theme === 'light'
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Sun className="w-5 h-5" />
                <span>Light</span>
              </button>
              <button
                onClick={() => handleSettingChange('appearance', 'theme', 'dark')}
                className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-colors ${
                  settings.appearance.theme === 'dark'
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Moon className="w-5 h-5" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">Font Size</label>
            <select
              value={settings.appearance.fontSize}
              onChange={(e) => handleSettingChange('appearance', 'fontSize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings()
      case 'notifications':
        return renderNotificationSettings()
      case 'privacy':
        return renderPrivacySettings()
      case 'appearance':
        return renderAppearanceSettings()
      default:
        return renderGeneralSettings()
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Please log in to access settings</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text mb-2">Settings</h1>
          <p className="text-text/70">Manage your account preferences</p>
        </div>

        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex justify-center">
            <Tabs
              tabs={tabs}
              defaultTab={activeTab}
              onChange={setActiveTab}
              variant="default"
            />
          </div>

          {/* Content */}
          <Card>
            {renderContent()}
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button variant="primary">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings