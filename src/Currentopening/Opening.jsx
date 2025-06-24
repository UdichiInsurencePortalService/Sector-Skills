import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Opening = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card data-aos="fade-up" className="shadow p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Current Openings</h2>

              <p>
                The <strong>Sector Skill Council for Art & Culture (SSCACC)</strong> is dedicated to developing and promoting world-class skill development programs in the fields of Dance, Music, Drama, Painting, and other traditional and contemporary art forms.
              </p>

              <p>
                We are always on the lookout for passionate and experienced individuals in the fields of:
              </p>

              <ul>
                <li>Classical and Contemporary Dance</li>
                <li>Music (Vocal and Instrumental)</li>
                <li>Visual & Performing Arts</li>
                <li>Drama, Theatre & Acting</li>
                <li>Traditional Crafts & Folk Arts</li>
              </ul>

              <p>
                If you are interested in being part of our mission and wish to contribute to the cultural and skill development ecosystem in India, we invite you to share your resume with us.
              </p>

              <h5 className="mt-4 text-center text-primary">
                📧 Apply Now: <a href="mailto:sscacc.india@gmail.com">sscacc.india@gmail.com</a>
              </h5>

              <p className="mt-4 text-muted text-center" style={{ fontSize: '0.95rem' }}>
                Kindly mention your area of expertise and include any relevant experience in the field of Art & Culture.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Opening;
