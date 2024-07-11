import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoFoundPage = () => {
  const navigate = useNavigate();

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
      <div className="flex flex-col items-center bg-transparent space-y-4 max-w-xs w-full text-white text-center">
        <div className="bg-yellow-500 p-4 rounded-md">
          <h1 className="text-5xl font-bold">404</h1>
        </div>
        <p className="mt-6 text-2xl">This is not the web page you are looking for.</p>
        <button
          onClick={() => navigate('/')}
          className="w-full px-4 py-2 bg-green-500 text-white text-center rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NoFoundPage;
