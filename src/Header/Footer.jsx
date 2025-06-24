import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import '../Home/Home.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import img from '../assets/logo.jpg'

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white-50 pt-5 position-relative" style={{ marginTop: '90px' }}>
        <Container className="pt-5">
          <Row>
            <Col md={6} className="mb-5">
              <h1 className="text-uppercase text-white mb-3">
              <img src={img} width={100}/>
              </h1>
              <p>
                Sector Skill council of Art & Culture is a non-profit organization dedicated to promoting art &culture mainly by Certifications with uniformity through out India. In various level of training,funding local artists, awarding prizes, and organizing arts and cultural events. We operate atarmslength from the government to prevent political interference in their decisions. India has one of the world’s largest collections of songs, music, dance, theatre, folk traditions, performing arts, rites and rituals, paintings and writings that are known, as the ‘Intangible Cultural Heritage’ (ICH) of humanity.
              </p>
            </Col>

            <Col md={6} className="mb-5">
              <h3 className="text-white mb-4">Newsletter</h3>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Your Email Address"
                  className="p-3 border-light"
                />
                <Button variant="primary" className="px-4">
                  Sign Up
                </Button>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-5">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p>
                <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt me-2"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-2"></i>info@example.com
              </p>
              <div className="d-flex mt-4">
                <a className="text-white me-4" href="#"><i className="fab fa-2x fa-twitter"></i></a>
                <a className="text-white me-4" href="#"><i className="fab fa-2x fa-facebook-f"></i></a>
                <a className="text-white me-4" href="#"><i className="fab fa-2x fa-linkedin-in"></i></a>
                <a className="text-white" href="#"><i className="fab fa-2x fa-instagram"></i></a>
              </div>
            </Col>

            <Col md={4} className="mb-5">
              <h3 className="text-white mb-4">Our Courses</h3>
              <div className="d-flex flex-column">
                {['Web Design', 'Apps Design', 'Marketing', 'Research', 'SEO'].map((course, idx) => (
                  <a key={idx} href="#" className="text-white-50 mb-2">
                    <i className="fa fa-angle-right me-2"></i>{course}
                  </a>
                ))}
              </div>
            </Col>

            <Col md={4} className="mb-5">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column">
                {['Privacy Policy', 'Terms & Condition', 'Regular FAQs', 'Help & Support', 'Contact'].map((link, idx) => (
                  <a key={idx} href="#" className="text-white-50 mb-2">
                    <i className="fa fa-angle-right me-2"></i>{link}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-dark text-white-50 border-top py-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">
                &copy; <a className="text-white" href="#">Sector Skill Council For Art & Culture</a>. All Rights Reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <p className="mb-0">
                Designed by <a className="text-white" href="">Designed by sectorskillcouncil</a>, 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
