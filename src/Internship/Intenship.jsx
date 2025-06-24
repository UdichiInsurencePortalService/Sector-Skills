import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Internship = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card data-aos="fade-up" className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4 text-primary">🎓 Internship Opportunity</h2>

              <p>
                The <strong>Sector Skill Council for Art & Culture (SSCACC)</strong> is offering exciting internship opportunities for passionate individuals looking to gain hands-on experience in the world of Indian art, culture, and skill development.
              </p>

              <p>
                Whether you're an aspiring artist, cultural researcher, event coordinator, or a creative enthusiast eager to contribute, this is your chance to be part of a prestigious initiative aligned with India's rich cultural heritage.
              </p>

              <h5 className="mt-4">🔍 Internship Areas:</h5>
              <ul>
                <li>Event Management for Art & Cultural Workshops</li>
                <li>Research & Documentation of Traditional Art Forms</li>
                <li>Digital Media & Content Creation (Video, Design, Writing)</li>
                <li>Training Support for Dance, Music, Drama</li>
                <li>Outreach & Communication for Cultural Promotion</li>
              </ul>

              <p className="mt-4">
                💼 <strong>Eligibility:</strong> Students or recent graduates in Fine Arts, Performing Arts, Mass Communication, Social Work, Event Management, or similar fields.
              </p>

              <p>
                📆 <strong>Duration:</strong> 1 to 3 months (Flexible as per project need)
              </p>

              <p className="mt-4">
                To apply for an internship, please email your resume along with a short statement of interest to:
              </p>

              <h5 className="text-center text-success">
                📧 <a href="mailto:sscacc.india@gmail.com">sscacc.india@gmail.com</a>
              </h5>

              <p className="text-center mt-3">
                Mention "<strong>Internship Application</strong>" in the subject line.
              </p>

              <div className="text-center mt-4">
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="mailto:sscacc.india@gmail.com?subject=Internship Application - SSCACC"
                >
                  Apply Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Internship;
