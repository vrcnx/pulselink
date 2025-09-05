'use client';

import { AlertTriangle, X, MapPin, Clock, Truck, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PanicButton() {
  const [showDialog, setShowDialog] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState('dispatching');
  const [estimatedTime, setEstimatedTime] = useState(8);

  const handlePanicPress = () => {
    setShowDialog(true);
    setDeliveryStatus('dispatching');
    setEstimatedTime(8);
    
    // Simulate progression of delivery status
    setTimeout(() => {
      setDeliveryStatus('enroute');
      setEstimatedTime(6);
    }, 3000);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    if (deliveryStatus === 'enroute') {
      const interval = setInterval(() => {
        setEstimatedTime(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setDeliveryStatus('arriving');
            return 0;
          }
          return prev - 1;
        });
      }, 10000); // Update every 10 seconds for demo
      
      return () => clearInterval(interval);
    }
  }, [deliveryStatus]);

  return (
    <>
      <div className="px-6 mb-4">
        <div className="bg-red-50 p-4 rounded-2xl">
          <div className="text-center mb-3">
            <h2 className="text-base font-semibold text-gray-900 mb-1">Emergency Response</h2>
            <p className="text-xs text-gray-600">Press for immediate assistance</p>
          </div>
          <button
            onClick={handlePanicPress}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl pulse-button transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
          >
            <AlertTriangle className="w-5 h-5" />
            <span className="text-base">EMERGENCY</span>
            <AlertTriangle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Emergency Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md mx-auto shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Emergency Activated</h2>
              </div>
              <button
                onClick={handleCloseDialog}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-semibold text-sm">
                    {deliveryStatus === 'dispatching' && 'Dispatching Medication'}
                    {deliveryStatus === 'enroute' && 'Medication En Route'}
                    {deliveryStatus === 'arriving' && 'Medication Arriving'}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  EpiPen On The Way
                </h3>
                <p className="text-gray-600">
                  Your emergency medication has been dispatched to your current location
                </p>
              </div>

              {/* Delivery Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Truck className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Emergency Delivery</p>
                    <p className="text-sm text-gray-600">Epinephrine Auto-Injector, 0.3mg</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Delivery Location</p>
                    <p className="text-sm text-gray-600">Your current GPS location</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-200">
                  <div className="p-2 bg-amber-100 rounded-xl">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Estimated Arrival</p>
                    <p className="text-sm text-gray-600">
                      {estimatedTime > 0 ? `${estimatedTime} minutes` : 'Arriving now'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={() => alert('Calling emergency services...')}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call 911
                </button>
                
                <button
                  onClick={handleCloseDialog}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95"
                >
                  Close
                </button>
              </div>
              
              {/* Emergency Info */}
              <div className="mt-6 p-4 bg-gray-100 rounded-xl">
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Emergency services have been notified. Stay calm and wait for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
