'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Activity, 
  User,
  Phone,
  MapPin,
  Shield,
  FileText,
  ArrowLeft,
  Save
} from 'lucide-react';

export default function MedicalProvidersPage() {
  const [formData, setFormData] = useState({
    primaryDoctorName: '',
    primaryDoctorPhone: '',
    preferredHospital: '',
    insuranceProvider: '',
    insurancePolicyNumber: ''
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    console.log('Saving medical providers information:', formData);
    setHasUnsavedChanges(false);
    alert('✅ Medical providers information saved successfully!');
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
              <h1 className="text-xl font-bold text-gray-900">Medical Providers</h1>
              <p className="text-sm text-gray-600">Healthcare providers and insurance information</p>
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
        
        {/* Healthcare Providers */}
        <div className="px-6 mb-8">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-black" />
              Healthcare Providers
            </h2>
            <div className="space-y-6">
              {/* Primary Doctor */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 text-gray-500" />
                    Primary Doctor
                  </label>
                  <input
                    type="text"
                    value={formData.primaryDoctorName}
                    onChange={(e) => handleInputChange('primaryDoctorName', e.target.value)}
                    placeholder="Dr. Sarah Wilson"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    Doctor&apos;s Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.primaryDoctorPhone}
                    onChange={(e) => handleInputChange('primaryDoctorPhone', e.target.value)}
                    placeholder="(555) 555-0123"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Preferred Hospital */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  Preferred Hospital
                </label>
                <input
                  type="text"
                  value={formData.preferredHospital}
                  onChange={(e) => handleInputChange('preferredHospital', e.target.value)}
                  placeholder="Vancouver General Hospital"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
                <p className="text-xs text-gray-500 mt-2">Hospital you prefer for emergency treatment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="px-6 mb-6">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-black" />
              Insurance Information
            </h2>
            <div className="space-y-6">
              {/* Insurance Provider */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Shield className="w-4 h-4 text-gray-500" />
                  Insurance Provider
                </label>
                <input
                  type="text"
                  value={formData.insuranceProvider}
                  onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
                  placeholder="Blue Cross Blue Shield"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
              </div>

              {/* Policy Number */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FileText className="w-4 h-4 text-gray-500" />
                  Policy Number
                </label>
                <input
                  type="text"
                  value={formData.insurancePolicyNumber}
                  onChange={(e) => handleInputChange('insurancePolicyNumber', e.target.value)}
                  placeholder="ABC123456789"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                />
                <p className="text-xs text-gray-500 mt-2">Your insurance policy or member ID number</p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Note */}
        <div className="px-6 mb-6">
          <div className="bg-gray-100 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Why This Information Matters</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Having your healthcare providers and insurance information readily available helps ensure you receive appropriate care during emergencies and that billing is handled correctly.
            </p>
          </div>
        </div>

        {/* Save Button Bottom */}
        <div className="px-6 mt-6">
          <button
            onClick={handleSave}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-3"
          >
            <Save className="w-5 h-5" />
            Save Medical Providers
          </button>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
