import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí debería ir la lógica para verificar el código
    const isValidCode = true; // Reemplaza esto con la verificación real del código

    if (isValidCode) {
      navigate('/suscriptions');
    } else {
      navigate('/nofound');
    }
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
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-transparent space-y-4 max-w-xs w-full">
        <h2 className="text-2xl font-medium text-white mb-4 text-center">Verify Code</h2>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Enter the verification code"
          value={code}
          onChange={handleCodeChange}
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyCode;
