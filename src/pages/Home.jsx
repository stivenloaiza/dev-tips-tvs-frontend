import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';
import QRCode from 'qrcode.react';

function Home() {
  const [apiKey, setApiKey] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [level, setLevel] = useState('');
  const [technology, setTechnology] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrUrl, setQrUrl] = useState('');
  const [code, setCode] = useState(null);
  const [url, setUrl] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchQrUrl = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/qr-code/generate-qr');
        const { url, code } = response.data;
        setUrl(url)
        setCode(code)
        if (response.status === 200) {
          const qrUrl = `${window.location.origin}/verify-email?token=${response.data.url}`;
          setQrUrl(qrUrl);
        } else {
          console.error('Error al obtener la URL del QR');
        }
      } catch (err) {
        console.error('Error al hacer la solicitud al endpoint:', err);
      }
    };

    fetchQrUrl();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("code", code)
    sessionStorage.setItem("level", level)
    sessionStorage.setItem("technology", technology)
  }, [level, technology, code]);

  useEffect(() => {
    let intervalId;

    if (code) {
      const verificarCodigo = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/v1/qr-code/check/${code}`);
          if (response.data === true) {
            setIsVerified(true);
            clearInterval(intervalId);
          }
        } catch (error) {
          console.error('Error al verificar el código:', error);
        }
      };

      intervalId = setInterval(verificarCodigo, 1000);
    }

    return () => clearInterval(intervalId);
  }, [code]);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/auth/validate-apikey', {
        params: { apiKey }
      });
      console.log('Response from server:', response.data);
      setResponseMessage(response.data.message || 'API Key is valid');
      setIsModalOpen(true);

      if (response.data.message === 'API Key is valid') {
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
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white"
      
    >
      <h1 className="text-6xl font-bold mb-12">Welcome to TV tips</h1>
      <div className='flex flex-row items-center justify-center w-full max-w-5xl'>
        <div className="flex flex-col items-center justify-center w-1/2 pr-12 border-r border-blue-400">
          <h2 className="text-2xl font-medium mb-4">Enter here your Api Key</h2>
          <input
            type="text"
            className="w-full px-4 py-2 mb-4 bg-gray-700 text-white border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="XXX-XXX-XXX"
            value={apiKey}
            onChange={handleApiKeyChange}
          />
          <button
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 pl-1">
          <p className="mb-6 text-2xl">Or enter with QR</p>
          <div className="bg-white p-4 rounded-lg" style={{ padding: '1px' }}>
            <QRCode
              value={'https://google.com'}
              size={350}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} message={responseMessage} />
    </div>
  );
}

export default Home;


//http://localhost:3000/v1/api/auth/validate-apikey?apiKey=xyz7890abcdef

