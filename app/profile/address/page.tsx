'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Home, 
  MapPin,
  ArrowLeft,
  Save
} from 'lucide-react';

export default function AddressPage() {
  const [formData, setFormData] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    console.log('Saving address information:', formData);
    setHasUnsavedChanges(false);
    alert('✅ Address information saved successfully!');
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
              <h1 className="text-xl font-bold text-gray-900">Home Address</h1>
              <p className="text-sm text-gray-600">Your residential address for emergency services</p>
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
              {/* Street Address */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Home className="w-4 h-4 text-gray-500" />
                  Street Address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                  placeholder="123 Main Street, Apt 4B"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
              </div>

              {/* City and State */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    City
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Vancouver"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    State/Province
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="BC"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* ZIP Code */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  ZIP/Postal Code
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  placeholder="V6B 1A1"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
                <p className="text-xs text-gray-500 mt-2">This helps emergency services locate you quickly</p>
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
            Save Address Information
          </button>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
