import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous error messages

    try {
      // Llama al endpoint de NestJS para verificar el código
      const response = await axios.post('http://localhost:3000/api/v1/qr-code/code-subscriptions', { code });

      if (response.status === 200) {
        // Guarda la respuesta JSON en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(response.data));
        // Redirige a la página de suscripciones
        navigate('/suscriptions');
      } else {
        navigate('/nofound');
      }
    } catch (err) {
      setError('Ocurrió un error al verificar el código.');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center p-4">
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
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default VerifyCode;
