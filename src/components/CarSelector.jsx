import React from 'react';
import { cars } from '../data/cars';

export function CarSelector({ selectedCar, onCarChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Selecione o seu carro</h2>
      <div className="space-y-3">
        {cars.map((car) => (
          <label key={car.id} className="flex items-center gap-2">
            <input
              type="radio"
              name="car"
              value={car.id}
              checked={selectedCar === car.id}
              onChange={(e) => onCarChange(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>
              {car.model}, {car.brand} {car.year}
              <span className="ml-2 text-sm text-gray-600">Cor: {car.color}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}