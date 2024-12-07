import React from 'react';

const ReviewCard = ({ name, rating, date, comment, avatar }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full" />
          ) : (
            <span className="text-xl text-gray-500">{name.charAt(0)}</span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{name}</h3>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-${i < rating ? 'yellow' : 'gray'}-500`}>★</span>
            ))}
          </div>
          <p className="mt-2 text-gray-600">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;