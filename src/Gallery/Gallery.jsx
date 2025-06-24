import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s1 from '../assets/gallery/s1.jpg'
import s2 from '../assets/gallery/s2.jpg'
import s3 from '../assets/gallery/s3.jpg'
import s4 from '../assets/gallery/s4.jpg'
import s5 from '../assets/gallery/s5.jpg'
import s6 from '../assets/gallery/s6.jpg'
import s7 from '../assets/gallery/s7.jpg'
import s8 from '../assets/gallery/s8.jpg'
import s9 from '../assets/gallery/s9.jpg'
import s10 from '../assets/gallery/s10.jpg'
import s11 from '../assets/gallery/s11.jpg'
import s12 from '../assets/gallery/s12.jpg'
import s13 from '../assets/gallery/s13.jpg'
import s14 from '../assets/gallery/s14.jpg'
import s15 from '../assets/gallery/s15.jpg'
import s16 from '../assets/gallery/s16.jpg'
import s17 from '../assets/gallery/s17.jpg'
import s18 from '../assets/gallery/s18.jpg'
import s19 from '../assets/gallery/s19.jpg'
import s20 from '../assets/gallery/s20.jpg'
import s21 from '../assets/gallery/s21.jpg'
import s22 from '../assets/gallery/s22.jpg'
import s23 from '../assets/gallery/s23.jpg'
import s24 from '../assets/gallery/s24.jpg'
import s25 from '../assets/gallery/s25.jpg'




const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Replace with your actual image paths (stored in public/gallery/)
  const images = [
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
  s21,
  s22,
  s23,
  s24,
  s25, 
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 text-primary" data-aos="fade-down">
        📸 Art & Culture Event Gallery
      </h2>

      <Row className="g-4">
        {images.map((img, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} data-aos="zoom-in">
            <div className="gallery-image-wrapper shadow-sm rounded overflow-hidden">
              <Image
                src={img}
                alt={`Event ${index + 1}`}
                fluid
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
