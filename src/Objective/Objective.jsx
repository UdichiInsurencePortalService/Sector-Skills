import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const AOS_CSS = `
  @import url('https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css');
`;

const Objective = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
   useEffect(() => {
    // Load AOS library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          once: true,
          offset: 50
        });
      }
    };
    document.head.appendChild(script);

    // Add AOS CSS
    const style = document.createElement('style');
    style.textContent = AOS_CSS;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const cardStyle = {
    backgroundColor: '#5B9BD5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const ddCardStyle = {
    backgroundColor: 'white',
    color: '#5B9BD5',
    border: '2px solid #5B9BD5',
    borderRadius: '8px',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const lineStyle = {
    height: '2px',
    backgroundColor: '#5B9BD5',
    margin: '0 auto'
  };

  const verticalLineStyle = {
    width: '2px',
    backgroundColor: '#5B9BD5',
    margin: '0 auto',
    height: '30px'
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#5B9BD5',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#fdf8f4' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: '700', color: '#5a2a83' }} data-aos="fade-down">
          What is Sector Skill Council for Art & Culture (SSCAC)?
        </h2>

        <Row className="mb-5">
          <Col md={12}>
            <Card data-aos="fade-up" className="shadow-sm border-0" style={{ borderRadius: '16px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                  The <strong>Sector Skill Council for Art & Culture (SSCAC)</strong> is an overarching body responsible for regulating and promoting skill development in the field of <strong>art, craft, and culture</strong> in India, covering both long-term and short-term training initiatives.
                  <br /><br />
                  SSCAC was <strong>established on 25th September 2020</strong> to bring structure and consolidation to the fragmented skill development efforts within the art and culture ecosystem.
                  <br /><br />
                  It aligns with the broader skilling objectives of the nation while focusing specifically on sectors such as <strong>music, drama, dance, fine arts, handicrafts, and cultural heritage</strong>.
                  <br /><br />
                  The regulatory and developmental functions that were earlier scattered across various bodies have now been brought under the purview of SSCAC to ensure quality, consistency, and relevance in vocational education and training in art and culture.
                  <br /><br />
                  The council regulates and supports the functioning of training providers, institutions, and stakeholders engaged in the skilling of individuals in both <strong>traditional and contemporary art forms</strong>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="text-center mb-5" style={{ fontWeight: '700', color: '#5a2a83' }} data-aos="zoom-in">
          Governance Structure of SSCAC
        </h2>

       

        <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <style>
        {`
          .org-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2) !important;
          }
          .nav-button:hover {
            background-color: rgba(91, 155, 213, 0.1);
          }
          @media (max-width: 768px) {
            .org-card {
              margin-bottom: 20px;
            }
            .connecting-line {
              display: none;
            }
          }
        `}
      </style>
      
      {/* Chairperson */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-down"
          >
            <div className="card-body text-center">
              Chairperson
            </div>
          </div>
        </div>
      </div>

      {/* Vertical line from Chairperson */}
      <div className="row justify-content-center mb-3 connecting-line">
        <div className="col-1">
          <div style={verticalLineStyle}></div>
        </div>
      </div>

      {/* Horizontal line to Executive Members */}
      <div className="row justify-content-center mb-3 connecting-line">
        <div className="col-12 col-md-8 col-lg-6">
          <div style={lineStyle}></div>
        </div>
      </div>

      {/* Executive Members */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="card-body text-center">
              Seceratory 
            </div>
          </div>
        </div>
         <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="card-body text-center">
             Additional Seceratory 
            </div>
          </div>
        </div>
         <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="card-body text-center">
             Joint Seceratory 
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="card-body text-center">
              Treasurer
            </div>
          </div>
        </div>
      </div>

      {/* Vertical lines from Executive Members */}
      <div className="row justify-content-center mb-3 connecting-line">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="row">
            <div className="col-3">
              <div style={verticalLineStyle}></div>
            </div>
            <div className="col-6"></div>
            <div className="col-3">
              <div style={verticalLineStyle}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line to Directors */}
      <div className="row justify-content-center mb-3 connecting-line">
        <div className="col-12 col-lg-10">
          <div style={lineStyle}></div>
        </div>
      </div>

      {/* Directors */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card-body text-center">
              Director Operation
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="card-body text-center">
              Director Admin
            </div>
          </div>
        </div>
       
        <div className="col-12 col-sm-6 col-lg-3">
          <div 
            className="card org-card" 
            style={cardStyle}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="card-body text-center">
              Director Affiliation
            </div>
          </div>
        </div>
      </div>

     
     
    </div>
      </Container>
    </Container>
  );
};

export default Objective;
