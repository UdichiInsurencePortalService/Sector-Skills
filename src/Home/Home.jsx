import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import c1 from '../assets/qq.jpeg'
import c2 from '../assets/q1.jpeg'
import c3 from '../assets/q2.jpeg'
import c4 from '../assets/q3.jpeg'
import c5 from '../assets/q4.jpeg'
import c6 from '../assets/q5.jpeg'
import c7 from '../assets/q6.jpeg'
import c8 from '../assets/q7.jpeg'
import c9 from '../assets/q8.jpeg'
import c10 from '../assets/q9.jpeg'
import { Autoplay } from 'swiper/modules';

import dance from '../assets/dance.jpg';
import dance2 from '../assets/dance2.jpg'
// Import Swiper styles
import 'swiper/css';
const Home = () => {
    
  useEffect(() => {
    // Initialize any animations or effects here
  }, []);

  // Sample image URLs (replace with your actual images)
  const carouselImages = [
    dance,
    dance2,
  ];

  const aboutImage = "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";

  const announcements = [
    "The creator economy continues to expand, with more individuals using online platforms to share their work and build communities. ",
    "There's a growing emphasis on brands and companies aligning with social causes and taking stances on important issues. ",
    "Nostalgia is a powerful force driving entertainment, as people seek out familiar and comforting content. ",
    "The lines between the digital and physical worlds are blurring, with digital experiences becoming increasingly integrated into everyday life. ",
    "Online communities are thriving, providing spaces for shared interests, support, and connection. "
  ];

  const services = [
    {
      icon: "📋",
      title: "Qualification Approval",
      description: "Alignment of Qualifications to National Skills Qualification Framework (NSQF) based upon the industry requirements and standards."
    },
   
    {
      icon: "✏️",
      title: "Assessment Agencies",
      description: "Assessment agencies in the field of art and culture play a crucial role in evaluating the quality, impact, and effectiveness of various initiatives, programs, and organizations"
    }
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="hero-section">
        <Carousel fade interval={4000} controls indicators>
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index} className="position-relative">
              <div 
                className="carousel-image-container"
                style={{
                  height: '70vh',
                  minHeight: '500px',
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Container>
                    <Row className="justify-content-center text-center">
                      <Col lg={8}>
                        <div className="text-white">
                          {index === 0 && (
                            <>
                              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                                Welcome to Sector Skills Council For Art & Culture
                              </h1>
                              <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                                Empowering Art, Craft & Culture Through Excellence
                              </p>
                              <Button 
                                variant="light" 
                                size="lg" 
                                className="rounded-pill px-5 py-3 fw-semibold animate__animated animate__fadeInUp animate__delay-2s"
                              >
                                Explore Our Programs
                              </Button>
                            </>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-light">
        <Container fluid className="px-lg-5">
          <Row className="g-4">
            {/* Sidebar - What's New */}
            <Col lg={4} xl={3}>
              <Card className="shadow-lg border-0 h-100" style={{ borderRadius: '20px' }}>
                <div 
                  className="card-header border-0 text-white p-4"
                  style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '20px 20px 0 0'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="me-3 fs-3">📋</div>
                      <h4 className="mb-0 fw-bold">What's New</h4>
                    </div>
                    <div>
                      <Button variant="link" className="text-white p-1 me-1" size="sm">
                        <i className="fas fa-pause"></i>
                      </Button>
                      <Button variant="link" className="text-white p-1" size="sm">
                        <i className="fas fa-play"></i>
                      </Button>
                    </div>
                  </div>
                </div>

                <Card.Body className="p-4">
                  <div className="announcement-list">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="mb-4 pb-3 border-bottom border-light">
                        <div className="d-flex align-items-start">
                          <span 
                            className="me-3 mt-1 rounded-circle d-inline-block"
                            style={{ 
                              width: '8px', 
                              height: '8px', 
                              backgroundColor: '#667eea',
                              minWidth: '8px'
                            }}
                          ></span>
                          <p className="mb-0 text-muted small lh-base">
                            {announcement}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-top">
                    <Button variant="link" className="text-decoration-none p-0 fw-semibold text-primary">
                      <i className="fas fa-eye me-2"></i>
                      View All Announcements
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Main Content */}
            <Col lg={8} xl={9}>
              {/* About Section */}
              <div className="mb-5">
                <Row className="align-items-center">
                  <Col lg={7}>
                    <div className="pe-lg-4">
                      <div className="mb-3">
                        <span 
                          className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-normal"
                          style={{ fontSize: '12px', letterSpacing: '1px' }}
                        >
                          WELCOME TO
                        </span>
                      </div>

                      <h1 className="display-5 fw-bold text-dark mb-4 lh-1">
                        Sector Skills Council
                        <br />
                        <span className="text-primary">For Art & Culture</span>
                      </h1>

                      <p className="text-muted lh-base mb-4" style={{ fontSize: '16px' }}>
                        The Sector Skill Council for Art, Craft and Culture (SSCACC) is a non-profit organization, 
                        established under the Ministry of Corporate Affairs, working closely with the Ministry of 
                        Skill Development & Entrepreneurship, Ministry of Culture, and other renowned organizations 
                        to develop world-class skilled artists and personalities in art, craft, and culture.
                      </p>

                      <p className="text-muted lh-base mb-4" style={{ fontSize: '16px' }}>
                        SSCACC has developed the Affiliation Protocol for Quality Governance of Training Providers (TP), 
                        providing a framework for effective management and delivery of competency-based education and training.
                      </p>

                      <Button
                        variant="primary"
                        size="lg"
                        className="rounded-pill px-5 py-3 fw-semibold shadow-sm"
                      >
                        READ MORE
                      </Button>
                    </div>
                  </Col>

                  <Col lg={5} className="d-none d-lg-block">
                    <div className="position-relative">
                      <img
                        src={aboutImage}
                        alt="About SSCACC"
                        className="img-fluid rounded-4 shadow-lg"
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                      />
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                        style={{ 
                          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))'
                        }}
                      ></div>
                    </div>
                  </Col>
                </Row>
              </div>

             
            
            </Col>
          </Row>
        </Container>
      </section>


      {/* services */}
<section>
      <div className="mb-5">
       
                <Row className="g-4">
                  {services.map((service, index) => (
                    <Col md={6} lg={6} key={index}>
                      <Card 
                        className="h-100 border-0 shadow-sm hover-card"
                        style={{ 
                          borderRadius: '20px',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-10px)';
                          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                        }}
                      >
                        <Card.Body className="text-center p-5">
                          <div className="mb-4">
                            <div
                              className="mx-auto d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                              style={{
                                width: '100px',
                                height: '100px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white'
                              }}
                            >
                              <span style={{ fontSize: '40px' }}>{service.icon}</span>
                            </div>
                          </div>

                          <h5 className="fw-bold text-dark mb-3">{service.title}</h5>
                          <p className="text-muted lh-base mb-4">{service.description}</p>
                          
                          <Button 
                            variant="outline-primary" 
                            className="rounded-pill px-4 fw-semibold"
                          >
                            Learn More
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
</section>


<section>
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    autoplay={{
      delay: 1000,
      disableOnInteraction: false,
    }}
    loop={true}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <img 
        src={c1} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c2} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c3} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c4} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c5} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c6} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c7} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c8} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src={c9} 
        alt="" 
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px'
        }}
      />
    </SwiperSlide>
  </Swiper>
</section>
      {/* Custom Styles */}
      <style jsx>{`
        .hover-card {
          transition: all 0.3s ease !important;
        }
        
        .carousel-image-container {
          position: relative;
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem !important;
          }
          
          .display-5 {
            font-size: 2rem !important;
          }
          
          .display-6 {
            font-size: 1.75rem !important;
          }
          
          .hero-section .carousel-image-container {
            height: 60vh !important;
            min-height: 400px !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-3 {
            font-size: 2rem !important;
          }
          
          .display-5 {
            font-size: 1.75rem !important;
          }
          
          .hero-section .carousel-image-container {
            height: 50vh !important;
            min-height: 350px !important;
          }
          
          .px-5 {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          
          .py-3 {
            padding-top: 0.75rem !important;
            padding-bottom: 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Home;