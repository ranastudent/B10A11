import React from 'react';

const TrainingTips = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Marathon Training Tips</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">Training Schedule</h3>
        <p className="text-gray-700 mb-4">Follow a structured training schedule that gradually increases your mileage and includes rest days to prevent overtraining.</p>
        <h3 className="text-xl font-bold mb-2">Nutrition</h3>
        <p className="text-gray-700 mb-4">Maintain a balanced diet rich in carbohydrates, proteins, and healthy fats to fuel your training and recovery.</p>
        <h3 className="text-xl font-bold mb-2">Hydration</h3>
        <p className="text-gray-700 mb-4">Stay hydrated by drinking plenty of water throughout the day and during your runs. Consider using electrolyte drinks for longer runs.</p>
        <h3 className="text-xl font-bold mb-2">Injury Prevention</h3>
        <p className="text-gray-700 mb-4">Incorporate strength training and stretching exercises into your routine to prevent injuries and improve overall performance.</p>
      </div>
    </div>
  );
};

export default TrainingTips;
