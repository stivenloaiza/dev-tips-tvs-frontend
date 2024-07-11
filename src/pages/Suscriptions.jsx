import React from 'react';
import { useNavigate } from 'react-router-dom';

const Suscriptions = () => {
  const navigate = useNavigate();

  const handleSelect = (subscriptionType) => {
    // Lógica para manejar la selección de la suscripción
    navigate('/suscription-check');
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url('/stacked-waves-haikei.png')` }}
    >
      <div className="absolute top-4 left-4">
        <button
          className="text-white text-3xl"
          onClick={() => navigate(-1)}
        >
          ←
        </button>
      </div>
      <div className="flex flex-col items-center bg-transparent space-y-4 max-w-xs w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Hello, Camilo</h1>
        <p className="text-xl text-white text-center mb-4">What do you want to project?</p>
        <button
          onClick={() => handleSelect('subscription1')}
          className="flex justify-between items-center w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <span>Subscription 1</span>
          <span>Python Senior</span>
        </button>
        <button
          onClick={() => handleSelect('subscription2')}
          className="flex justify-between items-center w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <span>Subscription 2</span>
          <span>Java Senior</span>
        </button>
        <button
          onClick={() => handleSelect('subscription3')}
          className="flex justify-between items-center w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <span>Subscription 3</span>
          <span>JavaScript Junior</span>
        </button>
        <button
          onClick={() => handleSelect('select')}
          className="w-full px-4 py-2 bg-green-500 text-white text-center rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Suscriptions;
