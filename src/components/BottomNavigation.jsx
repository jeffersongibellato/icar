import React from 'react';
import { HomeIcon, MapIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around py-2">
        <button className="flex flex-col items-center p-2">
          <HomeIcon className="h-6 w-6 text-blue-600" />
          <span className="text-xs mt-1">Início</span>
        </button>
        <button className="flex flex-col items-center p-2">
          <MapIcon className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1">Serviços</span>
        </button>
        <button className="flex flex-col items-center p-2">
          <ClockIcon className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1">Histórico</span>
        </button>
        <button className="flex flex-col items-center p-2">
          <UserIcon className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1">Perfil</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;