import React from 'react';

const Location = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
        {/* Map placeholder */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Map View
        </div>
      </div>
      <p className="text-gray-600">
        123 Sunset Boulevard, Los Angeles, CA 90028
      </p>
    </div>
  );
};

export default Location;