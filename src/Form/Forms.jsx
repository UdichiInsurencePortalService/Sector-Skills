import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Forms = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/art.pdf'; // make sure this file exists in public/pdf/
    link.download = 'sscacc-form.pdf';
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
              <Card.Title className="mb-4">SSCACC Application Form</Card.Title>
              <p>
                Please download the form below, print it, fill in your details manually,
                and send the completed form to:
              </p>
              <h5 className="text-primary mb-3">sscacc.india@gmail.com</h5>

              <Button variant="success" size="lg" onClick={handleDownload}>
                Download Form PDF
              </Button>

              <p className="mt-4 text-muted" style={{ fontSize: '0.95rem' }}>
                Ensure all required information is filled before submission. Incomplete forms may not be accepted.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Forms;
