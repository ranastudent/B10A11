import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const RegistrationForm = () => {
  const { id } = useParams(); // Get marathon ID from URL
  const { user } = useContext(AuthContext);
  const [marathon, setMarathon] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationDetails = {
      email: user.email,
      marathonId: id,
      marathonTitle: marathon.title,
      marathonStartDate: marathon.marathonStartDate,
      firstName,
      lastName,
      contactNumber,
      additionalInfo,
    };

    try {
      const response = await axios.post('http://localhost:5000/register', registrationDetails);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You have successfully registered for the marathon.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'There was an error registering for the marathon.',
      });
    }
  };

  if (!marathon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Register for {marathon.title}</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Marathon Title</label>
          <input
            type="text"
            value={marathon.title}
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Marathon Start Date</label>
          <input
            type="text"
            value={marathon.marathonStartDate}
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Additional Info</label>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
