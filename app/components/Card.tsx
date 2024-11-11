import React from 'react';

interface CardProps {
  title: string;
  details: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, details, imageSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-4 border-lime-700">
      <img className="w-full h-52 object-cover" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-4xl text-gray-800">{title}</h2>
        <p className="text-gray-700 mt-2 text-3xl">{details}</p>
      </div>
    </div>
  );
};

export default Card;
