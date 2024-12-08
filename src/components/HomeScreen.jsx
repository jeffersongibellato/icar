import React, { useState } from 'react';
import UserProfile from './UserProfile';
import UserModal from './UserModal';
import { ClockIcon, MapPinIcon, WrenchIcon } from '@heroicons/react/24/outline';
import MainCarousel from './MainCarousel';
import Slider from 'react-slick';
import BottomNavigation from './BottomNavigation';
import imagemLogo from './icar.png'

const HomeScreen = ()=> {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false
      };
    const logo =[
        {
            name:'ICAR',
            image: "icar.png"
        }
    ]
      const services = [
        {
          name: 'SUNSET CAR WASH',
          rating: 4.1,
          image: 'https://via.placeholder.com/200x150'
        },
        {
          name: 'LAVA RÁPIDO BH',
          rating: 4.3,
          image: 'https://via.placeholder.com/200x150'
        },
        {
          name: 'LAVA RÁPIDO EXPRESS',
          rating: 4.0,
          image: 'https://via.placeholder.com/200x150'
        },
        {
          name: 'PORTO VIP LAVA RÁPIDO',
          rating: 4.2,
          image: 'https://via.placeholder.com/200x150'
        },
      ];

    
  return (
    <div className="app bg-gray-100 min-h-screen">
           <header className="bg-blue-600 p-5 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex justify-between items-center">
          <UserProfile onProfileClick={() => setIsModalOpen(true)} />
            <img src={imagemLogo} alt="ICAR" style={{left:'34%', width:150, height:150, position:'absolute'}}/>
        </div>
      </div>
      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <div className="text-black p-4 w-30" style={{backgroundColor:"#FFFFFF", border:10, borderColor:'gray', width:'80%', margin:'0% 10%', borderRadius:12, marginTop:30, marginBottom:-50}}> 
      <div className="w-50" style={{width:'80%', margin: '0% 10%'}}>
        <div className="flex justify-between items-center mb-2">
          <div className="text-black">
            <p className="text-sm">Serviço:</p>
            <p className="font-semibold">Lavagem completa</p>
          </div>
          <div className="bg-white rounded-full p-2 h-16 w-16 flex items-center justify-center">
            <div className="text-blue-600 text-center">
              <p className="text-xs">Progresso</p>
              <p className="font-bold">0%</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center" style={{width:100, marginLeft:-10}}>
            <ClockIcon className="h-6 w-4 mb-1" />
            <span className="text-xs">Tempo estimado</span>
            <span className="font-semibold">45 min</span>
          </div>
          <div className="flex flex-col items-center" style={{width:90}}>
            <MapPinIcon className="h-6 w-4 mb-1" />
            <span className="text-xs">Distância</span>
            <span className="font-semibold">2.5 km</span>
          </div>
          <div className="flex flex-col items-center"style={{width:100}}>
            <WrenchIcon className="h-6 w-6 mb-1" />
            <span className="text-xs">Tipo</span>
            <span className="font-semibold">Completa</span>
          </div>
        </div>
      </div>
    </div>
    </header>
      <main className="pb-16" style={{marginTop:50}}>
        <MainCarousel />
        <div className="mb-20" style={{marginTop: 30}}>
      <h2 className="text-lg font-semibold mb-4 px-4">Lava-Rápidos Até 5km de Distância</h2>
      <Slider {...settings} className="px-4">
        {services.map((service, index) => (
          <div key={index} className="pr-4">
            <div className="bg-white rounded-lg shadow">
              <img src={service.image} alt={service.name} className="w-full h-32 object-cover rounded-t-lg" />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm ml-1">{service.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </main>
      <BottomNavigation />
    </div>
  );
}

export default HomeScreen;