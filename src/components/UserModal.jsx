import React from 'react';
import iconeperfil from './iconeperfil.png'

const UserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Conta</h2>
          <button onClick={onClose} className="text-gray-500">&times;</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={iconeperfil}
              alt="User"
              className="w-15 h-15 rounded-full"
            />
            <div>
              <p className="font-semibold">Felipe Ferreira</p>
              <p className="text-gray-500">felipe@email.com</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <p className="text-gray-600">Membro desde: Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;