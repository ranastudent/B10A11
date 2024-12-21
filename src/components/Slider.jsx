import React from 'react';

const Slider = () => {
      return (
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co.com/sm7gSpd/photo-1452626038306-9aae5e071dd3-q-80-w-1748-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                className="w-full max-h-[500px] mx-auto" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co.com/fNXw3nT/photo-1524646349956-1590eacfa324-q-80-w-1740-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                className="w-full max-h-[500px] mx-auto"/>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co.com/7yLdfNW/premium-photo-1723507256100-0381b111aac4-q-80-w-1742-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                className="w-full max-h-[500px] mx-auto" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co.com/59PS1jN/premium-photo-1663090368065-f8a204e47c3c-q-80-w-1827-auto-format-fit-crop-ixlib-rb-4-0.jpg"
                className="w-full max-h-[500px] mx-auto" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
      );
};

export default Slider;