import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const MainLayout = () => {
      return (
            <div className="flex flex-col space-y-14 min-h-screen">
                  <Helmet > <title>Home</title> </Helmet>
                  <Navbar />
                  <div className="flex-grow">
                        <Outlet />
                  </div>
                  <Footer />
            </div>

      );
};

export default MainLayout;