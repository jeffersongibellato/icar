import React from 'react';
import { formatDate, getMonthDays } from '../../utils/dateUtils';

const Calendar = ({ selectedDate, onDateSelect }) => {
  const currentDate = new Date();
  const days = getMonthDays(currentDate);
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">
        {formatDate(currentDate, 'MMMM yyyy')}
      </h2>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-gray-500 text-sm">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <button
            key={day.toString()}
            onClick={() => onDateSelect(day)}
            className={`p-2 text-center rounded-lg hover:bg-blue-50 
              ${formatDate(selectedDate || new Date(), 'yyyy-MM-dd') === formatDate(day, 'yyyy-MM-dd')
                ? 'bg-blue-500 text-white'
                : ''}`}
          >
            {formatDate(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;