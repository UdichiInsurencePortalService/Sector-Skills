import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import bharatanatyam from '../assets/a1.jpg';
import kathak from '../assets/a2.jpg';
import kathakali from '../assets/a3.jpg';
import odissi from '../assets/a4.jpg';
import Kathak from '../assets/a5.jpg';
import Kathakali from '../assets/a6.jpg';



const dances = [
  {
    title: 'Indian Art',
    points: [
      'For centuries Hinduism and Buddhism have influenced all aspects of Indian life.',
      'Both have their own unique style of artwork but sometimes they blend together, resulting in artworks that are both Hindu and Buddhist in style.',
      'The Indus Valley Civilization:-The modern nations of India, Pakistan, and Bangladesh trace their cultural beginnings to the early Indian civilizations. Historians now recognize that an ancient civilization once flourished on the banks of the Indus River in what is now northwest India',
      'The Harappans :-Many Harappan clay works have been found, most of which were apparently made for trading services',
      'Only a few bronze and stone sculptures from Mohenjo-Daro have survived to the present day.',
    ],
    image: bharatanatyam,
  },
 
  {
    title: 'Symbolism in Buddhist Art',
    points: [
     'The complex carvings and sculptures that adorned the shrines were intended to remind worshipers of Buddhaâ€™s teaching and aid them in meditation. The figure of Buddha never appears in the shrines.',
'His presence is implied by such symbols as an empty throne, a tree under which he meditated, and his footprints.',
'A person who had reached nirvana could not be represented by any type of illustration, so symbols were used to inspire meditation and teachings. The wheel is a reoccurring symbol that stands for the circle of life, maturity, and death associated with each reincarnation, all leading to nirvana Early Buddhist sculptures depict various events in the life of the Buddha.',
'Performance- Consists of multiple items Nritta– pure dance movements Abhinaya– dramatic art of storytelling Nritya–combination of nritta & abhinaya Music- Carnatic music',
'This artwork found in a stupa shows the Buddha being visited by the king.',

    ],
    image: kathakali,
  },
  
   {
    title: 'Sculpture',
    points: [
      'Sculpture is the branch of the visual arts that operates in three dimensions.',
'It is one of the plastic arts. Durable sculptural processes originally used carving and modelling, in stone, metal, ceramics, wood and other materials but, since Modernism, there has been an almost complete freedom of materials and process',
'A wide variety of materials may be worked by removal such as carving, assembled by welding or modelling, or moulded or cast.Sculpture in stone survives far better than works of art in perishable materials, and often represents the majority of the surviving works from ancient cultures, though conversely traditions of sculpture in wood may have vanished almost entirely.',
'Performance Progresses from slow to fast pieces Footwork & spins Abhinaya-expression',
'Music – Hindusthani music Provided by Tabla, Sitar, Santoor',
'Costume Ghungroos or bells on the ankles Female- lehenga choli or chudidaar kameez Male- bare chest and dhoti or kurta churidar'
    ],
    image: Kathak,
  },
  {
    title: 'Kathakali',
    points: [
      'However, most ancient sculpture was brightly painted, and this has been lost.Sculpture has been central in religious devotion in many cultures, and until recent centuries large sculptures, too expensive for private individuals to create, were usually an expression of religion or politics',
'Those cultures whose sculptures have survived in quantities include the cultures of the ancient Mediterranean, India and China, as well as many in Central and South America and Africa.',
    ],
    image: Kathakali,
  },
  
  
];

const Art = () => {
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

export default Art;
