import React from 'react';
import { washTypes } from '../data/washTypes';

export function WashTypeSelector({ selectedType, onTypeChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Tipo de Lavagem</h2>
      <div className="flex gap-4">
        {washTypes.map((type) => (
          <label key={type.id} className="flex items-center gap-2">
            <input
              type="radio"
              name="washType"
              value={type.id}
              checked={selectedType === type.id}
              onChange={(e) => onTypeChange(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>{type.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}