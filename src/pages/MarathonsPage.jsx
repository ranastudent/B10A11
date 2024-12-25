import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet';

const MarathonsPage = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // Default to descending order
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMarathons = async () => {
      try {
        const response = await axios.get(`https://b10-a11-server-kohl.vercel.app/marathons?sortOrder=${sortOrder}`, { withCredentials: true });
        setMarathons(response.data);
      } catch (error) {
        console.error('Error fetching marathons:', error);
      }
    };

    fetchMarathons();
  }, [sortOrder]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);

  if (!user) {
    return <div>Please log in to view the marathons.</div>;
  }

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  const totalPages = Math.ceil(marathons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMarathons = marathons.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto mt-10">
      <Helmet>
        <title>Marathon Page</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">All Marathons</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Sort By</label>
        <select value={sortOrder} onChange={handleSortOrderChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none">
          <option value="asc">Oldest to Newest</option>
          <option value="desc">Newest to Oldest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMarathons.map((marathon) => (
          <div key={marathon._id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={marathon.image} alt={marathon.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{marathon.title}</h3>
            <p className="text-gray-700 mb-2">Location: {marathon.location}</p>
            <p className="text-gray-700 mb-2">Registration: {marathon.startRegistrationDate} to {marathon.endRegistrationDate}</p>
            <button
              onClick={() => navigate(`/marathons/${marathon._id}?page=${currentPage}`)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-l hover:bg-gray-400"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`py-2 px-4 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} hover:bg-gray-400`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-r hover:bg-gray-400"
        >
          Next
        </button>
        <div className="ml-4">
          <label className="block text-gray-700">Jump to Page</label>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="w-16 px-3 py-2 border rounded-lg focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MarathonsPage;
