import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import aim from '../assets/aim.jpg'; // update path as needed

const Vision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className="py-5 bg-light">
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col lg={7} className="mb-5 mb-lg-0" data-aos="fade-right">
            <div className="mb-4">
              
              <h1 className="display-5 fw-bold">AIM</h1>
            </div>
            <p className="mb-4">
             SSCACC aims to develop skills competency, occupational standards, carry out, execute, implement aid and assist activities towards skill development in the Art, Craft & Culture sector in India and meeting the entire value chains’ requirements of appropriately trained manpower in quantity and quality on a sustained and evolving basis and outcomes which shall meet the Art, Craft & Culture sector expectations thru ethical, transparent and effective management of the Skill Council For Art, Craft & Culture Sector.
            </p>

            {/* Features */}
            <div className="d-flex mb-4" data-aos="fade-up">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-2x fa-graduation-cap text-white"></i>
              </div>
              <div>
                <h5>Creator Economy:</h5>
                <p className="mb-0">
                  The creator economy continues to expand, with more individuals using online platforms to share their work and build communities. 

                </p>
              </div>
            </div>

            <div className="d-flex mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-2x fa-certificate text-white"></i>
              </div>
              <div>
                <h5>International Cultural Exchange</h5>
                <p className="mb-0">
                 India is participating in international cultural festivals and events, showcasing its diverse traditions. 

                </p>
              </div>
            </div>

            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-2x fa-book-reader text-white"></i>
              </div>
              <div>
                <h5>Online Classes</h5>
                <p className="mb-0">
                 Online communities are thriving, providing spaces for shared interests, support, and connection. 

                </p>
              </div>
            </div>
          </Col>

          {/* Image */}
          <Col lg={5} data-aos="fade-left">
            <div className="h-100 rounded overflow-hidden shadow" style={{ minHeight: '500px' }}>
              <img
                src={aim}
                alt="Why Choose Us"
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    // 


     <div className="py-5 bg-white">
      <Container>
        <Row>
          {/* Our Aim */}
          <Col md={6} data-aos="fade-right">
            <h2 className="text-primary fw-bold mb-3">Our Aim</h2>
            <p className="text-muted">
             We envision to create a sustainable industry aligned eco system for robust development in Art and culture in organized manner. There by  developing an ecosystem of empowerment by skilling on a large scale at speed with high standards and to promote art & culture of innovation based entrepreneurship which can generate wealth and employment so as to ensure sustainable livelihoods for all citizens in the country.
            </p>
          </Col>

          {/* Our Approach */}
          <Col md={6} data-aos="fade-left">
            <h2 className="text-success fw-bold mb-3">Our Approach</h2>
            <p className="text-muted">
              We work closely with Industry partners and Training Institutions. On one side we understand the requirements by the industry and the other side we guide the training providers to match on the expectations set by them. Our motto is simple to focus on improving the response of education and training to the needs of industry, by more closely matching educational provision to need at a regional level.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Vision;
