'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';
import { 
  User, 
  Calendar,
  ArrowLeft,
  Save
} from 'lucide-react';

export default function PersonalInformationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: ''
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    console.log('Saving personal information:', formData);
    setHasUnsavedChanges(false);
    alert('✅ Personal information saved successfully!');
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
              <h1 className="text-xl font-bold text-gray-900">Personal Information</h1>
              <p className="text-sm text-gray-600">Basic details about yourself</p>
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
        
        {/* Form */}
        <div className="px-6">
          <div className="bg-white rounded-xl p-6">
            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  First Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  Last Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Date of Birth
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  Gender
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
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
            Save Personal Information
          </button>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
