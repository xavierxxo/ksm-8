import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import Home from './components/pages/Home';
import Popular from './components/pages/Popular';
import NewReleases from './components/pages/NewRelease';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
