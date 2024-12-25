import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-2">Name: {user.displayName}</p>
        <p className="text-gray-700 mb-2">Email: {user.email}</p>
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
