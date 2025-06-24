import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const downloadPdf = (filePath) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">
        Download Cultural PDFs
      </h2>

      <Row className="gy-4 justify-content-center">
        <Col md={4} data-aos="fade-up">
          <Card className="h-100 shadow text-center">
            <Card.Body>
              <Card.Title>MoU Cum SLA </Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="success" onClick={() => downloadPdf('/pdf/dance.pdf')}>
                Download pdf
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} data-aos="fade-up">
          <Card className="h-100 shadow text-center">
            <Card.Body>
              <Card.Title> SSCAC TP-Affiliation Protocol</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="primary" onClick={() => downloadPdf('/pdf/music.pdf')}>
                Download PDF
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} data-aos="fade-up">
          <Card className="h-100 shadow text-center">
            <Card.Body>
              <Card.Title>Affiliation Form </Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="danger" onClick={() => downloadPdf('/pdf/art.pdf')}>
                Download PDF
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
