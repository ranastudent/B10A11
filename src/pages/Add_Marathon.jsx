import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const AddMarathon = () => {

  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [startRegistrationDate, setStartRegistrationDate] = useState(new Date());
  const [endRegistrationDate, setEndRegistrationDate] = useState(new Date());
  const [marathonStartDate, setMarathonStartDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('25k');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
      
  const handleSubmit = async (e) => {
    e.preventDefault();
    const marathonDetails = {
      title,
      startRegistrationDate,
      endRegistrationDate,
      marathonStartDate,
      location,
      distance,
      description,
      image,
      createdAt: new Date(),
      totalRegistrationCount: 0,
      createdBy: user.email
    };

    try {
      const response = await axios.post('https://b10-a11-server-kohl.vercel.app/marathons', marathonDetails);
      Swal.fire({
        icon: 'success',
        title: 'Marathon created successfully!',
        text: 'Your marathon event has been added.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to create marathon',
        text: 'There was an error creating the marathon event.',
      });
    }
  };

  return (
    
    <div className="container mx-auto mt-10">
      <Helmet> <title>Add Marathon - My Website</title> </Helmet>
      <h2 className="text-2xl font-bold mb-6">Add Marathon</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Marathon Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Registration Date</label>
          <DatePicker
            selected={startRegistrationDate}
            onChange={(date) => setStartRegistrationDate(date)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Registration Date</label>
          <DatePicker
            selected={endRegistrationDate}
            onChange={(date) => setEndRegistrationDate(date)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Marathon Start Date</label>
          <DatePicker
            selected={marathonStartDate}
            onChange={(date) => setMarathonStartDate(date)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Running Distance</label>
          <select
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Marathon Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMarathon;