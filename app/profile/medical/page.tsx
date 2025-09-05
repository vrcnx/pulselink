'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Heart, 
  AlertTriangle,
  Activity,
  Pill,
  ArrowLeft,
  Save
} from 'lucide-react';

export default function MedicalInformationPage() {
  const [formData, setFormData] = useState({
    bloodType: '',
    allergies: '',
    medicalConditions: '',
    currentMedications: '',
    medicalNotes: ''
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    console.log('Saving medical information:', formData);
    setHasUnsavedChanges(false);
    alert('✅ Medical information saved successfully!');
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
              <h1 className="text-xl font-bold text-gray-900">Medical Information</h1>
              <p className="text-sm text-gray-600">Critical health details for emergency responders</p>
            </div>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="px-6 mb-6">
          <div className="bg-red-50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Critical Medical Information</h3>
                <p className="text-xs text-gray-600">This information is vital for first responders and medical personnel during emergencies.</p>
              </div>
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
              {/* Blood Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Heart className="w-4 h-4 text-gray-500" />
                  Blood Type
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.bloodType}
                  onChange={(e) => handleInputChange('bloodType', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none"
                >
                  <option value="">Select blood type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              {/* Known Allergies */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <AlertTriangle className="w-4 h-4 text-black" />
                  Known Allergies
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.allergies}
                  onChange={(e) => handleInputChange('allergies', e.target.value)}
                  placeholder="Peanuts, shellfish, penicillin, latex, etc."
                  rows={3}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none resize-none"
                />
                <p className="text-xs text-gray-500 mt-2">List all known allergies, including severity levels</p>
              </div>

              {/* Medical Conditions */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Activity className="w-4 h-4 text-gray-500" />
                  Medical Conditions
                </label>
                <textarea
                  value={formData.medicalConditions}
                  onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                  placeholder="Asthma, diabetes, heart condition, etc."
                  rows={3}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none resize-none"
                />
              </div>

              {/* Current Medications */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Pill className="w-4 h-4 text-gray-500" />
                  Current Medications
                </label>
                <textarea
                  value={formData.currentMedications}
                  onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                  placeholder="List all medications with dosages and frequency"
                  rows={3}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none resize-none"
                />
              </div>

              {/* Additional Medical Notes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Heart className="w-4 h-4 text-gray-500" />
                  Additional Medical Notes
                </label>
                <textarea
                  value={formData.medicalNotes}
                  onChange={(e) => handleInputChange('medicalNotes', e.target.value)}
                  placeholder="Any other important medical information"
                  rows={3}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:border-red-500 transition-all outline-none resize-none"
                />
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
            Save Medical Information
          </button>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
