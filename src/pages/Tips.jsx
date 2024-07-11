import React from 'react';

function Tips() {
  return (
    <div className="mt-10 bg-gray-500 rounded-md p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold">NodeJS Tip</h2>
        <p className="text-sm text-white-600">About The Tip</p>
      </div>
      <div className="w-24 h-24 mx-auto">
        {/* QR code image here */}
        <img src="qr-code-image.png" alt="QR Code" />
      </div>
      <p className="text-4xl text-white-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sapien a mi laoreet, sit amet aliquam est faucibus.
      </p>
    </div>
  );
}

export default Tips;