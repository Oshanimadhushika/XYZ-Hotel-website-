import React from 'react';
import { Row, Col } from 'reactstrap';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Img5 from '../assets/img5.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Slide = () => {
  const images = [
    { url: Img1, alt: 'Image 1' },
    { url: Img2, alt: 'Image 2' },
    { url: Img3, alt: 'Image 3' },
    { url: Img4, alt: 'Image 4' },
    // { url: Img5, alt: 'Image 5' },
    { url: Img1, alt: 'Image 6' },
    { url: Img2, alt: 'Image 7' },
    { url: Img3, alt: 'Image 8' },
    { url: Img4, alt: 'Image 9' },
    // { url: Img5, alt: 'Image 10' },

  ];

  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    1024: { items: 4, itemsFit: 'contain' },
  };

  return (
    <div className=' bg-black'>
      <Row>
        <Col>
          <AliceCarousel
            mouseTracking
            items={images.map((image, index) => (
              <div key={index} className="position-relative mx-1">
                <img
                  src={image.url}
                  alt={`Image ${index}`}
                  className="slide__img w-50 h-50 object-fit-cover"
                />
              </div>
            ))}
            responsive={responsive}
            autoPlay={false} 
            buttonsDisabled={true} 
            disableAutoPlayOnAction={true} 
          />
         
        </Col>
      </Row>
    </div>
  );
};

export default Slide;
