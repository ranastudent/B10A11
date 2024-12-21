import React from 'react';
import Slider from '../components/Slider';
import MarathonSection from '../components/MarathonSection';
import UpcomeingMarathon from '../components/UpcomeingMarathon';

const Home = () => {
      return (
            <div>
                 <Slider></Slider>
                 <MarathonSection></MarathonSection>
                 <UpcomeingMarathon></UpcomeingMarathon>
            </div>
      );
};

export default Home;