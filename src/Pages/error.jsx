import React from 'react';

const error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-16 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold text-red-600 mb-8">Error!</h1>
    <p className="text-gray-700 text-xl">
      Oops! Something went wrong.Please try again later.
    </p>
  </div>
</div>

  );
};

export default error;
