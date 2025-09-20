'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Internal Server Error</h2>
        <p className="text-gray-600 mb-8">Something went wrong on our end. Please try again later.</p>
        <button
          onClick={() => reset()}
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 mr-4"
        >
          Try Again
        </button>
        <a 
          href="/" 
          className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}