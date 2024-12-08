import React from 'react';

export function TimeSelector({ selectedTime, onTimeChange }) {
  return (
    <div>
    <div className="flex items-center gap-4 mb-6">
      <div className="text-center" style={{width:'50%'}}>
        <div className="text-lg font-semibold">12/11</div>
        </div>
        <div>
        <div>
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => onTimeChange(e.target.value)}
          className="mt-2 p-2 border rounded-md"
        />
        </div>
        </div>
        </div>
        </div>
  );
}