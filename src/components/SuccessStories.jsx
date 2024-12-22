import React from 'react';

const SuccessStories = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Marathon Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">John Doe</h3>
          <p className="text-gray-700 mb-4">"Completing the Boston Marathon was a dream come true. The support from the crowd and my fellow runners kept me going through the toughest parts of the race."</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
          <p className="text-gray-700 mb-4">"Training for the New York City Marathon was challenging, but crossing the finish line made it all worth it. My advice to other runners is to stay consistent and believe in yourself."</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
          <p className="text-gray-700 mb-4">"Running the Berlin Marathon was an incredible experience. The city's energy and the camaraderie among runners were unforgettable. Stay focused on your goals and enjoy the journey."</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
