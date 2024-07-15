import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tips = ({ level, technology }) => {
  const [tipData, setTipData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3000/v1/api/mock-tips/tips?level=${level}&technology=${technology}`;
        const response = await axios.get(url);
        const data = response.data;
        
        setTipData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log('Error response:', error.response);
        console.log('Error request:', error.request);
        console.log('Error config:', error.config);
      }
    };

    fetchData();
  }, [level, technology]);

  if (!tipData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen">
      <div className="text-6xl font-bold mb-9">{technology} Tips</div>
      <div className="w-full px-8 py-8 rounded-lg shadow-lg bg-gray-700 bg-opacity-75">
        <div className="flex justify-between items-center mb-4">
          {/* Otro contenido aquí si es necesario */}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-center w-full md:w-1/3">
            <div className="bg-gray-700 bg-opacity-75 p-4 rounded-lg">
              <img src="qr_code.svg" alt="QR Code" className="w-24 h-24" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-2/3">
            <div className="text-lg font-bold mb-6">About The Tip</div>
            <div className="text-lg font-bold mb-6">{tipData.title}</div>
            <p className="text-white text-xl">{tipData.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
