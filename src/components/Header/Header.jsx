import * as React from 'react';
import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import sunsetcarheader from './sunsetcarheader.png'
const Header = () => {
  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10">
        <button className="p-2 rounded-full bg-white shadow-md">
          <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <button className="p-2 rounded-full bg-white shadow-md">
          <HeartIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="relative h-30" >
        <img src= {sunsetcarheader} alt=""/>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold">SUNSET CAR WASH</h1>
          <span className="text-orange-500 font-semibold">4,8 Km</span>
        </div>
        <div className="flex items-center mt-1">
          <div className="flex text-yellow-400">
            {'★'.repeat(5)}
          </div>
          <span className="ml-1 text-gray-600">(4.8)</span>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Descrição</h2>
          <p className="text-gray-600">
            Nossa equipe é treinada para cuidar do seu carro detalhe de seu carro. Garantimos um atendimento impecável, valorizando cada aspecto do seu veículo.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Header;