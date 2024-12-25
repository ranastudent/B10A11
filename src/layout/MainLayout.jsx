import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../css/styles.css'; // Import the CSS file

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col space-y-14 min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <div className="flex-grow">
        <div className="flex justify-end p-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full focus:outline-none">
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
