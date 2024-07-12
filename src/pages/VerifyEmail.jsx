import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el email
    navigate('/verify-code');
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center p-4"
      
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
        <h2 className="text-2xl font-medium text-white mb-4 text-center">Enter your email</h2>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="your@email.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
