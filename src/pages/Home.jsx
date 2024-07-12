import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [apiKey, setApiKey] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/v1/api/auth/validate-apikey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey }),
      });
      const data = await response.json();
      console.log('API Key submitted:', apiKey);
      setResponseMessage(data.message);
    } catch (error) {
      console.error('Error submitting API Key:', error);
      setResponseMessage('Error submitting API Key');
    }

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-6xl font-bold mb-8">Welcome to TV tips</h1>
      <div className='flex flex-row'>
        <div className="flex flex-col items-center justify-center w-full max-w-md p-8">
          <h2 className="text-2xl font-medium mb-4">Enter your API Key</h2>
          <input
            type="text"
            className="w-full px-4 py-2 mb-4 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="XXX-XXX-XXX"
            value={apiKey}
            onChange={handleApiKeyChange}
          />
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-8 text-center">
            <p>Or enter with QR</p>
            <div className="mt-4">
              {/* Replace with your actual QR code image */}
              <img src="https://via.placeholder.com/200" alt="QR Code" />
          {responseMessage && <p className="mt-4">{responseMessage}</p>}
        </div>
        <div className='flex flex-row'>
          <div className="flex justify-between mb-4">
            <div className="mt-8 text-center">
              <p>Or enter with QR</p>
              <div className="mt-4">
                {/* Replace with your actual QR code image */}
                <img src="https://via.placeholder.com/200" alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



//http://localhost:3000/v1/api/auth/validate-apikey?apiKey=xyz7890abcdef

