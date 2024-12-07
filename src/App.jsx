import React, { useState } from 'react';
import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';
import TimeSlots from './components/TimeSlots/TimeSlots';
import Location from './components/Location/Location';
import Reviews from './components/Reviews/Reviews';
import TabButton from './components/Tabs/TabButton';
import { formatDateWithLocale } from './utils/dateUtils';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTab, setActiveTab] = useState('agendamento');

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Agendamento confirmado para ${formatDateWithLocale(selectedDate, "d 'de' MMMM")} às ${selectedTime}`);
    } else {
      alert('Por favor, selecione uma data e horário');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'agendamento':
        return (
          <div className="space-y-4">
            <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
            <TimeSlots selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
            <button
              onClick={handleBooking}
              className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Próximo Passo
            </button>
          </div>
        );
      case 'clientes':
        return <Reviews />;
      case 'fotos':
        return <Location />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <Header />
        
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
              label="Fotos" 
              isActive={activeTab === 'fotos'} 
              onClick={() => setActiveTab('fotos')} 
            />
          </div>
        </div>

        <div className="p-4">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default App;