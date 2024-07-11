import React from 'react';

const NoFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="bg-yellow-500 p-4 rounded-md">
        <h1 className="text-5xl font-bold">404</h1>
      </div>
      <p className="mt-6 text-4xl">This is not the web page you are looking for.</p>
      <a href="/">home</a>
    </div>
  );
};

export default NoFoundPage;
