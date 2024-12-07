import React from 'react';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 ${
        isActive 
          ? 'border-b-2 border-blue-500 text-blue-500' 
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;