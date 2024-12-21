import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MarathonSection = () => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    const fetchMarathons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/marathons/limit/6');
        setMarathons(response.data);
      } catch (error) {
        console.error('Error fetching marathons:', error);
      }
    };

    fetchMarathons();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Marathon Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.map((marathon) => (
          <div key={marathon._id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={marathon.image_url} alt={marathon.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{marathon.title}</h3>
            <p className="text-gray-700 mb-2">Location: {marathon.location}</p>
            <p className="text-gray-700 mb-4">Registration Dates: {marathon.registration_dates.start} to {marathon.registration_dates.end}</p>
            <Link to={`/marathons/${marathon._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarathonSection;
