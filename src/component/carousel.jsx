import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className=''>
      <div
        className={`relative duration-300 ${hoveredIndex === 0 ? 'scale-110' : 'scale-90'}`}
        onMouseEnter={() => handleHover(0)}
        onMouseLeave={() => handleHover(null)}
      >
        <img src="basket.png" alt="Image 1" className="w-full h-auto max-w-xs" />
        {hoveredIndex === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <p className="text-2xl font-bold">Image 1</p>
          </div>
        )}
      </div>
      <div
        className={`relative duration-300 ${hoveredIndex === 1 ? 'scale-110' : 'scale-90'}`}
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={() => handleHover(null)}
      >
        <img src="behance.png" alt="Image 2" className="w-full h-auto max-w-xs" />
        {hoveredIndex === 1 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <p className="text-2xl font-bold">Image 2</p>
          </div>
        )}
      </div>
      <div
        className={`relative duration-300 ${hoveredIndex === 2 ? 'scale-110' : 'scale-90'}`}
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={() => handleHover(null)}
      >
        <img src="instagram.png" alt="Image 3" className="w-full h-auto max-w-xs" />
        {hoveredIndex === 2 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <p className="text-2xl font-bold">Image 3</p>
          </div>
        )}
      </div>
      <div
        className={`relative duration-300 ${hoveredIndex === 3 ? 'scale-110' : 'scale-90'}`}
        onMouseEnter={() => handleHover(3)}
        onMouseLeave={() => handleHover(null)}
      >
        <img src="linkedin.png"  className="w-full h-auto max-w-[2rem]" />
       
      </div>
    </Slider>
  );
};

export default carousel;