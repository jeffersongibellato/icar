import React from 'react';
import iconeperfil from './iconeperfil.png'
const UserProfile = ({ onProfileClick }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src= {iconeperfil}
        alt="User"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={onProfileClick}
      />
      <div>
        <p className="text-white text-sm">Felipe Ferreira</p>
      </div>
    </div>
  );
};

export default UserProfile;