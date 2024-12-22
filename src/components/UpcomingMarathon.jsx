import React from 'react';
import { Link } from 'react-router-dom';

const upcomingMarathons = [
  {
    _id: 1,
    title: "Boston Marathon",
    location: "Boston, MA, USA",
    registration_dates: {
      start: "2024-09-09",
      end: "2024-09-13"
    },
    image_url: "https://media.istockphoto.com/id/2157243411/photo/active-old-man-run-marathon-motivation-concept-senior-runner-elder-sportsman.jpg?s=612x612&w=0&k=20&c=6U-XQHhSCSo5SxBv76C3bhV2ryHubgkrSw_qk5Y2iqA="
  },
  {
    _id: 2,
    title: "London Marathon",
    location: "London, United Kingdom",
    registration_dates: {
      start: "2024-10-01",
      end: "2024-10-05"
    },
    image_url: "https://media.istockphoto.com/id/2180799163/photo/wild-nature-recreation-mountain-scene-fit-caucasian-male-man-guy-sprinter-run-sprinting.jpg?s=612x612&w=0&k=20&c=RJfUYKtvzUQI8B_jfpQU-998sjAMxC4NaUlRx5UmDec="
  },
  {
    _id: 3,
    title: "Berlin Marathon",
    location: "Berlin, Germany",
    registration_dates: {
      start: "2024-11-01",
      end: "2024-11-10"
    },
    image_url: "https://media.istockphoto.com/id/1300123069/photo/runners-running-towards-the-finish-line.jpg?s=612x612&w=0&k=20&c=XNlsYwQWlHHIlNYaxLuJU-YrD46ZTdPh9WWQpOt6Z60="
  },
  {
    _id: 4,
    title: "Chicago Marathon",
    location: "Chicago, IL, USA",
    registration_dates: {
      start: "2024-12-01",
      end: "2024-12-10"
    },
    image_url: "https://media.istockphoto.com/id/1822703952/photo/the-runner-wins-by-crossing-the-finish-line-ribbon-on-a-white-background.jpg?s=612x612&w=0&k=20&c=_8Nv_17ZQ5xikJj21wpgv9sXRgSN2zxibOEtoKrlfqU="
  },
  {
    _id: 5,
    title: "New York City Marathon",
    location: "New York, NY, USA",
    registration_dates: {
      start: "2024-08-01",
      end: "2024-08-15"
    },
    image_url: "https://media.istockphoto.com/id/2153911981/photo/senior-black-man-running-in-a-marathon.jpg?s=612x612&w=0&k=20&c=Xo4jfThQhiDjURQfQ_2ifCTY1evy1HEgN5U8foxR5qE="
  },
  {
    _id: 6,
    title: "Tokyo Marathon",
    location: "Tokyo, Japan",
    registration_dates: {
      start: "2024-07-01",
      end: "2024-07-10"
    },
    image_url: "https://media.istockphoto.com/id/1300123367/photo/runners-running-from-the-starting-on-the-running-track.jpg?s=612x612&w=0&k=20&c=aJfUszDVK8KQIZBLFnZxN6wQzbv3mO-p6nLBiACA3xQ="
  }
];

const UpcomingMarathon = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Upcoming Marathon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingMarathons.map((marathon) => (
          <div key={marathon._id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={marathon.image_url} alt={marathon.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{marathon.title}</h3>
            <p className="text-gray-700 mb-2">Location: {marathon.location}</p>
            <p className="text-gray-700 mb-4">Registration Dates: {marathon.registration_dates.start} to {marathon.registration_dates.end}</p>
            {/* <Link to={`/marathons/${marathon._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">See Details</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathon;
