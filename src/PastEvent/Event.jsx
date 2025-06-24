import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/Sursongam.pdf'; // Replace with the correct path to your event brochure
    link.download = 'sscacc-past-event-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card data-aos="fade-up" className="shadow p-4 text-center">
            <Card.Body>
              <Card.Title className="mb-4 text-primary">SURSONGAM 2024</Card.Title>

              <p>
                HARMONIOUS BLEND OF MUSIC AND RYTHM, WHERE EVERY NOTE RESONATES WITH SOUL-STIRRING MELODY.
              </p>

              <h5 className="text-secondary mb-3">Organized by Sector Skill Council for Art & Culture (SSCACC)</h5>

              <Button variant="outline-primary" size="lg" onClick={handleDownload}>
                Download Brochure
              </Button>

              <p className="mt-4 text-muted" style={{ fontSize: '0.95rem' }}>
                View the complete schedule, highlights, and dignitaries who participated in this cultural milestone.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Event;
