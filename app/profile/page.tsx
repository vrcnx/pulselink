'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { 
  User, 
  Phone, 
  Home,
  Heart,
  Users,
  Activity,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';

const profileSections = [
  {
    href: '/profile/personal',
    title: 'Personal Information',
    description: 'Name, birth date, gender',
    icon: <User className="w-6 h-6 text-black" />,
    required: true
  },
  {
    href: '/profile/contact',
    title: 'Contact Information',
    description: 'Phone number and email',
    icon: <Phone className="w-6 h-6 text-black" />,
    required: true
  },
  {
    href: '/profile/address',
    title: 'Home Address',
    description: 'Street address, city, state, ZIP',
    icon: <Home className="w-6 h-6 text-black" />,
    required: true
  },
  {
    href: '/profile/medical',
    title: 'Medical Information',
    description: 'Blood type, allergies, conditions',
    icon: <Heart className="w-6 h-6 text-black" />,
    required: true,
    priority: true
  },
  {
    href: '/profile/emergency',
    title: 'Emergency Contacts',
    description: 'Primary and secondary contacts',
    icon: <Users className="w-6 h-6 text-black" />,
    required: true,
    priority: true
  },
  {
    href: '/profile/providers',
    title: 'Medical Providers',
    description: 'Doctors, hospital, insurance',
    icon: <Activity className="w-6 h-6 text-black" />,
    required: false
  }
];

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-4 w-full">
        {/* Page Title */}
        <div className="px-6 mb-4 w-full">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
            Emergency Profile
          </h1>
          <p className="text-gray-600 text-sm">Complete your information for emergency situations</p>
        </div>
        
        {/* Emergency Alert */}
        <div className="px-6 mb-6">
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-black mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Critical Information Required</h3>
                <p className="text-xs text-gray-600">Complete all sections to ensure first responders have the information they need to help you effectively.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="px-6">
          <div className="space-y-6">
            {profileSections.map((section) => (
              <Link key={section.href} href={section.href}>
                <div className="bg-white rounded-xl p-6 transition-all duration-200 active:scale-98 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900 text-base">{section.title}</h3>
                          {section.required && (
                            <span className="text-black text-sm font-medium">*</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
                      </div>
                    </div>
                    <div className="ml-3">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="px-6 mt-8 mb-8">
          <div className="bg-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 text-base mb-3">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              If you need assistance completing your profile, contact your healthcare provider or emergency services for guidance.
            </p>
            <button className="text-black text-sm font-medium hover:text-gray-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}