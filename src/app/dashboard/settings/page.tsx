'use client';

import { useState } from 'react';
import { DEMO_USER } from '@/lib/data';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen">
      <AppHeader />
      <div className="flex-1 p-6">
        <h1 className="text-zinc-900 font-bold text-3xl tracking-tight">Settings</h1>
        <div className="flex flex-col mt-4">
          <div className="flex mb-4">
            <Button
              onClick={() => setActiveTab('profile')}
              className={cn(activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'text-zinc-600', 'py-2 px-4 rounded-lg')}
            >
              Profile
            </Button>
            <Button
              onClick={() => setActiveTab('notifications')}
              className={cn(activeTab === 'notifications' ? 'bg-zinc-900 text-white' : 'text-zinc-600', 'py-2 px-4 rounded-lg')}
            >
              Notifications
            </Button>
            <Button
              onClick={() => setActiveTab('appearance')}
              className={cn(activeTab === 'appearance' ? 'bg-zinc-900 text-white' : 'text-zinc-600', 'py-2 px-4 rounded-lg')}
            >
              Appearance
            </Button>
          </div>
          {activeTab === 'profile' && (
            <Card className="p-6">
              <h2 className="text-zinc-900 font-bold text-2xl tracking-tight mb-4">Profile</h2>
              <div className="flex flex-col mb-4">
                <label className="text-zinc-600 mb-2">Name</label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-zinc-600 mb-2">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-zinc-600 mb-2">Role</label>
                <Input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
              </div>
              <Button onClick={handleSave} className="bg-zinc-900 text-white py-2 px-4 rounded-lg">
                Save
              </Button>
              {saved && <Badge className="bg-emerald-50 text-emerald-600 p-2 rounded-lg">Saved!</Badge>}
            </Card>
          )}
          {activeTab === 'notifications' && (
            <Card className="p-6">
              <h2 className="text-zinc-900 font-bold text-2xl tracking-tight mb-4">Notifications</h2>
              <div className="flex flex-col mb-4">
                <div className="flex items-center mb-2">
                  <label className="text-zinc-600 mr-2">Email Notifications</label>
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="ml-2"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label className="text-zinc-600 mr-2">Push Notifications</label>
                  <input
                    type="checkbox"
                    checked={pushNotifications}
                    onChange={(e) => setPushNotifications(e.target.checked)}
                    className="ml-2"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label className="text-zinc-600 mr-2">Weekly Digest</label>
                  <input
                    type="checkbox"
                    checked={weeklyDigest}
                    onChange={(e) => setWeeklyDigest(e.target.checked)}
                    className="ml-2"
                  />
                </div>
              </div>
            </Card>
          )}
          {activeTab === 'appearance' && (
            <Card className="p-6">
              <h2 className="text-zinc-900 font-bold text-2xl tracking-tight mb-4">Appearance</h2>
              <div className="flex flex-col mb-4">
                <label className="text-zinc-600 mb-2">Theme</label>
                <div className="flex flex-wrap mb-4">
                  <Button className="bg-zinc-50 text-zinc-900 py-2 px-4 rounded-lg mr-2 mb-2">Light</Button>
                  <Button className="bg-zinc-900 text-white py-2 px-4 rounded-lg mr-2 mb-2">Dark</Button>
                  <Button className="bg-zinc-100 text-zinc-600 py-2 px-4 rounded-lg mr-2 mb-2">System</Button>
                </div>
                <label className="text-zinc-600 mb-2">Language</label>
                <select className="py-2 px-4 rounded-lg border border-zinc-200">
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}