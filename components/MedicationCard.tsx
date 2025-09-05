'use client';

import { Syringe, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-blue-50 flex items-center justify-center">
    <div className="text-sm text-gray-600">Loading map...</div>
  </div>
});

interface MedicationCardProps {
  name: string;
  distance: string;
}

export default function MedicationCard({ name, distance }: MedicationCardProps) {
  return (
    <div className="mx-6 mb-4">
      <div className="bg-white rounded-xl p-4">
        {/* Compact Header with inline info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Syringe className="w-4 h-4 text-black" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">EpiPen Available</h3>
              <p className="text-xs text-gray-500">{distance}</p>
            </div>
          </div>
          <CheckCircle className="w-5 h-5 text-black" />
        </div>

        {/* OpenStreetMap */}
        <div className="w-full h-24 rounded-lg mb-3 relative overflow-hidden bg-gray-100">
          <LeafletMap />
        </div>
        
        {/* Medication Name */}
        <div>
          <h4 className="text-base font-bold text-gray-900">{name}</h4>
        </div>
      </div>
    </div>
  );
}