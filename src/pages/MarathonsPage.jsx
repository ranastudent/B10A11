import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet';

const MarathonsPage = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    const fetchMarathons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/marathons');
        setMarathons(response.data);
      } catch (error) {
        console.error('Error fetching marathons:', error);
      }
    };

    fetchMarathons();
  }, []);

  if (!user) {
    return <div>Please log in to view the marathons.</div>;
  }

  return (
    
    <div className="container mx-auto mt-10">
      <Helmet> <title>Marathon Page</title> </Helmet>
      <h2 className="text-2xl font-bold mb-6">All Marathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.map((marathon) => (
          <div key={marathon._id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={marathon.image} alt={marathon.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{marathon.title}</h3>
            <p className="text-gray-700 mb-2">Location: {marathon.location}</p>
            <p className="text-gray-700 mb-2">Registration: {marathon.startRegistrationDate} to {marathon.endRegistrationDate}</p>
            <Link to={`/marathons/${marathon._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarathonsPage;
