import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Examiner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5 bg-white">
      <h2 className="text-center mb-5" data-aos="fade-down">
        Assessor Certification for Dance, Music & Art Training
      </h2>

      <Row className="mb-4" data-aos="fade-right">
        <Col md={6}>
          <h4>Role of Assessors in Art & Culture Sector</h4>
          <ul>
            <li>Evaluate quality and effectiveness of Dance, Music, and Art training programs.</li>
            <li>Ensure fair, unbiased assessment of trainees across cultural disciplines.</li>
            <li>Validate learning strategies and techniques followed by training centers.</li>
            <li>Impact learner outcomes and job opportunities through rigorous assessment.</li>
            <li>Support learners in practical performance and skill-based assessments.</li>
          </ul>
        </Col>

        <Col md={6}>
          <h4>Importance in the Skilling Ecosystem</h4>
          <ul>
            <li>Quality assessments build credibility of art-based training.</li>
            <li>Assessors ensure that training delivery meets NSQF standards.</li>
            <li>Domain knowledge in performing arts is essential for effective evaluation.</li>
            <li>Assessment outcomes help refine training methodology in creative sectors.</li>
          </ul>
        </Col>
      </Row>

      <Row data-aos="fade-up">
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100 p-3">
            <Card.Body>
              <Card.Title>How to Become a Certified Assessor</Card.Title>
              <Card.Text>
                <strong>Step 1:</strong> Hold a relevant degree in Fine Arts, Performing Arts, or equivalent.
                <br />
                <strong>Step 2:</strong> Have experience in art teaching, cultural training, or performances.
                <br />
                <strong>Step 3:</strong> Complete Training of Assessors (ToA) by an approved provider.
                <br />
                <strong>Step 4:</strong> Pass the certification exam conducted by a recognized Awarding Body under NCVET.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100 p-3">
            <Card.Body>
              <Card.Title>NCVET Guidelines & Compliance</Card.Title>
              <Card.Text>
                Assessors must follow NCVET's defined guidelines for evaluation, stakeholder participation, and transparent certification processes. Only certified assessors recognized by NCVET are eligible to evaluate Dance, Music, and Art qualifications under NSQF.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Examiner;
