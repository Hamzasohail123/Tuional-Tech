import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Card = () => {
  return (
    <div className="flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <div className="mb-4">
          <AiFillHeart className="mx-auto text-4xl text-black" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Succeed Together</h2>
        <p className="text-gray-600">
          We build on each other's strengths to make every project awesome
        </p>
      </div>
    </div>
  );
};

export default Card;
