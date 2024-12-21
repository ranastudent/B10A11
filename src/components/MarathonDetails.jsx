import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MarathonDetails = () => {
  const { id } = useParams();
  const [marathon, setMarathon] = useState(null);

  useEffect(() => {
    const fetchMarathon = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/marathons/${id}`);
        setMarathon(response.data);
      } catch (error) {
        console.error('Error fetching marathon details:', error);
      }
    };

    fetchMarathon();
  }, [id]);

  if (!marathon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">{marathon.title}</h2>
      <img src={marathon.image_url} alt={marathon.title} className="w-full h-96 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-2">Location: {marathon.location}</p>
      <p className="text-gray-700 mb-4">Registration Dates: {marathon.registration_dates.start} to {marathon.registration_dates.end}</p>
    </div>
  );
};

export default MarathonDetails;
