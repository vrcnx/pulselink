'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Users, 
  User,
  Phone,
  ArrowLeft,
  Save
} from 'lucide-react';

export default function EmergencyContactsPage() {
  const [formData, setFormData] = useState({
    emergencyContact1Name: '',
    emergencyContact1Relationship: '',
    emergencyContact1Phone: '',
    emergencyContact2Name: '',
    emergencyContact2Relationship: '',
    emergencyContact2Phone: ''
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    console.log('Saving emergency contacts:', formData);
    setHasUnsavedChanges(false);
    alert('✅ Emergency contacts saved successfully!');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-4 w-full">
        {/* Navigation Header */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/profile">
              <div className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </div>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Emergency Contacts</h1>
              <p className="text-sm text-gray-600">People to contact during emergencies</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        {hasUnsavedChanges && (
          <div className="px-6 mb-6">
            <button
              onClick={handleSave}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-3"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        )}
        
        {/* Primary Emergency Contact */}
        <div className="px-6 mb-8">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-black" />
              Primary Emergency Contact
            </h2>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  Full Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.emergencyContact1Name}
                  onChange={(e) => handleInputChange('emergencyContact1Name', e.target.value)}
                  placeholder="John Doe"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
              </div>

              {/* Relationship and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    Relationship
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyContact1Relationship}
                    onChange={(e) => handleInputChange('emergencyContact1Relationship', e.target.value)}
                    placeholder="Spouse, Parent, etc."
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.emergencyContact1Phone}
                    onChange={(e) => handleInputChange('emergencyContact1Phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Emergency Contact */}
        <div className="px-6 mb-6">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-black" />
              Secondary Emergency Contact
            </h2>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.emergencyContact2Name}
                  onChange={(e) => handleInputChange('emergencyContact2Name', e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
              </div>

              {/* Relationship and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    Relationship
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyContact2Relationship}
                    onChange={(e) => handleInputChange('emergencyContact2Relationship', e.target.value)}
                    placeholder="Friend, Colleague, etc."
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.emergencyContact2Phone}
                    onChange={(e) => handleInputChange('emergencyContact2Phone', e.target.value)}
                    placeholder="(555) 987-6543"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button Bottom */}
        <div className="px-6 mt-6">
          <button
            onClick={handleSave}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-3"
          >
            <Save className="w-5 h-5" />
            Save Emergency Contacts
          </button>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
