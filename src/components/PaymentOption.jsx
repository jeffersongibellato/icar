import React from 'react';

function PaymentOption({ type, lastDigits, brand, isSelected, onSelect }) {
  return (
    <div 
      className={`flex items-center p-4 border-b cursor-pointer ${isSelected ? 'bg-gray-100' : ''}`}
      onClick={onSelect}
    >
      <input
        type="radio"
        checked={isSelected}
        onChange={onSelect}
        className="mr-3"
      />
      <div className="flex-1">
        <span className="font-medium">{type}</span>
        {lastDigits && brand && (
          <span className="text-gray-600 ml-2">
            ****{lastDigits} ({brand})
          </span>
        )}
      </div>
    </div>
  );
}

export default PaymentOption;