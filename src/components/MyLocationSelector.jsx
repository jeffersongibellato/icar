import React from 'react';
import { mylocations } from '../data/mylocations';

export function MyLocationSelector({ selectedMyLocation, onMyLocationChange}) {

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Selecione seu local</h2>
      <div className="flex gap-4">
        {mylocations.map((locationmine) => (
          <label key={locationmine.id} className="flex items-center gap-2">
            <input
              type="radio"
              name="locationmine"
              value={locationmine.id}
              checked={selectedMyLocation === locationmine.id}
              onChange={(e) => onMyLocationChange(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>{locationmine.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}