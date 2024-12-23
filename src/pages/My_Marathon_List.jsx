import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const My_Marathon_List = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // Default to descending order
  const [selectedMarathon, setSelectedMarathon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMarathons = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/marathons?createdBy=${user.email}&sortOrder=${sortOrder}`);
        setMarathons(response.data);
      } catch (error) {
        console.error('Error fetching marathons:', error);
      }
    };

    fetchMarathons();
  }, [user.email, sortOrder]);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleUpdate = (marathon) => {
    setSelectedMarathon(marathon);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/marathons/${id}`);
      setMarathons(marathons.filter((marathon) => marathon._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Marathon has been deleted.',
      });
    } catch (error) {
      console.error('Error deleting marathon:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to delete marathon.',
      });
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMarathon(null);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedMarathon = { ...selectedMarathon };
      delete updatedMarathon._id; // Remove the _id field from the update object
      await axios.put(`http://localhost:5000/marathons/${selectedMarathon._id}`, updatedMarathon);
      setMarathons(marathons.map((marathon) => (marathon._id === selectedMarathon._id ? selectedMarathon : marathon)));
      handleModalClose();
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Marathon has been updated.',
      });
    } catch (error) {
      console.error('Error updating marathon:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to update marathon.',
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedMarathon({ ...selectedMarathon, [name]: value });
  };

  return (
    <div className="container mx-auto mt-10">
       <Helmet> <title>My Marathon List</title> </Helmet>
      <h2 className="text-2xl font-bold mb-6">My Marathon List</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Sort By</label>
        <select value={sortOrder} onChange={handleSortOrderChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none">
          <option value="asc">Oldest to Newest</option>
          <option value="desc">Newest to Oldest</option>
        </select>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marathons.map((marathon) => (
            <tr key={marathon._id}>
              <td className="py-2 px-4 border-b">{marathon.title}</td>
              <td className="py-2 px-4 border-b">{marathon.location}</td>
              <td className="py-2 px-4 border-b">{marathon.marathonStartDate}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleUpdate(marathon)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(marathon._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-10/12">
            <h2 className="text-2xl font-bold mb-4">Update Marathon</h2>
            <form onSubmit={handleModalSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={selectedMarathon.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={selectedMarathon.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="text"
                  name="marathonStartDate"
                  value={selectedMarathon.marathonStartDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={selectedMarathon.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  required
                />
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

export default My_Marathon_List;
