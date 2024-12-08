import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';
import TimeSlots from './components/TimeSlots/TimeSlots';
import Location from './components/Location/Location';
import Reviews from './components/Reviews/Reviews';
import TabButton from './components/Tabs/TabButton';
import { TimeSelector } from './components/TimeSelector';
import { LocationSelector } from './components/LocationSelector';
import { WashTypeSelector } from './components/WashTypeSelector';
import { CarSelector } from './components/CarSelector';
import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import PaymentOption from './components/PaymentOption';
import {MyLocationSelector} from './components/MyLocationSelector';
import UserProfile from './components/UserProfile';
import UserModal from './components/UserModal';
import { CalendarIcon, MapPinIcon, WrenchIcon } from '@heroicons/react/24/outline';
import MainCarousel from './components/MainCarousel';
import Slider from 'react-slick';
import BottomNavigation from './components/BottomNavigation';
import imagemLogo from './components/icar.png'
import sunset from './components/sunset.png'
import cliniCar from './components/clinicar.jpg'
import lavaRapidoExpress from './components/lavaRapidoExpress.png'
import pontoVip from './components/pontoVip.jpg'
function App() {
  const [isButtonClicked2, setIsButtonClicked2]= useState(false);
  const [selectedScreen, setSelectedScreen] = useState("Home");
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState('agendamento');
  const [agendamentoTab, setAgendamentoTab] = useState(1);
  const [selectedTime, setSelectedTime] = useState('08:50');
  const [selectedLocation, setSelectedLocation] = useState('quick');
  const [selectedMyLocation, setSelectedMyLocation] = useState('Minha Casa');
  const [selectedWashType, setSelectedWashType] = useState('internal');
  const [selectedCar, setSelectedCar] = useState('f40');
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [dateTemplate, setDateTemplate]= useState('12/12');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nomeLavaRapido, setNomeLavaRapido] = useState(null);
  const [notaLavaRapido, setNotaLavaRapido] = useState(null);
  const [imagemLavaRapido, setImagemLavRapido] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false)

 const handleTelaLavaRapido = (nome, nota, imagem)=>{
  if (isButtonClicked){
    setNomeLavaRapido(nome);
    setNotaLavaRapido(nota);
    setImagemLavRapido(imagem);
    setSelectedScreen("Agendamento")
  }
  };
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      arrows: false
    };
    const services = [
      {
        name: 'SUNSET CAR WASH',
        rating: 4.8,
        image: sunset
      },
      {
        name: 'CliniCar',
        rating: 4.3,
        image: cliniCar
      },
      {
        name: 'LAVA RÁPIDO EXPRESS',
        rating: 4.0,
        image: lavaRapidoExpress
      },
      {
        name: 'PONTO VIP LAVA RÁPIDO',
        rating: 4.2,
        image: pontoVip
      },
    ];
  const paymentOptions = [
    { type: 'Cartão: Crédito', lastDigits: '1915', brand: 'Visa' },
    { type: 'Cartão: Débito', lastDigits: '1918', brand: 'Mastercard' },
    { type: 'Pix', qrCode: 'Qr Code' }
  ];
  const handleBack = () =>{
    setAgendamentoTab(1)
  }
  const handleBooking2 = () =>{
    setAgendamentoTab(3);
  }
  const handleBooking3 = () =>{
    setAgendamentoTab(1);
    setSelectedScreen("Home");
  }
  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setAgendamentoTab(2);
    } else {
      alert('Por favor, selecione uma data e horário');
    }
  };
  const handleBackHome = ()=>{
    setSelectedScreen("Home")
  }


  const renderTabContent = () => {
    switch (activeTab) {
      case 'agendamento':
        return (
          <div>
            { agendamentoTab == 1 && 
            <div>
            <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
            <TimeSlots selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
            </div>
             }
             {agendamentoTab == 2 &&
             <div>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-6">
      <div style={{position:'absolute'}}>
        <button className="p-2 rounded-full bg-white shadow-md" onClick={handleBack}>
          <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <TimeSelector
            selectedTime={selectedTime}
            onTimeChange={setSelectedTime}
          />
          
          <LocationSelector
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />

          {selectedLocation == 'Meu Local' && 
          <MyLocationSelector selectedMyLocation={selectedMyLocation} onMyLocationChange={setSelectedMyLocation}/>   
          }
          <WashTypeSelector
            selectedType={selectedWashType}
            onTypeChange={setSelectedWashType}
          />
          
          <CarSelector
            selectedCar={selectedCar}
            onCarChange={setSelectedCar}
          />
        </div>
      </div>
    </div>
              </div>
             }
            {agendamentoTab == 3 &&
            <div>
             <div className="p-6 space-y-4">
             <div className="grid grid-cols-[200px,1fr] items-center bg-gray-50 p-3 rounded-lg">
               <span className="text-gray-600 font-medium">Data:</span>
               <span className="text-gray-900">{dateTemplate}</span>
             </div>
             <div className="grid grid-cols-[200px,1fr] items-center bg-gray-50 p-3 rounded-lg">
               <span className="text-gray-600 font-medium">Hora:</span>
               <span className="text-gray-900">{selectedTime}</span>
             </div>
             <div className="grid grid-cols-[200px,1fr] items-center bg-gray-50 p-4 rounded-lg">
               <span className="text-gray-600 font-medium">Local:</span>
               <span className="text-gray-900">{selectedLocation}</span>
             </div>
             <div className="grid grid-cols-[200px,1fr] items-center bg-gray-50 p-4 rounded-lg">
               <span className="text-gray-600 font-medium">Meu Local:</span>
               <span className="text-gray-900">{selectedMyLocation}</span>
             </div>
             <div className="grid grid-cols-[200px,1fr] items-center bg-gray-50 p-4 rounded-lg">
               <span className="text-gray-600 font-medium">Lavagem:</span>
               <span className="text-gray-900">{selectedWashType}</span>
             </div>
             
             <div className="grid grid-cols-[200px,1fr] items-center bg-gray-50 p-3 rounded-lg">
               <span className="text-gray-600 font-medium">Carro:</span>
               <span className="text-gray-900">{selectedCar}</span>
             </div>
           </div>
             <h2 className="text-lg font-semibold mb-4">Selecione o seu carro</h2>
        <div className="space-y-2">
          {paymentOptions.map((option) => (
            <PaymentOption
              key={option.type}
              type={option.type}
              lastDigits={option.lastDigits}
              brand={option.brand}
              isSelected={selectedPayment === option.type}
              onSelect={() => setSelectedPayment(option.type)}
            />
          ))}
        </div>
  </div>
                              
            }
             {agendamentoTab == 1 &&
             <div style={{marginTop: 70}}>
            <button
              onClick={handleBooking}
              className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Próximo Passo
            </button>
            </div>
    }
    {agendamentoTab == 2 && 
          <div style={{marginTop: 50}}>
             <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium" onClick={handleBooking2}>
             Pagamento
           </button>
           </div>
           }
    {agendamentoTab == 3 &&
    <div style={{marginTop: 10}}>
          <button
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg mt-6 font-medium"
          onClick={()=>{handleBooking3(), isButtonClicked2(true)}}
        >
          Agendar
        </button>
        </div>}
          </div>
        );
      case 'clientes':
        return <Reviews />;
      case 'localizacao':
        return <Location />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
             {
          selectedScreen == "Home" &&
          <div>
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
          <div className="text-black" style={{textAlign:'center'}}>
            <p className="text-sm">Próximo Serviço</p>
          </div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-black">
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
          <div className="flex flex-col items-center" style={{width:100, marginLeft:-20}}>
            <CalendarIcon className="h-6 w-4 mb-1" />
            <span className="text-xs">Data</span>
            <span className="font-semibold">14/12</span>
          </div>
          <div className="flex flex-col items-center" style={{width:75}}>
            <MapPinIcon className="h-6 w-4 mb-1" />
            <span className="text-xs">Distância</span>
            <span className="font-semibold">2.5 km</span>
          </div>
          <div className="flex flex-col items-center"style={{width:100}}>
            <WrenchIcon className="h-6 w-6 mb-1" />
            <span className="text-xs">Carro</span>
            <span className="font-semibold">Civic Type R</span>
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
            <div className="bg-white rounded-lg shadow" onClick={()=>{handleTelaLavaRapido(service.name, service.rating, service.image); setIsButtonClicked(true)}}>
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
            </div>
        }
        {selectedScreen == "Agendamento" && 
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <Header nome = {nomeLavaRapido} nota ={notaLavaRapido} imagem={imagemLavaRapido}/>
        <div className="border-t border-gray-200">
          <div className="flex">
            <TabButton 
              label="Agendamento" 
              isActive={activeTab === 'agendamento'} 
              onClick={() => setActiveTab('agendamento')} 
            />
            <TabButton 
              label="Clientes" 
              isActive={activeTab === 'clientes'} 
              onClick={() => setActiveTab('clientes')} 
            />
            <TabButton 
              label="Localização" 
              isActive={activeTab === 'localizacao'} 
              onClick={() => setActiveTab('localizacao')} 
            />
          </div>
        </div>

        <div className="p-4">
          {renderTabContent()}
        </div>
      </div>
}
    </div>
  );
}

export default App;