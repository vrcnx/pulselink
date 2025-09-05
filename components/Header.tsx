'use client';

import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="flex justify-center items-center px-6 py-4">
        {/* PulseLink Logo */}
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-black" />
          <span className="text-2xl font-bold text-gray-900 tracking-tight">PulseLink</span>
        </div>
      </div>
    </div>
  );
}
