import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Helmet } from 'react-helmet';

const MarathonDetails = () => {
  const { id } = useParams(); // Get marathon ID from URL
  const [marathon, setMarathon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMarathonDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/marathons/${id}`);
        setMarathon(response.data);
      } catch (error) {
        console.error('Error fetching marathon details:', error);
      }
    };

    fetchMarathonDetails();
  }, [id]);

  if (!marathon) {
    return <div>Loading...</div>;
  }

  const isRegistrationOpen =
    new Date() >= new Date(marathon.startRegistrationDate) &&
    new Date() <= new Date(marathon.endRegistrationDate);

  const calculateTimeLeft = (startDate) => {
    const now = new Date();
    const targetDate = new Date(startDate);
    const difference = targetDate - now;
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  const durationInSeconds = calculateTimeLeft(marathon.marathonStartDate);

  return (
    <div className="container mx-auto mt-10">
      <Helmet>
        <title>Marathon Details</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">{marathon.title}</h2>
      <img src={marathon.image} alt={marathon.title} className="w-full h-64 object-cover mb-6" />
      <p className="text-gray-700 mb-2">Location: {marathon.location}</p>
      <p className="text-gray-700 mb-2">
        Registration Dates: {marathon.startRegistrationDate} to {marathon.endRegistrationDate}
      </p>
      <p className="text-gray-700 mb-4">Total Registrations: {marathon.totalRegistrationCount}</p>

      <div className="mb-6">
        <CountdownCircleTimer
          isPlaying
          duration={durationInSeconds}
          colors={[['#A30000', 1]]}
        >
          {({ remainingTime }) => {
            const days = Math.floor(remainingTime / (60 * 60 * 24));
            const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
            return `${days}d ${hours}h ${minutes}m`;
          }}
        </CountdownCircleTimer>
      </div>

      {isRegistrationOpen ? (
        <button
          onClick={() => navigate(`/register/${marathon._id}`)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
      ) : (
        <p className="text-red-500">Registration is closed.</p>
      )}
    </div>
  );
};

export default MarathonDetails;
