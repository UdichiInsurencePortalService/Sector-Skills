import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import bharatanatyam from '../assets/m1.jpg';
import kathak from '../assets/m2.jpg';
import kathakali from '../assets/m3.jpeg';
import odissi from '../assets/m4.png';
import Kathak from '../assets/m5.jpg';
import Kathakali from '../assets/m6.jpg';



const dances = [
  {
    title: 'HISTORY OF INDIAN MUSIC',
    points: [
      'Goddess of Music â€“ Ma Saraswati',
    ],
    image: bharatanatyam,
  },
  {
    title: 'THE INDIAN MUSIC',
    points: [
      'Music, a gift of Almighty is an outstanding art even before the birth of the human beingsâ€“ anahata nada or the music of the cosmos precedes Man â€¦.Ahata nada or man made music is as old as the human',
'God himself is personified as Nada Brahma and music is divineâ€¦right from the ages music was never considered as separate from religionâ€¦..',
'The often quoted Slokaâ€¦',

    ],
    image: kathak,
  },
  {
    title: 'Various Legends associated with Music',
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
    title: 'Music in Medieval India',
    points: [
      'Originates from Odisha',
      'Known for lyrical grace, sculpture-like poses and complex footwork',
      'Costume: Traditional saree, silver jewelry',
      'Music: Odissi classical music',
    ],
    image: odissi,
  },
   {
    title: 'Music in Medieval India',
    points: [
      'His greatest inventions were Sitar and Tabla musical instruments Inventions of Amir Khusrau styleâ€¦Ghazals, Qwwab, Tarana, Khamsa and Kayal',
'Ragasâ€¦Jeelaf, Sajgiri, sarpada, Yaman, Puriya, Barari Todi, Poorvi',
'Rhythmsâ€¦. Jhoomra, Adachoutala, Soolphakta, Pushto, Farodust, Sawari etcâ€¦.',
'Towards 15th century Lochana Raga Taranginiâ€¦advocated Group System or â€˜Thaatâ€™ as the origin of Ragasâ€¦ Sultan Hussain Sharqi patronized Khayal style of singing in Jaunpur',

    ],
    image: Kathak,
  },
  {
    title: 'Music under Mughals',
    points: [
      'Great impetus to Bhakthi concept was given from the end of 15th century and this helped to the spread of Classical music to the massesâ€¦.path to reach the Supreme',
'Sufism led to the introduction of musical instruments which were used in Qwwalis in praise of God â€“ amalgamation of both the cultures',
'Emperor Akbar (AD 1556-1605)â€¦Music reached its zenithâ€¦a great connoisseur of art and culture particularly the Classical musicâ€¦Thirty six experts in the art of music..Chief among them were Tansen Baiju Bawra and Ramdas)',
    ],
    image: Kathakali,
  },
  
  
];

const Music = () => {
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

export default Music;
