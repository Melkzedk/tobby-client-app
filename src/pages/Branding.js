import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../Assets/brand1.jpg';
import img2 from '../Assets/brand2.jpg';
import img3 from '../Assets/brand3.jpg';

function Branding() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="position-relative py-5 bg-white">
      <FaChevronLeft
        size={30}
        className="position-absolute top-50 start-0 translate-middle-y"
        onClick={() => scroll('left')}
        style={{ cursor: 'pointer', left: '10px', zIndex: 2 }}
      />
      <div
        className="d-flex justify-content-center align-items-center overflow-auto px-5"
        ref={scrollRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 me-3"
            style={{ width: '390px' }} // Increased width
          >
            <img
              src={img}
              alt={`branding-${index}`}
              className="img-fluid rounded shadow-lg border"
            />
          </div>
        ))}
      </div>
      <FaChevronRight
        size={30}
        className="position-absolute top-50 end-0 translate-middle-y"
        onClick={() => scroll('right')}
        style={{ cursor: 'pointer', right: '10px', zIndex: 2 }}
      />
    </div>
  );
}

export default Branding;
