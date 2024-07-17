import React from 'react';

const MainView = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to TV tips</h1>
        <div className="flex flex-col items-center">
          <p className="mb-4">Enter here your Api Key</p>
          <input 
            type="text" 
            placeholder="XXX-XXX-XXX" 
            className="mb-4 px-4 py-2 border rounded-lg text-center"
          />
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Submit</button>
        </div>
        <div className="mt-8">
          <p className="mb-4">Or enter with QR</p>
          <img 
            src="path_to_your_qr_code_image" 
            alt="QR Code" 
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MainView;