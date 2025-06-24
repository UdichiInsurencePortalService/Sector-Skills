import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Training = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5 bg-light">
      <h2 className="text-center mb-4" data-aos="fade-down">
        Sector Skill Council – Art, Craft, Music & Dance Training
      </h2>

      <Row className="mb-4" data-aos="fade-right">
        <Col md={6}>
          <h4>Main Activities of Training Centres</h4>
          <ul>
            <li>Adherence to National Occupational Standards for Dance, Music, and Art.</li>
            <li>Student mobilization for creative skill programs.</li>
            <li>Maintain attendance and proper documentation (forms, feedback, kits, uniforms).</li>
            <li>Ensure tools and instruments for each discipline (e.g., musical instruments, dance mirrors, art kits).</li>
            <li>Promote employability via shows, performances, and entrepreneurship.</li>
          </ul>
        </Col>
        <Col md={6}>
          <h4>Quality Assurance Measures</h4>
          <ul>
            <li>Ensure certified trainers (ToT certified in performing arts & crafts).</li>
            <li>Maintain qualification delivery with cultural integrity.</li>
            <li>Regular monitoring and compliance with NSQF & project norms.</li>
            <li>Industry & community engagement for placements and exhibitions.</li>
          </ul>
        </Col>
      </Row>

      <Row data-aos="fade-up">
        <Col md={6}>
          <Card className="shadow-sm p-3 h-100">
            <Card.Body>
              <Card.Title>Role of Awarding Bodies (ABs)</Card.Title>
              <Card.Text>
                ABs are responsible for affiliating Training Centres in Dance, Music, and Arts by verifying their infrastructure, trainers, and curriculum. They align these centres with NSQF and support them with certification and placement efforts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm p-3 h-100">
            <Card.Body>
              <Card.Title>Support for Marginalized Artists</Card.Title>
              <Card.Text>
                Special focus is given to groups like acid attack survivors, war widows, transgenders, and other underrepresented communities, empowering them through cultural and performing arts training.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Training;
