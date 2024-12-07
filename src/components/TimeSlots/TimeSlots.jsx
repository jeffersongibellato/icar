import React from 'react';

const TimeSlots = ({ selectedTime, onTimeSelect }) => {
  const timeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00'
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Horários Disponíveis</h2>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map(time => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
            className={`p-2 rounded-lg text-sm transition-colors
              ${selectedTime === time
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;