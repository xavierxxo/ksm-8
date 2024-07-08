import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div>
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">K-Drama World</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className={`hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link></li>
            <li><Link to="/popular" className={`hover:underline ${location.pathname === '/popular' ? 'font-bold' : ''}`}>Popular</Link></li>
            <li><Link to="/new-releases" className={`hover:underline ${location.pathname === '/new-releases' ? 'font-bold' : ''}`}>New Releases</Link></li>
            <li><Link to="/contact" className={`hover:underline ${location.pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>

    <section className="bg-cover bg-center h-64 text-white" style={{ backgroundImage: "url('https://images.alphacoders.com/132/1327995.png')" }}>
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-500">Discover the Best K-Dramas</h2>
          <p className="mt-4 text-xl text-blue-500">Your gateway to the world of Korean drama</p>
        </div>
      </div>
    </section>
      </div>
  );
};

export default Header;
