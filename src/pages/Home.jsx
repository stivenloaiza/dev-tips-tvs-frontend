import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Modal from '../components/Modal';
import QRCode from 'qrcode.react';



function Home() {
  const [apiKey, setApiKey] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [level, setLevel] = useState(''); // Estado para almacenar 'level'
  const [technology, setTechnology] = useState(''); // Estado para almacenar 'technology'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrUrl, setQrUrl] = useState('');


  useEffect(() => {
    // Función para hacer la solicitud al endpoint y obtener la URL del QR
    const fetchQrUrl = async () => {
      try {
        const response = await axios.get('http://localhost3000.com/api/v1/obtener-qr-url'); // Cambia esta URL a tu endpoint real
        if (response.status === 200) {
          const qrUrl = `${window.location.origin}/verify-email?token=${response.data.url}`; // Construir la URL completa
          setQrUrl(qrUrl);
        } else {
          console.error('Error al obtener la URL del QR');
        }
      } catch (err) {
        console.error('Error al hacer la solicitud al endpoint:', err);
      }
    };

    fetchQrUrl(); // Llama a la función solo una vez al montar el componente

  }, []);

  useEffect(() => {
    sessionStorage.setItem("level",level)
    sessionStorage.setItem("technology",technology)
  }, [level,technology]); 




  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:3000/v1/api/auth/validate-apikey', {
        params: { apiKey }
      });
      console.log('Response from server:', response.data);
      setResponseMessage(response.data.message || 'API Key is valid');
      setIsModalOpen(true);

      if (response.data.message === 'API Key is valid') {
        // Almacena 'level' y 'technology' del JSON en los estados correspondientes
        setLevel(response.data.data.tip.seniority[0].name);
        setTechnology(response.data.data.tip.technology[0].name);

        setTimeout(() => {
          window.location.href = "/tips"
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting API Key:', error);
      setResponseMessage('API Key is invalid');
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-6xl font-bold mb-8">Welcome to TV tips</h1>
      <div className='flex flex-row'>
        <div className="flex flex-col items-center justify-center w-full max-w-md p-8">
          <h2 className="text-2xl font-medium mb-4">Enter your API Key</h2>
          <input
            type="text"
            className="text-black w-full px-4 py-2 mb-4 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <QRCode
            value={qrUrl}
            size={150}
            bgColor="#ffffff"
            fgColor="#000000"
            level="Q"
          />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} message={responseMessage} />
    </div>
  );
}

export default Home;




//http://localhost:3000/v1/api/auth/validate-apikey?apiKey=xyz7890abcdef

