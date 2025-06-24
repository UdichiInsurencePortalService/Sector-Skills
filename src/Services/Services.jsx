import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Accordion } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const certificationLevels = [
    {
      name: "Shilpi Prabhakar",
      description: "First step towards entering the innovative and entertainment world. For children of class 1 to 4.",
      icon: "🌟",
      levels: [
        { level: "I", fee: 500 },
        { level: "II", fee: 600 },
        { level: "III", fee: 600 }
      ],
      color: "primary"
    },
    {
      name: "Shilpi Shree",
      description: "Next step into more innovation with action in creative world. Super colorful and inspired.",
      icon: "🎨",
      levels: [
        { level: "I", fee: 600 },
        { level: "II", fee: 700 },
        { level: "III", fee: 700 }
      ],
      color: "success"
    },
    {
      name: "Shilpi Bhushan",
      description: "Dynamic creation into innermost precious imagination with full creative potential.",
      icon: "✨",
      levels: [
        { level: "I", fee: 800 },
        { level: "II", fee: 800 },
        { level: "III", fee: 800 }
      ],
      color: "warning"
    },
    {
      name: "Shilpi Ratna",
      description: "Focused enthusiasm can excel here. The pinnacle of artistic achievement.",
      icon: "💎",
      levels: [
        { level: "I", fee: 1000 },
        { level: "II", fee: 1200 },
        { level: "III", fee: 1200 }
      ],
      color: "danger"
    }
  ];

  const artForms = [
    { name: "Drawing", icon: "✏️" },
    { name: "Photography", icon: "📸" },
    { name: "Painting", icon: "🎨" },
    { name: "Sculpture", icon: "🗿" },
    { name: "Theater", icon: "🎭" },
    { name: "Music", icon: "🎵" },
    { name: "Dance", icon: "💃" }
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'0.1\' d=\'M0,800L1200,0L1200,800Z\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover',
        color: 'white'
      }}>
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-3 fw-bold mb-4" data-aos="fade-up">
                SSCACC Services
              </h1>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Sector Skill Council for Art & Culture - Empowering creativity through comprehensive certification programs
              </p>
              <Button 
                variant="light" 
                size="lg" 
                className="me-3 mb-3"
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                Explore Certifications
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                className="mb-3"
                data-aos="fade-up" 
                data-aos-delay="500"
              >
                Become an Affiliate
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Art Forms Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-4" data-aos="fade-up">
                Art Forms We Cover
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                12 different certification programs across various art disciplines
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {artForms.map((art, index) => (
              <Col md={6} lg={4} xl={3} key={index}>
                <Card 
                  className="h-100 shadow-sm border-0 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  style={{ 
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>
                      {art.icon}
                    </div>
                    <h5 className="fw-bold">{art.name}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Certification Levels Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-4" data-aos="fade-up">
                Certification Levels
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Progressive learning paths for all age groups starting from age 4
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {certificationLevels.map((cert, index) => (
              <Col lg={6} key={index}>
                <Card 
                  className="h-100 shadow border-0"
                  data-aos="flip-left"
                  data-aos-delay={index * 200}
                >
                  <Card.Header className={`bg-${cert.color} text-white`}>
                    <Row className="align-items-center">
                      <Col>
                        <h4 className="mb-0 d-flex align-items-center">
                          <span className="me-2" style={{ fontSize: '1.5rem' }}>
                            {cert.icon}
                          </span>
                          {cert.name}
                        </h4>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-muted mb-4">{cert.description}</p>
                    <Row className="g-2">
                      {cert.levels.map((level, idx) => (
                        <Col md={4} key={idx}>
                          <div className="text-center p-3 bg-light rounded">
                            <h6 className="fw-bold mb-1">Level {level.level}</h6>
                            <Badge bg={cert.color} className="fs-6">
                              ₹{level.fee}
                            </Badge>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Affiliation Process Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mb-4" data-aos="fade-up">
                  Affiliation Process
                </h2>
                <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                  Join our network of training providers and educational institutions
                </p>
              </div>
              
              <Row className="mb-5">
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow-sm h-100" data-aos="slide-right">
                    <Card.Body className="p-4">
                      <h4 className="fw-bold mb-3 text-primary">💼 Who Can Apply</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">✓ Educational Bodies</li>
                        <li className="mb-2">✓ NGOs</li>
                        <li className="mb-2">✓ Training Providers</li>
                        <li className="mb-2">✓ Schools & Colleges</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} className="mb-4">
                  <Card className="border-0 shadow-sm h-100" data-aos="slide-left">
                    <Card.Body className="p-4">
                      <h4 className="fw-bold mb-3 text-success">💰 Fee Structure</h4>
                      <div className="mb-3">
                        <strong>Application Fee:</strong>
                        <Badge bg="primary" className="ms-2">₹4,500</Badge>
                        <small className="text-muted d-block">One-time compliance check</small>
                      </div>
                      <div>
                        <strong>Affiliation Fee:</strong>
                        <Badge bg="success" className="ms-2">₹10,000</Badge>
                        <small className="text-muted d-block">Non-refundable</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Accordion className="shadow-sm" data-aos="fade-up">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <strong>📋 Step-by-Step Process</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6} className="mb-3">
                        <div className="d-flex align-items-start">
                          <Badge bg="primary" className="me-3 mt-1">1</Badge>
                          <div>
                            <h6 className="fw-bold">Submit Application</h6>
                            <p className="text-muted mb-0">Fill affiliation form and send with processing fees</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className="mb-3">
                        <div className="d-flex align-items-start">
                          <Badge bg="success" className="me-3 mt-1">2</Badge>
                          <div>
                            <h6 className="fw-bold">Due Diligence</h6>
                            <p className="text-muted mb-0">SSCAC conducts evaluation of infrastructure and capability</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className="mb-3">
                        <div className="d-flex align-items-start">
                          <Badge bg="warning" className="me-3 mt-1">3</Badge>
                          <div>
                            <h6 className="fw-bold">Council Review</h6>
                            <p className="text-muted mb-0">Governing Council reviews and decides on affiliation</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className="mb-3">
                        <div className="d-flex align-items-start">
                          <Badge bg="danger" className="me-3 mt-1">4</Badge>
                          <div>
                            <h6 className="fw-bold">Certificate Issued</h6>
                            <p className="text-muted mb-0">Approved VTPs receive affiliation certificate</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <strong>🎯 Objectives & Benefits</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <h6 className="fw-bold text-primary mb-3">Key Objectives:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">📊 Assess institutions meeting quality standards</li>
                          <li className="mb-2">🏆 Foster excellence in training delivery</li>
                          <li className="mb-2">📈 Framework for continuous improvement</li>
                          <li className="mb-2">👥 Develop professional competency</li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <h6 className="fw-bold text-success mb-3">Benefits:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">✅ Quality assurance certification</li>
                          <li className="mb-2">🤝 Network collaboration opportunities</li>
                          <li className="mb-2">📚 Access to specialized training materials</li>
                          <li className="mb-2">🌐 Benchmark with national standards</li>
                        </ul>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
        color: 'white'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
                Ready to Start Your Journey?
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Join thousands of learners and institutions in the SSCACC network. 
                Start your certification journey today!
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3" data-aos="fade-up" data-aos-delay="400">
                <Button variant="light" size="lg" className="px-4">
                  Apply for Certification
                </Button>
                <Button variant="outline-light" size="lg" className="px-4">
                  Become an Affiliate
                </Button>
                <Button variant="outline-light" size="lg" className="px-4">
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">&copy; 2025 SSCACC - Sector Skill Council for Art & Culture. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Services;