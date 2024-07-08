import React from 'react';
import MyButton from './Button';

const DramaCard = ({ imgSrc, title, description, link }) => (
  <div className="bg-blue-100 p-4 rounded-lg shadow-lg w-1/4 flex-shrink-0 relative">
    <img src={imgSrc} alt={title} className="rounded-t-lg w-3/4 mx-auto"/>
    <div className="p-3 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 mb-8">{description}</p>
      </div>
      <div className="absolute bottom-3 right-3">
        <MyButton>
          <a href={link} target="_blank" rel="noopener noreferrer" className='text-white'>Tonton Sekarang</a>
        </MyButton>
      </div>
    </div>
  </div>
);

export default DramaCard;
