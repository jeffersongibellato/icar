import React from 'react';
import { locations } from '../data/locations';

export function LocationSelector({ selectedLocation, onLocationChange}) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Local</h2>
      <div className="flex gap-4">
        {locations.map((location) => (
          <label key={location.id} className="flex items-center gap-2">
            <input
              type="radio"
              name="location"
              value={location.id}
              checked={selectedLocation === location.id}
              onChange={(e) => onLocationChange(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>{location.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}