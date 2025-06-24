import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import bharatanatyam from '../assets/d1.jpg';
import kathak from '../assets/d2.jpg';
import kathakali from '../assets/d3.jpg';
import odissi from '../assets/d6.jpg';
import Kathak from '../assets/d4.jpg';
import Kathakali from '../assets/d5.jpg';
// import odissi from '../assets/d6.jpg';
// import Kuchipudi from '../assets/d1.jpg';


const dances = [
  {
    title: 'Dance',
    points: [
      'India has always had a rich tradition of classical dance, or shastriya nritya (written and compiled under Natya Shastra, the foundational text for Indian classical dance forms). The origin of dance in India, in fact, can be traced back to 200 BC. Currently, however, the Sangeet Natak Akademi (the national-level academy for performing arts set up by the government) confers classical status to eight Indian classical dance styles: Bharatanatyam (Tamil Nadu), Kathak (north, west and central India), Kathakali (Kerala), Kuchipudi (Andhra Pradesh), Odissi (Odisha), Manipuri (Manipur), Mohiniyattam (Kerala) and Sattriya (Assam). Over the years, classical dance forms in India have undergone multilayered evolution, surviving the onslaught of time and cultural shifts, while also scaling new heights. Traces of this development can be found from historical evidences'
    ],
    image: bharatanatyam,
  },
  {
    title: 'Types of Classical Dances',
    points: [
      'Bharatanatyam',
'Kathak',
'Kathakali',
'Odissi',
'Kuchipudi',
'Manipuri',
'Mohiniattam',
'Sattriya'
    ],
    image: kathak,
  },
  {
    title: 'Bharatanatyam',
    points: [
     'Comes from the words',
'Bhava (expression), Raga (music), Tala (rhythm) and Natya (classical theater)',
'Originates in South India',
'Performance- Consists of multiple items Nritta– pure dance movements Abhinaya– dramatic art of storytelling Nritya–combination of nritta & abhinaya Music- Carnatic music',
'Costume:- Made of silk saris with gold embroidery Costume has a lot of pleats',
'Jewelry:- Necklace, Bangles and head ornaments',
'Bells mounted on woven pads are worn on the feet',
    ],
    image: kathakali,
  },
  {
    title: 'Odissi',
    points: [
      'Originates from Odisha',
      'Known for lyrical grace, sculpture-like poses and complex footwork',
      'Costume: Traditional saree, silver jewelry',
      'Music: Odissi classical music',
    ],
    image: odissi,
  },
   {
    title: 'Kathak',
    points: [
      'Derived from Katha (story) and Katthaka (who tells stories)',
'Originates from North India',
'3 main gharanas or schools: Lucknow, Jaipur & Benares',
'Performance Progresses from slow to fast pieces Footwork & spins Abhinaya-expression',
'Music – Hindusthani music Provided by Tabla, Sitar, Santoor',
'Costume Ghungroos or bells on the ankles Female- lehenga choli or chudidaar kameez Male- bare chest and dhoti or kurta churidar'
    ],
    image: Kathak,
  },
  {
    title: 'Kathakali',
    points: [
      'Originates from Kerala state',
'Attractive make-up of characters and elaborate costumes',
'Performance Combination of 5 elements- Natyam (expression), Nritham (dance), Nrithyam (enactment), Geetham (vocal) and Vadyam (instruments)',
'Music- Carnatic music language of songs -Manipravalam',
    ],
    image: Kathakali,
  },
  
  
];

const Dance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="py-5" style={{ backgroundColor: '#f6f1f1' }}>
      {dances.map((dance, index) => (
        <Row
          key={index}
          className="align-items-center mb-5"
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
        >
          <Col
            md={6}
            className={`${index % 2 !== 0 ? 'order-md-2' : ''} text-center`}
          >
            <img
              src={dance.image}
              alt={dance.title}
              className="img-fluid rounded"
              style={{ maxHeight: '400px', border: '3px solid orange' }}
            />
          </Col>
          <Col md={6} className="pt-3">
            <h5 className="text-primary fw-bold">{dance.title}</h5>
            <ul className="text-start">
              {dance.points.map((point, i) => (
                <li key={i} style={{ lineHeight: '1.7' }}>{point}</li>
              ))}
            </ul>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Dance;
