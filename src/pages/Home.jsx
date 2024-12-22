import React from 'react';
import Slider from '../components/Slider';
import MarathonSection from '../components/MarathonSection';
import UpcomingMarathon from '../components/UpcomingMarathon';
import TrainingTips from '../components/TrainingTips';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
      return (
            <div>
                 <Slider></Slider>
                 <MarathonSection></MarathonSection>
                 <UpcomingMarathon></UpcomingMarathon>
                 <TrainingTips></TrainingTips>
                 <SuccessStories></SuccessStories>
            </div>
      );
};

export default Home;