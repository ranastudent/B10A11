import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../customHook/useAxiosSecure';

const My_Apply_List = () => {
  const { user } = useContext(AuthContext);
  const [registrations, setRegistrations] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:5000/registrations/${user.email}?title=${searchTitle}`,{
        //     withCredentials:true
        //   }
        // );
        const response = axiosSecure.get(`/registrations/${user.email}?title=${searchTitle}`)
        .then(response=>{
          setRegistrations(response.data);
        })
        
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, [user.email, searchTitle]);

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleUpdate = (registration) => {
    setSelectedRegistration(registration);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/registrations/${id}`);
      setRegistrations(
        registrations.filter((registration) => registration._id !== id)
      );
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Registration has been deleted.',
      });
    } catch (error) {
      console.error('Error deleting registration:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to delete registration.',
      });
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRegistration(null);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRegistration = { ...selectedRegistration };
      delete updatedRegistration._id;
      await axios.put(
        `http://localhost:5000/registrations/${selectedRegistration._id}`,
        updatedRegistration
      );
      setRegistrations(
        registrations.map((registration) =>
          registration._id === selectedRegistration._id
            ? selectedRegistration
            : registration
        )
      );
      handleModalClose();
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Registration has been updated.',
      });
    } catch (error) {
      console.error('Error updating registration:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to update registration.',
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedRegistration({ ...selectedRegistration, [name]: value });
  };

  const calculateTimeLeft = (startDate) => {
    const now = new Date();
    const targetDate = new Date(startDate);
    const difference = targetDate - now;
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  return (
    <div className="container mx-auto mt-10">
       <Helmet> <title>My Apply List</title> </Helmet>
      <h2 className="text-2xl font-bold mb-6">My Apply List</h2>
      <input
        type="text"
        placeholder="Search by Title"
        value={searchTitle}
        onChange={handleSearchChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none mb-4"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Marathon Title</th>
            <th className="py-2 px-4 border-b">Marathon Start Date</th>
            <th className="py-2 px-4 border-b">Time Left</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Contact Number</th>
            <th className="py-2 px-4 border-b">Additional Info</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => {
            const durationInSeconds = calculateTimeLeft(
              registration.marathonStartDate
            );

            return (
              <tr key={registration._id}>
                <td className="py-2 px-4 border-b">{registration.marathonTitle}</td>
                <td className="py-2 px-4 border-b">{registration.marathonStartDate}</td>
                <td className="py-2 px-4 border-b">
                  {durationInSeconds > 0 ? (
                    <CountdownCircleTimer
                      isPlaying
                      duration={durationInSeconds}
                      colors={[['#A30000', 1]]}
                    >
                      {({ remainingTime }) => {
                        const days = Math.floor(
                          remainingTime / (60 * 60 * 24)
                        );
                        const hours = Math.floor(
                          (remainingTime % (60 * 60 * 24)) / (60 * 60)
                        );
                        const minutes = Math.floor(
                          (remainingTime % (60 * 60)) / 60
                        );
                        const seconds = remainingTime % 60;
                        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
                      }}
                    </CountdownCircleTimer>
                  ) : (
                    <span>Marathon has started</span>
                  )}
                </td>
                <td className="py-2 px-4 border-b">{registration.firstName}</td>
                <td className="py-2 px-4 border-b">{registration.lastName}</td>
                <td className="py-2 px-4 border-b">{registration.contactNumber}</td>
                <td className="py-2 px-4 border-b">{registration.additionalInfo}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleUpdate(registration)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(registration._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-10/12">
            <h2 className="text-2xl font-bold mb-4">Update Registration</h2>
            <form onSubmit={handleModalSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Marathon Title</label>
                <input
                  type="text"
                  name="marathonTitle"
                  value={selectedRegistration.marathonTitle}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Marathon Start Date</label>
                <input
                  type="text"
                  name="marathonStartDate"
                  value={selectedRegistration.marathonStartDate}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={selectedRegistration.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={selectedRegistration.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={selectedRegistration.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Additional Info</label>
                <textarea
                  name="additionalInfo"
                  value={selectedRegistration.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleModalClose}
                className="bg-gray-500 text-white py-2 px-4 rounded ml-2 hover:bg-gray-600"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default My_Apply_List;
