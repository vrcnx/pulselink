import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Clock, AlertTriangle, Syringe, CheckCircle, Calendar } from 'lucide-react';

interface HistoryEvent {
  id: string;
  type: 'emergency' | 'medication' | 'check';
  title: string;
  description: string;
  timestamp: string;
  date: string;
  status: 'resolved' | 'pending' | 'completed';
}

const historyEvents: HistoryEvent[] = [
  {
    id: '1',
    type: 'emergency',
    title: 'Emergency Alert Triggered',
    description: 'Panic button pressed - Emergency services contacted',
    timestamp: '2:30 PM',
    date: 'Today',
    status: 'resolved'
  },
  {
    id: '2',
    type: 'medication',
    title: 'EpiPen Usage Logged',
    description: 'Auto-injector administered during allergic reaction',
    timestamp: '2:28 PM',
    date: 'Today',
    status: 'completed'
  },
  {
    id: '3',
    type: 'check',
    title: 'Medication Check',
    description: 'Verified EpiPen location and expiration date',
    timestamp: '9:15 AM',
    date: 'Today',
    status: 'completed'
  },
  {
    id: '4',
    type: 'emergency',
    title: 'False Alarm',
    description: 'Panic button accidentally triggered - Cancelled',
    timestamp: '6:45 PM',
    date: 'Yesterday',
    status: 'resolved'
  },
  {
    id: '5',
    type: 'medication',
    title: 'Medication Refilled',
    description: 'New EpiPen acquired from pharmacy',
    timestamp: '3:20 PM',
    date: 'Dec 4',
    status: 'completed'
  }
];

function getEventIcon(type: string) {
  switch (type) {
    case 'emergency':
      return <AlertTriangle className="w-5 h-5 text-black" />;
    case 'medication':
      return <Syringe className="w-5 h-5 text-black" />;
    case 'check':
      return <CheckCircle className="w-5 h-5 text-black" />;
    default:
      return <Clock className="w-5 h-5 text-gray-500" />;
  }
}

function getEventColor(type: string) {
  switch (type) {
    case 'emergency':
      return 'border-red-200';
    case 'medication':
      return 'border-amber-200';
    case 'check':
      return 'border-green-200';
    default:
      return 'border-gray-200';
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'resolved':
      return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">Resolved</span>;
    case 'pending':
      return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">Pending</span>;
    case 'completed':
      return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">Completed</span>;
    default:
      return null;
  }
}

export default function HistoryPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-6 w-full">
        {/* Page Title */}
        <div className="px-6 mb-6 w-full">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
            History
          </h1>
          <p className="text-gray-600 text-base">Your emergency and medication activity log</p>
        </div>
        
        {/* Summary Cards */}
        <div className="px-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 ">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg ">
                  <AlertTriangle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Emergencies</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 ">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg ">
                  <Syringe className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Medications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* History Timeline */}
        <div className="px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          
          <div className="space-y-4">
            {historyEvents.map((event) => (
              <div key={event.id} className={`bg-white rounded-xl p-5 border-2 ${getEventColor(event.type)}`}>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg ">
                    {getEventIcon(event.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {event.title}
                      </h3>
                      {getStatusBadge(event.status)}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state message */}
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm">End of history log</p>
          </div>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
