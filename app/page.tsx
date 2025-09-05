import Header from '@/components/Header';
import PanicButton from '@/components/PanicButton';
import MedicationCard from '@/components/MedicationCard';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-4 w-full">
        {/* Page Title */}
        <div className="px-6 mb-4 w-full">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1 whitespace-nowrap">
            Allergy & Wellness
          </h1>
          <p className="text-gray-600 text-sm">Emergency medical assistance at your fingertips</p>
        </div>
        
        {/* Panic Button */}
        <PanicButton />
        
        {/* Medication Card */}
        <MedicationCard
          name="Epinephrine Auto-Injector, 0.3 mg"
          distance="0.2 ml away"
        />
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}