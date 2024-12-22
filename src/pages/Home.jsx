import React from 'react';
import Slider from '../components/Slider';
import MarathonSection from '../components/MarathonSection';
import UpcomingMarathon from '../components/UpcomingMarathon';

const Home = () => {
      return (
            <div>
                 <Slider></Slider>
                 <MarathonSection></MarathonSection>
                 <UpcomingMarathon></UpcomingMarathon>
            </div>
      );
};

export default Home;